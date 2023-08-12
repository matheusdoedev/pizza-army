import { FC } from "react";
import { css, styled } from "styled-components";

import RedVerified from "@/assets/icons/red-verified.svg";
import { Rating, Text } from "@/components";
import { TESTIMONIALS_LIST } from "@/constants";
import { AnimatedElements, ComponentWithAnimation } from "@/interfaces";

import { theme } from "@/styles";

const TestimonialsList: FC<ComponentWithAnimation> = ({
  isAnimationActivate,
}) => {
  const testimonialsList = () =>
    TESTIMONIALS_LIST.map(
      ({ text, userName, initialAnimationTranslateYPosition }) => (
        <Testimony
          key={userName}
          isActive={isAnimationActivate}
          initialTranslatePosition={initialAnimationTranslateYPosition}
        >
          <Rating withoutText />
          <Text align="center" fontWeight="300">
            {text}
          </Text>
          <UserVerified>
            <img src={RedVerified} alt="Consumidor verificado" />
            <Text
              fontWeight="700"
              align="center"
              color={theme.colors.gray["800"]}
            >
              {userName} - consumidor verificado
            </Text>
          </UserVerified>
        </Testimony>
      )
    );

  return <Testimonials>{testimonialsList()}</Testimonials>;
};

const Testimonials = styled.section`
  position: absolute;
  top: 1050px;
  left: 50%;
  margin-left: -480px;
  z-index: 1;

  display: flex;
  justify-content: center;
  column-gap: 32px;
  max-width: 960px;
`;

const Testimony = styled.article<
  AnimatedElements & { initialTranslatePosition: string }
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;

  ${({ initialTranslatePosition }) => css`
    transform: translateY(${initialTranslatePosition});
  `}

  opacity: 0;
  transition: 1s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
      opacity: 1;
      transition: 1s;
      transition-delay: 0.5s;
    `}
`;

const UserVerified = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  & > img {
    width: 16px;
    height: 16px;
  }
`;

export default TestimonialsList;
