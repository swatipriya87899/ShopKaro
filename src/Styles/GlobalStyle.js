import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size:62.5%
  },
  :root{
    --dark-black:#212A3E;
    --light-black:#394867;
    --gray:#9BA4B5;
    --light:#F1F6F9;
    },
  a{
    text-decoration: none;
  },
  li{
    list-style:none
  }
  button{
    cursor:pointer
  }
`