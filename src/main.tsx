import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalContextProvider } from "./providers/global-context.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalContextProvider>
      <ToastContainer autoClose={2000} />
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
