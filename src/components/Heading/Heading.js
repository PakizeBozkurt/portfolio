import React from "react";

function Heading() {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center px-3 py-3 my-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wv1RmRX9FkY-CDJXOq5sbZQ1F06i9cXTVw&usqp=CAU"
          className="img-fluid p-5  mx-auto  rounded-circle border border-end border-5"
          alt="Pakize Bozkurt"
        />
        <h1 className="fw-bold text-body-emphasis text-center mx-5 px-5">
          Full Stack Web Developer <br /> & <br /> Software Developer
        </h1>
      </div>
    </div>
  );
}

export default Heading;
