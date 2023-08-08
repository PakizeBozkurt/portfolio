import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

function ContactMe() {
  return (
    <div className="d-flex justify-content-center p-5">
      <section className="contact-wrap bg-light py-5" id="Contact">
        <div className="content text-center my-5">
          <h1 className="display-5 fw-bolder">Contact</h1>
          <p>
            Hey, send me an email if you want to connect! Additionally, you can
            find me on<SocialMediaLinks />, shoot a message if you have to!
          </p>
          <a className="email fw-bold" href="mailto:pakiozihak@gmail.com">
            pakiozihak@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
