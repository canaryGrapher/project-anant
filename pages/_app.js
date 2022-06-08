import React from 'react'
import Head from 'next/head';

import SuperTokensReact from 'supertokens-auth-react'
import { frontendConfig } from '../config/frontendConfig'


import NavBar from '../components/common/Navbar/Navbar'
import MobileNav from '../components/common/Navbar/MobileNav'
import Footer from '../components/common/Footer';

import "./../styles/global.css"
import 'tailwindcss/tailwind.css'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig())
}

import ErrorBoundary from '../error-components/app.error';

function MyApp({ Component, pageProps }) {
  // disables console.log in production
  if (process.env.NEXT_PUBLIC_PROD_ENV.toLowerCase() === "production") {
    console.log = () => { }
  }
  return (
    <div className="min-w-screen min-h-screen flex flex-col theme justify-center items-center">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <NavBar />
      <MobileNav />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default MyApp
