import React, { useRef } from "react";
import "./contact.css";
import { contactData } from "./contactData";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aiima53",
      "template_83fcjwx",
      form.current,
      "ny0-1jMGdZFX-W1z1"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Ne</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map(({ icon, title, describe, link }, index) => {
            return (
              <article key={index} className="contact__option">
                {icon}
                <h4>{title}</h4>
                <h5>{describe}</h5>
                <a href={link} target="_blank" rel="noreferrer">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        {/* End of contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
