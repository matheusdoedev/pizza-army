import { styled } from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";

import {
  Container,
  Title,
  Rating,
  Text,
  Select,
  Button,
  IngredientsList,
  PizzaImages,
} from "@/components";
import { INGREDIENTS_OPTIONS } from "@/constants";
import { useProductSelector } from "@/hooks";

import { theme } from "@/styles";

const ProductSelector = () => {
  const {
    productData,
    productsOptions,
    handleChangeProductTaste,
    handleChangeUnitsCount,
    selectedProductTaste,
    isDecrementButtonDisabled,
    productUnitsCount,
  } = useProductSelector();

  const { title, description } = productData;

  return (
    <SelectedPizzaSection>
      <SelectedPizzaContainer>
        <PizzaImages />

        <ProductSelectorWrapper>
          <ProductHead>
            <Title
              as="h3"
              fontSize={["20px", "32px"]}
              letterSpacing={["1.2px", "1.92px"]}
              color={theme.colors.gray["800"]}
            >
              {title}
            </Title>

            <Rating />
          </ProductHead>

          <ProductDescription>{description}</ProductDescription>

          <Select
            label="Sabor"
            name="taste"
            value={selectedProductTaste}
            options={productsOptions}
            onChange={handleChangeProductTaste}
          />

          <SubtotalSection>
            <ProductUnitsCounter>
              <DecreaseButton
                onClick={handleChangeUnitsCount("decrement")}
                disabled={isDecrementButtonDisabled}
              >
                <MdRemove />
              </DecreaseButton>
              <Text align="center" letterSpacing="0.84px">
                {productUnitsCount}
              </Text>
              <IncreaseButton onClick={handleChangeUnitsCount("increment")}>
                <MdAdd />
              </IncreaseButton>
            </ProductUnitsCounter>

            <Text
              align="center"
              fontSize={["16px", "18px"]}
              letterSpacing={["0.48px", "0.84px"]}
            >
              Subtotal: <strong>R$ 89,90</strong>
            </Text>
          </SubtotalSection>

          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>

          <IngredientsList options={INGREDIENTS_OPTIONS} />
        </ProductSelectorWrapper>
      </SelectedPizzaContainer>
    </SelectedPizzaSection>
  );
};

const SelectedPizzaSection = styled.section`
  margin-top: 8px;
  margin-bottom: 48px;

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-top: 16px;
    margin-bottom: 80px;
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

const ProductSelectorWrapper = styled.section`
  padding: 16px 0 0 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 12px 48px 0 48px;
  }
`;

const ProductHead = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-bottom: 16px;
  }
`;

const ProductDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 10px;
  line-height: 1.4em;
  color: ${({ theme }) => theme.colors.gray["900"]};
  margin-bottom: 12px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 16px;
    font-size: 14px;
  }
`;

const SubtotalSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 8px;

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-top: 24px;
    margin-bottom: 16px;
  }
`;

const ProductUnitsCounter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
`;

const IncreaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    transition: 0.3s;
    filter: brightness(85%);
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.gray["100"]};
    width: 12px;
    height: 12px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 32px;
    height: 32px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const DecreaseButton = styled(IncreaseButton)`
  background-color: ${({ theme }) => theme.colors.red};

  &:disabled {
    &:hover {
      filter: none;
    }

    background-color: ${({ theme }) => theme.colors.gray["300"]};
  }
`;

const AddToCartButton = styled(Button)`
  margin-bottom: 16px;

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-bottom: 24px;
  }
`;

export default ProductSelector;
