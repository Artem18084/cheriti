import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// render(
//   <BrowserRouter>
//      <App />
//  </BrowserRouter>, document.getElementById("root")
// )
