import { styled } from "styled-components";

import { PIZZAS_IMAGES_LIST } from "@/constants";

import { theme } from "@/styles";

const PizzaImagesComponent = () => {
  const pizzaImages = () =>
    PIZZAS_IMAGES_LIST.map(({ img, alt }) => (
      <PizzaImage key={img} src={img} alt={alt} />
    ));

  return <PizzaImages>{pizzaImages()}</PizzaImages>;
};

const PizzaImages = styled.section`
  display: flex;
  gap: 8px;
  overflow: scroll;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

const PizzaImage = styled.img`
  width: 208px;
  height: 208px;
  border-radius: 4px;

  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: 360px;
    max-height: 360px;
    width: 100%;
    height: 100%;
  }
`;

export default PizzaImagesComponent;
