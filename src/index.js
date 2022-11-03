import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import App2 from "./App/App2";
import App3 from "./App/App3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
  </React.StrictMode>
);
