import { motion, Variants } from "framer-motion";
import styled, { css } from "styled-components";

const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "in"
    "er";
  gap: 0.5rem;
  align-items: start;
  justify-items: start;
  position: relative;
`;

const InputFieldStyles = css`
  grid-area: in;
  height: 100%;
  width: 100%;
  min-width: 20rem;
  border-radius: 5px;
  padding: 3rem 1rem 1rem 1rem;
  border: ${(props) => `0.5px solid ${props.theme.colors.grayLight} `};
  outline: none;
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 140%;
  letter-spacing: 0.06em;
  color: ${(props) => props.theme.colors.gray};
  &::placeholder {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.04em;
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.grayLight};
  }
  position: relative;
  z-index: 0;
`;

const Input = styled.input`
  ${InputFieldStyles}
`;

const TextArea = styled.textarea`
  ${InputFieldStyles}
  min-height: 15rem;
  resize: vertical;
`;

const Label = styled.label`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  z-index: 1;
  font-family: ${(props) => props.theme.fonts.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  line-height: 100%;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blackLight};
`;

const ErrorMessage = styled(motion.p)`
  height: 1rem;
  grid-area: er;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.04px;
  color: ${(props) => props.theme.colors.danger};
`;

const errorMessageVariant: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export {
  InputGroup,
  Input,
  Label,
  TextArea,
  ErrorMessage,
  errorMessageVariant,
};
