import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Thanks() {
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
          Obrigado por se inscrever! :)
        </h1>
        <p className="text-center w-1/3 mx-auto text-gray-500">
          Lembrando que <u>não</u> é um grupo de interação. É um ambiente para
          eu te entregar meus conteúdos exclusivos. ⚠️
        </p>
        <div className="mx-auto text-center py-5">
          <Img
            className="object-cover object-center rounded-full shadow-md w-4/5"
            alt="Dayra Liz"
            fixed={data.dayraBw.childImageSharp.fixed}
          />
        </div>
        <h2 className="mb-5 text-xl text-gray-700 text-center">
          Clique no botão abaixo para entrar no Grupo 👇
        </h2>
        <div className="mx-auto text-center pt-6">
          <a
            href="https://chat.whatsapp.com/LUUbw7THmb2BGhufK8c1Cd"
            rel="noreferrer noopener external"
            target="_blank"
            className="w-1/6 m-0 text-white bg-green-500 border-0 py-4 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Entrar no Grupo 🠚
          </a>
        </div>
      </div>
    </section>
  )
}
