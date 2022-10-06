import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FrontendData, backendData } from "./experienceData";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {FrontendData.map(({icon, title, text }) => {
              return (
                <article className="experience__details">
                  {<BsFillPatchCheckFill className="experience__details-icon" />}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{text}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__backtend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendData.map(({ title, text }) => {
              return (
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{text}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
