import Head from 'next/head'
import styles from "./landing.module.css"
import Image from "next/image"

const Landing = () => {
  return (
    <div className="text-gray-50">
      <Head>
        <title>Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={`flex lg:flex-row flex-col w-screen ${styles.landing} pb-10 lg:pb-0`}>
          <div className="flex flex-col justify-center lg:w-3/4 w-full lg:pt-0 pt-32">
            <h3 className={`bg-gray-100 text-5xl theme-text py-2 px-5 ${styles.welcome}`}>Welcome to</h3>
            <div className="flex flex-col my-2 px-5 lg:px-12">
              <h1 className="px-5 m-0 lg:text-left text-center md:text-9xl text-6xl">
                <Image height={130} width={600} alt="Anant Logo" src="https://ik.imagekit.io/iiscvsmanipal/anantLogo_jDpZAhBDXG9.png?updatedAt=1638595324436" />
              </h1>
              <p className="lg:text-left text-center md:text-4xl text-xl">A Functional Material Database</p>
            </div>
            <div className="relative w-full my-7 px-5 lg:px-12 text-2xl lg:text-left text-center">
              <p>
                aNANt is an initiative of Materials Theory and Simulations Group, Materials Research Centre, Indian Institute of
                Science Bangalore to develop and host an open-access online repository of functional materials.
              </p>
            </div>
          </div>
          <div className={`${styles.background_image} z-10 p-0 lg:block hidden`}></div>
        </div>
      </main>
    </div>
  )
}

export default Landing