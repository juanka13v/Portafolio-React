import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container footer_container">
      <div className="footer_created">
        <h4>
          Created by Juan C. Valero <span> © 2021</span>
        </h4>
      </div>
      <div className="footer_links">
        <ul className="footer_menu">
          <li className="footer_link-item">
            <a href="#about">About</a>
          </li>
          <li className="footer_link-item">
            <a href="#proyectos">Proyectos</a>
          </li>
          <li className="footer_link-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="footer_link-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer_social-media">
        <a href="https://github.com/juanka13v">
          <AiFillGithub  />
        </a>
        <a href="#">
          <AiFillTwitterCircle />
        </a>
        <a href="#">
          <AiFillLinkedin  />
        </a>
        <a href="#">
          <AiOutlineMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
