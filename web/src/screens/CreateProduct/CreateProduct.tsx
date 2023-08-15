import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { useFormik } from "formik";
import { ValidationError } from "yup";

import { Button, Container, Input, Text, Title } from "@/components";
import { ProductDto } from "@/interfaces";
import { AdminPage } from "@/layouts";
import { pizzaArmyService } from "@/services";
import { createProductSchema } from "@/utils";

import { theme } from "@/styles";

interface FormValues {
  title: string;
  description: string;
  price: string;
}

const DEFAULT_VALUES = {
  title: "",
  description: "",
  price: "",
};

const CreateProduct = () => {
  const { mutateAsync } = useMutation((productDto: ProductDto) => {
    return pizzaArmyService.postCreateProduct(productDto);
  });

  const handleOnSubmit = async (values: FormValues) => {
    try {
      await createProductSchema.validate(values, { abortEarly: true });

      const productDto: ProductDto = {
        ...values,
        price: parseFloat(values.price.replace(",", ".")),
      };

      await mutateAsync(productDto);
      toast.success("Produto cadastrado com sucesso");
      navigate("/admin");
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrors({ [error.path as string]: error.message });
        return;
      }
      toast.error("Não foi possível cadastrar o produto.");
      console.error(error);
    }
  };

  const { handleSubmit, handleChange, values, errors, setErrors } = useFormik({
    initialValues: DEFAULT_VALUES,
    onSubmit: handleOnSubmit,
  });

  const navigate = useNavigate();

  const handleGoBackToAdmin = () => navigate("/admin");

  return (
    <AdminPage>
      <Head>
        <HeadContainer>
          <BackButton onClick={handleGoBackToAdmin}>
            <MdArrowBack /> Voltar
          </BackButton>
        </HeadContainer>
      </Head>

      <CreateProductSection>
        <Container>
          <Title
            as="h2"
            fontSize={["18px", "24px"]}
            letterSpacing={["0.84px", "1.64px"]}
          >
            Cadastrar produto
          </Title>

          <CreateProductForm onSubmit={handleSubmit}>
            <Input
              name="title"
              label="Título*"
              placeholder="Ex: Mussarella"
              error={errors.title}
              value={values.title}
              onChange={handleChange}
              containerStyle={{ maxWidth: "360px" }}
            />
            <Input
              name="description"
              label="Descrição*"
              placeholder="Ex: Pizza feita com parmesão, oregáno, cheedar, e queijo."
              error={errors.description}
              value={values.description}
              onChange={handleChange}
              containerStyle={{ maxWidth: "360px" }}
              multiline
              rows={4}
            />
            <Input
              name="price"
              label="Preço (em reais)*"
              placeholder="Ex: 69,99"
              value={values.price}
              onChange={handleChange}
              error={errors.price}
              containerStyle={{ maxWidth: "360px" }}
            />
            <Text
              as="span"
              fontSize={["10px", "12px"]}
              color={theme.colors.gray["400"]}
            >
              Os campos com * são obrigatórios.
            </Text>
            <Button
              type="submit"
              style={{ maxWidth: "360px", marginTop: "8px" }}
            >
              Salvar
            </Button>
          </CreateProductForm>
        </Container>
      </CreateProductSection>
    </AdminPage>
  );
};

const Head = styled.section`
  padding-top: 32px;
  padding-bottom: 24px;
`;

const HeadContainer = styled(Container)`
  display: flex;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.gray["800"]};

  & > svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.gray["800"]};
  }
`;

const CreateProductSection = styled.section``;

const CreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  margin-top: 24px;
`;

export default CreateProduct;
