import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ThanksMasterclass() {
  const data = useStaticQuery(graphql`
    query {
      dayraBw: file(relativePath: { eq: "dayra-bw.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className="flex py-20">
      <div className="justify-center items-center mx-auto w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black leading-tight text-center">
          Obrigado por se cadastrar! :)
        </h1>
        <p className="text-center w-1/3 mx-auto text-gray-500">
          Será enviado o link para assistir a aula no seu e-mail cadastrado.
        </p>
        <div className="mx-auto text-center py-5">
          <Img
            className="object-cover object-center rounded-full shadow-md w-4/5"
            alt="Dayra Liz"
            fixed={data.dayraBw.childImageSharp.fixed}
          />
        </div>
        <h2 className="mb-5 text-xl text-gray-700 text-center">
          Não esqueça:{' '}
          <strong>Dia 01 de Setembro, terça-feira, às 20 horas.</strong>
        </h2>
      </div>
    </section>
  )
}
