import { TitleProps } from "@/interfaces";
import { css, styled } from "styled-components";

const Title = styled.h2<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ fontWeight }) => fontWeight ?? "700"};
  line-height: 1em;
  margin-top: 1px;
  color: ${({ color, theme }) => color ?? theme.colors.gray["900"]};
  text-align: ${({ align }) => align ?? "left"};

  ${({ fontSize, theme }) =>
    fontSize instanceof Array
      ? css`
          font-size: ${fontSize[0] ?? "32px"};

          @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${fontSize[1] ?? "24px"};
          }
        `
      : css`
          font-size: ${fontSize ?? "32px"};
        `}

  ${({ letterSpacing, theme }) =>
    letterSpacing instanceof Array
      ? css`
          letter-spacing: ${letterSpacing[0] ?? "none"};

          @media (min-width: ${theme.breakpoints.md}) {
            letter-spacing: ${letterSpacing[1]};
          }
        `
      : css`
          letter-spacing: ${letterSpacing ?? "none"};
        `}
`;

export default Title;
