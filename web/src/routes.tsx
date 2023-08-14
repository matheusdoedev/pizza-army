import { createBrowserRouter } from "react-router-dom";

import { Admin, Product } from "@/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
