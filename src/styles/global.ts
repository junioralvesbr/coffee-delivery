import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const Global = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  :root {
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
 
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }

  ol, ul {
	  list-style: none;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
 
  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`
