import Head from 'next/head'

// importing components
import Publications from "../components/home/Publications/Publications"

export default function Publication() {
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Head>
        <title>Publications | Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      </header>

      <main>
        <Publications />
      </main>
    </div>
  )
}
