/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Projects.css";

function ProjectCard({ title, description, link }) {
  return (
    <div className="col-sm-3">
      <div className="card bg-dark text-light border border-0 rounded-5 my-3 p-3 ps-3">
        <div className="card-body text-center px-3">
          <h5 className="card-title fs-1 fw-bold text-center mb-5">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={link}
            className="fw-bold border border-0 icon project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <section className=" d-flex justify-content-center aligin-items-center py-5 my-5 text-center container ">
        {/* ... */}
      </section>
      <div className="row mb-5 py-5 my-5">
        <ProjectCard
          title="HTML & CSS"
          description="Created an MVP Project with HTML & CSS"
          link="https://volunteer-group.netlify.app/"
        />
        <ProjectCard
          title="JavaScript"
          description="Created a fun app for Developers in the HackTheMidlands."
          link="https://hck2022.netlify.app/"
        />
        <ProjectCard
          title="React"
          description="Created a Hotel Project for Code Your Future with React."
          link="https://reacthotelapp.netlify.app/"
        />
        <ProjectCard
          title="Full Stack"
          description="Completed a Full stack(React.js, Node.js and PostgreSQL) project successfully!"
          link="https://github.com/PakizeBozkurt/hugsforbugs"
        />
      </div>
    </div>
  );
}

export default Projects;
