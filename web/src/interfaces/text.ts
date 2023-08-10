export interface TextProps {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  textAlign?: "center" | "left" | "right" | "justified";
  letterSpacing?: string;
}

export interface TitleProps extends TextProps {}
