import React, {useState} from 'react';
import Image from 'next/image'

import { ContactFAQ } from "./../../../data/contact"

export default function Contact () {

    const [expandedInd, setExpInd] = useState([])
    const [expanded, setExpanded] = useState(false);

    // function to handle click of the expandable FAQ
    const handleClick = (index) => {
        
        // add the index of the question to array of expanded questions
        if(expandedInd.indexOf(index) === -1) {
            setExpInd(expandedInd => [...expandedInd, index])
        }

        // set expanded as true
        setExpanded(!expanded);
        
        const collapsible = document.querySelector(`.collapsible-${index}`);
        if (expanded) {
            // if the question is expanded, remove the item from the expanded array and close the question
            const index = expandedInd.indexOf(index)
            expandedInd.splice(index, 1);
            setExpInd(expandedInd)
            collapsible.style.maxHeight = "0";
        }
        else {
            // if the question is close, then open the question 
            collapsible.style.maxHeight = `${collapsible.scrollHeight}px`;
        }
    }
    
    return (
        <div className="w-screen flex flex-col items-center justify-center mt-14 md:mt-20 mb-20 md:px-0 px-2">
            <div className="my-4">
                <h2 className="md:text-4xl text-xl text-white text-center">Contact Us</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
            </div>
            <div className="container md:w-2/3 py-4 md:px-0 px-6 flex flex-col items-center justify-center rounded-lg" style ={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                <div className="flex flex-col md:flex-row justify-between md:w-3/4 w-full m-1">
                    <div className="flex flex-col md:w-1/2 md:mr-1">
                        <p className="text-white text-sm md:text-md">First Name</p>
                        <input className="w-full h-10 p-2 text-black rounded border-2 border-gray-300 focus:outline-none" type="text" id="fname" name="fname"/>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:ml-1">
                        <p className="text-white text-sm md:text-md">Last Name</p>
                        <input className="w-full h-10 p-2 text-black rounded border-2 border-gray-300 focus:outline-none" type="text" id="lname" name="lname"/>
                    </div>
                </div>
                <div className="md:w-3/4 w-full flex flex-col ">
                    <div className="my-1">
                        <p className="text-white text-sm md:text-md">Email</p>
                        <input className="w-full h-10 p-2 text-black rounded border-2 border-gray-300 focus:outline-none" type="email" id="email" name="email"/>
                    </div>
                    <div className="my-1">
                        <p className="text-white text-sm md:text-md">Message</p>
                        <textarea style={{ minHeight: 130, maxHeight: 200 }} className="w-full p-2 text-black rounded border-2 border-gray-300 focus:outline-none" name="message"/>
                    </div>
                </div>
                <div className="md:w-3/4 w-full text-right my-2">
                    <button className="rounded-lg bg-white theme-text px-8 py-2 text-xl hover:-translate-y-0.5">Send</button>
                </div>
            </div>
            <div className="md:w-2/3 w-full md:px-0 px-1">
                <div className="mb-4 mt-8">
                    <h2 className="text-3xl font-bold text-white">Few answers we have</h2>
                    <div className="w-80 rounded my-1 h-1 bg-gray-100"></div>
                </div>
                {
                    ContactFAQ.map((ques, index) => {
                        return (
                            <div key={index} onClick={() => handleClick(index)}>
                                <div className="flex justify-between py-2 px-4 rounded bg-white mt-1 cursor-pointer">
                                    <p className="text-black text-lg font-medium">{ques.question}</p>
                                    <Image src="https://ik.imagekit.io/iiscvsmanipal/chevron-up_d5sUlZR4fLI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642282534518" className={`${expanded && (expandedInd.indexOf(index) !== -1) ? "rotate-180" : "rotate-0"} duration-300 ease-out`} height={20} width={20}/>
                                </div>
                                <div className={`collapsible-${index} rounded-b`} style ={{ maxHeight: "0px", overflow: "hidden", transition:"all 0.3s ease-in-out",backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                                    <p className="m-2 text-l">{ques.answer}</p>
                                </div>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    )
}