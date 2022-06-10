import Error from './_error'
// importing components
import Contact from '../components/home/Contact/Contact'
import Meta from '../components/common/Meta/Meta'

export default function ContactPage({ faqs, error }) {
  if (error) {
    return <Error />
  }
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Meta title="Contact | Project Anant" extraKeywords={"contact, email, faqs, questions, doubts"}/>
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
        faqs: [],
        error: false
      }
    }
  }
}