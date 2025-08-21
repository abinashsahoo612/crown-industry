"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    backgroundImage:
      'url("/images/banner/banner5.jpeg") center center no-repeat',
    title: "Clear View Living",
    description:
      "Enjoy natural light and uninterrupted views with our quality sliding windows.",
    buttons: ["ABOUT US", "SERVICES"],
  },
  // {
  //   backgroundImage:
  //     'url("/images/banner/banner2.jpeg") center center no-repeat',
  //   title: "Premium Sliding Windows",
  //   description:
  //     "Enhance your space with durable, smooth, and elegant sliding windows.",
  //   buttons: ["ABOUT US", "SERVICES"],
  // },
  // {
  //   backgroundImage:
  //     'url("/images/banner/banner3.jpeg") center center no-repeat',
  //   title: "Elegant Window Designs",
  //   description:
  //     "Modern sliding solutions that add beauty and functionality to any room.",
  //   buttons: ["ABOUT US", "SERVICES"],
  // },
  {
    backgroundImage:
      'url("/images/banner/banner4.jpeg") center center no-repeat',
    title: "Strong & Stylish",
    description:
      "Built to last, our windows combine strength with a sleek appearance.",
    buttons: ["ABOUT US", "SERVICES"],
  },
  // {
  //   backgroundImage:
  //     'url("/images/banner/banner1.jpeg") center center no-repeat',
  //   title: "Crafted for Comfort",
  //   description:
  //     "Designed to bring ventilation, style, and comfort to your home.",
  //   buttons: ["ABOUT US", "SERVICES"],
  // },
];
export default function Hero() {
  return (
    <div className="hero-sec">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        speed={2500}
        loop
        navigation={{ prevEl: ".snbph6", nextEl: ".snbnh6" }}
        className=" swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-slider2 swiper-backface-hidden"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide slider-content `}
            style={{ background: slide.backgroundImage }}
          >
            <div className="inner sliderStyle4">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link href={"/about-1"}>
                <button className="site-button">ABOUT US</button>
              </Link>
              <Link href={"/services-1"}>
                <button className="site-button">OUR SERVICES</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button" style={{ zIndex: 1 }}>
          <div className="swiper-button-prev snbph6 previousButton swiper-button-disabled">
            <i className="las la-angle-left" />
          </div>
          <div className="swiper-button-next snbnh6 nextButton">
            <i className="las la-angle-right" />
          </div>
        </div>
      </Swiper>{" "}
    </div>
  );
}
