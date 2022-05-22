import Head from 'next/head'

// importing components
import About from "../components/home/About/About"

export default function AboutPage({ updates }) {
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
  const resupdates = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/updates`
  );
  const updates = await resupdates.json();
  return {
    props: {
      updates: updates
    },
    revalidate: 3600,
  };
}