import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import htmlPng from '../assets/html.png';
import cssPng from '../assets/css.png';
import javascriptPng from '../assets/javascript.png';
import reactPng from '../assets/react.png';  
import angularPng from '../assets/angular.png';
import gitpng from '../assets/git.png';   
import nodePng from '../assets/node.png';
const CarouselExample = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
     responsive: [
      {
        breakpoint: 1200,  // screen width <= 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,   // screen width <= 992px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,   // screen width <= 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    
  };

  const images = [
    htmlPng,cssPng,javascriptPng,reactPng,angularPng,nodePng,gitpng
  ];

  return (
    <div>
        <br />
      <h2 style={{ textAlign: "center",color:"#020203"}}>Technological Stack</h2>
      <br />
      <Slider {...settings}>
        {images.map((src, index) => (
             <div key={index} className="carousel-slide">
            <img src={src} alt={`slide-${index}`} className="carousel-img" />
          </div>
        ))}
      </Slider>
      <br />
    </div>
  );
};

export default CarouselExample;
