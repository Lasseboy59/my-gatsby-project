/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random data',
    author: '@lasse',
    data: ['item 1', 'item 2'],
    person: { name: 'Peter', age: 35 }
  },
  plugins: [`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}