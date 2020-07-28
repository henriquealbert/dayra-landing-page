import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Form from './form'

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      dayra: file(relativePath: { eq: "dayra.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
          <Img
            className="object-cover object-center rounded-full shadow-md w-4/5"
            alt="Dayra Liz"
            fluid={data.dayra.childImageSharp.fluid}
          />
        </div>
        <div
          id="cadastro"
          className="lg:w-1/2 md:w-2/3 lg:pl-24 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-black text-white leading-tight">
            Aprenda sobre Soft Skills, Liderança & Carreira
          </h1>
          <h2 className="mb-5 text-lg sm:text-xl text-gray-500">
            Tudo sobre o que a faculdade não te ensina!
            <br />
            Inscreva-se em meu Grupo VIP 👇
          </h2>
          <p className="text-white">
            Não é um grupo de interação. É um ambiente para eu te entregar meus
            conteúdos exclusivos. ⚠️
          </p>
          <Form />
          <p className="text-xs mt-2 text-gray-500 mb-8 w-3/4">
            Prometo não utilizar suas informações de contato para enviar
            qualquer tipo de SPAM. 🔒
          </p>
        </div>
      </div>
    </section>
  )
}
