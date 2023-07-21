import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html{
    font-size: 62.5%;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: var(--color-background-view);
        font-family: 'Manrope', sans-serif;
        color: var(--color-text);
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    *:root{
        --color-text: hsl(193, 38%, 86%);
        --color-prime: hsl(150, 100%, 66%);
        --color-second: hsl(217, 19%, 38%);
        --color-background-card: hsl(217, 19%, 24%);
        --color-background-view: hsl(218, 23%, 16%);
    }
`