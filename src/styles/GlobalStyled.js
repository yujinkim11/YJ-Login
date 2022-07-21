import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{box-sizing:border-box}

    body{
        background-color:#D4D4D4;
        font-family: 'Noto Sans KR', sans-serif;
        a {
    text-decoration: none;
  }
    }

`;
