import Head from 'next/head'
import Error from './_error'

// importing components
import About from "../components/home/About/About"

export default function AboutPage({ updates, error }) {
  if (error) {
    return <Error />
  }

  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Head>
        <title>About | Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      </header>

      <main>
        <About updates={updates} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const resupdates = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/updates`
    );
    const updates = await resupdates.json();
    return {
      props: {
        updates: updates,
        error: false
      },
      revalidate: 3600,
    };
  } catch (err) {
    // return <Error />
    return {
      props: {
        updates: [],
        error: false
      }
    }
  }
}