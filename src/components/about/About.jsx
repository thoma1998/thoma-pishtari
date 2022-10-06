import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { dataAbout } from "./aboutData.js";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {dataAbout.map(({ id, icon, title, smallText }) => {
              return (
                <article key={id} className="about__card">
                  {icon}
                  <h5>{title}</h5>
                  <small>{smallText}</small>
                </article>
              );
            })}
          </div>
          <p>
          I'm a Front - End Developer located in Albania. I have a serious passion for Ul effects, animations and creating intuitive, dynamic user experiences.
Well - organised person, problem solver, independent employee with high attention to
detail. Fan of outdoor activities, traveling, physical activities. Interested in the entire frontend spectrum and working on ambitious projects with positive
people.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
