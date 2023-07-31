/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function About() {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto text-center">
            <h1 className="fw-light">My Skills</h1>
            <p className="lead text-body-secondary">
              As a Full Stack Developer, I have completed a comprehensive course
              and acquired expertise in HTML, CSS, JavaScript, React, Node.js,
              SQL, and Agile Methodology. My skills in SDLC enable me to build
              responsive user interfaces, efficient back-end solutions, and
              manage databases effectively, delivering high-quality products
              that meet user needs.
            </p>
            <p>
              <a
                href="https://github.com/PakizeBozkurt"
                className="btn btn-secondary my-2"
              >
                Go My Learning Jurney
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HTML & CSS</h5>
              <p className="card-text">
                Created an MVP Project with HTML & CSS
              </p>
              <a
                href="https://volunteer-group.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">
                Created a fun app for Developers in the HackTheMidlands.
              </p>
              <a
                href="https://hck2022.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">
                Created a Hotel Project for Code Your Future with React.
              </p>
              <a
                href="https://reacthotelapp.netlify.app/"
                className="btn btn-secondary"
                target="_blank"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Full Stack</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="https://github.com/PakizeBozkurt/hugsforbugs"
                className="btn btn-secondary"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
