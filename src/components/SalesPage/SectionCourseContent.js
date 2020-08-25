import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const SectionCourseContent = () => {
  const data = useStaticQuery(graphql`
    query {
      diamond: file(relativePath: { eq: "sales-page/diamond.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bg: file(relativePath: { eq: "sales-page/bg-2.jpg" }) {
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
      fluid={data.bg.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <section className="text-gray-700 body-font">
        <div className="text-center">
          <h1 className="sm:text-3xl pt-16 text-2xl font-bold text-center title-font text-white">
            O que você vai aprender neste Treinamento?
          </h1>
        </div>
        <div className="container px-5 py-10 mx-auto  flex flex-wrap">
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 1 - O Seu Potencial Máximo:
                </h2>
                <p className="text-gray-400">
                  A Vantagem Competitiva Começa Aqui.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 2 - Planejamento de Carreira:
                </h2>
                <p className="text-gray-400">
                  O Mapa do Sucesso na Palma da Sua Mão.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 3 - Posicionamento Profissional:
                </h2>
                <p className="text-gray-400">
                  Você Anos Luz À Frente da Maioria.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 4 - Desenvolvimento das Softs Skills:
                </h2>
                <p className="text-gray-400">
                  Seja Destaque no Processo Seletivo e no Ambiente de Trabalho.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              5
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 5 - Desenvolvimento da Liderança:
                </h2>
                <p className="text-gray-400">
                  Desperte o Líder Que Tem em Você.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              6
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 6 - Desenvolvendo a Sua Visão Estratégica:
                </h2>
                <p className="text-gray-400">
                  Como Detectar as Melhores Oportunidades de Destaque.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">
              7
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
                <Img fixed={data.diamond.childImageSharp.fixed} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-100 mb-1 text-xl">
                  Módulo 7 - Networking Estratégico:
                </h2>
                <p className="text-gray-400">
                  Aumente o Poder do Seu Q.I (Quem Indica) e Como Ser Mais
                  Persuasivo e Influente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default SectionCourseContent
