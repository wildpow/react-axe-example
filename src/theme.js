import { keyframes } from "styled-components"

const theme = {
  MainFont1: "'Roboto', sans-serif",
  MainFont3: "'Roboto Slab', serif",
  Animation: `animation-duration: .5s; animation-fill-mode: both;`,
}

export const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export default theme
