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
            <h1 className="fw-bold m-0">My Skills</h1>
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
                className="btn btn-secondary fw-bold my-2"
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
              <h5 className="card-title fs-1 fw-bold">HTML & CSS</h5>
              <p className="card-text">
                Created an MVP Project with HTML & CSS
              </p>
              <a
                href="https://volunteer-group.netlify.app/"
                className="btn btn-secondary fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-bold">JavaScript</h5>
              <p className="card-text">
                Created a fun app for Developers in the HackTheMidlands.
              </p>
              <a
                href="https://hck2022.netlify.app/"
                className="btn btn-secondary fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-bold">React</h5>
              <p className="card-text">
                Created a Hotel Project for Code Your Future with React.
              </p>
              <a
                href="https://reacthotelapp.netlify.app/"
                className="btn btn-secondary fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-bold">Full Stack</h5>
              <p className="card-text">
              Comleted a Full stack(React.js, Node.js and PostgreSQL) project with 4 team members in 4 weeks successfully!
              </p>
              <a
                href="https://github.com/PakizeBozkurt/hugsforbugs"
                className="btn btn-secondary fw-bold"
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

export default About;
