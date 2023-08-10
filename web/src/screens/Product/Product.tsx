import { styled } from "styled-components";

import { Container, Header, ProductSelector } from "@/components";

import { PIZZAS_IMAGES_LIST } from "@/constants";

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
  margin-top: 16px;
  margin-bottom: 32px;
`;

const SelectedPizzaContainer = styled(Container)`
  display: grid;
  grid-template-columns: 7fr 5fr;
  align-items: start;
`;

const PizzaImages = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const PizzaImage = styled.img`
  max-width: 360px;
  max-height: 360px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export default Product;
