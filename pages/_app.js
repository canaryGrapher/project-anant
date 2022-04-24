import React from 'react'
import 'tailwindcss/tailwind.css'
import NavBar from '../components/common/Navbar/Navbar'
import "./../styles/global.css"
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col theme justify-center items-center">
      <UserProvider>
        <NavBar />
        <Component {...pageProps} />
      </UserProvider>
    </div>
  )
}

export default MyApp
