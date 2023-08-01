import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form className="d-flex cover-container w-50 h-50 p-5 mx-auto flex-column text-bg-dark rounded-5">
      <div className="form-group contact-form mb-3" onSubmit={handleSubmit}>
        <h2 className="text-center fw-bold fs-1">
          Let's work <br /> together!
        </h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
          placeholder="JoeDoe@mail.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-control"
          placeholder="Hire!"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="form-control"
          placeholder="Your Thoughts...."
        />
      </div>

      <button
        type="submit"
        className="btn btn-lg  btn-light fw-bold border-white bg-white"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;
