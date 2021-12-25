import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const handleMenu = () => setMenuBtn(!menuBtn);

  return (
    <header className="container header_container">
      <div className="header_logo">
        <h2>
          <a href="#">Portafolio</a>
        </h2>
        <div className="nav_hamburguer" onClick={handleMenu}>
          {menuBtn ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
      </div>
      <ul className={menuBtn ? "nav_menu active" : "nav_menu"} onClick={handleMenu}>
        <li className="nav_item">
          <a href="#about">About</a>
        </li>
        <li className="nav_item">
          <a href="#proyectos">Proyectos</a>
        </li>
        <li className="nav_item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav_item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
