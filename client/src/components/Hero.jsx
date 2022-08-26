import React, { useState } from "react";
import "../css/hero.css";
import data from "./SliderData";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const Datalength = data.length;

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  const moveLeft = () => {
    setCurrent(current === 0 ? Datalength - 1 : current - 1);
  };
  const moveRight = () => {
    setCurrent(current === Datalength - 1 ? 0 : current + 1);
  };

  return (
    <section className="slider">
      <div className="arr-left" onClick={moveLeft}>
        <BsFillArrowLeftCircleFill />
      </div>

      {data.map((image, index) => {
        return (
          <div
            key={index}
            className={current === index ? "active-slide" : "slide"}
          >
            {index === current && <img src={image} alt="none" />}
          </div>
        );
      })}
      <div className="arr-right" onClick={moveRight}>
        <BsFillArrowRightCircleFill />
      </div>
    </section>
  );
};

export default Hero;
