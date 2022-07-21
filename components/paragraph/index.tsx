import { Container } from "./styles";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  children: string;
  titleParagraph?: boolean;
  color?: Color;
  alignment?: Alignment;
  small?: boolean;
}

const Paragraph: React.FC<Props> = ({
  children,
  titleParagraph = false,
  color = "dark",
  alignment = "left",
  small = false,
}: Props): JSX.Element => {
  return (
    <Container
      $titlePara={titleParagraph}
      $color={color}
      $alignment={alignment}
      $small={small}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {props.children}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </Container>
  );
};

export default Paragraph;
