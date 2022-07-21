import styled, { keyframes } from "styled-components";

const SpinnerContainer = styled.div`
  width: min(20rem, 100%);
  margin-inline: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

interface SpinnerProps {
  $small: boolean;
}

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => (props.$small ? "2.5rem" : "5rem")};
  height: ${(props) => (props.$small ? "2.5rem" : "5rem")};
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primaryLight};
  border-top-color: ${(props) => props.theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;

const SpinnerText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.04rem;
  line-height: 160%;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export { SpinnerContainer, Spinner, SpinnerText };
