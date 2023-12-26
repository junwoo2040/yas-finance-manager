/* main.tsx */

/* Imports */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Wrapper from "./Wrapper";

/* Find root element and inject components */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
);
