import { createBrowserRouter } from "react-router-dom";

import { Product } from "@/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
]);
