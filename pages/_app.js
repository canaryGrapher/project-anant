import React from 'react'
import 'tailwindcss/tailwind.css'
import NavBar from '../components/common/Navbar/Navbar'
import "./../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col theme justify-center items-center">
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
