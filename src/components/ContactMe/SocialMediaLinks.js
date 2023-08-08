import React from "react";

function SocialMediaLinks() {
  return (
    <div className="d-flex justify-content-center fs-2 gap-4">
      <a
        className="text-gradient"
        href="https://www.linkedin.com/in/pakize-bozkurt/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        className="text-gradient"
        href="https://github.com/PakizeBozkurt"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-github"></i>
      </a>
    </div>
  );
}

export default SocialMediaLinks;
