import { css, styled } from "styled-components";

import { TextProps } from "@/interfaces";

const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ fontWeight }) => fontWeight ?? "400"};
  line-height: 1.4em;
  margin-top: 1px;
  max-width: 30em;
  color: ${({ color, theme }) => color ?? theme.colors.gray["900"]};
  text-align: ${({ align }) => align ?? "left"};

  ${({ fontSize, theme }) =>
    fontSize instanceof Array
      ? css`
          font-size: ${fontSize[0] ?? "10px"};

          @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${fontSize[1] ?? "14px"};
          }
        `
      : css`
          font-size: ${fontSize ?? "14px"};
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

export default Text;
