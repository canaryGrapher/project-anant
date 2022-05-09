import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import ResultCard from "../../../components/home/Apps/Mxene/ResultCard";
import { saveAs } from "file-saver";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { MyToaster } from "../../../functions/toaster";
import Head from "next/head";

export default function MxeneFilter() {
    const [idList, setIdList] = useState([]); 
    const [searchResult, setSearchResult] = useState([]);
    const router = useRouter();
    useEffect(() => {
        // handles query to the database
        const queryDatabase = async () => {
            const resBody = await fetch("http://localhost:3002/searchMxene", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify(router.query)
            });
            const mxenes = await resBody.json();
            setSearchResult(mxenes);
        }
        queryDatabase();
    }, [router.query]);
    const handleDownload = async () => {
        if (idList.length === 0) {
            return MyToaster({header: "No mxene selected!", message: "Please select at least 1 mxene"});
        }
        try {
          const mxeneIds = idList.join(",");
          var options = {
              method: 'POST',
              url: `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/oauth/token`,
              headers: {'content-type': 'application/json'},
              data: {
                "grant_type": "client_credentials",
                "client_id": process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
                "client_secret": process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
                "audience": process.env.NEXT_PUBLIC_AUTH0_AUDIENCE
              }
            };
            axios.request(options).then(async (response) => {
              const resp = response.data;
              if(resp.access_token){
                  const accessToken = resp.access_token;
                  const auth_header = {
                    Authorization: `Bearer ${accessToken}`
                  }
                  const resDown = await fetch(`http://localhost:3002/downloadmxene/?id=${mxeneIds}`, { headers: auth_header }); 
                  const res = await resDown.blob();
                  await saveAs(res, `${idList.length}.zip`); 
                  console.log("Verified and downloaded");
                  MyToaster({header: "Download successfull!", message:`You have downloaded ${idList.length} mxene${idList.length === 1 ? "" : "s"}`});
              }
            }).catch(function (error) {
              console.error(error);
              MyToaster({header: "Download failed!", message: "There was an error downloading your mxenes"});
            });
        } catch (error) {
          console.log(error);
          MyToaster({header: "Download failed!", message: "There was an error downloading your mxenes"});
        }
    }
    return (
        <div className="w-screen min-h-screen pt-16 flex flex-col items-center justify-start">
            <Head>
                <title>
                  Filter Search | Mxene Database
                </title>
            </Head>
            <Toaster position="top-right"/>
            <div className="my-8">
                <h2 className="md:text-4xl text-2xl text-white text-center">Search Results</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
                <p className="text-white text-lg px-4 text-center">
                    Please use the additional filters available to refine your search
                </p>
            </div>
            <div className="md:w-2/3 md:px-16 px-6 flex justify-between md:mr-auto gap-4">
                <p className="text-left text-white text-lg bg-gray-900 inline px-2 py-4 rounded-lg">
                    {searchResult.length} mxene{searchResult.length === 1 ? "" : "s"} found
                </p>
                <button onClick={handleDownload} className="outline-none text-left text-white text-lg bg-gray-900 inline px-2 py-3 rounded-lg">
                    Download Mxenes
                </button>
            </div>
            <div className="w-screen flex items-center justify-center py-4 md:px-16 px-6">
                <div className="grid w-full md:grid-cols-3 grid-cols-1">
                    <div className="col-span-2 md:order-1 order-2">
                        {
                            searchResult.map((mxene) => {
                                return <ResultCard 
                                         key={mxene.id}
                                         id={mxene.id} 
                                         mxene={mxene.mxene} 
                                         latticeConstant={mxene.latticeConstant} 
                                         bandGap={mxene.bandGap}
                                         idList={idList}
                                         setIdList={setIdList}
                                       />
                            })
                        }
                    </div>
                    <div className="col-span-1 md:p-2 md:fixed right-20 md:order-2 order-1">
                        <div className="bg-white p-4 m-1 text-2xl rounded-md text-center theme-text font-bold">Filters</div>
                        <div className="bg-white m-1 p-2 rounded-md">
                            <div className="w-full mx-auto flex flex-col items-center p-2">
                                <h5 className="text-xl theme-text font-bold self-start">Properties</h5>
                                <div className="flex flex-wrap my-2">
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">First</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Second</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Third Property</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Fourth</p>
                                </div>
                            </div>
                            <div className="w-full mx-auto flex flex-col items-center p-2">
                                <h5 className="text-xl theme-text font-bold self-start">Lattice Constants</h5>
                                <div className="flex flex-wrap my-2">
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">First</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Second</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Third Property</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Fourth</p>
                                </div>
                            </div>
                            <div className="w-full mx-auto flex flex-col items-center p-2">
                                <h5 className="text-xl theme-text font-bold self-start">Band Gap</h5>
                                <div className="flex flex-wrap my-2">
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">First</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Second</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Third Property</p>
                                    <p className="theme-text text-xl px-3 m-1 border-2 border-blue-900 rounded-xl cursor-pointer">Fourth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 