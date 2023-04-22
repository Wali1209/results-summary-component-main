import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'MyFont';
  src: url("../../../assets/fonts/HankenGrotesk-VariableFont_wght.ttf")  format('truetype');
}
html{
    font-size: 16px; //setting base font size 
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Global font styles */
body {
  font-family: "MyFont", sans-serif;
  line-height: 1.5;
  font-weight: normal;
}

/* Global color styles */
body {
  color: #333;
  background-color: #f8f8f8;
}
p{
    font-size: 1.125rem;
}
`;
