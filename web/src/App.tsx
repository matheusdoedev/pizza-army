import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { queryClient } from "@/providers";
import { router } from "@/routes";

import { Animations, Reset, theme } from "@/styles";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Animations />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
