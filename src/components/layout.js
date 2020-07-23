import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Header from './header'
import Footer from './footer'

function Layout({ children }) {
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
    <BackgroundImage
      Tag="section"
      className="bg-image"
      fluid={data.background.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Header />

      <main>{children}</main>

      <Footer />
    </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
