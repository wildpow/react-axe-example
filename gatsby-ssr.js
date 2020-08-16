import React from "react"
import { ThemeProvider } from "styled-components"
import WindowSizeProvider from "./src/components/Landing/CustomHooks/WindowSizeProvider"
import theme from "./src/theme"

require("typeface-roboto-slab")
require("typeface-roboto")

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <WindowSizeProvider>{element}</WindowSizeProvider>
    </ThemeProvider>
  )
}
