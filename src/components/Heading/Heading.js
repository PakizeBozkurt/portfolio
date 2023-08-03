import React from "react";
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
            width="300"
            height="200"
          />
          <h1 className="fw-bold text-body-emphasis text-center m-5">
            Full Stack Web Developer <br /> & <br /> Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Heading;
