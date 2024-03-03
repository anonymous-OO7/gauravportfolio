import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";

const Paths = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);

export default Paths;
