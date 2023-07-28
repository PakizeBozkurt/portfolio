import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [theme, setTheme] = useState("auto");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${
                theme === "light" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("light")}
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${
                theme === "dark" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("dark")}
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`dropdown-item d-flex align-items-center ${
                theme === "auto" ? "active" : ""
              }`}
              onClick={() => handleThemeChange("auto")}
            >
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
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
