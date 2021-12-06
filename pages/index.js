import Head from 'next/head'

// importing components
import Landing from '../components/home/Landing/landing'

export default function Home() {
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Head>
        <title>Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  )
}
