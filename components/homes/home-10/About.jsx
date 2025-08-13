"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const images = [
  "/images/banner/banner1.png",
  "/images/banner/banner2.png",
  "/images/banner/banner3.png",
  "/images/banner/banner4.png",
];

export default function About() {
  return (
    <div className="section-full content-inner exhibition-bx">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="0.2s"
            data-wow-delay="0.3s"
          >
            {" "}
            <div className="relative exhibition-carousel ">
              <Swiper
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 1,
                  },
                  1000: {
                    slidesPerView: 1,
                  },
                }}
                pagination={{
                  clickable: true,
                  el: ".spt5",
                  bulletActiveClass: "active",

                  renderBullet: function (index, className) {
                    return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                  },
                }}
                style={{ position: "static", margin: "0px" }}
                className="exhibition-carousel swiper-after-none owl-carousel owl-none m-b30 w-100 swiper-p-0"
              >
                {images.map((src, index) => (
                  <SwiperSlide className="item" key={index} style={{height: "500px"}}>
                    <Image
                      src={src}
                        fill
                      style={{
                        objectFit: "cover",
                        height: "100%"
                      }}
                      alt={`Gallery image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
                <div style={{ zIndex: 1 }} className="owl-dots spt5"></div>
              </Swiper>
              <div className="owl-carousel owl-none"></div>
            </div>
          </div>
          <div
            className="col-lg-6 m-b30 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="content-bx1">
              <div className="section-head">
                <h2 className="title">
                  Built for Accuracy, Performance, and Reliability
                </h2>
                <p>
                  With 35 years of experience in knife gate manufacturing,
                  Magdalene Industries delivers reliable solutions that work in
                  the toughest conditions—combining innovation, performance, and
                  quality you can trust.
                </p>
              </div>
              <Link
                href={`/contact`}
                className="site-button btnhover21 black m-r10 m-b10"
              >
                About us
              </Link>
              <Link
                href={`/product`}
                className="site-button btnhover21 black m-b10"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
