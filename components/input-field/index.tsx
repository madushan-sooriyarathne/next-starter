import { AnimatePresence } from "framer-motion";
import {
  Input,
  TextArea,
  Label,
  InputGroup,
  ErrorMessage,
  errorMessageVariant,
} from "./styles";

interface Props {
  value: string;
  name: string;
  label: string;
  handleChange: (event: InputChangeEvent) => void;
  placeholder?: string;
  type?: "email" | "tel" | "text" | "password" | "number";
  error?: string;
  required?: boolean;
  textArea?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<Props> = ({
  value,
  name,
  label,
  handleChange,
  placeholder,
  error,
  type = "text",
  required = false,
  textArea = false,
  disabled = false,
}: Props): JSX.Element => {
  return (
    <InputGroup>
      <Label htmlFor={name}>{label}</Label>
      {textArea ? (
        <TextArea
          placeholder={placeholder || label}
          name={name}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <Input
          placeholder={placeholder || label}
          name={name}
          value={value}
          onChange={handleChange}
          type={type}
          required={required}
          disabled={disabled}
        />
      )}
      <AnimatePresence>
        {error && error.length > 0 && (
          <ErrorMessage
            variants={errorMessageVariant}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {error}
          </ErrorMessage>
        )}
      </AnimatePresence>
    </InputGroup>
  );
};

export default InputField;
