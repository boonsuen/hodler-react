import { createGlobalStyle, css } from 'styled-components';

import ManropeMediumWoff2 from '../assets/fonts/Manrope-Medium-subset.woff2';
import ManropeMediumWoff from '../assets/fonts/Manrope-Medium-subset.woff';

import ManropeExtraBoldWoff2 from '../assets/fonts/Manrope-ExtraBold-subset.woff2';
import ManropeExtraBoldWoff from '../assets/fonts/Manrope-ExtraBold-subset.woff';

// Why are the @font-face rules extracted to be used on its own? 
// GlobalStyle causes custom fonts to be re-requested when
// it get rerendered, or some other possible behaviors like
// rehyration, component state change.
// This will cause font loading problems like FOIT and FOUT.
export const fontFaceRules = `
  @font-face {
    font-family: "Manrope";
    src: url(${process.env.ASSET_PREFIX}${ManropeMediumWoff2}) format("woff2"),
        url(${process.env.ASSET_PREFIX}${ManropeMediumWoff}) format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Manrope";
    src: url(${process.env.ASSET_PREFIX}${ManropeExtraBoldWoff2}) format("woff2"),
        url(${process.env.ASSET_PREFIX}${ManropeExtraBoldWoff}) format("woff");
    font-weight: 800;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: var(--bg-body);
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
    font-weight: 500;    
  }
  
  a {
    text-decoration: none;
  }

  button {
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
    cursor: pointer;
  }
`;

const sizes = {
  l: 800,
  m: 700,
  s: 550,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {      
      ${css.call(undefined, ...args)}
    }
  `;

  return acc;
}, {});

export default GlobalStyle;