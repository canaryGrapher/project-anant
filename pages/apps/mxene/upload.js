import { useState } from "react"
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function MxeneUpload() {
    const [name, setName] = useState("");
    const [m1, setM1] = useState("");
    const [m2, setM2] = useState("");
    const [x, setX] = useState(""); 
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [lattice, setLattice] = useState("");
    const [bandwidth, setBandwidth] = useState("");
    const [formula, setFormula] = useState("");

    const validateUpload = () => {
        if (
            name === "" || 
            m1 === "" ||
            m2 === "" ||
            x === "" ||
            t1 === "" || 
            t2 === "" ||
            lattice === "" ||
            bandwidth === "" || 
            formula === "" 
        ) {
            return false;
        }
        return true;
    }
    const uploadMxene = () => {
        if(validateUpload()) {

        } else {
            
        }
    }
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center px-4 mt-8 md:mt-2">
            <div className="my-4">
                <h2 className="md:text-4xl text-2xl text-white text-center">MXene upload</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
            </div>
            <div className="container md:w-3/4 w-full flex flex-col items-center justify-center py-8 md:px-0 px-4 rounded-lg" style ={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                <div className="flex flex-col justify-items-start md:w-3/4 w-full ">
                    <p className="text-white text-sm md:text-md">MXene Name</p>
                    <input 
                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:justify-between md:w-3/4 w-full my-2">
                    <div className="w-full">
                        <p className="text-white text-sm md:text-md">M1</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text" 
                            onChange={(e) => setM1(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-white text-sm md:text-md">M2</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text" 
                            onChange={(e) => setM2(e.target.value)}    
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-white text-sm md:text-md">X</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text"
                            onChange={(e) => setX(e.target.value)} 
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-white text-sm md:text-md">T1</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text"
                            onChange={(e) => setT1(e.target.value)} 
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-white text-sm md:text-md">T2</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text"
                            onChange={(e) => setT2(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between md:w-3/4 w-full m-2">
                    <div className="flex flex-col md:w-1/2 w-full md:mr-1">
                        <p className="text-white text-sm md:text-md">Lattice constant</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text"
                            onChange={(e) => setLattice(e.target.value)}  
                        />
                    </div>
                    <div className="flex flex-col text-sm md:text-lg md:w-1/2 w-full md:ml-1">
                        <p className="text-white text-sm md:text-md">Bandwidth</p>
                        <input 
                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                            type="text"
                            onChange={(e) => setBandwidth(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-2">
                    <p className="text-white text-sm md:text-md">Formula</p>
                    <textarea 
                        style={{ minHeight: 70, maxHeight: 150 }} 
                        className="w-full border-2 text-black px-2 rounded focus:outline-none" 
                        type="text" 
                        onChange={(e) => setFormula(e.target.value)} 
                    />
                </div>
                <div className="md:w-3/4 w-full text-right my-2">
                    <button className="rounded-lg bg-white theme-text px-8 py-2 text-xl hover:-translate-y-0.5" onClick={uploadMxene}>Upload</button>
                </div>
            </div>
        </div>
    )
} 

export const getServerSideProps = withPageAuthRequired();