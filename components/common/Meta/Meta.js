import Head from "next/head"

const Meta = ({ title, keywords, description, extraKeywords }) => {
  return (
    <Head>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords.concat(", ").concat(extraKeywords)}
      />
      <meta rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#163F65" />
      <meta name="theme-color" content="#163F65" />

      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Project Anant",
  keywords: "anant, materials theory and simulations group, iisc bangalore, research, database, functional materials, mxene",
  description: "aNANt is an initiative of Materials Theory and Simulations Group, Materials Research Center, Indian Institute of Science Bangalore to develop and host an open-access online repository of functional materials."
}

export default Meta