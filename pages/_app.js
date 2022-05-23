import React from 'react'
import 'tailwindcss/tailwind.css'
import NavBar from '../components/common/Navbar/Navbar'
import "./../styles/global.css"
import { UserProvider } from '@auth0/nextjs-auth0';
import Head from 'next/head';


import AppErrorBoundary from '../error-components/app.error';

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
      <UserProvider>
        <NavBar />
        <AppErrorBoundary>
          <Component {...pageProps} />
        </AppErrorBoundary>
      </UserProvider>
    </div>
  )
}

export default MyApp
