import Head from 'next/head'
import Error from './_error'
// importing components
import Contact from '../components/home/Contact/Contact'

export default function ContactPage({ faqs, error }) {
  if (error) {
    return <Error />
  }
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Head>
        <title>Contact | Project Anant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      </header>

      <main>
        <Contact faqs={faqs} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const resFAQs = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/faqs`
    );
    const FAQs = await resFAQs.json();
    return {
      props: {
        faqs: FAQs,
        error: false
      },
      revalidate: 3600,
    };
  } catch (err) {
    return {
      props: {
        error: true
      }
    }
  }
}