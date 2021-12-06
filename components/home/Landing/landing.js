import Head from 'next/head'
import styles  from "./landing.module.css"

export default function Landing() {
  return (
    <div className="text-gray-50">
      <Head>
        <title>Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={`flex w-screen ${styles.landing}`}>
          <div className="flex flex-col justify-center w-3/4">
            <h3 className="bg-gray-100 text-5xl theme-text py-2 px-5" style={{ width: "fit-content" }}>Welcome to</h3>
            <div className="flex flex-col my-2 px-12">
                <h1 className="px-5 m-0 text-9xl">aNANt</h1>
                <p className="text-center text-4xl">A Functional Material Database</p>
            </div>
            <div className="relative my-7 px-12 text-2xl">
                <p>
                    aNANt is an initiative of Materials Theory and Simulations Group, Materials Research Centre, Indian Institute of 
                    Science Bangalore to develop and host an open-access online repository of functional materials. 
                </p>
            </div>
          </div>
          <div className={`${styles.background_image} z-10 p-0`}></div>
        </div>
      </main>
    </div>
  )
}
