import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
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
    `}
    // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}></StaticQuery> 
    render={data => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
