import { styled } from "styled-components";

import { Container } from "@/components";
import { AdminPage } from "@/layouts";

const CreateProduct = () => {
  return (
    <AdminPage>
      <Head>
        <HeadContainer>
          <button>Voltar</button>
        </HeadContainer>
      </Head>
    </AdminPage>
  );
};

const Head = styled.section`
  padding-top: 32px;
  padding-bottom: 24px;
`;

const HeadContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
`;

export default CreateProduct;
