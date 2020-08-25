import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

const SectionDepoimentos = () => {
  const data = useStaticQuery(graphql`
    query {
      depoimento1: file(relativePath: { eq: "sales-page/depoimento1.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento2: file(relativePath: { eq: "sales-page/depoimento2.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento3: file(relativePath: { eq: "sales-page/depoimento3.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento4: file(relativePath: { eq: "sales-page/depoimento4.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento5: file(relativePath: { eq: "sales-page/depoimento5.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento6: file(relativePath: { eq: "sales-page/depoimento6.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento7: file(relativePath: { eq: "sales-page/depoimento7.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      depoimento8: file(relativePath: { eq: "sales-page/depoimento8.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              O que os meus clientes falam sobre mim
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento1.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento2.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento3.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento4.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento6.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento5.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento7.childImageSharp.fluid}
              />
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
              <Img
                alt="gallery"
                className="rounded-lg shadow-md block"
                fluid={data.depoimento8.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionDepoimentos
