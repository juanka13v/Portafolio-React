import React from "react";
import miFoto from "../images/Mi-foto.png";
import "./hero.css";
import Slider from "./Slider";

const Hero = () => {
  return (
    <>
      <main className="container">
        <div className="hero_container">
          <div className="hero">
            <img src={miFoto} alt="mi foto" className="hero_img" />
            <div className="hero_title">
              <h2>Desarollador Web</h2>
              <h3>Juan C. Valero...</h3>
            </div>
          </div>

          <div className="slider">
            <Slider />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
