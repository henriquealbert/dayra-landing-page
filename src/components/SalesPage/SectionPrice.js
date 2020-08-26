import Img from 'gatsby-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const SectionPrice = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "sales-page/bg-1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pagamento: file(relativePath: { eq: "sales-page/pagamento.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="matricula">
      <BackgroundImage
        Tag="section"
        className="bg-image"
        fluid={data.background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <section className="text-gray-400 body-font ">
          <div className="container mx-auto  px-5 py-24  items-center">
            <h2
              style={{ textTransform: 'uppercase' }}
              className="title-font sm:text-5xl text-4xl text-center mb-4 font-bold text-white"
            >
              Este é o seu momento
            </h2>
            <div className="sm:flex mt-8 sm:mt-16 justify-evenly mx-auto items-center">
              <h3 className=" text-2xl text-center sm:w-1/2 lg:w-1/3">
                O Treinamento Completo Engenheiro de Destaque + 7 Bônus
                Incríveis irá sair apenas:
              </h3>
              <div>
                <p className="text-6xl font-bold text-center text-yellow-500">
                  R$ 397,00
                </p>
                <p className="text-center">
                  à vista ou em até 12x no cartão de crédito
                </p>
                <div className="bg-gray-200 w-2/3 mx-auto mt-2 rounded-lg">
                  <Img fluid={data.pagamento.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 sm:mt-20">
              <a
                href="https://pay.hotmart.com/X39068254A"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-white bg-orange-500 border-0 py-4 px-8 focus:outline-none hover:bg-orange-600 rounded text-center text-xl font-bold"
              >
                QUERO ME INSCREVER AGORA!
              </a>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </div>
  )
}

export default SectionPrice
