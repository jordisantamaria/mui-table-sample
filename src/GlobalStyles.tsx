import { css, Global } from '@emotion/react'
import React from 'react'
import 'normalize.css'
import { body16px, header16px, header32px } from './theme/Typography'
import { Colors } from './theme/Colors'

const globalStyles = css`
  html {
    box-sizing: border-box;
    background: ${Colors.background};
    color: ${Colors.foreground};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* for accessibility, line-heights in text should be minimum 1.5 */
  body {
    line-height: 1.5;
  }

  /* Install fonts*/
  @font-face {
    font-family: 'Dank Mono';
    src:
      /* Full name */ local('Dank Mono'),
      /* Postscript name */ local('Dank-Mono'),
      /* Otherwise, download it! */ url('//...a.server/fonts/DankMono.woff');
  }

  /* font styles */
  body {
    ${header16px};
  }

  h1 {
    ${header32px};
  }

  p {
    ${body16px};
  }

  a {
    color: ${Colors.link};
    text-decoration: underline;
  }

  /* to avoid break design on iphone when focus input, min fz 16px */
  input[type='text'],
  input[type='number'],
  select,
  textarea {
    font-size: 16px;
  }

  /* list dots style */
  ul > li {
    position: relative;
    left: 18px;
    margin-right: 18px;
    list-style-type: disc;
    list-style-position: outside;
  }
`

const GlobalStyles = () => {
  return <Global styles={globalStyles} />
}

export default GlobalStyles

