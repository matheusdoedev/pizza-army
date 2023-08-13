import { FC } from "react";
import { css, styled } from "styled-components";

import { PizzaIcon } from "@/assets";
import { INGREDIENTS_OPTIONS as STRENGTHS_OPTIONS } from "@/constants";
import { AnimatedFooterElements, ComponentWithAnimation } from "@/interfaces";

import { theme } from "@/styles";

const StrenghtsListComponent: FC<ComponentWithAnimation> = ({
  isAnimationActivate,
}) => {
  const strenghtsList = () =>
    STRENGTHS_OPTIONS.map(({ description }, index) => (
      <StrengthsListOption
        key={description}
        translateY={80 / (index + 1)}
        isActive={isAnimationActivate}
      >
        <img src={PizzaIcon} alt={description} />
        {description}
      </StrengthsListOption>
    ));

  return (
    <StrengthsList isActive={isAnimationActivate}>
      {strenghtsList()}
    </StrengthsList>
  );
};

const StrengthsList = styled.ul<AnimatedFooterElements>`
  display: flex;
  flex-direction: column;
  max-width: 360px;

  position: absolute;
  top: 940px;
  left: 50%;
  margin-left: -180px;
  right: 0;
  z-index: 1;

  transform: none;

  @media (min-width: ${theme.breakpoints.xl}) {
    top: 660px;
    left: initial;
    margin-left: 0;
    right: 144px;

    transform: translateX(-50px);
    opacity: 0;
    transition: 1s;

    ${({ isActive }) =>
      isActive &&
      css`
        transform: translateX(0);
        opacity: 1;
        transition: 1s;
      `}
  }
`;

const StrengthsListOption = styled.li<
  AnimatedFooterElements & { translateY: number }
>`
  display: flex;
  align-items: center;
  column-gap: 8px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 16px;
  line-height: 1.4em;
  letter-spacing: 0.24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray["800"]};
  padding: 24px 0 16px 72px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray["300"]};

  & > img {
    width: 24px;
    height: 24px;
  }

  transform: translateX(-${({ translateY }) => translateY}px);
  opacity: 0;
  transition: 1s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
      opacity: 1;
      transition: 1s;
    `}

  @media (min-width: ${theme.breakpoints.xl}) {
    transform: none;
    opacity: 1;
  }
`;

export default StrenghtsListComponent;
