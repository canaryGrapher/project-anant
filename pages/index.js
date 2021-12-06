import Head from 'next/head'

// importing components
import About from "../components/home/About/About"
import Landing from "../components/home/Landing/Landing"
import Publications from "../components/home/Publications/Publications"

export default function Home() {
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Head>
        <title>Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      </header>


      <main className="pt-20">
        {/* <Publications /> */}
        {/* <Landing /> */}
        <About />
      </main>
    </div>
  )
}
