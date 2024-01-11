import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import TestApp from "./test/TestApp.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TestApp />
  </StrictMode>,
);
