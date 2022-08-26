import React from "react";
import Hero from "./Hero";
import ProductLinks from "./ProductLinks";
import ProductsSlider from "./ProductsSlider";
import "../css/mainPage.css";
import ImageGallery from "./ImageGallery";

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <ProductLinks />
      <ProductsSlider />
      <ImageGallery />
    </div>
  );
};

export default MainPage;
