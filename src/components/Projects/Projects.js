/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <section className=" d-flex justify-content-center aligin-items-center py-5 my-5 text-center container ">
        <div className="row py-lg-5 ps-5">
          <div className="col-lg-6 col-md-8 mx-auto text-center">
            <h1 className="fw-bold">My Passionate</h1>
            <p className="fs-4 text-body-secondary my-5">
              As a Full Stack & Software Developer, I have completed a
              comprehensive course in 11-months and acquired expertise in HTML,
              CSS, JavaScript, React, Node.js, SQL, and Agile Methodology. My
              skills in SDLC enable me to build responsive user
              interfaces(user-friendly), efficient back-end solutions, and
              manage databases effectively, delivering high-quality products
              that meet user needs. <br />
              <br /> <em> I love errors, it makes me powerful!</em>
            </p>
            <p>
              <a
                href="https://github.com/PakizeBozkurt"
                className="btn btn-secondary bg-dark rounded-5 fw-bold my-2 border border-0 icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go My Learning Jurney
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="row mb-5 py-5 my-5">
        <div className="col-sm-3">
          <div className="card bg-dark text-light border border-0 rounded-5 my-3 p-3 ps-3">
            <div className="card-body text-center px-3">
              <h5 className="card-title fs-1 fw-bold text-center mb-5">
                HTML & CSS
              </h5>
              <p className="card-text">
                Created an MVP Project with HTML & CSS
              </p>
              <a
                href="https://volunteer-group.netlify.app/"
                className="fw-bold border border-0 icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card bg-dark text-light border border-0 rounded-5 my-3 ps-3">
            <div className="card-body text-center px-3">
              <h5 className="card-title fs-1 fw-bold text-center mb-5">
                JavaScript
              </h5>
              <p className="card-text">
                Created a fun app for Developers in the HackTheMidlands.
              </p>
              <a
                href="https://hck2022.netlify.app/"
                className="fw-bold border border-0 icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card bg-dark text-light border border-0 rounded-5 my-3 ps-3">
            <div className="card-body text-center px-3">
              <h5 className="card-title fs-1 fw-bold text-center mb-5">
                React
              </h5>
              <p className="card-text">
                Created a Hotel Project for Code Your Future with React.
              </p>
              <a
                href="https://reacthotelapp.netlify.app/"
                className="fw-bold border border-0 icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card bg-dark text-light border border-0 rounded-5 my-3 ps-3">
            <div className="card-body text-center px-3">
              <h5 className="card-title fs-1 fw-bold text-center mb-5">
                Full Stack
              </h5>
              <p className="card-text">
                Comleted a Full stack(React.js, Node.js and PostgreSQL) project
                successfully!
              </p>
              <a
                href="https://github.com/PakizeBozkurt/hugsforbugs"
                className="fw-bold border border-0 icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
