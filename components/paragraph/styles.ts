import styled from "styled-components";

interface ContainerProps {
  $titlePara: boolean;
  $color: Color;
  $alignment: Alignment;
  $small: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: auto;
  & * {
    font-size: ${(props) => (props.$small ? "1.2rem" : "1.5rem")};
  }
  & > *:not(:first-child) {
    margin-top: 2rem;
  }
  & p {
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
    font-weight: ${(props) => (props.$titlePara ? "400" : "300")};
    font-size: ${(props) =>
      props.$titlePara
        ? "clamp(1.4rem, 0.83vw, 1.6rem)"
        : props.$small
        ? "clamp(1rem,0.625vw ,1.2rem)"
        : "clamp(1.3rem, 0.78vw ,1.5rem)"};
    line-height: ${(props) => (props.$titlePara ? "175%" : "160%")};
    letter-spacing: 0.04em;
    text-align: ${(props) => props.$alignment};
    color: ${(props) =>
      props.$color === "light"
        ? props.theme.colors.white
        : props.theme.colors.blackLight};
  }
  & h1 {
    font-weight: bold;
    line-height: 140%;
    font-size: clamp(3.6rem, 2.5vw, 4.8rem);
    color: ${(props) =>
      props.color === "light"
        ? props.theme.colors.white
        : props.theme.colors.black};
    background: ${(props) =>
      props.color === "light"
        ? props.theme.gradients.white
        : props.theme.gradients.dark};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    &:not(:first-child) {
      margin-top: 5rem !important;
    }
  }
  & h2 {
    font-weight: 600;
    font-size: clamp(2.5rem, 1.875vw, 3.2rem);
    line-height: 140%;
    text-align: ${(props) => props.$alignment};
    color: ${(props) =>
      props.color === "light"
        ? props.theme.colors.white
        : props.theme.colors.black};
    background: ${(props) =>
      props.color === "light"
        ? props.theme.gradients.white
        : props.theme.gradients.dark};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    &:not(:first-child) {
      margin-top: 4rem !important;
    }
  }
  & h3 {
    font-weight: 600;
    font-size: clamp(1.8rem, 1.25vw, 2.4rem);
    line-height: 140%;
    text-align: ${(props) => props.$alignment};
    color: ${(props) =>
      props.color === "light"
        ? props.theme.colors.white
        : props.theme.colors.black};
    background: ${(props) =>
      props.color === "light"
        ? props.theme.gradients.white
        : props.theme.gradients.dark};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    &:not(:first-child) {
      margin-top: 3rem !important;
    }
  }
  & h4 {
    font-weight: 600;
    font-size: clamp(1.6rem, 1.04vw, 2rem);
    line-height: 140%;
    text-align: ${(props) => props.$alignment};
    color: ${(props) =>
      props.color === "light"
        ? props.theme.colors.white
        : props.theme.colors.black};
    background: ${(props) =>
      props.color === "light"
        ? props.theme.gradients.white
        : props.theme.gradients.dark};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    &:not(:first-child) {
      margin-top: 3rem !important;
    }
  }
  & ol,
  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding-left: 3rem;
    color: ${(props) => props.theme.colors.blackLight};
    & > li {
      line-height: 140%;
    }
  }
  & b,
  & strong {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 500 !important;
  }
  & i,
  & em {
    font-style: italic;
  }
  & a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    text-transform: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    &:hover {
      color: ${(props) => props.theme.colors.blackLight};
    }
  }
  & img {
    width: 100%;
    height: auto;
    margin: 2rem 0;
  }
`;

export { Container };
