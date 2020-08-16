import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <h1>hello</h1>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
