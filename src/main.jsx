import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "./index.css";
import { pdfjs } from "react-pdf";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
