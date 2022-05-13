import Link from "next/link"

export default function ResultCard ({mxene, latticeConstant, bandGap, id, idList, setIdList}) {
    // creates the ID list for download
    const handleIdList = (id) => {
        if(idList.includes(id)) {
            idList.splice(idList.indexOf(id), 1);
            setIdList([...idList])
        } else {
            setIdList([...idList, id])
        }
    }
    return (
        <div 
            className={`w-full flex md:flex-row flex-col items-center justify-between md:p-8 p-4 rounded-md ${idList.includes(id) ? "border shadow-xl" : ""}`} 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
            <div className="md:w-auto w-4/5 flex md:flex-row flex-row-reverse items-center md:justify-start justify-between md:border-0 border-t-2 border-b-2 my-2 border-gray-400 md:text-left text-center">
                <input type="checkbox" className="md:mr-3 ml-3" onChange={() => handleIdList(id)}/>
                <p className="text-white text-2xl md:my-0 my-4">{mxene}</p>
            </div>
            <div className="flex md:justify-between justify-center md:gap-2 gap-4 md:mx-2 my-2">
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
                <button 
                    className="theme md:w-1/5 w-full mt-2 py-3 rounded-lg text-gray-100 outline-none"
                >
                    VIEW MXENE
                    <span className="ml-2"><i className="fa fa-arrow-right hover:translate-x-1 duration-500"></i></span>
                </button>
            </Link>
            <style>{`
                input[type="checkbox"] {
                    -webkit-appearance: none;
                    appearance: none;
                    background-color: #fff;
                    font: inherit;
                    color: black;
                    width: 1.35em;
                    height: 1.35em;
                    border-radius: 0.15em;
                    transform: translateY(-0.075em);
                    display: grid;
                    place-content: center;
                    outline: none;
                    cursor: pointer;
                }
                input[type="checkbox"]::before {
                    content: "";
                    width: 0.85em;
                    height: 0.85em;
                    transform: scale(0);
                    transition: 120ms transform ease-in-out;
                    box-shadow: inset 1em 1em #163F65;
                    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
                }
                input[type="checkbox"]:checked::before {
                    transform: scale(1);
                }
            `}</style>
        </div>
    )
}