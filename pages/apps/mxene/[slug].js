import axios from 'axios';
import Session from 'supertokens-auth-react/recipe/session';
Session.addAxiosInterceptors(axios);
import { Toaster } from "react-hot-toast";
import { MyToaster } from "../../../functions/toaster";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { saveAs } from "file-saver";
import b64ToBlob from "b64-to-blob";

export default function MxeneResult({ mxene, slug }) {
  const [Model3D, setModel3D] = useState(<p>Model is loading...</p>);
  const [loggedIn, setLoggedIn] = useState(false);

  async function getUserInfo() {
    if (await Session.doesSessionExist()) {
      setLoggedIn(true)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  useEffect(() => {
    const DynamicComponent = dynamic(() => import('../../../components/mxene/ThreeDModel'), { ssr: false });
    setModel3D(<DynamicComponent fileLink={process.env.NEXT_PUBLIC_SERVER_URL + mxene.pdb_file} />);
  }, [])


  const handleDownload = async () => {
    if (loggedIn) {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/downloadmxene/?id=${slug}`)
        const blob = b64ToBlob(res.data, "application/zip");
        saveAs(blob, `anant_mxene.zip`);
        MyToaster({ header: "Download successfull!", message: `Your mxene was downloaded` });
      } catch (error) {
        console.log(error);
        MyToaster({ header: "Download failed!", message: "There was an error downloading your mxenes" });
      }
    } else {
      MyToaster({ header: "Login to download!", message: "Please login to download mxenes" });
    }
  }


  return (

    <div className="w-screen min-h-screen flex flex-col items-center justify-start pt-16">
      <Head>
        <title>
          {mxene.mxene} | Mxene Database
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="aNANt is an initiative of Materials Theory and Simulations Group, Materials Research Centre, Indian Institute of Science Bangalore to develop and host an open-access online repository of functional materials."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="anant, project anant, iisc, indian institute of science, bangalore, mxenes, materials theory, functional materials, materials research, research"
        />
        <meta name="url" content="" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <link rel="icon" href="" />
        <link rel="canonical" href="" />
        {/* OG meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=""
        />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta
          property="og:site_name"
          content="Project Anant"
        />
      </Head>
      <Toaster position="top-right" />
      <div className="my-8">
        <h2 className="md:text-4xl text-3xl font-bold text-white">{mxene.mxene}</h2>
        <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
      </div>
      <div className="container md:mb-12 lg:p-0 p-4 grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="min-h-[30vh] h-full w-full flex justify-center items-center result-card" id="apphere">
          {/* 3d model here */}
          {Model3D}
        </div>
        <div className="md:h-full w-full flex flex-col">
          <div className="result-card h-1/2 flex flex-col justify-center w-full p-8 mb-1 text-center">
            <h5 className="text-2xl">Lattice Constant</h5>
            <h4 className="md:text-4xl text-3xl theme-text font-bold">{mxene.latticeConstant}</h4>
          </div>
          <div className="result-card h-1/2 flex flex-col justify-center w-full p-8 mt-1 text-center">
            <h5 className="text-2xl">Magnetic Moment</h5>
            <h4 className="md:text-4xl text-3xl theme-text font-bold">{mxene.magneticMoment}</h4>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white relative h-[30vh] lg:h-full w-full">
          <Image src={process.env.NEXT_PUBLIC_SERVER_URL + mxene.bandImage} alt="Band image for the mxene protein" layout='fill' loading='lazy' />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="result-card h-full w-full justify-start items-start p-4">
            <textarea
              disabled={true}
              value={mxene.poscar_data}
              className="w-full focus:outline-none border-2 border-gray-300 my-2 p-2 h-full"
              rows={5}
            ></textarea>
          </div>
          <div className="theme border border-white w-full hover:bg-white text-white hover:text-black">
            <button
              onClick={handleDownload}
              className="w-full my-2 uppercase text-lg"
            >
              Download <span><i className="fa fa-download mx-1"></i></span>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .result-card {
          background-color: rgba(255,255,255,0.9)
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const resMxenes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/searchmxene/searchbyid/${context.params.slug}`
  );
  const mxenes = await resMxenes.json();
  return {
    props: {
      mxene: mxenes,
      slug: context.params.slug,
    }
  };
};
