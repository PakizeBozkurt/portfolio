import React from "react";
import GitHubIcon from "../assets/icons/github-icon.svg";
import LinkedInIcon from "../assets/icons/linkedin-icon.svg";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >

          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; 2023 Pakize Bozkurt, By Heart...
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li classNmae="ms-3">
            <a
              className="text-body-secondary"
              href="https://github.com/PakizeBozkurt"
            >
              <GitHubIcon width="24" height="24" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/in/pakize-bozkurt/"
            >
              <LinkedInIcon width="24" height="24" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
