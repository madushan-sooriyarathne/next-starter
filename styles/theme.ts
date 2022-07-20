import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      gray: string;
      grayLight: string;
      black: string;
      blackLight: string;
      white: string;
      whiteBackground: string;
      danger: string;
      success: string;
      warning: string;
    };
    breakpoints: {
      width1700: string;
      width1600: string;
      width1500: string;
      width1400: string;
      desktopSmall: string;
      width1300: string;
      width1200: string;
      width1100: string;
      width1000: string;
      width900: string;
      width800: string;
      width700: string;
      width600: string;
      width500: string;
      mobile: string;
      mobileSmall: string;
      heightMobile: string;
    };
    fonts: {
      primary: string;
    };
    gradients: {
      primary: string;
      primaryLight: string;
      secondary: string;
      white: string;
      dark: string;
      backgroundDark: string;
      heroShade: string;
      videoShade: string;
      buttonBackground: string;
    };
    shadows: {
      spread: string;
      close: string;
    };
    borders: {
      main: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#296497",
    primaryLight: "#D0E9F4",
    gray: "#787878",
    grayLight: "#D9D9D9",
    black: "#000000",
    blackLight: "#494949",
    white: "#FFFFFF",
    whiteBackground: "#F8F8F8",
    danger: "#e01c23",
    success: "#44c931",
    warning: "#f6bb10",
  },
  breakpoints: {
    width1700: "@media only screen and (max-width: 106.25em)",
    width1600: "@media only screen and (max-width: 100em)",
    width1500: "@media only screen and (max-width: 93.75em)",
    width1400: "@media only screen and (max-width: 87.5em)",
    desktopSmall: "@media only screen and (max-width: 85.375em)",
    width1300: "@media only screen and (max-width: 81.25em)",
    width1200: "@media only screen and (max-width: 1200px)",
    width1100: "@media only screen and (max-width: 68.75em)",
    width1000: "@media only screen and (max-width: 62.5em)",
    width900: "@media only screen and (max-width: 56.25em)",
    width800: "@media only screen and (max-width: 50em)",
    width700: "@media only screen and (max-width: 43.75em)",
    width600: "@media only screen and (max-width: 37.5em)",
    width500: "@media only screen and (max-width: 31.25em)",
    mobile: "@media only screen and (max-width: 25em)",
    mobileSmall: "@media only screen and (max-width: 18.75em)",
    heightMobile:
      "@media only screen and (max-width: 37.5em) and (min-height: 31.25em)",
  },
  fonts: {
    primary:
      "'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  gradients: {
    primary: "linear-gradient(270deg, #1488CC 0%, #2B32B2 100%)",
    primaryLight: "linear-gradient(90deg, #83A4D4 0%, #B6FBFF 100%)",
    secondary: "linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)",
    white: "linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%)",
    dark: "linear-gradient(90deg, #536976 0%, #292E49 100%)",
    backgroundDark:
      "radial-gradient(78.79% 329.6% at 21.21% 76.27%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
    heroShade:
      "radial-gradient(99.43% 349.54% at 0% 99.03%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)",
    videoShade:
      "radial-gradient(45.32% 45.32% at 18.25% 50%, rgba(0, 0, 0, 0.81) 0%, rgba(0, 0, 0, 0.17) 100%)",
    buttonBackground: `linear-gradient(
      90deg,
      rgba(43, 50, 178, 1) 0%,
      rgba(20, 136, 204, 1) 50%,
      rgba(41, 46, 73, 1) 50%,
      rgba(83, 105, 118, 1) 100%
    )`,
  },
  shadows: {
    spread: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    close: "rgba(0, 0, 0, 0.15) 0px 1px 4px",
  },
  borders: {
    main: `.5px solid #D9D9D9`,
  },
};

export default theme;
