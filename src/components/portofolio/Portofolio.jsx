import React from "react";
import "./portofolio.css";
import { portofolioData } from "./portofolioData";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {portofolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
