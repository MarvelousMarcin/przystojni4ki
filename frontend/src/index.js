import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizGenerator from "./components/QuizGenerator/QuizGenerator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/logged" element={<QuizGenerator />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
