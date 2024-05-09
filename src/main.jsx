import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PopularContextProvider } from "./contexts/popular.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PopularContextProvider>
        <App />
      </PopularContextProvider>
    </BrowserRouter>
  </React.StrictMode>

  // npm install react-router-dom
);
