import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Header from '../../components/header'
import Footer from '../../components/footer'
import SEO from '../../components/seo'
import Hero from '../../components/hero'
import Content from '../../components/content'

function InscricaoPage() {
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
        title="Inscreva-se no Grupo VIP"
      />
      <BackgroundImage
        Tag="section"
        className="bg-image"
        fluid={data.background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Header />
        <Hero />
      </BackgroundImage>
      <Content />
      <Footer />
    </>
  )
}

export default InscricaoPage
