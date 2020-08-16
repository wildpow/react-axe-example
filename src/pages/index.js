import React from "react"
import { graphql } from "gatsby";
import dataFunc from '../components/dataFunc'

const IndexPage = (data) => {
  const newData = dataFunc(data.data.allFile.nodes)
  return (
  <div>
   {console.log(newData)}
  </div>
  )
}


export const images = graphql`
  query images {
    allFile {
      nodes {
        name
        childImageSharp{
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default IndexPage
