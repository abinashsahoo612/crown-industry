"use client"
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const logos = [
  "https://magdaleneindustries.com/wp-content/uploads/2025/02/c4-1.png",
  "https://magdaleneindustries.com/wp-content/uploads/2025/02/c1-1.png",
  "https://magdaleneindustries.com/wp-content/uploads/2025/02/c2-1.png",
  "https://magdaleneindustries.com/wp-content/uploads/2025/04/New-Project-87.png",
  "https://magdaleneindustries.com/wp-content/uploads/2025/04/New-Project-2025-04-10T135917.450-1.png",
  "https://magdaleneindustries.com/wp-content/uploads/2025/02/c3-1.png",
  "https://magdaleneindustries.com/wp-content/uploads/2025/02/c5-1.png",
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {logos.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Client ${index + 1}`}
              style={{
                maxHeight: "80px",
                margin: "auto",
                padding: "10px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
