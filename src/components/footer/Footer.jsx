import React from "react";
import "./footer.css";
import { socials, footerList } from "./footerData";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Thoma
      </a>

      <ul className="permalinks">
        {footerList.map(({ link, name }) => {
          return (
            <li>
              <a href={link}>{name}</a>
            </li>
          );
        })}
      </ul>
      <div className="footer__socials">
        {socials.map(({ icon, link }) => {
          return <a href={link}>{icon}</a>;
        })}
      </div>

      <div className="footer__copyright">
        <small>&copy; Thoma Pishtari. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
