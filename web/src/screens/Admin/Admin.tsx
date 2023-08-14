import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { styled } from "styled-components";

import { Button, Container, Table } from "@/components";
import { PRODUCT_OPTIONS_FALLBACK } from "@/constants";
import { pizzaArmyService } from "@/services";
import { AdminPage } from "@/layouts";

const TABLE_HEADS = ["Título", "Descrição", "Preço"];

const Admin = () => {
  const navigate = useNavigate();

  const handleGoToCreateProductScreen = () => navigate("/admin/create-product");

  const { data: getProductsData } = useQuery(
    "getProducts",
    pizzaArmyService.getProducts,
    {
      refetchOnMount: true,
    }
  );

  const products = useMemo(() => {
    if (!getProductsData) {
      return PRODUCT_OPTIONS_FALLBACK.map(({ title, description, price }) => ({
        title,
        description,
        price,
      }));
    }

    return [...PRODUCT_OPTIONS_FALLBACK, ...getProductsData.data].map(
      ({ title, description, price }) => ({
        title,
        description,
        price,
      })
    );
  }, [getProductsData]);

  return (
    <AdminPage>
      <Head>
        <HeadContainer>
          <Button
            style={{ maxWidth: 300 }}
            onClick={handleGoToCreateProductScreen}
          >
            Cadastrar produto
          </Button>
        </HeadContainer>
      </Head>

      <Container>
        <Table
          heads={TABLE_HEADS}
          data={products}
          theadStyle={{ display: "grid", gridTemplateColumns: "2fr 3fr 1fr" }}
        />
      </Container>
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

export default Admin;
