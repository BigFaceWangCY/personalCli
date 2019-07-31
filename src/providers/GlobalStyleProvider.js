import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html, body, #__next {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
