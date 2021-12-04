import React from 'react'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
