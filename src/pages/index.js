import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      dayraLiz: file(relativePath: { eq: "dayra.jpeg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="bg-home">
      <SEO
        keywords={[`engenharia`, `consultoria`, `engenheiro consultor`]}
        title="Home"
      />
      <Header />
      <main>
        <section className="flex py-20">
          <div className="justify-center items-center mx-auto w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black leading-tight text-center">
              Engenheira Dayra Liz
            </h1>

            <div className="mx-auto text-center py-5">
              <Img
                className="object-cover object-center rounded-full shadow-md w-4/5"
                alt="Dayra Liz"
                fixed={data.dayraLiz.childImageSharp.fixed}
              />
            </div>
            <div className="mx-auto text-center">
              <Link
                to="/grupo"
                className="w-3/4 m-0 mr-4 text-white bg-orange-500 border-0 py-2 px-2 sm:px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
              >
                Grupo VIP
              </Link>
              <Link
                to="/masterclass-gratuita"
                className="w-3/4 m-0 text-white bg-orange-500 border-0 py-2 px-2 sm:px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
              >
                Masterclass
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
