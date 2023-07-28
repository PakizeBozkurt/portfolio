import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a
              className="navbar-brand bi bi-linkedin me-1"
              href="https://www.linkedin.com/in/pakize-bozkurt/"
            >
              In
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" aria-disabled="true">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
