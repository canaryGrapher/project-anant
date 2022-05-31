import React, { useState } from 'react';
import { useRouter } from 'next/router';

const genMenuOptions = [
    { name: "Apps", href: "/apps" },
    { name: "Publications", href: "/publications" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
]

const appMenuOptions = [
    { name: "Home", href: "/" },
    { name: "About", href: "/apps/mxene" },
    { name: "Upload", href: "/apps/mxene/upload" },
    { name: "Mxene Search", href: "/apps/mxene/search" }
]

const MobileNav = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();
    // assign the menu optiosn for navbar
    let regex = /\/[a-zA-Z]+\//;
    const menuOptions
        = regex.test(router.pathname)
            ? appMenuOptions : genMenuOptions;
    return (
        <React.Fragment>
            {navBarOpen ?
                <div className='fixed z-50 bottom-0 lg:hidden flex flex-col justify-end w-full h-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: '1' }}>
                    <div className="relative inset-0 transition-opacity"
                    >
                        <div className='w-11/12 md:w-3/4 min-h-3/4 mx-auto bg-white rounded-t-lg p-5'>
                            {menuOptions.map((option, index) => {
                                return (
                                    <a href={option.href} className="">
                                        <div className="flex items-center w-full py-2 my-5 text-black font-medium hover:text-white hover:bg-gray-400 pl-5" key={index}>
                                            <p>{option.name}</p>
                                        </div>
                                    </a>
                                )
                            })}
                            <div className='flex flex-col items-center justify-center bg-[#163F65] py-2 hover:bg-black cursor-pointer text-white' onClick={() => setNavbarOpen(false)}>
                                &#x2715;
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="mobile-nav fixed w-20 bg-white h-10 bottom-0 right-12 z-50 rounded-t-2xl text-center lg:hidden flex flex-col justify-start cursor-pointer" onClick={() => setNavbarOpen(!navBarOpen)}>
                    <p className="text-3xl font-black">&#x21a5;</p>
                </div>}
        </React.Fragment>
    )
}

export default MobileNav