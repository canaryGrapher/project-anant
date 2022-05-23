import { useState } from "react"
import ResultCard from "../../../components/home/Apps/Mxene/ResultCard";
import { saveAs } from "file-saver";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { MyToaster } from "../../../functions/toaster";
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';
import PageBar from "../../../components/common/PaginationBar/PageBar";

export default function MxeneFilter({ query, res }) {
    const [idList, setIdList] = useState([]);
    const user = useUser();

    const handleDownload = async () => {
        if (idList.length === 0) {
            return MyToaster({ header: "No mxene selected!", message: "Please select at least 1 mxene" });
        }
        if (user.user) {
            try {
                const mxeneIds = idList.join(",");
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
                    if (resp.access_token) {
                        const accessToken = resp.access_token;
                        const auth_header = {
                            Authorization: `Bearer ${accessToken}`
                        }
                        const resDown = await fetch(`http://localhost:3002/downloadmxene/?id=${mxeneIds}`, { headers: auth_header });
                        const res = await resDown.blob();
                        saveAs(res, `${idList.length}-mxenes.zip`);
                        console.log("Verified and downloaded");
                        MyToaster({ header: "Download successfull!", message: `You have downloaded ${idList.length} mxene${idList.length === 1 ? "" : "s"}` });
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
        <div className="w-screen min-h-screen pt-16 flex flex-col items-center justify-start">
            <Head>
                <title>
                    Filter Search | Mxene Database
                </title>
            </Head>
            <Toaster position="top-right" />
            <div className="my-8">
                <h2 className="md:text-4xl text-2xl text-white text-center">Search Results</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
                <p className="text-white text-lg px-4 text-center">
                    Click on the search result box to select it for downloading
                </p>
            </div>
            <div className="w-full px-8 py-6">
                <div className="flex mb-5 gap-2 items-center">
                    <p className="md:text-md text-center text-white text-lg bg-gray-900 inline px-4 py-3 border border-gray-600 rounded-3xl">
                        <span><i className="fa fa-list-ul mr-2"></i></span><strong>{res.totalResults}</strong> mxene{res.totalResults === 1 ? "" : "s"} found
                    </p>
                    {idList.length > 0
                        && <button onClick={handleDownload} className="outline-none md:text-md text-center text-lg bg-gray-300 inline px-4 py-3 border border-gray-600 rounded-3xl">
                            <span><i className="fa fa-download mr-1"></i></span> Download {idList.length} Mxene{idList.length === 1 ? "" : "s"}
                        </button>}
                    {
                        idList.length <= 0
                        &&
                        <p className="text-gray-300">
                            Displaying <span className="underline font-bold">{20 * parseInt(res.currentPage - 1) + 1} - {20 * parseInt(res.currentPage - 1) + res.mxenes.length}</span> of <span className="font-bold">{res.totalResults}</span> mxenes
                        </p>
                    }
                </div>
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
                    {
                        res.mxenes.map((mxene) => {
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
                        query={query}
                        totalPages={res.totalPages}
                        currentPage={res.currentPage}
                    />
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const query = context.query;
    let parameters = {
        M1: query.M1,
        M2: query.M2,
        T1: query.T1,
        T2: query.T2,
        X: query.X,
        currentPage: query.currentPage,
    }
    if (query.bandGap) {
        parameters["bandGap"] = query.bandGap;
    }
    const fetchURL = process.env.NEXT_PUBLIC_SERVER_URL + '/searchMxene'
    const resBody = await fetch(fetchURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(parameters)
    });
    const res = await resBody.json();
    return {
        props: {
            query,
            res
        }
    }
}