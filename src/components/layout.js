import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

const MainRoot = styled.main`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`
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
    <div style={{ backgroundColor: "#f7fafc" }}>
      <GlobalStyle />
      <MainRoot>{children}</MainRoot>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
