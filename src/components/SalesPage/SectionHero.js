import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import BackgroundImage from 'gatsby-background-image'

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
              ENGENHEIRO DE DESTAQUE
            </h1>
            {/* <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
            <div className="text-center lg:w-2/3 w-full">
              <p className="mb-8 w-3/4 mx-auto leading-relaxed text-gray-300">
                Aprenda a ter Vantagem Competitiva no Mercado e Ambiente de
                Trabalho. Mais Confiança, Segurança e Poder. Se tornar uma
                Referência e ser Valorizado e tenha seu Crescimento Profissional
                Acelerado.
              </p>
              <div className="flex justify-center">
                <ScrollLink
                  to="matricula"
                  smooth={true}
                  duration={1000}
                  className="inline-flex cursor-pointer text-white font-bold bg-orange-500 border-0 py-4 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
                >
                  INSCREVA-SE AGORA!
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
