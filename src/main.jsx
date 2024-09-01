import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SelectProvider } from "./contexts/SelectCityContext.jsx";

import App from "./App.jsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SelectProvider>
      <App />
    </SelectProvider>
  </StrictMode>
);
