import React from 'react'
import { useState } from 'react';
import Image from 'next/image'

import { FamousCitations, OtherCitations } from "./../data/publication"

const Publications = () => {

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
    <div className="flex flex-col items-center w-screen py-32">
        <div className="my-8 text-white text-center">
          <h2 className="md:text-4xl text-xl">Our Publications</h2>
          <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
        </div>
        <div className="w-full md:w-3/4 h-4/5 p-10 mt-6 mx-auto">
            <div className="md:flex justify-between items-center">
                <div>
                  <h4 className="text-white font-bold text-3xl w-auto md:w-96">Our Famous Citations</h4>
                  <div className="w-80 my-2 h-1 bg-gray-100"></div>
                </div>
                <button className="rounded-sm bg-white text-black px-6 my-2 text-2xl">Filter</button>
            </div>
            {
              FamousCitations.map((cit, index) => {
                return (
                  <div className="my-1" key={index}>
                    <div className="w-full flex justify-between items-center bg-white rounded py-2 px-4 cursor-pointer" onClick={() => handleClick(index)}>
                      <p className="p-2 text-black text-lg font-medium">{cit.title}</p>
                      <Image src="https://ik.imagekit.io/iiscvsmanipal/chevron-up_d5sUlZR4fLI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642282534518" className={`${expanded && (expandedInd.indexOf(index) !== -1) ? "rotate-180" : "rotate-0"} duration-300 ease-out`} height={20} width={20}/>
                    </div>
                    <div className={`collapsible-${index} rounded-b text-white`} style ={{ maxHeight: "0px", overflow: "hidden", transition:"all 0.3s ease-in-out",backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                        <p className="m-5 text-xl">{cit.date}</p>
                        <div className="flex md:flex-row flex-col justify-between items-center pb-8">
                            <div>
                                <p className="text-base w-auto md:w-36 border-b-2 mx-5">Published by</p>
                                <p className="my-2 mx-5 text-base">{cit.pubbedby}</p>
                            </div>
                            <button className="rounded-full bg-white text-black px-8 py-2 mr-10 ml-auto">
                              Download
                            </button>
                        </div>                
                    </div>
                  </div>
                )
              })
            }
        
            <div className="md:flex justify-between mt-16 items-center">
                <div>
                  <h4 className="text-white font-bold text-3xl w-auto md:w-96">Other Citations</h4>
                  <div className="w-80 my-2 h-1 bg-gray-100"></div>
                </div>
                <button className="h-auto rounded-sm bg-white text-black px-6 my-2 text-2xl">Filter</button>
            </div>
            {
              OtherCitations.map((cit, index) => {
                return (
                  <div className="my-1" key={index + FamousCitations.length}>
                    <div className="w-full flex justify-between items-center bg-white rounded py-2 px-4 cursor-pointer" onClick={() => handleClick(index + FamousCitations.length)}>
                      <p className="p-2 text-black text-lg font-medium">{cit.title}</p>
                      <Image src="https://ik.imagekit.io/iiscvsmanipal/chevron-up_d5sUlZR4fLI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642282534518" className={`${expanded && (expandedInd.indexOf(index + FamousCitations.length) !== -1) ? "rotate-180" : "rotate-0"} duration-300 ease-out`} height={20} width={20}/>
                    </div>
                    <div className={`collapsible-${index + FamousCitations.length} rounded-b text-white`} style ={{ maxHeight: "0px", overflow: "hidden", transition:"all 0.3s ease-in-out",backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                        <p className="m-5 text-xl">{cit.date}</p>
                        <div className="flex md:flex-row flex-col justify-between items-center pb-8">
                            <div>
                                <p className="text-base w-auto md:w-36 border-b-2 mx-5">Published by</p>
                                <p className="my-2 mx-5 text-base">{cit.pubbedby}</p>
                            </div>
                            <button className="rounded-full bg-white text-black px-8 py-2 mr-10 ml-auto">
                              Download
                            </button>
                        </div>                
                    </div>
                  </div>
                )
              })
            }
        </div>
        
    </div>
  )
}

export default Publications