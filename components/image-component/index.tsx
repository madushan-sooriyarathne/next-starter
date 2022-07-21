import Image from "next/image";
import { ImageContainer } from "./styles";

interface Props {
  image: Image;
  objectFit?: "cover" | "contain";
  pos?: {
    x: string;
    y: string;
  };
  sizes?: {
    width: string;
    height: string;
  };
  priority?: boolean;
}

const ImageComponent: React.FC<Props> = ({
  image,
  pos = { x: "center", y: "center" },
  sizes = { width: "100%", height: "100%" },
  objectFit = "cover",
  priority = false,
}: Props): JSX.Element => {
  return (
    <ImageContainer $width={sizes.width} $height={sizes.height}>
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={`${pos.x} ${pos.y}`}
        placeholder="blur"
        blurDataURL={
          image.blurUrl.length < 1
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AOfp6JSVlPD//8jW1AD3+PaioZuulYNiaV8AclZKRSYWSiIHGQAAAHBybysnJIqXmr+9tA8pGVrndwlFAAAAAElFTkSuQmCC"
            : image.blurUrl
        }
        priority={priority}
      />
    </ImageContainer>
  );
};

export default ImageComponent;
