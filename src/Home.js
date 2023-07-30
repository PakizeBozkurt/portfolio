import React from "react";



function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className=" px-3 py-3 my-3 text-center">
          <img
            className="img-fluid img-thumbnail rounded-5"
            src="../assets/Images/PHOTO-2023-04-27-20-13-23.jpg"
            alt="Pakize's foto"
            width="200"
            height="150"
          />
          <h1 className="display-5 fw-bold text-body-emphasis">I'm Pakize</h1>
          <div class="text-center lh-lg">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-semibold lh-lg">
                Full Stack / Software Developer
              </h5>
              <p className="card-text fs-2 fw-medium lh-lg">
                Living for learning.....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
