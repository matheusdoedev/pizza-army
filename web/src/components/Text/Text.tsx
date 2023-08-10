import { css, styled } from "styled-components";

import { TextProps } from "@/interfaces";

const Text = styled.p<TextProps>`
  ${({ theme, color, fontWeight, fontSize, textAlign, letterSpacing }) => css`
    font-family: ${theme.fonts.secondary};
    font-size: ${fontSize ?? "14px"};
    font-weight: ${fontWeight ?? "400"};
    line-height: 1.4em;
    color: ${color ?? theme.colors.gray["900"]};
    text-align: ${textAlign ?? "left"};
    letter-spacing: ${letterSpacing ?? "none"};
  `}
`;

export default Text;
