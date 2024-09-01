import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SearchProvider } from "./contexts/SearchCityContext.jsx";

import App from "./App.jsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>
);
