import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "./routes";

import { colors, fonts, gaps, Reset } from "@/styles";

const theme = { colors, fonts, gaps };

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
