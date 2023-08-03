import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About/About.js";
import Contact from "../components/Contact/Contact";
import Home from "../Home";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Pages;
