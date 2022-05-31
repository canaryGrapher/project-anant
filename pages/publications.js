import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';

const Publications = ({ favorites, others }) => {

  const [expandedInd, setExpInd] = useState([])
  const [expanded, setExpanded] = useState(false);

  // function to handle click of the expandable FAQ
  const handleClick = (index) => {

    // add the index of the question to array of expanded questions
    if (expandedInd.indexOf(index) === -1) {
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
      <Head>
        <title>Publications | Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:mt-8 text-white text-center">
        <h2 className="md:text-4xl text-3xl font-bold">Our Publications</h2>
        <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
      </div>
      <div className="w-full lg:w-3/4 h-4/5 p-3 md:p-5 lg:p-10 mt-1 md:mt-6 mx-auto">
        <div className="md:flex justify-between items-center">
          <div>
            <h4 className="text-white font-medium text-2xl w-auto md:w-96">Our Famous Citations</h4>
            <div className="w-80 my-2 h-1 bg-gray-100"></div>
          </div>
        </div>
        {favorites.length > 0 ?
          favorites.map((cit, index) => {
            return (
              <div className="my-1" key={index + favorites.length}>
                <div className="w-full flex justify-between items-center bg-[#ebebeb] rounded py-2 px-4 cursor-pointer" onClick={() => handleClick(index + favorites.length)}>
                  <p className="p-2 text-black text-lg font-medium">{cit.title}</p>
                  <Image src="https://ik.imagekit.io/iiscvsmanipal/chevron-up_d5sUlZR4fLI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642282534518" className={`${expanded && (expandedInd.indexOf(index + favorites.length) !== -1) ? "rotate-180" : "rotate-0"} duration-300 ease-out`} height={20} width={20} />
                </div>
                <div className={`collapsible-${index + favorites.length} rounded-b text-white`} style={{ maxHeight: "0px", overflow: "hidden", transition: "all 0.3s ease-in-out", backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                  <div className="flex md:flex-row flex-col justify-between items-center pb-8">
                    <div>
                      <div className='mx-5 my-2'>
                        <h2 className='mt-5 text-2xl font-bold underline'>{cit.journal}</h2>
                        <p className="text-normal mb-4">Published on <span className='font-bold'>{cit.month + " " + cit.year}</span></p>
                        <p className='text-normal'><span className="font-bold">Authors:</span> {cit.author}</p>
                        <p><span className="font-bold">Volume:</span> {cit.volume}</p>
                        <p><span className="font-bold">Pages:</span> {cit.pages}</p>
                      </div>
                    </div>
                    <a href={cit.url} target="_blank" rel="noreferrer noopener">
                      <button className="rounded-full bg-[#FAFAFA] text-black px-8 py-2 mr-10 ml-auto">
                        Read
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          }) : null
        }

        <div className="md:flex justify-between mt-16 items-center">
          <div>
            <h4 className="text-white font-medium text-2xl w-auto md:w-96">Other Citations</h4>
            <div className="w-80 my-2 h-1 bg-[#ebebeb]"></div>
          </div>
        </div>
        {
          others.map((cit, index) => {
            return (
              <div className="my-1" key={index + favorites.length}>
                <div className="w-full flex justify-between items-center bg-[#FAFAFA] rounded py-2 px-4 cursor-pointer" onClick={() => handleClick(index + favorites.length)}>
                  <p className="px-2 text-black text-lg font-medium">{cit.title}</p>
                  <Image src="https://ik.imagekit.io/iiscvsmanipal/chevron-up_d5sUlZR4fLI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642282534518" className={`${expanded && (expandedInd.indexOf(index + favorites.length) !== -1) ? "rotate-180" : "rotate-0"} duration-300 ease-out`} height={20} width={20} />
                </div>
                <div className={`collapsible-${index + favorites.length} rounded-b text-white`} style={{ maxHeight: "0px", overflow: "hidden", transition: "all 0.3s ease-in-out", backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                  <div className="flex md:flex-row flex-col justify-between items-center pb-8">
                    <div>
                      <div className='mx-1 md:mx-5 my-2'>
                        <h2 className='mt-5 text-2xl font-bold underline'>{cit.journal}</h2>
                        <p className="text-normal mb-4">Published on <span className='font-bold'>{cit.month + " " + cit.year}</span></p>
                        <p className='text-normal'><span className="font-bold">Authors:</span> {cit.author}</p>
                        <p><span className="font-bold">Volume:</span> {cit.volume}</p>
                        <p><span className="font-bold">Pages:</span> {cit.pages}</p>
                      </div>
                    </div>
                    <a href={cit.url} target="_blank" rel="noreferrer noopener">
                      <button className="rounded-full bg-[#FAFAFA] text-black px-8 py-2 mr-10 ml-auto">
                        Read
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div >
  )
}

export default Publications

export const getStaticProps = async () => {
  const resPublications = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/publications`
  );
  const publications = await resPublications.json();
  const favoritePublications = publications.filter(pub => pub.favorite);
  const otherPublications = publications.filter(pub => !pub.favorite);
  return {
    props: {
      favorites: favoritePublications,
      others: otherPublications
    },
    revalidate: 3600,
  };
};
