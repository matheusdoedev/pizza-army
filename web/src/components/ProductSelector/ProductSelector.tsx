import { useState } from "react";
import { styled } from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";

import {
  Title,
  Rating,
  Text,
  Select,
  Button,
  IngredientsList,
} from "@/components";
import { IngredientOption } from "@/interfaces";

import { theme } from "@/styles";

type UnitsCountActionType = "decrement" | "increment";

const INGREDIENTS_OPTIONS: IngredientOption[] = [
  { description: "Queijos importados" },
  { description: "Catupiry de primeira qualidade" },
  { description: "Bastante recheio" },
  { description: "Forno à lenha" },
];

const ProductSelector = () => {
  const [pizzaTaste, setPizzaTaste] = useState("10");
  const [unitsCount, setUnitsCount] = useState(0);

  const handleChangeUnitsCount = (actionType: UnitsCountActionType) => () => {
    switch (actionType) {
      case "decrement":
        if (unitsCount > 0) setUnitsCount(unitsCount - 1);
        break;
      case "increment":
      default:
        setUnitsCount(unitsCount + 1);
    }
  };

  const isDecrementButtonDisabled = unitsCount === 0;

  return (
    <ProductSelectorWrapper>
      <ProductHead>
        <Title
          as="h3"
          fontSize="32px"
          letterSpacing="1.92px"
          color={theme.colors.gray["800"]}
        >
          Margherita
        </Title>

        <Rating />
      </ProductHead>

      <Text style={{ marginBottom: "16px" }}>
        Crosta fina, molho de tomate fresco, queijo mozzarella derretido e
        manjericão aromático, uma combinação clássica e irresistível.
      </Text>

      <Select
        label="Sabor"
        name="taste"
        value={pizzaTaste}
        containerStyle={{ marginBottom: "24px" }}
        onChange={(value) => setPizzaTaste(value)}
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
            {unitsCount}
          </Text>
          <IncreaseButton onClick={handleChangeUnitsCount("increment")}>
            <MdAdd />
          </IncreaseButton>
        </ProductUnitsCounter>

        <Text align="center" letterSpacing="0.84px">
          Subtotal: <strong>R$ 89,90</strong>
        </Text>
      </SubtotalSection>

      <Button style={{ marginBottom: "24px" }}>Adicionar ao carrinho</Button>

      <IngredientsList options={INGREDIENTS_OPTIONS} />
    </ProductSelectorWrapper>
  );
};

const ProductSelectorWrapper = styled.section`
  padding: 12px 48px 0 48px;
`;

const ProductHead = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SubtotalSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    transition: 0.3s;
    filter: brightness(85%);
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.gray["100"]};
    width: 16px;
    height: 16px;
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

export default ProductSelector;
