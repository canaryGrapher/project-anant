
import React from 'react';
import Image from "next/image"


const Sidebar = (props) => {

    const handleModalClick = () => {
        props.setShowModal(true)
        props.setIsAuthModal(true)
    }

    return (
        <div className="bg-white z-50 text-black h-screen flex flex-col justify-between pb-3 border-l-2 border-white">
            <div>
                <div className="w-full h-32 flex justify-between items-center theme">
                    <div className='p-3 px-4 mx-10 border-2 rounded-full border-white'>
                        <Image className="cursor-pointer" height={35} width={30} alt="Account" src="https://ik.imagekit.io/iiscvsmanipal/account_vmJJKFcge.png?updatedAt=1638595344875" />
                    </div>
                    <div className='flex flex-col mr-10 text-white'>
                        <h1 className='text-4xl ml-auto'>Guest</h1>
                        <p className='text-2xl'>1231231312</p>
                    </div>
                </div>
                <div className='w-full text-right my-5 px-4 flex flex-col items-end'>
                    <button className='text-3xl my-3 mr-4 focus:outline-none' onClick={handleModalClick}>Sign up</button>
                    <button className='text-3xl my-3 mr-4 focus:outline-none' onClick={handleModalClick}>Sign in</button>
                </div>
            </div>
            <div className="text-center theme-text text-xl font-bold">
                Made with # by Us
            </div>
        </div>
    )
}

export default Sidebar;