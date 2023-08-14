import { SxProps, Theme } from "@mui/material";
import { ChangeEvent } from "react";

export interface ComponentWithAnimation {
  isAnimationActivate: boolean;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface InputProps {
  type?: string;
  label: string;
  name: string;
  value: string | number;
  containerStyle?: SxProps<Theme>;
  error?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectProps extends Omit<InputProps, "type" | "onChange"> {
  onChange: (value: string) => void;
  options: SelectOption[];
  value: string;
}
