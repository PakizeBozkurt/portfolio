import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

function ContactMe() {
  return (
    <div className="contact-wrap bg-light mx-auto py-3 rounded-5 w-50 h-25 bg-dark mb-5">
      <div className="content text-center my-3 text-light">
        <h1 className="display-5 fw-bolder p-5 my-5 ">Get in Touch!</h1>
        <p className="fs-2 p-5 my-5">
          Hey, send me an email or get in touch, if you want to connect!
        </p>
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default ContactMe;
