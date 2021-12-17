import React from "react";
import Container from "./Container";
import miFoto from "../images/Mi-foto.png";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <Container >
        <main className="hero_container">
          <div className="hero">
            <img src={miFoto} alt="mi foto" className="hero_img" />
            <div className="hero_title">
              <h2>Desarollador Web</h2>
              <h3>Juan C. Valero</h3>
            </div>
          </div>

          <div className="slider"></div>
        </main>
      </Container>
    </>
  );
};

export default Hero;
