import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./Redux/Store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
