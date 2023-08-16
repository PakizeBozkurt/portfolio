import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Home from "../Home";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Pages;
