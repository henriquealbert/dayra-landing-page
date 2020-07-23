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
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center py-4">
        <Link to="/">
          <span className="ml-3 text-2xl text-gray-500 font-bold">
            {site.siteMetadata.title}
          </span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:mt-0 mt-4">
          Liderança para Engenheiros
        </p>
      </div>
    </header>
  )
}

export default Header
