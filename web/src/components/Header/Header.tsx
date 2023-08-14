import { FC } from "react";
import { css, styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlinePerson, MdMenu } from "react-icons/md";

import { Container, Text, Title } from "@/components";

import { theme } from "@/styles";

interface HeaderProps {
  $isadminheader?: boolean;
}

const Header: FC<HeaderProps> = ({ $isadminheader }) => {
  if ($isadminheader)
    return (
      <HeaderWrapper $isadminheader={$isadminheader}>
        <HeaderContainer $isadminheader={$isadminheader}>
          <Title
            as="h1"
            fontSize={["20px", "24px"]}
            color={theme.colors.gray["200"]}
            align="center"
            letterSpacing={["1.6px", "1.92px"]}
          >
            Pizza Army
          </Title>
        </HeaderContainer>
      </HeaderWrapper>
    );

  return (
    <HeaderWrapper>
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
          fontSize={["20px", "24px"]}
          color={theme.colors.primary}
          align="center"
          letterSpacing={["1.6px", "1.92px"]}
        >
          Pizza Army
        </Title>

        <HeaderInfoSection>
          <DiscountText>
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
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<HeaderProps>`
  background: ${({ theme }) => theme.colors.gray["100"]};
  width: 100%;
  padding: 12px 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 18px 0;
  }

  ${({ $isadminheader }) =>
    $isadminheader &&
    css`
      background: ${({ theme }) => theme.colors.primary};
    `}
`;

const HeaderContainer = styled(Container)<HeaderProps>`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ $isadminheader }) =>
    $isadminheader &&
    css`
      display: flex;
      justify-content: center;
    `}
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

const DiscountText = styled.p`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
    letter-spacing: 0.21px;
    text-align: right;
    font-weight: 600;
    font-family: ${theme.fonts.secondary};
    font-size: 14px;
    line-height: 1.4em;
    color: ${theme.colors.gray["800"]};

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
