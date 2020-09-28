import React from 'react'
import Layout from '../components/layout';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import { graphql } from 'gatsby';

const examples = ({ data }) => {
  // console.log(props)
  const { site: {
    info: { author }
  }
  } = data

  return (
    <Layout>
      <>hello from examples page</>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
query MyQuery {
  site {
    info:siteMetadata {
      person {
        name
        age
      }
      title
      description
      author
    }
  }
}
`;

export default examples
