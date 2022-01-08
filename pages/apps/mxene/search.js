import { useState } from "react"

export default function MxeneSearch() {

    const [trans, setTrans] = useState([])
    const [isCarbon, setIsCarbon] = useState(null)
    const [func, setFunc] = useState([])

    // function to handle the change in transition elements
    const handleTransition = (el) => {
        const m1 = document.getElementById("m1")
        const m2 = document.getElementById("m2")

        if(trans.length === 0 || trans.length === 1) {
            trans.push(el)
        } else if (trans.length === 2) {
            let temp = trans[1]
            setTrans([])
            setTrans([temp, el])
        }

        if(trans[0] !== undefined)
            m1.value = trans[0]
        if(trans[1] !== undefined)
            m2.value = trans[1]
    }

    // function to handle the change in functional elements
    const handleFunc = (el) => {
        const t1 = document.getElementById("t1")
        const t2 = document.getElementById("t2")

        if(func.length === 0 || func.length === 1) {
            func.push(el)
        } else if (func.length === 2) {
            let temp = func[1]
            setFunc([])
            setFunc([temp, el])
        }

        if(func[0] !== undefined)
            t1.value = func[0]
        if(func[1] !== undefined)
            t2.value = func[1]
    }

    // function to handle the change in choice of carbon or nitrogen
    const handleX = (x) => {
        const xField = document.getElementById("x")
        if(x === "C") {
            setIsCarbon(true)
            xField.value = "C"
        } else if (x === "N") {
            setIsCarbon(false)
            xField.value = "N"
        }
    }

    // function to reset the elements selected
    const handleReset = () => {

        const m1 = document.getElementById("m1")
        const m2 = document.getElementById("m2")
        const t1 = document.getElementById("t1")
        const t2 = document.getElementById("t2")
        const x = document.getElementById("x")

        let arrOfTextFields = [m1, m2, t1, t2, x]
        for(let textField of arrOfTextFields) {
            textField.value = ""
        }
        setTrans([])
        setFunc([])
        setIsCarbon(null)
    }

    // function to handle the search
    const handleSearch = () => {

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
                                    <input id="m1" value={trans[0]} className="bg-gray-100 p-2 rounded-md caret-green-700 focus:outline-none focus:bg-green-100" name="m1"></input>
                                </div>
                                <div className="m-2">
                                    <p className="text-white text-left p-1">M2</p>
                                    <input id="m2" value={trans[1]} className="bg-gray-100 p-2 rounded-md caret-green-700 focus:outline-none focus:bg-green-100" name="m2"></input>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h6 className="text-xl text-white font-bold">Carbon or Nitrogen</h6>
                            <div className="flex justify-center items-center">
                                <div className="m-2">
                                    <p className="text-white text-left p-1">X</p>
                                    <input id="x" className="bg-gray-100 p-2 rounded-md caret-blue-700 focus:outline-none focus:bg-blue-200" name="x"></input>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h6 className="text-xl text-white font-bold">Functional Elements</h6>
                            <div className="flex md:flex-row flex-col justify-center items-center">
                                <div className="m-2">
                                    <p className="text-white text-left p-1">T1</p>
                                    <input id="t1" value={func[0]} className="bg-gray-100 p-2 rounded-md caret-yellow-700 focus:outline-none focus:bg-yellow-100" name="t1"></input>
                                </div>
                                <div className="m-2">
                                    <p className="text-white text-left p-1">T2</p>
                                    <input id="t2" value={func[1]} className="bg-gray-100 p-2 rounded-md caret-yellow-700 focus:outline-none focus:bg-yellow-100" name="t2"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end justify-center mt-4">
                        <button className="px-8 py-1 mx-1 bg-gray-100 rounded-xl text-lg hover:-translate-y-0.5 focus:outline-none" onClick={handleReset}>Reset</button>
                        <button className="px-8 py-1 mx-1 theme rounded-xl text-lg text-white hover:-translate-y-0.5 focus:outline-none" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="px-6 py-8 my-1 w-full rounded-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                    <div className="grid md:grid-cols-9 md:grid-rows-8 grid-cols-3 gap-1 gap-y-2 w-3/4 mx-auto my-4">
                        {/* first row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("H")}>H</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        {
                            Array.from(Array(7).keys()).map((val) => {
                                return (
                                    <div key={val} className="grid grid-cols-2 gap-1">    
                                        <div className="h-16 w-16 bg-transparent rounded-md"></div>
                                        <div className="h-16 w-16 bg-transparent rounded-md"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* second row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {
                            Array.from(Array(5).keys()).map((val) => {
                                return (
                                    <div key={val} className="grid grid-cols-2 gap-1">    
                                        <div className="h-16 w-16 bg-transparent rounded-md"></div>
                                        <div className="h-16 w-16 bg-transparent rounded-md"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 flex justify-center items-center bg-blue-300 text-blue-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleX("C")}>C</div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-blue-300 text-blue-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleX("N")}>N</div>
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("O")}>O</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("F")}>F</div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* third row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {
                            Array.from(Array(5).keys()).map((val) => {
                                return (
                                    <div key={val} className="grid grid-cols-2 gap-1">    
                                        <div className="h-16 w-16 bg-transparent rounded-md"></div>
                                        <div className="h-16 w-16 bg-transparent rounded-md"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("Cl")}>Cl</div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* fourth row */}
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Sc")}>Sc</div>
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Ti")}>Ti</div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("V")}>V</div>
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Cr")}>Cr</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Br")}>Br</div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* fifth row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Y")}>Y</div>
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Zr")}>Zr</div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Nb")}>Nb</div>
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Mo")}>Mo</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* sixth row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Hf")}>Hf</div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("Ta")}>Ta</div>
                            <div className="h-16 w-16 flex justify-center items-center bg-green-200 text-green-700 rounded-md cursor-pointer hover:scale-105 duration-200" onClick={() => handleTransition("W")}>W</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* seventh row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                            <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
                        </div>
                        {/* eighth row */}
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OH")}>OH</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                        <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("NP")}>NP</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("CN")}>CN</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("RO")}>RO</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OBr")}>OBr</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OCl")}>OCl</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("SCN")}>SCN</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("NCS")}>NCS</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">    
                            <div className="h-16 w-16 flex justify-center items-center bg-yellow-200 text-yellow-700 rounded-md cursor-pointer hover:scale-105 duration-200"  onClick={() => handleFunc("OCN")}>OCN</div>
                            <div className="h-16 w-16 bg-transparent rounded-md"></div>
                        </div>
                    </div>
                    <h5 className="font-bold text-white text-2xl text-center pt-4">Reference Periodic Table</h5>
                </div>
            </div>
        </div>
    )
} 