import React from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import NavBar from '../components/common/Navbar/Navbar'
import AppsNavBar from '../components/common/Navbar/AppsNavbar'
import "./../styles/global.css"

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <div className="min-w-screen min-h-screen flex flex-col theme justify-center items-center">
      {
        router.pathname === "/apps/mxene" || router.pathname === "/apps/mxene/search" || router.pathname === "/apps/mxene/result" || router.pathname === "/apps/mxene/filter" || router.pathname === "/apps/mxene/upload"
        ? <AppsNavBar />
        : <NavBar />   
      }
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
