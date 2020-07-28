import React from 'react'

import SEO from '../../components/seo'
import Thanks from '../../components/thanks'
import Header from '../../components/header'
import Footer from '../../components/footer'

function ThankYouPage() {
  return (
    <>
      <SEO
        keywords={[`engenharia`, `consultoria`, `engenheiro consultor`]}
        title="Obrigado por se Cadastrar"
      />
      <Header />
      <Thanks />
      <Footer />
    </>
  )
}

export default ThankYouPage
