import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About/About.js";
import Home from "../Home.js";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Pages;
