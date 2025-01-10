import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppWalletProvider from "./components/AppWalletProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWalletProvider>
      <App />
    </AppWalletProvider>
  </StrictMode>
);
