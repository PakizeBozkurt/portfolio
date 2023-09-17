import React from "react";

function Heading() {
  return (
    <div className="container-fluid pe-5">
      <div className="d-flex align-items-center px-5 py-5 my-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wv1RmRX9FkY-CDJXOq5sbZQ1F06i9cXTVw&usqp=CAU"
          className="img-fluid p-5  mx-auto  rounded-circle border border-end border-5"
          alt="Pakize Bozkurt"
        />
        <h1 className="text-body-emphasis text-center mx-5 px-5">
          <p className="lead fw-bold mb-4 fs-1 p-5">Hey! I'm Pakize,</p>
          Full Stack Web <br /> & <br /> Software Developer
        </h1>
      </div>
    </div>
  );
}

export default Heading;
