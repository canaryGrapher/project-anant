import Link from "next/link"

export default function ResultCard ({mxene, latticeConstant, bandGap, id, idList, setIdList}) {
    // creates the ID list for download
    const handleIdList = (id) => {
        if(idList.includes(id)) {
            let arr = idList;
            arr.splice(idList.indexOf(id), 1);
            setIdList(arr)
        } else {
            setIdList([...idList, id])
        }
    }
    return (
        <div className="w-full flex md:flex-row flex-col items-center justify-between md:p-8 p-4 my-2 rounded-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <div className="w-full flex items-center md:justify-start justify-center md:border-0 border-t-2 border-b-2 my-2 border-gray-400 md:text-left text-center">
                <input type="checkbox" className="mr-3" onChange={() => handleIdList(id)}/>
                <p className="text-white text-2xl md:my-0 my-4">{mxene}</p>
            </div>
            <div className="md:w-3/6 w-5/6 flex md:justify-between justify-center mx-2">
                <div className="text-center mx-2">
                    <p className="md:text-xl text-lg text-gray-900">Lattice Constant</p>
                    <p className="text-2xl font-bold text-white">{latticeConstant}</p>
                </div>
                <div className="text-center mx-2">
                    <p className="md:text-xl text-lg text-gray-900">Band Gap</p>
                    <p className="text-2xl font-bold text-white">{bandGap}</p>
                </div>
            </div>
            <Link href={`/apps/mxene/${id}`}>
                <button className="theme md:w-1/3 w-full mt-2 py-3 rounded-lg text-gray-100 outline-none">VIEW MXENE</button>
            </Link>
        </div>
    )
}