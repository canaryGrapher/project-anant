import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Mxene() {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center">
            <Head>
                <title>Mxene Database | Project Anant</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="pt-20 lg:pt-8">
                <h2 className="md:text-4xl text-3xl font-bold text-white">MXene Database</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
            </div>
            <div className="container flex lg:flex-row flex-col items-center justify-center mb-12">
                <div className="lg:w-1/2 w-full px-8 md:px-8">
                    <Image src="https://ik.imagekit.io/iiscvsmanipal/mxene_NMetdDe-U0?updatedAt=1639042149885" height="100" width="200" layout="responsive" />
                </div>
                <div className="lg:w-1/2 w-full px-8 pt-5 md:pt-0  text-center flex flex-col-reverse lg:flex-col">
                    <p className="md:text-xl text-lg text-white lg:text-justify">
                        MXene has emerged as one of the promising class of 2D material with probably largest possible members (of the order of several tens of thousands).
                        Over 23,000 MXene are uploaded to the database with their calculated properties to date, and we have planned to include more such scientific data.
                    </p>
                    <Link href="/apps/mxene/search">
                        <button
                            className="w-full lg:w-auto bg-gray-900 text-white rounded-md text-lg px-4 py-3 my-3 hover:translate-y-1 outline-none"
                        >
                            <span><i className="fa fa-search mr-2"></i></span>
                            Go to search
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 