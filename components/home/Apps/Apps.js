import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"

export default function Apps() {
  return (
    <div className="text-gray-50">
      <Head>
        <title>Our Apps | Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-screen py-20 lg:pt-32">
        <div className="my-8 text-center">
          <h2 className="md:text-4xl text-3xl font-bold">Our Applications</h2>
          <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 w-5/6 mx-auto gap-x-5 gap-y-3">
          <Link href="/apps/mxene">
            <div className="block bg-gray-100 p-3 lg:p-5 rounded-lg cursor-pointer">
              <Image src="https://ik.imagekit.io/iiscvsmanipal/mxene_NMetdDe-U0?updatedAt=1639042149885" height="100" width="200" layout="responsive" />
              <h5 className="theme-text text-center md:text-2xl text-xl pt-2">MXene Database</h5>
              <div className="w-3/4 mx-auto theme" style={{ height: 2 }}></div>
              <p className="text-gray-900 md:text-lg text-md text-center pt-2">Contains details of over 23,000 MXenes, with downloadable POSCARs</p>
            </div>
          </Link>
          <div className="opacity-50 block bg-gray-100 md:p-5 p-3 rounded-lg cursor-not-allowed">
            <Image src="https://ik.imagekit.io/iiscvsmanipal/thermoelectric_dUZbOhz9u?updatedAt=1639042149795" height="100" width="200" layout="responsive" />
            <h5 className="theme-text text-center md:text-2xl text-xl pt-2">Thermoelectric Material Database</h5>
            <div className="w-3/4 mx-auto theme" style={{ height: 2 }}></div>
            <p className="text-gray-900 md:text-lg text-md text-center pt-2">Contains details of over 23,000 MXenes, with downloadable POSCARs</p>
          </div>
          <div className="opacity-50 block bg-gray-100 md:p-5 p-3 rounded-lg cursor-not-allowed">
            <Image src="https://ik.imagekit.io/iiscvsmanipal/post_processing_yiBmqAE3L?updatedAt=1639042149826" height="100" width="200" layout="responsive" />
            <h5 className="theme-text text-center md:text-2xl text-xl pt-2">Post Processing Utilities</h5>
            <div className="w-3/4 mx-auto theme" style={{ height: 2 }}></div>
            <p className="text-gray-900 md:text-lg text-md text-center pt-2">Contains details of over 23,000 MXenes, with downloadable POSCARs</p>
          </div>
        </div>
      </main>
    </div>
  )
}
