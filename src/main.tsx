import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";

import { LoginPage } from "./components/login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <LoginPage />
  </StrictMode>
);
