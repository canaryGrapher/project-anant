import React from 'react'
import Head from 'next/head';
import Error from './_error';

import Accordion from '../components/common/Accordion';

const Publications = ({ favorites, others, error }) => {
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
        {favorites.length === 0 ?
          <p className='mt-2 w-full text-center py-12 text-xl text-white border-2 border-white font-bold'>No publications found</p>
          :
          favorites.map((cit, index) => {
            return (
              <Accordion key={index} title={cit.title} content={
                <div className="flex md:flex-row flex-col justify-between items-center pb-8">
                  <div className='mx-5 my-2'>
                    <h2 className='mt-5 text-2xl font-bold underline'>{cit.journal}</h2>
                    <p className="text-normal mb-4">Published on <span className='font-bold'>{cit.month + " " + cit.year}</span></p>
                    <p className='text-normal'><span className="font-bold">Authors:</span> {cit.author}</p>
                    <p><span className="font-bold">Volume:</span> {cit.volume}</p>
                    <p><span className="font-bold">Pages:</span> {cit.pages}</p>
                  </div>
                  <a href={cit.url} target="_blank" rel="noreferrer noopener">
                    <button className="rounded-full bg-[#FAFAFA] text-black px-8 py-2 mx-auto">
                      Read
                    </button>
                  </a>
                </div>
              } />
            )
          })
        }

        <div className="md:flex justify-between mt-16 items-center">
          <div>
            <h4 className="text-white font-medium text-2xl w-auto md:w-96">Other Citations</h4>
            <div className="w-80 my-2 h-1 bg-[#ebebeb]"></div>
          </div>
        </div>
        {
          others.length === 0 ? <p className='mt-2 w-full text-center py-12 text-xl text-white border-2 border-white font-bold'>No publications found</p> : others.map((cit, index) => {
            return (
              <Accordion key={index} title={cit.title} content={
                <div className={`collapsible-${index + favorites.length} rounded-b text-white`}>
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
              } />
            )
          })
        }
      </div>

    </div >
  )
}

export default Publications

export const getStaticProps = async () => {
  try {
    const resPublications = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/publications`
    );
    const publications = await resPublications.json();
    const favoritePublications = publications.filter(pub => pub.favorite);
    const otherPublications = publications.filter(pub => !pub.favorite);
    return {
      props: {
        favorites: favoritePublications,
        others: otherPublications,
        error: false
      },
      revalidate: 3600,
    };
  } catch (err) {
    // return <Error />
    return {
      props: {
        favorites: [],
        others: [],
        error: false
      }
    }
  }
};
