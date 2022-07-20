declare global {
  // All global types go here

  interface Image {
    src: string;
    alt?: string;
    blurUrl: string;
  }

  type Color = "light" | "dark" | "normal";

  type Alignment = "left" | "center" | "right";

  type InputChangeEvent = InputEvent<HTMLTextAreaElement | HTMLInputElement>;
}

export {};
