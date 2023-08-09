import { FC, ReactNode } from "react";

import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

const ContainerComponent: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`;

export default ContainerComponent;
