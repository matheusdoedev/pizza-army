import { TitleProps } from "@/interfaces";
import { css, styled } from "styled-components";

const Title = styled.h2<TitleProps>`
  ${({ theme, color, fontWeight, fontSize, textAlign, letterSpacing }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${fontSize ?? "32px"};
    font-weight: ${fontWeight ?? "700"};
    line-height: 1em;
    margin-top: 1px;
    color: ${color ?? theme.colors.gray["900"]};
    text-align: ${textAlign ?? "left"};
    letter-spacing: ${letterSpacing ?? "none"};
  `}
`;

export default Title;
