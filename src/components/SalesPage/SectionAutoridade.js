import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const SectionAutoridade = () => {
  const data = useStaticQuery(graphql`
    query {
      dayrafoto: file(relativePath: { eq: "dayra-foto2.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="text-gray-100 body-font bg-gray-900">
      <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Quem sou eu e como eu cheguei neste método?
          </h1>
          <p className="mb-8 leading-relaxed">
            Sou engenheira mecânica e junto com outro colega criamos um projeto
            para desenvolver um exoesqueleto. Era um grande desafio, mas eu
            sabia que seria uma experiência inesquecível. E naquele ano, percebi
            que para fazer o projeto acontecer não bastava apenas as habilidades
            técnicas, mas também várias habilidades comportamentais, as soft
            skills.
          </p>
          <p className="mb-8 leading-relaxed">
            No início me senti perdida e eu tive que: engajar pessoas
            estratégicas que nos ajudariam com a parte técnica, eu precisaria
            saber vender minhas ideias, a me comunicar de forma assertiva, a
            palestrar, fomos convidados a mostrar o projeto para o curso de
            engenharia mecatrônica, a utilizar a criatividade por ser um projeto
            de baixo custo, a se adaptar a várias adversidades, tomar decisões
            de qualidade, resolver problemas, a planejar, a fazer a gestão do
            tempo, liderar, ter iniciativas…ufa foi um ano muito intenso.
          </p>
          <p className="mb-8 leading-relaxed">
            Na época eu não sabia que as soft skills existiam, eu achava que as
            coisas eram muito talento que desenvolver habilidades (sabe de nada
            inocente). Mas eu comecei a pesquisar sobre o assunto e sofri no
            início por não saber COMO desenvolver... mas eu não desisti, eu
            continuei estudando, buscando informações, fiz cursos nas férias e
            assim fui construindo uma metodologia. Sem perceber eu ia me
            apaixonando por este assunto e colegas começaram a pedir a minha
            ajuda para desenvolverem as suas soft skills para se destacarem em
            seus trabalhos.
          </p>
          <p className="mb-8 leading-relaxed">
            Sempre brinco que eles foram os meus primeiros cobaias. No início eu
            tinha 2 caminhos a seguir: abrir uma startup e fazer um mestrado
            para continuar desenvolvendo o exo ou ser consultora de soft skills.
            Bom, com muito cuidado fiz o meu planejamento de carreira e não deu
            outra, a consultoria falou mais alto, eu estava virando especialista
            em desenvolver habilidades comportamentais em mim e nos meus
            clientes. Assim, segui o meu caminho e há 2 anos ajudo engenheiros a
            terem vantagem competitiva no mercado e ambiente de trabalho através
            das soft skills, através de inúmeras mentorias, treinamentos e
            palestras já realizadas.
          </p>
          <p className="mb-8 leading-relaxed">
            E atuando nesta área, ficou muito claro uma coisa para mim e para
            todos os meus clientes: se alguém está demora para ser contratado ou
            para crescer profissionalmente, num mundo onde a maioria tem
            habilidades técnicas semelhantes e currículos parecidos, é porque
            não está utilizando as soft skills e as atitudes corretas ao seu
            favor. Já que muitas empresas consideram as softs skills como o
            diferencial competitivo seja para contratar ou para promover.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/4 w-5/6">
          <Img
            className="object-cover object-center rounded"
            alt="hero"
            fluid={data.dayrafoto.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionAutoridade
