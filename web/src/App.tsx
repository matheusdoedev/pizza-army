import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "./routes";

import { Reset, theme } from "@/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
