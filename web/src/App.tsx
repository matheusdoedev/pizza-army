import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "./routes";

import { Animations, Reset, theme } from "@/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Animations />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
