import { FC, useEffect, useRef } from "react";
import { css, styled } from "styled-components";

import { useOnResizeWindow } from "@/hooks";

import { PizzaAnimationImgProps } from "@/interfaces";

const PizzaAnimationImgComponent: FC<PizzaAnimationImgProps> = ({
  top,
  left,
  width,
  height,
  center,
  ...props
}) => {
  const pizzaAnimationImgRef = useRef<HTMLImageElement>(null);
  const { innerWidth } = useOnResizeWindow();

  /* This solution was used instead of styled-components because of the classname generation of styled-components are bugging media query in Pizza Img animation. So, it was did using useRef, and a hook was did to track window resizes (useOnResize Hook) */
  useEffect(() => {
    if (!pizzaAnimationImgRef.current) return;

    const isMobile = innerWidth < 1200;
    const index = isMobile ? 0 : 1;

    pizzaAnimationImgRef.current.style.top = top ? `${top[index]}px` : "0";
    pizzaAnimationImgRef.current.style.width = `${width[index]}px`;
    pizzaAnimationImgRef.current.style.height = `${height[index]}px`;

    if (center) {
      pizzaAnimationImgRef.current.style.left = "50%";
      pizzaAnimationImgRef.current.style.marginLeft = `${-(
        width[index] / 2
      )}px`;
    } else {
      pizzaAnimationImgRef.current.style.left = left ? `${left[index]}px` : "0";
    }
  }, [center, height, innerWidth, left, top, width]);

  return <PizzaAnimationImg ref={pizzaAnimationImgRef} {...props} />;
};

const PizzaAnimationImg = styled.img<
  Omit<PizzaAnimationImgProps, "top" | "left" | "width" | "height" | "center">
>`
  position: absolute;
  z-index: ${({ zindex }) => zindex ?? 1};
  opacity: ${({ opacity }) => opacity ?? 1};

  ${({ rotate }) =>
    rotate &&
    css`
      transform: ${`rotate(${rotate}deg)`};
    `}
`;

export default PizzaAnimationImgComponent;
