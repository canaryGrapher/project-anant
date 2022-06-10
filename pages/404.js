import Image from "next/image"

export default function _400() {
    return (
        <div className="text-center text-white p-5 mt-10 min-h-screen flex flex-col justify-center items-center">
            <Image src="/images/page-not-found.png" width={200} height={200} />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">Uh oh!</h1>
            <p className="lg:w-2/3 mx-auto">This is not a valid page. Are you sure you got that address right?</p>
        </div>
    )
}