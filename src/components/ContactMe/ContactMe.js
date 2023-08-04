import React from 'react';

function ContactMe() {
  return (
    <div>
      <section className="contact-wrap" id="Contact">
        <div className="content">
          <h1>
            Contact 
          </h1>
          <p>
            Hey, send me an email if you want to connect! Additionally, you can
            find me on{" "}
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/pakize-bozkurt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn{" "}
            </a>
            , shoot a message if you have to!
          </p>
          <a className="email" href="mailto:pakiozihak@gmail.com">
          
            pakiozihak@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
