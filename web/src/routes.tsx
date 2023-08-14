import { createBrowserRouter } from "react-router-dom";

import { Admin, CreateProduct, Product } from "@/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/create-product",
    element: <CreateProduct />,
  },
]);
