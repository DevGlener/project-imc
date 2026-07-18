import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "@/App.tsx";
import { rules } from "@/styles/rules";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={rules}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
