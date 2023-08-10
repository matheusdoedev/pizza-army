import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  fontWeight?: string;
  fontSize?: string | string[];
  color?: string;
  align?: "center" | "left" | "right" | "justified";
  letterSpacing?: string | string[];
}

export interface TitleProps extends TextProps {}
