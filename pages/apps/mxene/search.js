import { useState } from "react"
import { useRouter } from "next/router";

export default function MxeneSearch() {
    const router = useRouter();
    const [m1, setM1] = useState("");
    const [m2, setM2] = useState("");
    const [x, setX] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [allFieldsEmpty, setAllFieldsEmpty] = useState(false)
    // function to handle the change in transition elements
    const handleTransition = (el) => {
        if(m1 === "" && m2 === "")
            setM1(el);
        else if(m1 !== "" && m2 === "")
            setM2(el);
        else if(m1 !== "" && m2 !== ""){
            setM1(m2);
            setM2(el);
        }
    }
    // function to handle the change in functional elements
    const handleFunc = (el) => {
        if(t1 === "" && t2 === "")
            setT1(el);
        else if(t1 !== "" && t2 === "")
            setT2(el);
        else if(t1 !== "" && t2 !== ""){
            setT1(t2);
            setT2(el);
        }
    }
    // function to handle the change in choice of carbon or nitrogen
    const handleX = (xVal) => {
        setX(xVal)
    }
    // function to reset the elements selected
    const handleReset = () => {
        setM1("")
        setM2("")
        setX("")
        setT1("")
        setT2("")
        setAllFieldsEmpty(false)
    }
    // function to handle the search
    const handleSearch = async () => {
        // have at least element filled
        if(m1 === "" && m2 === "" && t1 === "" && t2 === "" && x === "") {
            setAllFieldsEmpty(true);
        } else {
            router.push({
                pathname: '/apps/mxene/filter',
                query: {
                    M1: m1,
                    M2: m2,
                    T1: t1,
                    T2: t2,
                    X: x,
                    currentPage: 1
                }
            });
        }
    } 
    return (
        <div className="w-screen min-h-screen pt-16 flex flex-col items-center justify-center">
            <div className="my-8">
                <h2 className="md:text-4xl text-2xl text-white text-center">MXene Search</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
                <p className="text-white text-lg px-4 text-center">You can manually enter symbols of the elements or use the periodic table given below to search for MXenes</p>
            </div>
            <div className="w-screen flex flex-col items-center justify-center py-4 md:px-16 px-6">
                <div className="w-full my-1 px-6 py-8 rounded-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-4">
                        <div className="text-center">
                            <h6 className="text-xl text-white font-bold">Transition Elements</h6>
                            <div className="flex md:flex-row flex-col justify-center items-center">
                                <div className="m-2">
                                    <p className="text-white text-left p-1">M1</p>
                                    <input 
                                        value={m1} 
                                        className="bg-gray-100 p-2 rounded-md caret-green-700 focus:outline-none focus:bg-green-100" 
                                        onChange={(e) => setM1(e.target.value)}
                                    ></input>
                                    {allFieldsEmpty && <p className="text-left text-sm mt-1 text-green-200">All fields cannot be empty!</p>}
                                </div>
                                <div className="m-2">
                                    <p className="text-white text-left p-1">M2</p>
                                    <input
                                        value={m2} 
                                        className="bg-gray-100 p-2 rounded-md caret-green-700 focus:outline-none focus:bg-green-100" 
                                        onChange={(e) => setM2(e.target.value)}
                                    ></input>
                                    {allFieldsEmpty && <p className="text-left text-sm mt-1 text-green-200">All fields cannot be empty!</p>}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h6 className="text-xl text-white font-bold">Carbon or Nitrogen</h6>
                            <div className="flex justify-center items-center">
                                <div className="m-2">
                                    <p className="text-white text-left p-1">X</p>
                                    <input 
                                        value={x} 
                                        className="bg-gray-100 p-2 rounded-md caret-blue-700 focus:outline-none focus:bg-blue-200" 
                                        onChange={(e) => setX(e.target.value)}
                                    ></input>
                                    {allFieldsEmpty && <p className="text-left text-sm mt-1 text-blue-200">All fields cannot be empty!</p>}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h6 className="text-xl text-white font-bold">Functional Elements</h6>
                            <div className="flex md:flex-row flex-col justify-center items-center">
                                <div className="m-2">
                                    <p className="text-white text-left p-1">T1</p>
                                    <input 
                                        value={t1} 
                                        className="bg-gray-100 p-2 rounded-md caret-yellow-700 focus:outline-none focus:bg-yellow-100" 
                                        onChange={(e) => setT1(e.target.value)}
                                    ></input>
                                    {allFieldsEmpty && <p className="text-left text-sm mt-1 text-yellow-200">All fields cannot be empty!</p>}
                                </div>
                                <div className="m-2">
                                    <p className="text-white text-left p-1">T2</p>
                                    <input 
                                        value={t2} 
                                        className="bg-gray-100 p-2 rounded-md caret-yellow-700 focus:outline-none focus:bg-yellow-100" 
                                        onChange={(e) => setT2(e.target.value)}
                                    ></input>
                                    {allFieldsEmpty && <p className="text-left text-sm mt-1 text-yellow-200">All fields cannot be empty!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end justify-center mt-4">
                        <button 
                            className="px-8 py-1 mx-1 bg-gray-100 rounded-xl text-lg hover:-translate-y-0.5 focus:outline-none" 
                            onClick={handleReset}
                        >Reset</button>
                        <button 
                            className="px-8 py-1 mx-1 theme rounded-xl text-lg text-white hover:-translate-y-0.5 focus:outline-none" 
                            onClick={handleSearch}
                        >Search</button>
                    </div>
                </div>
                <div className="px-6 py-8 my-1 w-full rounded-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                    <div className="grid md:grid-cols-9 md:grid-rows-8 grid-cols-3 gap-1 gap-y-1 w-3/4 mx-auto my-4">
                        {/* first row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("H")}>H</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        {
                            Array.from(Array(7).keys()).map((val) => {
                                return (
                                    <div key={val} className="grid grid-cols-2 gap-1">    
                                        <div className="h-full w-full bg-transparent rounded-md"></div>
                                        <div className="h-full w-full bg-transparent rounded-md"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* second row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {
                            Array.from(Array(5).keys()).map((val) => {
                                return (
                                    <div key={val} className="h-16 grid grid-cols-2 gap-1">    
                                        <div className="h-full w-full bg-transparent rounded-md"></div>
                                        <div className="h-full w-full bg-transparent rounded-md"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full flex justify-center items-center bg-blue-300 text-blue-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleX("C")}>C</div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-blue-300 text-blue-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleX("N")}>N</div>
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("O")}>O</div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("F")}>F</div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* third row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {
                            Array.from(Array(5).keys()).map((val) => {
                                return (
                                    <div key={val} className="h-16  grid grid-cols-2 gap-1">    
                                        <div className="h-full w-full bg-transparent rounded-md"></div>
                                        <div className="h-full w-full bg-transparent rounded-md"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("Cl")}>Cl</div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* fourth row */}
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Sc")}>Sc</div>
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Ti")}>Ti</div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("V")}>V</div>
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Cr")}>Cr</div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleFunc("Br")}>Br</div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* fifth row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Y")}>Y</div>
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Zr")}>Zr</div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Nb")}>Nb</div>
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Mo")}>Mo</div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* sixth row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Hf")}>Hf</div>
                        </div>
                        <div className="h-16 grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Ta")}>Ta</div>
                            <div className="h-full w-full flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("W")}>W</div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* seventh row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                            <div className="h-full w-full bg-gray-100 rounded-md"></div>
                        </div>
                        {/* eighth row */}
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OH")}>OH</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                        <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("NP")}>NP</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("CN")}>CN</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("RO")}>RO</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OBr")}>OBr</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OCl")}>OCl</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("SCN")}>SCN</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("NCS")}>NCS</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                        <div className="h-16 grid grid-cols-2 gap-1">    
                            <div className="h-full w-full flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OCN")}>OCN</div>
                            <div className="h-full w-full bg-transparent rounded-md"></div>
                        </div>
                    </div>
                    <h5 className="font-bold text-white text-2xl text-center pt-4">Reference Periodic Table</h5>
                </div>
            </div>
        </div>
    )
} 