import React from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import SEO from '../../components/seo'

function MasterclassPage() {
  return (
    <>
      <SEO
        keywords={[`engenharia`, `consultoria`, `engenheiro consultor`]}
        title="Masterclass"
      />
      <Header />
      <h1>Masterclass</h1>
      <Footer />
    </>
  )
}

export default MasterclassPage
