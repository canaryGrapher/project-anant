import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import ResultCard from "../../../components/home/Apps/Mxene/ResultCard";

export default function MxeneFilter() {
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

    return (
        <div className="w-screen min-h-screen pt-16 flex flex-col items-center justify-start">
            <div className="my-8">
                <h2 className="md:text-4xl text-2xl text-white text-center">Search Results</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
                <p className="text-white text-lg px-4 text-center">
                    Please use the additional filters available to refine your search
                </p>
            </div>
            <div className="w-screen md:px-16 px-6">
                <p className="text-left text-white text-lg bg-gray-900 inline px-2 py-4 rounded-lg">
                    {searchResult.length} mxene{searchResult.length === 1 ? "" : "s"} found
                </p>
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