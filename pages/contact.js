import Head from 'next/head'

// importing components
import Contact from '../components/home/Contact/Contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Head>
        <title>Contact | Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      </header>

      <main>
        <Contact />
      </main>
    </div>
  )
}