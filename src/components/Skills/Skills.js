import React from 'react';

function Skills() {
  return (
    <div className="d-flex justify-content-center p-5">
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">
                  My name is Pakize,
                </p>
                <p className="text-muted">
                  I love creating websites with user-friendly. Living for learning....
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient" href="#!">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
