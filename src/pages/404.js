import React from 'react'

import SEO from '../components/seo'
import abductionIllustration from '../images/abduction-illustration.svg'
import Header from '../components/header'
import Footer from '../components/footer'

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Página não encontrada" />
      <Header />
      <div className="flex flex-col">
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto lg:w-1/3"
          src={abductionIllustration}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3 mx-auto text-center">
          Parece que está página é um fantasma que foi abduzido por aliens...
        </h2>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
