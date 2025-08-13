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
      alt: "Image 1",
      title: "Precision Engineering",
      description: "Web design aorem apsum dolor sit amet, adipiscing elit.",
    },
    {
      src: "/images/about/about_img2.png",
      alt: "Image 2",
      title: "Advanced Manufacturing Technology",
      description: "Graphic design aorem apsum dolor sit amet, adipiscing elit.",
    },
    {
      src: "/images/about/about_img3.png",
      alt: "Image 3",
      title: "Timely Delivery",
      description: "Development aorem apsum dolor sit amet, adipiscing elit.",
    },
    {
      src: "/images/about/about_img4.png",
      alt: "Image 3",
      title: "Strong Ethical Standard",
      description: "Development aorem apsum dolor sit amet, adipiscing elit.",
    }
  ];
  return (
    <>
      <div className="section-full overlay-white-middle content-inner">
        <div className="container">
          <div className="section-head text-black text-center">
            <h3 className="title">Commitment to Quality &Reliability.</h3>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since
              the been when an unknown printer.
            </p> */}
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
                    <div style={{ position: "relative", width: "100%", height: 350 }}>
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
                        <h4 style={{ margin: 0, color:"#fff", textAlign:"center" }}>{img.title}</h4>
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
                        1. Precision Engineering
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq1"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      At Magdalene Industries, every product is crafted with meticulous precision and built to the highest industry standards. Through rigorous quality control and testing, we ensure exceptional performance, durability, and reliability — setting a new benchmark for excellence.
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
                        2. Advanced Manufacturing Technology
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq2"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      We utilize state-of-the-art machinery and automation to achieve unmatched consistency, efficiency, and precision. Our investment in cutting-edge technology streamlines production, minimizes errors, and ensures exceptional quality in every product we deliver.
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
                        3. Timely Delivery
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq3"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      With streamlined production and an efficient logistics network, we ensure every order is processed, manufactured, and delivered on schedule. Our proactive approach guarantees timely delivery without compromising on quality.
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
                        4. Strong Ethical Standard
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq4"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      We conduct our business with transparency, integrity, and accountability. By upholding strict compliance, responsible sourcing, and a culture of respect, we build lasting relationships based on trust and fairness.
                    </div>
                  </div>
                </div>
                {/* <div className="panel">
                  <div className="acod-head">
                    <h6 className="acod-title">
                      <a
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        className="collapsed"
                        aria-expanded="false"
                      >
                        5. Claritas est etiam processus ?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="faq5"
                    className="acod-body collapse"
                    data-bs-parent="#accordion1"
                  >
                    <div className="acod-content">
                      Developement aorem apsum dolor sit amet, adipiscing elit,
                      sed diam nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Faq Info */}
          {/* <div className="row">
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-factory" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Make it Simple</h5>
                  <p>
                    Web design aorem apsum dolor dolore magna aliquam erat
                    volutpat.Claritas est etiam processus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-worker" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">Unique design</h5>
                  <p>
                    Web design aorem apsum dolor dolore magna aliquam erat
                    volutpat.Claritas est etiam processus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 m-b30">
              <div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
                <div className="icon-md text-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-settings" />
                  </a>
                </div>
                <div className="icon-content">
                  <h5 className="dlab-tilte">True Responsiveness</h5>
                  <p>
                    Web design aorem apsum dolor dolore magna aliquam erat
                    volutpat.Claritas est etiam processus.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* Faq Info END */}
        </div>
      </div>{" "}
    </>
  );
}
