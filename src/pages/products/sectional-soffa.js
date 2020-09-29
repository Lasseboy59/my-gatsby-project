import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h1>{data.product.title}</h1>
      <h1>${data.product.price}</h1>
    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "sectional-soffa"}) {
      price
      title
    }
  }
`

export default ComponentName
