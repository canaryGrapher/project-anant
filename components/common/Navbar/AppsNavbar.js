import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"
import Image from "next/image"

import Sidebar from "../Sidebar/Sidebar";

const menuOptions = [
    {name: "About", href: "/apps/mxene"}, 
    {name: "Upload", href: "/apps/mxene/upload"}, 
    {name: "Mxene Search", href: "/apps/mxene/search"}
]

const AppsNavBar = () => {
    
    const [isActiveIndex, setIsActiveIndex] = useState(null)
    const [expanded, setExpanded] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false);
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.toggle('translate-x-full');
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    
    const handleClick = () => {
        setExpanded(true);
        setIsMenuOpen(true);
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('translate-x-full');
    }

    return (
        <navbar className="flex h-16 fixed top-0 w-screen items-center z-20 theme">
            <div className="md:w-1/4 w-full h-full md:p-2 py-5">
                <a href="\">
                    <Image width={200} height={40} alt="Anant Logo" src="https://ik.imagekit.io/iiscvsmanipal/anantLogo_jDpZAhBDXG9.png?updatedAt=1638595324436" />
                </a>
            </div>
            <div className="md:w-2/4 h-full w-screen flex justify-end">
                <div className="w-full items-center bg-gray-100 justify-center md:grid hidden grid-cols-3 h-full">
                    {
                        menuOptions.map((option, index) => (
                            <Link key={index} href={option.href} className="p-2 ">
                                <div className={`p-3 flex ${isActiveIndex === index ? "theme" : "bg-gray-100"} m-1 items-center justify-center cursor-pointer`} onClick={() => setIsActiveIndex(index)}>
                                        <a className={`${isActiveIndex === index ? "text-gray-100" : "text-gray-900"} text-xl`}>{option.name}</a>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="md:w-40 w-24 py-5 bg-theme flex justify-center items-center" onClick={handleClick}>
                    <Image className="cursor-pointer" height={35} width={30} alt="Account" src="https://ik.imagekit.io/iiscvsmanipal/account_vmJJKFcge.png?updatedAt=1638595344875" />
                </div>
                <div className="sidebar h-screen w-96 absolute right-0 translate-x-full transform transition duration-700 ease-in-out" ref={ref}>
                    <Sidebar/>
                </div>
            </div>
        </navbar>
    );
}

export default AppsNavBar;