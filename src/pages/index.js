import React from "react"
import { graphql } from "gatsby"
import dataFunc from "../components/dataFunc"
import Layout from "../components/layout"
import Landing from "../components/Landing"

const IndexPage = data => {
  const newData = dataFunc(data.data.allFile.nodes)
  return (
    <Layout>
      <Landing data={newData} buttonName="Sealy" buttonURL="/brands/sealy" />
    </Layout>
  )
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
