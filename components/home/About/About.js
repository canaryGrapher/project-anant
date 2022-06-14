import React from 'react';
import Image from 'next/image'

const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const About = (props) => {
    return (
        <div className="flex lg:flex-row flex-col items-center min-h-screen lg:px-20 px-6 py-8 pt-16">
            <div className="lg:w-1/2 w-full pb-5 lg:pb-0">
                <div className="lg:w-3/4 ml-auto my-4">
                    <Image src="https://ik.imagekit.io/iiscvsmanipal/anantLogo_jDpZAhBDXG9.png?updatedAt=1638595324436" alt="Anant Logo" width={700} height={175} layout="responsive" />
                </div>
                <p className="lg:w-3/4 ml-auto text-left lg:text-justify">
                    aNANt is an initiative of Materials Theory and Simulations Group, Materials Research Center, Indian Institute of Science Bangalore to develop and host an open-access online repository of functional materials. <br /><br />
                    aNANt database shares the structures and electronic properties of computationally designed two-dimensional layered materials in a single platform. Currently, it hosts over 23,000 materials data. <br /><br />
                    The database contains the optimized structure and electronic properties such as lattice constant and band gap, calculated at the Perdew-Burke-Ernzerhof (PBE) level using density functional theory (DFT).<br /><br />
                </p>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="lg:w-3/4 lg:ml-16 py-5 px-5 lg:p-10 overflow-y-scroll rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                    <h2 className="underline text-center text-3xl pb-10">Updates</h2>
                    {
                        props.updates.length === 0 ? <p className='text-center'>No updates found</p> : props.updates.map((item, index) => {
                            const updateDate = new Date(item.date);
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

export default About;