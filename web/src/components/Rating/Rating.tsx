import { MdStar } from "react-icons/md";
import { styled } from "styled-components";

import { Title } from "@/components";

import { theme } from "@/styles";

const Rating = () => {
  return (
    <RatingWrapper>
      <Stars>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </Stars>

      <Title
        as="strong"
        fontSize="12px"
        letterSpacing="0.72px"
        color={theme.colors.yellow}
      >
        42 Avaliações
      </Title>
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.div`
  margin-right: 8px;

  & > svg {
    width: 13px;
    height: 13px;
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

export default Rating;
