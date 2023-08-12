import { FC } from "react";
import { css, styled } from "styled-components";

import PizzaIcon from "@/assets/icons/pizza.svg";
import { INGREDIENTS_OPTIONS as STRENGTHS_OPTIONS } from "@/constants";
import { AnimatedElements, ComponentWithAnimation } from "@/interfaces";

const StrenghtsListComponent: FC<ComponentWithAnimation> = ({
  isAnimationActivate,
}) => {
  const strenghtsList = () =>
    STRENGTHS_OPTIONS.map(({ description }) => (
      <StrengthsListOption key={description}>
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

const StrengthsList = styled.ul<AnimatedElements>`
  display: flex;
  flex-direction: column;
  max-width: 360px;

  position: absolute;
  top: 660px;
  right: 144px;
  z-index: 1;

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
`;

const StrengthsListOption = styled.li`
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
`;

export default StrenghtsListComponent;
