import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  align?: "center" | "left" | "right" | "justified";
  letterSpacing?: string;
}

export interface TitleProps extends TextProps {}
