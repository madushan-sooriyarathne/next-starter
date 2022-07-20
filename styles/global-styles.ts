import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%; // 1rem = 10px
        font-family: ${(props) => props.theme.fonts.primary};
        box-sizing: border-box;

        text-rendering: optimizeLegibility;
        font-smooth: always;
        -webkit-tap-highlight-color: transparent;
        
    }

    body {
        min-height: 100vh;
        width: 100vw;
        overflow-y: auto;
        overflow-x: hidden;

    }
`;

export default GlobalStyles;
