import { SpinnerContainer, Spinner, SpinnerText } from "./styles";

interface Props {
  message?: string;
  small?: boolean;
}

const LoadingSpinner: React.FC<Props> = ({
  message,
  small = false,
}: Props): JSX.Element => {
  return (
    <SpinnerContainer>
      <Spinner $small={small} />
      {message && <SpinnerText>{message}</SpinnerText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
