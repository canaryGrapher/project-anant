import Image from "next/image"

export default function _500() {
    return (
        <div className="text-center text-white p-5 mt-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Ah snap!</h1>
            <p className="lg:w-2/3 mx-auto">There seems to be an issue with the server. I am sure our engineers are working on fixing it. Please come back later</p>
            <Image src="/images/server-down.png" width={400} height={350} />
        </div>
    )
}