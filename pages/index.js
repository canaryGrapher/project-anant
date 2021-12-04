import Head from 'next/head'

// importing components
import About from "../components/home/About/About"
import Publications from "../components/home/Publications/Publications"

export default function Home() {
  return (
    <div className="min-h-screen py-2 bg-theme text-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <p>Navigation Bar goes here</p>
      </header>


      <main className="pt-20">
        {/* <Publications /> */}
        <About />
      </main>

      <footer className="w-full h-24 text-center">
        <p>Sample footer</p>
      </footer>
    </div>
  )
}
