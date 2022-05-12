import { saveAs } from 'file-saver';
import axios from 'axios';
import { Toaster } from "react-hot-toast";
import { MyToaster } from "../../../functions/toaster";
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';

export default function MxeneResult({ mxene }) {
  const user = useUser();
  const handleDownload = async () => {
    if (user.user) {
      try {
        var options = {
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/oauth/token`,
          headers: { 'content-type': 'application/json' },
          data: {
            "grant_type": "client_credentials",
            "client_id": process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
            "client_secret": process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
            "audience": process.env.NEXT_PUBLIC_AUTH0_AUDIENCE
          }
        };
        axios.request(options).then(async (response) => {
          const resp = response.data;
          console.log(resp)
          if (resp.access_token) {
            const accessToken = resp.access_token;
            const auth_header = {
              Authorization: `Bearer ${accessToken}`
            }
            const resDown = await fetch(`http://localhost:3002/downloadmxene/?id=${mxene.id}`, { headers: auth_header });
            const res = await resDown.blob();
            await saveAs(res, `${mxene.mxene}.zip`);
            console.log("Verified and downloaded");
            MyToaster({ header: "Download successfull!", message: `You have downloaded ${mxene.mxene}` });
          }
        }).catch(function (error) {
          console.error(error);
          MyToaster({ header: "Download failed!", message: "There was an error downloading your mxenes" });
        });
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
        <h2 className="md:text-4xl text-2xl text-white text-center">{mxene.mxene}</h2>
        <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
      </div>
      <div className="container md:mb-12 md:p-0 p-4 grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-2">
        <div className="flex justify-center items-center result-card">
          {/* 3d model here */}
        </div>
        <div className="md:h-96 w-full flex flex-col">
          <div className="result-card h-1/2 flex flex-col justify-center w-full p-8 mb-1 text-center">
            <h5 className="text-2xl">Lattice Constant</h5>
            <h4 className="md:text-4xl text-3xl theme-text font-bold">{mxene.latticeConstant}</h4>
          </div>
          <div className="result-card h-1/2 flex flex-col justify-center w-full p-8 mt-1 text-center">
            <h5 className="text-2xl">Magnetic Moment</h5>
            <h4 className="md:text-4xl text-3xl theme-text font-bold">{mxene.magneticMoment}</h4>
          </div>
        </div>
        <div className="result-card flex justify-center items-center">
          {/* graph */}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="result-card h-full w-full justify-start items-start p-4">
            <textarea 
              disabled={true} 
              value={mxene.poscar_data} 
              className="w-full focus:outline-none border-2 border-gray-300 my-2 p-2"
              style={{ minHeight: "95%", maxHeight: "95%" }}
            ></textarea>
          </div>
          <div className="theme border border-white w-full">
            <button
              onClick={handleDownload}
              className="w-full my-2 text-white uppercase text-lg text-white hover:-translate-y-0.5 focus:outline-none"
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/searchmxene/getmxenepaths`);
  const mxeneIds = await res.json();
  const paths = [];
  mxeneIds.forEach((element) => {
    const item = {
      params: {
        slug: element.id,
      },
    };
    paths.push(item);
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const resMxenes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/searchmxene/searchbyid/${context.params.slug}`
  );
  const mxenes = await resMxenes.json();
  return {
    props: {
      mxene: mxenes
    },
    revalidate: 3600,
  };
};
