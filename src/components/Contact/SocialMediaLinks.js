import React from "react";

function SocialMediaLinks() {
  return (
    <div className="d-flex justify-content-center fs-2 gap-4 ">
      <a
        className="text-gradient"
        href="https://www.linkedin.com/in/pakize-bozkurt/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-linkedin icon"></i>
      </a>
      <a
        className="text-gradient"
        href="https://github.com/PakizeBozkurt"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-github icon"></i>
      </a>
      <a
        className="text-gradient email"
        href="mailto:pakiozihak@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-envelope-at-fill icon"></i>{" "}
      </a>
    </div>
  );
}

export default SocialMediaLinks;
