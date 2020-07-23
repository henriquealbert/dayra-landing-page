import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleHeader {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <div className="container mx-auto flex flex-wrap flex-row items-center py-4">
        <Link to="/">
          <span className="ml-3 text-1xl  sm:text-2xl  text-gray-500 font-bold inline-flex">
            {site.siteMetadata.title}
          </span>
        </Link>
        <p className="inline-flex text-sm text-gray-500 ml-4 pl-4 border-l-2 border-gray-200 ">
          Liderança para Engenheiros
        </p>
      </div>
    </header>
  )
}

export default Header
