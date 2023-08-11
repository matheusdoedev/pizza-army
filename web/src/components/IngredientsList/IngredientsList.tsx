import { FC } from "react";
import { styled } from "styled-components";
import { MdDone } from "react-icons/md";

import { Text } from "@/components";
import { IngredientOption } from "@/interfaces";

import { theme } from "@/styles";

interface IngredientsListProps {
  options: IngredientOption[];
}

const IngredientsList: FC<IngredientsListProps> = ({ options }) => {
  const ingredientsOptions = () =>
    options.map(({ description }) => (
      <Ingredient key={description}>
        <MdDone />
        <Text
          as="li"
          fontSize="12px"
          fontWeight="300"
          color={theme.colors.gray["900"]}
        >
          {description}
        </Text>
      </Ingredient>
    ));

  return <Ingredients>{ingredientsOptions()}</Ingredients>;
};

const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Ingredient = styled.li`
  display: flex;
  align-items: center;
  column-gap: 12px;

  & > svg {
    width: 28px;
    height: 22px;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export default IngredientsList;
