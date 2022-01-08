import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image"

const menuOptions = [
    {name: "About", href: "/apps/mxene"}, 
    {name: "Upload", href: "/apps/mxene/upload"}, 
    {name: "Mxene Search", href: "/apps/mxene/search"}
]

const NavBar = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(0)

    return (
        <navbar className="flex h-16 fixed top-0 w-screen items-center z-20 theme">
            <div className="md:w-1/4 w-full h-full md:p-2 py-5">
                <Image width={200} height={40} alt="Anant Logo" src="https://ik.imagekit.io/iiscvsmanipal/anantLogo_jDpZAhBDXG9.png?updatedAt=1638595324436" />
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
                <div className="md:w-40 w-24 py-5 bg-theme flex justify-center items-center">
                    <Image className="cursor-pointer" height={35} width={30} alt="Account" src="https://ik.imagekit.io/iiscvsmanipal/account_vmJJKFcge.png?updatedAt=1638595344875" />
                </div>
            </div>
        </navbar>
    );
}

export default NavBar;