import { css, styled } from "styled-components";

import {
  Title,
  Text,
  TestimonialsList,
  StrenghtsList,
  PizzaAnimationImg,
} from "@/components";

import { usePizzaOnScrollAnimation } from "@/hooks";
import { AnimatedFooterElements } from "@/interfaces";

import { theme } from "@/styles";

const PizzaAnimation = () => {
  const { isFooterElementsTransitionActive, animatedImagesPositions } =
    usePizzaOnScrollAnimation();

  const animatedImages = () =>
    Object.values(animatedImagesPositions).map(({ ...props }) => (
      <PizzaAnimationImg key={props.alt} {...props} />
    ));

  return (
    <PizzaAnimationWrapper>
      <PizzaAnimationContainer>
        {animatedImages()}

        <DiscoverTheTaste isActive={isFooterElementsTransitionActive}>
          <Title
            as="h2"
            fontSize="48px"
            letterSpacing="2.88px"
            color={theme.colors.gray["800"]}
          >
            DESCUBRA O SABOR DA TRADIÇÃO
          </Title>
          <Text
            fontSize="16px"
            color={theme.colors.gray["900"]}
            fontWeight="300"
          >
            Com receitas transmitidas à gerações, ingredientes selecionados e
            forno a lenha, garantimos uma experiência gastronômica memorável.
          </Text>
        </DiscoverTheTaste>

        <StrenghtsList isAnimationActivate={isFooterElementsTransitionActive} />

        <TestimonialsList
          isAnimationActivate={isFooterElementsTransitionActive}
        />
      </PizzaAnimationContainer>
    </PizzaAnimationWrapper>
  );
};

const PizzaAnimationWrapper = styled.section`
  overflow: hidden;
`;

const PizzaAnimationContainer = styled.section`
  position: relative;
  width: 1290px;
  margin: 0 auto;
  height: 1400px;
`;

const DiscoverTheTaste = styled.section<AnimatedFooterElements>`
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
