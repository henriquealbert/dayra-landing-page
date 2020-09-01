import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

const SectionFaq = () => {
  const data = useStaticQuery(graphql`
    query {
      duvidas: file(relativePath: { eq: "sales-page/duvidas.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="bg-gray-900 py-16">
      <div className="text-center lg:flex justify-between lg:w-1/2 mx-auto items-center">
        <h2 className="text-4xl text-white font-bold">
          Perguntas e Dúvidas Mais Comuns
        </h2>
        <Img fixed={data.duvidas.childImageSharp.fixed} />
      </div>
      <div className="my-10">
        <h3 className="text-gray-100 text-xl mt-16 mb-10 text-center sm:w-1/2 mx-auto">
          Reuni abaixo as perguntas mais comuns a respeito do treinamento para
          que você não tenha mais nenhuma dúvida.
        </h3>
        <ol className="sm:w-2/4 w-10/12 mx-auto">
          <li className="text-gray-200 font-bold mb-8">
            1. Por quanto tempo tenho acesso ao treinamento?
            <p className="text-gray-500 font-normal ml-4">
              24 meses de acesso com todas as atualizções do curso
            </p>
          </li>
          <li className="text-gray-200 font-bold mb-8">
            2. O treinamento Engenheiro de Destaque é presencial?
            <p className="text-gray-500 font-normal ml-4">
              Não, o treinamento é 100% Online através da nossa área de membros
              hospedada pela nossa parceira Hotmart.
            </p>
          </li>
          <li className="text-gray-200 font-bold mb-8">
            3. Eu recebo todo o conteúdo de uma vez ou gradativamente?
            <p className="text-gray-500 font-normal ml-4">
              Você receberá o conteúdo gradativamente, de acordo com o
              cronograma passado na primeira aula do treinamento.
            </p>
          </li>
          <li className="text-gray-200 font-bold mb-8">
            4. Eu recebo alguma coisa pelo correio quando eu participo?
            <p className="text-gray-500 font-normal ml-4">
              Não, o Engenheiro de Destaque é inteiramente online.
            </p>
          </li>
          <li className="text-gray-200 font-bold mb-8">
            5. Como funciona a garantia?
            <p className="text-gray-500 font-normal ml-4">
              Oferecemos a você uma garantia incondicional. Se você comprar e
              não gostar do conteúdo poderá pedir reembolso sem problema algum.
              Porém, a garantia é de 7 dias.
            </p>
          </li>
          <li className="text-gray-200 font-bold">
            6. Será que vai funcionar para mim?
            <p className="text-gray-500 font-normal ml-4">
              Cada soft skills tem um jeito particular de se desenvolver. Todas
              que serão apresentadas eu desenvolvi em mim e nos meus clientes
              com ótimo resultados. É um método simples e prático, sem
              enrolação.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default SectionFaq
