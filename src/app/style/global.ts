'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgb(238,174,202);
  background: linear-gradient(176deg, rgba(255,0,241,1) 0%, rgba(251,247,248,1) 100%);;
}
`;

export default GlobalStyle;
