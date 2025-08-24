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
      src: "/images/product/slidingdoor.png",
      alt: "Sliding Door",
      title: "Sliding Door",
      description:
        "Bring a perfect blend of functionality and style to your interiors with our Sliding Doors. Ideal for modern homes and office spaces, these doors save space while adding an elegant touch. Made from high-quality materials, the sliding mechanism ensures smooth and noiseless operation, making them a practical choice for rooms, balconies, or wardrobes. With multiple design and finish options, our sliding doors enhance the beauty of any space while providing ease of access.",
    },
    {
      src: "/images/product/frenchdoor.png",
      alt: "French Door",
      title: "French Door",
      description:
        "Redefine elegance with our classic French Doors that blend timeless style with modern engineering. Featuring wide glass panels framed with UPVC or wood finish, French doors allow natural light to flow indoors, creating a bright and welcoming ambiance. Perfect for connecting interior and exterior spaces, these doors provide superior insulation, durability, and aesthetic appeal.",
    },
    {
      title: "UPVC Door",

      alt: "UPVC Door",
      src: "/images/product/upvcdoor.png",
      description:
        "Our UPVC Doors are designed for strength, style, and sustainability. Crafted with premium-grade UPVC, these doors offer excellent insulation against noise, heat, and dust while requiring minimal maintenance. Resistant to termites, rust, and moisture, they are perfect for both interior and exterior use. Available in multiple colors, textures, and designs, UPVC doors combine functionality with a modern aesthetic, making them an ideal long-term investment for your home or office.",
    },
    {
      title: "Wood Finish UPVC",
      alt: "Wood Finish UPVC",
      src: "/images/product/woodupvc.png",
      description:
        "Get the natural warmth of wood with the durability of UPVC through our Wood Finish UPVC Doors & Windows. These products perfectly mimic the look and feel of real wood while offering the advantages of UPVC—resistance to termites, moisture, and fading. Ideal for homeowners who love wooden aesthetics without the hassle of maintenance, our wood finish UPVC range adds elegance and sophistication to any space.",
    },
    {
      alt: "Washroom Ventilator",
      title: "Washroom Ventilator",
      src: "/images/product/ventilator.png",
      description:
        "Enhance ventilation and maintain hygiene with our high-quality Washroom Ventilator. Designed to allow maximum air circulation while ensuring privacy, this ventilator is made from durable materials that resist moisture and corrosion. Its sleek frame and smooth finish complement modern bathroom interiors, while the easy-to-operate design makes cleaning and maintenance effortless. Whether for homes, offices, or commercial spaces, our ventilators ensure a fresh and odor-free washroom environment all year round.",
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
