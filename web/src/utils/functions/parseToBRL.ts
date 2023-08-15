export const parseToBRL = (value: number): string => {
  const valueInBRL = Intl.NumberFormat("pt-br", { currency: "BRL" }).format(
    value
  );

  return `R$ ${valueInBRL}`;
};
