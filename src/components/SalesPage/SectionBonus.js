import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const SectionBonus = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "sales-page/bg-2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bonus: file(relativePath: { eq: "sales-page/bonus.PNG" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
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
        <div className="text-center sm:w-1/2 mx-auto">
          <h1 className="sm:text-3xl pt-16 text-2xl font-bold text-center title-font text-white">
            Além de todo o conteúdo do Treinamento, você vai receber estes BÔNUS
            incríveis:
          </h1>
        </div>
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 1
                  </h2>
                  <p className="text-gray-400 text-base">
                    Estratégias Assertivas de Destaque Para Quem Está A Procura
                    de Emprego/Estágio.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 2:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Arsenal das Melhores Iniciativas de Destaque No Ambiente de
                    Trabalho. (como ser acima da média).
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 3:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Gerenciamento de Conflitos.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 4:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Como Lidar Com o Seu Supervisor.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 5:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Como Se Destacar Em Reuniões.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 6:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Gerenciamento do Tempo e Produtividade.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 7:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Ferramentas de Ouro.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                  <Img fixed={data.bonus.childImageSharp.fixed} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-100 text-lg title-font font-medium mb-3">
                    Bônus 8:
                  </h2>
                  <p className="text-gray-400 text-base">
                    Grupo para fazer networking e tirar dúvidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default SectionBonus
