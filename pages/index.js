import Head from 'next/head'

// importing components
import Publications from "../components/home/Publications"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-theme">
        <Publications />
      </main>

      <footer className="w-full h-24">

      </footer>
    </div>
  )
}
