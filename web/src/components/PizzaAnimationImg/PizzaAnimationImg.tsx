import { FC } from "react";
import { css, styled } from "styled-components";

import { PizzaAnimationImgProps } from "@/interfaces";

const PizzaAnimationImgComponent: FC<PizzaAnimationImgProps> = ({
  ...props
}) => {
  return <PizzaAnimationImg {...props} />;
};

const PizzaAnimationImg = styled.img<PizzaAnimationImgProps>`
  position: absolute;
  top: ${({ top }) => (top ? `${top}px` : 0)};
  z-index: ${({ zIndex }) => zIndex ?? 1};
  opacity: ${({ opacity }) => opacity ?? 1};
  left: ${({ left }) => (left ? `${left}px` : "none")};
  right: ${({ right }) => (right ? `${right}px` : "none")};
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};

  ${({ center, width }) =>
    center &&
    css`
      left: 50%;
      margin-left: ${-(width / 2) + "px"};
    `}

  ${({ rotate }) =>
    rotate &&
    css`
      transform: ${`rotate(${rotate}deg)`};
    `}
`;

export default PizzaAnimationImgComponent;
