import { useMemo, useState } from "react";
import { useQuery } from "react-query";

import { PRODUCT_OPTIONS_FALLBACK } from "@/constants";
import { SelectOption } from "@/interfaces";
import { pizzaArmyService } from "@/services";
import { serializeProductsDataInSelectOptions } from "@/utils";

type UnitsCountActionType = "decrement" | "increment";

export const useProductSelector = () => {
  const [selectedProductTaste, setSelectedProductTaste] = useState(" ");
  const [productUnitsCount, setProductUnitsCount] = useState(0);

  const { data: getProductsData, isLoading: isLoadingProductsOptions } =
    useQuery("getProducts", pizzaArmyService.getProducts);

  const productsOptions: SelectOption[] = useMemo(() => {
    if (!getProductsData || !getProductsData?.data.length) {
      const options = serializeProductsDataInSelectOptions(
        PRODUCT_OPTIONS_FALLBACK
      );

      setSelectedProductTaste(options[0].value);

      return options;
    }

    const options = serializeProductsDataInSelectOptions([
      ...PRODUCT_OPTIONS_FALLBACK,
      ...getProductsData.data,
    ]);

    setSelectedProductTaste(options[0].value);

    return options;
  }, [getProductsData]);

  const { data: getProductData } = useQuery(
    ["getProductData", selectedProductTaste],
    () => pizzaArmyService.getProductById(selectedProductTaste),
    { enabled: !!selectedProductTaste }
  );

  const productData = useMemo(() => {
    if (!getProductData) return PRODUCT_OPTIONS_FALLBACK[0];

    return getProductData.data;
  }, [getProductData]);

  const isDecrementButtonDisabled = productUnitsCount === 0;

  const handleChangeProductTaste = (value: string) =>
    setSelectedProductTaste(value);

  const handleChangeUnitsCount = (actionType: UnitsCountActionType) => () => {
    switch (actionType) {
      case "decrement":
        if (productUnitsCount > 0) setProductUnitsCount(productUnitsCount - 1);
        break;
      case "increment":
      default:
        setProductUnitsCount(productUnitsCount + 1);
    }
  };

  return {
    productData,
    isLoadingProductsOptions,
    isDecrementButtonDisabled,
    productsOptions,
    selectedProductTaste,
    productUnitsCount,
    handleChangeProductTaste,
    handleChangeUnitsCount,
  };
};
