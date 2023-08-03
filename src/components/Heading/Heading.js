import React from 'react';
// import "./Heading.css";

function Heading() {
  return (
    <div className="bg-image">
      <div className="container-fluid">
        <div className="d-flex align-items-center px-3 py-3 my-3">
          <img
            className="img-fluid pe-5 rounded-5"
            src="../assets/Images/PHOTO-2023-04-27-20-13-23.jpg"
            alt="Pakize's foto"
            width="200"
            height="150"
          />
          <h1 className="fw-bold text-body-emphasis text-center m-5">
            Hello, I'm Pakize
          </h1>
        </div>
        <div class="text-center lh-lg">
          <div className="card-body">
            <h5 className="card-title fs-2 fw-semibold lh-sm">
              Full Stack Web Developer <br /> & <br /> Software Developer
            </h5>
            <p className="card-text fs-2 fw-medium lh-lg m-3">
              Living for learning...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;