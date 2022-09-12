import React from "react";
import "../css/productsSlider.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import SlickSlider from "./SlickSlider";

const ProductsSlider = () => {
  return (
    <div className="slider-container">
      <div className="side-link">
        <h3>You Might Like</h3>
        <span>
          <Link to="/" className="link">
            Shop All
            <span className="arrow">
              <BsArrowRight />
            </span>
          </Link>
        </span>
      </div>
      <div className="carousel">
        <SlickSlider />
      </div>
    </div>
  );
};

export default ProductsSlider;
