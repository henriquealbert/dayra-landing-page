import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Header from '../../components/header'
import Footer from '../../components/footer'
import SEO from '../../components/seo'
import HeroMasterlass from '../../components/heroMasterclass'
import MasterclassContent from '../../components/masterclassContent'

function MasterClassPage() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO
        keywords={[`engenharia`, `consultoria`, `engenheiro consultor`]}
        title="Inscreva-se na Masterclass"
      />
      <BackgroundImage
        Tag="section"
        className="bg-image"
        fluid={data.background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Header />
        <HeroMasterlass />
      </BackgroundImage>
      <MasterclassContent />
      <Footer />
    </>
  )
}

export default MasterClassPage
