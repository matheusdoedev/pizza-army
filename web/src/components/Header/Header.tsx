import { styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlinePerson, MdMenu } from "react-icons/md";

import { Container, Text, Title } from "@/components";

import { theme } from "@/styles";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <BuyButton>
          <Text fontWeight="600" letterSpacing="0.21px">
            Comprar
          </Text>{" "}
          <FaChevronDown />
        </BuyButton>

        <BurguerMenuButton>
          <MdMenu />
        </BurguerMenuButton>

        <Title
          as="h1"
          fontSize="24px"
          color={theme.colors.primary}
          textAlign="center"
          letterSpacing="1.92px"
        >
          Pizza Army
        </Title>

        <HeaderInfoSection>
          <DiscountText
            letterSpacing="0.21px"
            textAlign="right"
            fontWeight="600"
            color={theme.colors.gray["800"]}
          >
            A segunda pizza com <strong>20% OFF</strong>
          </DiscountText>

          <UserButton>
            <MdOutlinePerson />
          </UserButton>

          <button>
            <MdOutlineShoppingCart />
          </button>
        </HeaderInfoSection>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: 12px 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 18px 0;
  }
`;

const BuyButton = styled.button`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    column-gap: 6px;

    & > svg {
      width: 10px;
      height: 10px;
    }
  }
`;

const HeaderInfoSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 24px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const DiscountText = styled(Text)`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;

    & > strong {
      color: ${theme.colors.primary};
    }
  }
`;

const UserButton = styled.button`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

const BurguerMenuButton = styled.button`
  display: flex;

  & > svg {
    position: relative;
    left: -8px;
    width: 36px;
    height: 24px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

export default Header;
