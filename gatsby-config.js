const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: `Dayra Liz`,
    description: `Criadora do Engenheiro de Destaque - Soft Skills, Liderança & Carreira`,
    author: `@engdayraliz`
  },
  plugins: [
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 'pixel id here'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal['400'],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : [])
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
}
