import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

function ContactMe() {
  return (
    <div className=" p-5 mx-auto">
      <section className="contact-wrap bg-light py-5" id="Contact">
        <div className="content text-center my-5">
          <h1 className="display-5 fw-bolder p-5 my-5">Get in Touch!</h1>
          <p className="fs-2 p-5 my-5">
            Hey, send me an email or get in touch, if you want to connect!
          </p>
          <SocialMediaLinks />
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
