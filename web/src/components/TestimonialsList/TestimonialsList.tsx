import { FC } from "react";
import { css, styled } from "styled-components";

import RedVerified from "@/assets/icons/red-verified.svg";
import { Rating, Text } from "@/components";
import { TESTIMONIALS_LIST } from "@/constants";
import { AnimatedFooterElements, ComponentWithAnimation } from "@/interfaces";

import { theme } from "@/styles";

const TestimonialsList: FC<ComponentWithAnimation> = ({
  isAnimationActivate,
}) => {
  const testimonialsList = () =>
    TESTIMONIALS_LIST.map(
      ({ id, text, userName, initialAnimationTranslateYPosition }) => (
        <Testimony
          key={id}
          $isactive={isAnimationActivate}
          initialtranslateposition={initialAnimationTranslateYPosition}
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

  return (
    <Testimonials>
      <TestimonialsContainer>{testimonialsList()}</TestimonialsContainer>
    </Testimonials>
  );
};

const Testimonials = styled.section`
  position: absolute;
  top: 1250px;
  left: 50%;
  margin-left: -163px;
  max-width: 326px;
  z-index: 1;
  overflow: scroll;

  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 960px;
    top: 1050px;
    left: 50%;
    margin-left: -480px;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  width: 960px;
  overflow: scroll;

  @media (min-width: ${theme.breakpoints.xl}) {
    column-gap: 32px;
  }
`;

const Testimony = styled.article<
  AnimatedFooterElements & { initialtranslateposition: string }
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;

  ${({ initialtranslateposition }) => css`
    transform: translatey(${initialtranslateposition});
  `}

  opacity: 0;
  transition: 1s;

  ${({ $isactive }) =>
    $isactive &&
    css`
      transform: translatey(0);
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
