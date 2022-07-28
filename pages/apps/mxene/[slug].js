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
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/common/Meta/Meta';

export default function MxeneResult({ mxene, slug }) {
  const router = useRouter();
  const [Model3D, setModel3D] = useState(<p>Model is loading...</p>);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
      } catch (error) {
        console.log(error);
        MyToaster({ header: "Download failed!", message: "There was an error downloading your mxenes" });
      }
    } else {
      MyToaster({ header: "Login to download!", message: "Please login to download mxenes" });
    }
  }


  return (

    <div className="min-h-screen flex flex-col items-center justify-start pt-16">
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
        <link rel="canonical" href="" />
        {/* OG meta tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={mxene.mxene}
        />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_SERVER_URL + mxene.bandImage} />
        <meta property="og:url" content="" />
        <meta
          property="og:site_name"
          content="Project Anant"
        />
      </Head>
      <Toaster position="top-right" />
      <Meta title={`${mxene.mxene} | Mxene Database`} extraKeywords={"mxene"} />
      <div className="my-8">
        <h2 className="md:text-4xl text-3xl font-bold text-white">{mxene.mxene}</h2>
        <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
      </div>
      <div className="container md:mb-5 lg:p-0 p-4 grid lg:grid-cols-5 grid-cols-1 gap-2 h-full min-h-screen">
        <div className='col-span-1 lg:col-span-2 gap-5'>
          <div className="h-[80vw] lg:h-[50vh] w-full flex justify-center items-center result-card mb-2 rounded-lg" id="apphere">
            {Model3D}
          </div>
          <div className="flex justify-center items-center bg-white relative h-[40vh] w-full rounded-lg">
            <p>Band Image</p>
            <Image src={process.env.NEXT_PUBLIC_SERVER_URL + mxene.bandImage} alt="Band image for the mxene protein" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' />
          </div>
        </div>
        <div className='col-span-1 lg:col-span-3 gap-2'>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 mb-5 h-[300px] lg:h-[180px]">
            <div className="h-full bg-gray-200 flex flex-col items-center justify-center rounded-lg p-2">
              <h4 className="md:text-4xl text-2xl font-medium">{mxene.latticeConstant}</h4>
              <h5 className="text-lg theme-text font-medium">Lattice Constant (Å)</h5>
            </div>
            <div className="h-full bg-gray-200 flex flex-col items-center justify-center rounded-lg p-2">
              <h4 className="md:text-4xl text-2xl font-medium">{mxene.bandGap}</h4>
              <h5 className="text-lg theme-text font-medium">Band Gap (eV)</h5>
            </div>
            <div className="h-full bg-gray-200 flex flex-col items-center justify-center rounded-lg p-2">
              <h4 className="md:text-4xl text-2xl font-medium">{mxene.magneticMoment}</h4>
              <h5 className="text-lg theme-text font-medium">Magnetic Moment (μ<sub>B</sub>)</h5>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-start result-card rounded-lg h-[80vh] p-4">
            <h5 className="text-lg text-theme font-medium">Poscar data</h5>
            <div className="w-full justify-start items-start h-full">
              <textarea
                disabled={true}
                value={mxene.poscar_data}
                className="w-full focus:outline-none border-2 border-gray-300 my-2 h-full p-5"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-0">
        <div className="hover:theme border border-white w-full bg-white hover:text-white text-black mb-10">
          {!loading ? <button
            onClick={() => {
              setLoading(true);
              handleDownload()
            }}
            className="w-full my-2 uppercase text-lg outline-none"
          >
            <span><i className="fa fa-download mx-1"></i></span> Download
          </button>
            :
            <button
              className="w-full my-2 uppercase text-lg outline-none"
            >
              <span><i className="fa fa-circle-o-notch mr-2 animate-spin"></i></span> Please wait
            </button>}
        </div>
      </div>
      <div className='flex flex-row justify-between container md:mb-12 lg:p-0 p-4 text-white'>
        <p onClick={() => router.back()} className="cursor-pointer hover:underline"><i className='fa fa-arrow-left pr-2'></i>Go back</p>
        <Link href="/apps/mxene/search"><p className="cursor-pointer hover:underline"><i className='fa fa-search pr-2'></i>Search Page</p></Link>
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
  ).catch(err => {
    console.log(err)
    context.res.writeHead(302, { Location: "/500" });
    context.res.end();
  });
  const mxenes = resMxenes ? await resMxenes.json() : {};
  return {
    props: {
      mxene: mxenes,
      slug: context.params.slug,
    }
  };
};

        // <div className="flex flex-col gap-2 justify-center items-center">

        //   <div className="theme border border-white w-full hover:bg-white text-white hover:text-black">
        //     <button
        //       onClick={handleDownload}
        //       className="w-full my-2 uppercase text-lg outline-none"
        //     >
        //       Download <span><i className="fa fa-download mx-1"></i></span>
        //     </button>
        //   </div>
        // </div>