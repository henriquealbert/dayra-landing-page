import Img from 'gatsby-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const SectionGarantia = () => {
  const data = useStaticQuery(graphql`
    query {
      garantia: file(relativePath: { eq: "sales-page/garantia.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="mb-20">
      <div className="sm:w-1/5 w-1/2 mt-12 mx-auto text-center">
        <Img fluid={data.garantia.childImageSharp.fluid} />
      </div>
      <p className="sm:w-2/3 text-center mx-auto mt-4">
        Além do investimento ser irrisório, eu ainda estou te oferecendo uma
        condição única:{' '}
        <strong>O risco do seu investimento é todo meu. </strong>
        Se você entrar para o meu treinamento e não gostar, você pode pedir o
        seu dinheiro de volta que devolvo sem nenhum questionamento.
      </p>
    </div>
  )
}

export default SectionGarantia
