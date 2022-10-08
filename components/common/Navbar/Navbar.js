import React, { useState, useEffect, useRef } from "react";

import { useRouter } from 'next/router'
import Link from "next/link"

import Sidebar from "../Sidebar/Sidebar";


const genMenuOptions = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: "Publications", href: "/publications" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
]

const appMenuOptions = [
    { name: "Home", href: "/" },
    { name: "About", href: "/apps/mxene" },
    // { name: "Upload", href: "/apps/mxene/upload" },
    { name: "MXene Search", href: "/apps/mxene/search" }
]

const NavBar = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(null)
    const [expanded, setExpanded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const ref = useRef()

    const handleClick = () => {
        setExpanded(true);
        setIsMenuOpen(true);
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('translate-x-full');
    }

    const router = useRouter();
    // assign the menu optiosn for navbar
    let regex = /\/[a-zA-Z]+\//;
    const menuOptions
        = regex.test(router.pathname)
            ? appMenuOptions : genMenuOptions;

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

    return (
        <navbar className="flex h-16 fixed top-0 w-screen items-center z-20 theme">
            <div className="lg:w-1/4 w-full h-full lg:p-2 py-5">
                <a href="\">

                </a>
            </div>
            <div className="md:w-3/4 h-full w-screen flex justify-end">
                <div className={`w-full items-center bg-[#163F65] justify-center lg:grid hidden h-full ${regex.test(router.pathname) ? "grid-cols-3" : "grid-cols-5"}`}>
                    {
                        menuOptions.map((option, index) => (
                            <Link key={index} href={option.href} className="px-2">
                                <div className={`p-3 flex ${isActiveIndex === index ? "theme" : "bg-gray-100"} items-center justify-center cursor-pointer`} onClick={() => setIsActiveIndex(index)}>
                                    <a className={`${isActiveIndex === index ? "text-gray-100" : "text-gray-900"} text-xl`}>{option.name}</a>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="md:w-40 w-24 py-5 bg-theme hidden lg:flex justify-center items-center">
                    <i className="fa fa-bars text-3xl text-white cursor-pointer" onClick={handleClick}></i>
                </div>
                <div className="sidebar h-screen w-96 absolute right-0 translate-x-full transform transition duration-700 ease-in-out" ref={ref}>
                    <Sidebar />
                </div>
            </div>
        </navbar>
    );
}

export default NavBar;