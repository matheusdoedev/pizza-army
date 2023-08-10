import { styled } from "styled-components";

import { Container, Header, ProductSelector } from "@/components";
import { PIZZAS_IMAGES_LIST } from "@/constants";

import { theme } from "@/styles";

const Product = () => {
  const pizzaImages = () =>
    PIZZAS_IMAGES_LIST.map(({ img2x, alt }) => (
      <PizzaImage src={img2x} alt={alt} />
    ));

  return (
    <div>
      <Header />

      <SelectedPizzaSection>
        <SelectedPizzaContainer>
          <PizzaImages>{pizzaImages()}</PizzaImages>

          <ProductSelector />
        </SelectedPizzaContainer>
      </SelectedPizzaSection>
    </div>
  );
};

const SelectedPizzaSection = styled.section`
  margin-top: 8px;
  margin-bottom: 32px;

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-top: 16px;
  }
`;

const SelectedPizzaContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 7fr 5fr;
    align-items: start;
  }
`;

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

export default Product;
