import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../images/image_5.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image_3.jpeg"}) {
    childImageSharp {
      fixed(width: 300, height: 250) {
        src
      }
    }
  }
  fluid: file(relativePath: {eq: "image_5.jpeg"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
}
`

const Images = () => {
  return (
    <div>
      <section className="image">
        <article className="single-image">
          <h3>basic image</h3>
          <img src={img} width="100%" />
        </article>
        <article className="single-image">
          <h3>fixed image/blur</h3>
        </article>
        <article className="single-image">
          <h3>fixed image/svg</h3>
        </article>
      </section>
    </div>
  )
}

export default Images
