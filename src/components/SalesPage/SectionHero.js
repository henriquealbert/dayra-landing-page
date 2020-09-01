import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import BackgroundImage from 'gatsby-background-image'
import Iframe from 'react-iframe'

const SectionHero = () => {
  const bg1 = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "sales-page/bg-1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <BackgroundImage
        Tag="section"
        className="bg-image"
        fluid={bg1.background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-yellow-500 font-black text-center">
              TREINAMENTO ENGENHEIRO DE DESTAQUE
            </h1>
            <div className="video">
              <Iframe
                url="https://fast.wistia.net/embed/iframe/32i981uevv?seo=false&videoFoam=true"
                width="100%"
                height="100%"
                display="initial"
                position="relative"
              />
            </div>
            <div className="text-center lg:w-2/3 w-full">
              <div className="flex justify-center">
                <ScrollLink
                  to="matricula"
                  smooth={true}
                  duration={1000}
                  className="inline-flex cursor-pointer text-white font-bold bg-orange-500 border-0 py-4 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg mt-8"
                >
                  QUERO ME INSCREVER AGORA!
                </ScrollLink>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </div>
  )
}

export default SectionHero
