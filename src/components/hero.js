import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      dummyImg: file(relativePath: { eq: "720x600.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Img
            className="object-cover object-center rounded"
            alt="hero"
            fluid={data.dummyImg.childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-1/2 md:w-2/3 lg:pl-24 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-gray-900 leading-tight">
            Aprenda sobre Soft Skills, Liderança & Carreira
          </h1>
          <h2 className="mb-5 text-xl">
            Tudo sobre o que a faculdade não te ensina!
            <br />
            Inscreva-se em meu Grupo do WhatsApp 👇
          </h2>
          <div className="w-full md:justify-start justify-center">
            <div>
              <input
                className="bg-gray-100 rounded my-4 border border-gray-400 focus:outline-none focus:border-orange-500 text-base py-2 px-4 w-3/4"
                placeholder="Primeiro Nome"
                type="text"
              />
            </div>
            <div>
              <input
                className="bg-gray-100 rounded mb-4 border border-gray-400 focus:outline-none focus:border-orange-500 text-base py-2 px-4 w-3/4"
                placeholder="Seu E-mail"
                type="text"
              />
            </div>
            <button className="w-3/4 m-0 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
              Entrar para o Grupo 🠚
            </button>
          </div>
          <p className="text-xs mt-2 text-gray-500 mb-8 w-3/4">
            Prometo não utilizar suas informações de contato para enviar
            qualquer tipo de SPAM. 🔒
          </p>
        </div>
      </div>
    </section>
  )
}
