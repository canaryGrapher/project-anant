import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import ResultCard from "../../../components/home/Apps/Mxene/ResultCard";
import { saveAs } from "file-saver";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { MyToaster } from "../../../functions/toaster";
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';
import PageBar from "../../../components/common/PaginationBar/PageBar";

export default function MxeneFilter() {
    const [idList, setIdList] = useState([]); 
    const [searchResult, setSearchResult] = useState([]);
    const router = useRouter();
    const [currPage, setcurrPage] = useState(parseInt(router.query.currentPage));
    const [numPages, setNumPages] = useState(0);
    const [totalMxenes, setTotalMxenes] = useState(0);
    const user = useUser();
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
        const resMxenes = await resBody.json();
        setSearchResult(resMxenes.mxenes);
        setTotalMxenes(resMxenes.totalResults);
        setNumPages(resMxenes.totalPages);
        setcurrPage(parseInt(resMxenes.currentPage));
    }
    useEffect(() => {
        queryDatabase();
    }, [router.query]);
    const handleDownload = async () => {
        if (idList.length === 0) {
            return MyToaster({header: "No mxene selected!", message: "Please select at least 1 mxene"});
        }
        if(user.user) {
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
                      await saveAs(res, `${idList.length}-mxenes.zip`); 
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
        } else {
            MyToaster({header: "Login to download!", message: "Please login to download mxenes"});
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
            <div className="w-full px-8 py-6">
                <div className="flex mb-5 gap-2 items-center">
                    <p className="md:text-md text-sm text-center text-white text-lg bg-gray-900 inline px-4 py-3 border border-gray-600 rounded-3xl">
                        <span><i className="fa fa-list-ul mr-2"></i></span><strong>{totalMxenes}</strong> mxene{totalMxenes === 1 ? "" : "s"} found
                    </p>
                    {idList.length > 0 
                    && <button onClick={handleDownload} className="outline-none md:text-md text-sm text-center text-lg bg-gray-300 inline px-4 py-3 border border-gray-600 rounded-3xl">
                        <span><i className="fa fa-download mr-1"></i></span> Download {idList.length} Mxene{idList.length === 1 ? "" : "s"} 
                    </button>}
                    {
                        idList.length <= 0 
                        &&
                        <p className="text-gray-300">
                          Displaying <span className="underline font-bold">{20 * parseInt(currPage-1) + 1} - {20*parseInt(currPage-1)+searchResult.length}</span> mxenes  
                        </p> 
                    }
                </div>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
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
                <div className="container mx-auto text-center mt-6 mb-4">
                    <PageBar 
                        currPage={currPage} 
                        numberOfPages={numPages}
                        m1={router.query.M1}
                        m2={router.query.M2}
                        t1={router.query.T1}
                        t2={router.query.T2}
                        x={router.query.X}
                    />
                </div>
            </div>
        </div>
    )
} 