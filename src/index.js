import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Tictactoe from "./pages/Tictactoe";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Api from "./pages/Api";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tictactoe" element={<Tictactoe />} />
          <Route path="api" element={<Api />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);