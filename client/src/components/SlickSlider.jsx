import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slickSlider.css";
import slickMainPage from "./slickDataMainPage";

const LeftBtn = ({ onClick }) => {
  return (
    <div className="slick-arr left" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const RightBtn = ({ onClick }) => {
  return (
    <div className="slick-arr right" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const SlickSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    prevArrow: <LeftBtn />,
    nextArrow: <RightBtn />,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="caro-slider">
      <Slider {...settings}>
        {slickMainPage.map((data, index) => {
          return (
            <div key={index}>
              <div className="card">
                <img src={data} alt="" />

                <div className="card-details">
                  <div className="title">{data.name}</div>
                  <div className="body">{data.Price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;
