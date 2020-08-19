import React from 'react'

import SEO from '../../components/seo'
import ThanksMasterclass from '../../components/thanksMasterclass'
import Header from '../../components/header'
import Footer from '../../components/footer'

function ThankYouPageMasterclass() {
  return (
    <>
      <SEO
        keywords={[`engenharia`, `consultoria`, `engenheiro consultor`]}
        title="Obrigado por se Inscrever"
      />
      <Header />
      <ThanksMasterclass />
      <Footer />
    </>
  )
}

export default ThankYouPageMasterclass
