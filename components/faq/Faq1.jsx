"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Faq1() {
  const [isOpen, setOpen] = useState(false);
  const images = [
    {
      src: "/images/about/about_img1.png",
      alt: "Washroom Ventilator",
      title: "Washroom Ventilator",
      description: "Engineered for optimal airflow and durability.",
    },
    {
      src: "/images/about/about_img2.png",
      alt: "Sliding Door",
      title: "Sliding Door",
      description: "Smooth operation and modern design for any space.",
    },
    {
      src: "/images/about/about_img3.png",
      alt: "French Door",
      title: "French Door",
      description: "Elegant and secure, enhancing your interiors.",
    },
    {
      src: "/images/about/about_img4.png",
      alt: "Wood Finish UPVC",
      title: "Wood Finish UPVC",
      description: "Classic wood look with the benefits of UPVC.",
    },
  ];
  return (
    <>
      <div className="section-full overlay-white-middle content-inner">
        <div className="container">
          <div className="section-head text-black text-center">
            <h3 className="title">Why Choose Crown Industries?</h3>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Autoplay]}
                className="testimonial-seven owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 350,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover", borderRadius: 12 }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background: "rgba(0,0,0,0.5)",
                          color: "#fff",
                          padding: "16px 24px",
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                        }}
                      >
                        <h4
                          style={{
                            margin: 0,
                            color: "#fff",
                            textAlign: "center",
                          }}
                        >
                          {img.title}
                        </h4>
                        {/* <p style={{ margin: 0, fontSize: 15 }}>{img.description}</p> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
              <div
                className="dlab-accordion faq-1 box-sort-in m-b30"
                id="accordion1"
              >
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        className="collapsed"
                        aria-expanded="true"
                      >
                        1. Product Excellence
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq1"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Every Crown Industries product—whether a washroom
                      ventilator, sliding door, French door, UPVC door, or wood
                      finish UPVC—is crafted for long-lasting performance,
                      style, and energy efficiency.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        2. Advanced Manufacturing
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq2"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      We use state-of-the-art technology and strict quality
                      control to ensure every product meets the highest
                      standards of durability and finish.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        3. Customized Fitting & Installation
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq3"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Our experienced team provides professional fitting and
                      installation, customizing every product to your exact
                      requirements for a perfect fit and finish.
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        4. Trusted Service & Support
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq4"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      We are committed to customer satisfaction, offering
                      transparent service, timely delivery, and ongoing support
                      for every project.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
