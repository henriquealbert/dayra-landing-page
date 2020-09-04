import Img from 'gatsby-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Countdown from '../countdown'

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
              <h3 className="mb-8 text-2xl text-gray-200 text-center sm:w-1/2 lg:w-1/3 font-medium">
                O Treinamento Completo Engenheiro de Destaque + 8 Bônus
                Incríveis irá sair apenas:
              </h3>
              <div className="text-center">
                <p className="sm:text-6xl text-5xl font-bold text-center text-yellow-500">
                  <span className="text-2xl text-gray-400 font-medium">
                    12x de{' '}
                  </span>
                  R$ 38,68
                </p>
                <p className="text-center text-2xl font-gray-200 font-medium">
                  ou R$ 397,00 à vista.
                </p>
                <div className="bg-gray-200 w-2/3 mx-auto mt-2 rounded-lg">
                  <Img fluid={data.pagamento.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className="text-center mt-10 text-gray-400  sm:w-3/5 mx-auto">
              <p className="text-2xl font-bold">ATENÇÃO! ⚠️</p>
              <p className="text-xl font-medium">
                Este valor de R$397,00 estará disponível apenas por 96 horas!
              </p>
              <p className="text-xl font-medium">ATÉ dia 05/09 às 20 horas.</p>
            </div>
            <Countdown />

            <div className="flex justify-center mt-6">
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
