import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

function Contact() {
  return (
    <div className="contact-wrap mx-auto  rounded-5 w-50 h-25 bg-dark my-5">
      <div className="content text-center text-light">
        <h1 className="display-7 fw-bolder p-5 my-5 ">Hire Me!!!</h1>
        <p className="fs-2 p-5 my-5">
          I am passionate about user-firendly application. <br /> I am also open
          new challenges.
          <br />
          <br /> Just hire me!
        </p>
        <mark className="bg-dark text-light fs-3"> Follow! </mark>
        <br />
        <br />
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default Contact;
