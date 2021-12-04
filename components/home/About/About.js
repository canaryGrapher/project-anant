import React from 'react';
import Image from 'next/image'

//importing sample data
import { AboutUpdates } from '../../../data/aboutpage';

const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Sidebar = () => {
    return (
        <div className="flex flex-row px-20 pt-10">
            <div className="w-1/2">
                <div className="w-3/4 ml-auto">
                    <Image src="https://ik.imagekit.io/iiscvsmanipal/anantLogo_jDpZAhBDXG9.png?updatedAt=1638595324436" alt="Anant Logo" width={700} height={175} layout="responsive" />
                </div>
                <p className="w-3/4 ml-auto text-justify">
                    aNANt is an initiative of Materials Theory and Simulations Group, Materials Research Center, Indian Institute of Science Bangalore to develop and host an open-access online repository of functional materials. <br /><br />

                    aNANt database shares the structures and electronic properties of computationally designed two-dimensional layered materials in a single platform. Currently, it hosts over 23,000 materials data. <br /><br />

                    The database contains the optimized structure and electronic properties such as lattice constant and band gap, calculated at the Perdew-Burke-Ernzerhof (PBE) level using density functional theory (DFT).<br /><br />
                </p>
            </div>
            <div className="w-1/2">
                <div className="w-3/4 ml-16 p-10 overflow-y-scroll" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                    <h2 className="underline text-center text-3xl pb-10">Updates</h2>
                    {
                        AboutUpdates.map((item, index) => {
                            const updateDate = new Date();
                            return (
                                <div key={index} className="pb-5">
                                    <p className="text-xl underline">{`${updateDate.getDate()} ${monthArray[updateDate.getMonth()]}, ${updateDate.getFullYear()}`}</p>
                                    <p className="text-gray-300">{item.message}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;