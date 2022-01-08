import Head from 'next/head'

// importing components
import Apps from "../../components/home/Apps/Apps"

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
        <Apps />
      </main>
    </div>
  )
}
