import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home.js";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Pages;
