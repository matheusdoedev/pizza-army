import { useEffect, useState } from "react";
import { css, styled } from "styled-components";

import { Title, Text } from "@/components";
import PizzaImg from "@/assets/images/pizza-animation-2x.png";

import { theme } from "@/styles";

interface PizzaImgPositionProps {
  top: number;
  rotate: number;
}

const PIZZA_IMG_POSITION_DEFAULT_VALUE = { top: 0, rotate: 21 };

const PizzaAnimation = () => {
  const [pizzaImgPosition, setPizzaImgPosition] =
    useState<PizzaImgPositionProps>(PIZZA_IMG_POSITION_DEFAULT_VALUE);
  const [isFooterElementsActive, setIsFooterElementsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop <= 510) {
        setPizzaImgPosition(PIZZA_IMG_POSITION_DEFAULT_VALUE);
      } else if (scrollTop > 510 && scrollTop < 1100) {
        setPizzaImgPosition({
          top: scrollTop - 510,
          rotate: scrollTop * (45 / 1100),
        });
      } else {
        setPizzaImgPosition({
          top: 589,
          rotate: 45,
        });
      }
      setIsFooterElementsActive(scrollTop > 1160);
    });
  }, []);

  return (
    <PizzaAnimationWrapper>
      <Pizza src={PizzaImg} alt="Pizza" {...pizzaImgPosition} />

      <DiscoverTheTaste isActive={isFooterElementsActive}>
        <Title
          as="h2"
          fontSize="48px"
          letterSpacing="2.88px"
          color={theme.colors.gray["800"]}
        >
          DESCUBRA O SABOR DA TRADIÇÃO
        </Title>
        <Text fontSize="16px" color={theme.colors.gray["900"]} fontWeight="300">
          Com receitas transmitidas à gerações, ingredientes selecionados e
          forno a lenha, garantimos uma experiência gastronômica memorável.
        </Text>
      </DiscoverTheTaste>
    </PizzaAnimationWrapper>
  );
};

const PizzaAnimationWrapper = styled.section`
  position: relative;
  height: 1400px;
`;

const Pizza = styled.img<PizzaImgPositionProps>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: 50%;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  margin-left: -204.5px;

  width: 409px;
  height: 389px;
`;

const DiscoverTheTaste = styled.section<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 346px;

  position: absolute;
  top: 700px;
  left: 64px;

  transform: translateX(50px);
  opacity: 0;
  transition: 1s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
      opacity: 1;
      transition: 1s;
    `}
`;

export default PizzaAnimation;
