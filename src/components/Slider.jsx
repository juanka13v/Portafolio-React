import React, { useRef, useEffect } from "react";
import "./slider.css";
import img1 from "../images/slider/slider-1.jpg";
import img2 from "../images/slider/slider-2.jpg";
import img3 from "../images/slider/slider-3.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const slideRef = useRef(null);
  const interval = useRef(null);

  const handleNext = () => {
    if (slideRef.current.children.length > 0) {
      const firstElement = slideRef.current.children[0];
      slideRef.current.style.transition = `300ms ease-out all`;
      slideRef.current.style.transform = "translateX(-100%)";
      const transition = () => {
        slideRef.current.style.transition = "none";
        slideRef.current.style.transform = "translateX(0)";

        slideRef.current.appendChild(firstElement);

        slideRef.current.removeEventListener("transitionend", transition);
      };

      slideRef.current.addEventListener("transitionend", transition);
    }
  };

  const handlePrev = () => {
    if (slideRef.current.children.length > 0) {
      const index = slideRef.current.children.length - 1;
      const lastElement = slideRef.current.children[index];
      slideRef.current.insertBefore(lastElement, slideRef.current.firstChild);
      slideRef.current.style.transition = "none";
      slideRef.current.style.transform = "translateX(-100%)";

      setTimeout(() => {
        slideRef.current.style.transition = `300ms ease-out all`;
        slideRef.current.style.transform = "translateX(0)";
      }, 30);
    }
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      handleNext();
    }, 5000);
    slideRef.current.addEventListener("mouseenter", () => {
      clearInterval(interval.current);
    });

    slideRef.current.addEventListener("mouseleave", () => {
      interval.current = setInterval(() => {
        handleNext();
      }, 5000);
    });
  }, []);

  return (
    <div className="contenedor_slider">
      <div className="slider_show" ref={slideRef}>
        <div className="slide">
          <a href="#">
            <img src={img1} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="#">
            <img src={img2} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="#">
            <img src={img3} alt="" />
          </a>
        </div>
      </div>
      <div className="controles">
        <button className="btn left" onClick={handlePrev}>
          <AiOutlineArrowLeft size={30} />
        </button>
        <button className="btn right">
          <AiOutlineArrowRight size={30} onClick={handleNext} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
