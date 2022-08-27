import React, { useEffect } from "react";
import Hero from "./Hero";
import ProductLinks from "./ProductLinks";
import ProductsSlider from "./ProductsSlider";
import "../css/mainPage.css";
import ImageGallery from "./ImageGallery";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

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
