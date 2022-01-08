import Image from "next/image"

export default function Mxene() {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center">
            <div className="my-8">
                <h2 className="md:text-4xl text-2xl text-white text-center">MXene Database</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
            </div>
            <div className="container flex md:flex-row flex-col items-center justify-center">
                <div className="md:w-1/2 w-full md:p-8 px-4">
                    <Image src="https://ik.imagekit.io/iiscvsmanipal/mxene_NMetdDe-U0?updatedAt=1639042149885" height="100" width="200" layout="responsive"/>
                </div>  
                <div className="md:w-1/2 w-full md:p-8 p-4">
                    <p className="md:text-2xl text-xl text-white">
                        MXene has emerged as one of the promising class of 2D material with probably largest possible members (of the order of several tens of thousands). 
                        Over 23,000 MXene are uploaded to the database with their calculated properties to date, and we have planned to include more such scientific data.
                    </p>
                </div>
            </div>
        </div>
    )
} 