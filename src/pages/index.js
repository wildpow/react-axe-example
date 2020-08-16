import React from "react"
import { graphql } from "gatsby"
import dataFunc from "../components/dataFunc"
import Layout from "../components/layout"

const IndexPage = data => {
  const newData = dataFunc(data.data.allFile.nodes)
  return <Layout>landing{console.log(newData)}</Layout>
}

export const images = graphql`
  query images {
    allFile {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default IndexPage
