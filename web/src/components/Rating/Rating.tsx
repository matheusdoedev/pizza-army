import { FC } from "react";
import { MdStar } from "react-icons/md";
import { styled } from "styled-components";

import { Title } from "@/components";

import { theme } from "@/styles";

interface RatingProps {
  withoutText?: boolean;
}

const Rating: FC<RatingProps> = ({ withoutText }) => {
  return (
    <RatingWrapper>
      <Stars>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </Stars>

      {!withoutText && (
        <Title
          as="strong"
          fontSize={["10px", "12px"]}
          letterSpacing={["0.6px", "0.72px"]}
          color={theme.colors.yellow}
        >
          42 Avaliações
        </Title>
      )}
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
