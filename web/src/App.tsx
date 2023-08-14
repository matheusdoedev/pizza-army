import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { Toast } from "@/components";
import { queryClient } from "@/providers";
import { router } from "@/routes";

import { Animations, Reset, theme } from "@/styles";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Animations />

        <RouterProvider router={router} />
        <Toast />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
