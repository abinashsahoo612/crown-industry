"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials5 } from "@/data/testimonials";

export default function Facts() {
  const [isOpen, setOpen] = useState(false);
  const data = [
    {
      title: "Laser Cutting",
      description: "Our 6KW laser cutting machine enables high-speed, high-precision cutting of various materials, ensuring clean edges, minimal wastage, and exceptional accuracy. From thin sheets to thick metals, we handle diverse cutting requirements with efficiency.",
    },
    {
      title: "VMC Machining(Vertical Machining Center)",
      description: "With advanced VMC machines, we provide precision milling, drilling, and contouring to create intricate and complex components with tight tolerances, ensuring superior accuracy and surface finish.",
    },
    {
      title: "VTL Machining (Vertical Turning Lathe)",
      description: "Our VTL machines specialize in machining large-diameter components with precision. This is ideal for heavy-duty industrial parts that require superior symmetry, accuracy, and durability.",
    },
    {
      title: "Rotary Surface Grinding",
      description: "Our rotary grinding services ensure perfect flatness and smooth finishes on large surface areas. This is critical for knife gate valves, engine plates, and precision components requiring consistent thickness and accuracy.",
    },
    {
      title: "Buffing",
      description: "We specialize in fine-tuning machined components to achieve high surface finishes, dimensional accuracy, and defect-free products. Our finish machining process enhances both aesthetics and functionality.",
    },
    {
      title: "Milling",
      description: "We offer precision side machining services to ensure uniformity and perfection in every dimension. Our advanced techniques allow for high-tolerance side cuts, slotting, and detailing to meet industry-specific requirements.",
    },
    {
      title: "Bending",
      description: "We offer precision bending services using advanced machinery capable of handling a wide range of materials and thicknesses. Our high-capacity bending machines ensure consistent quality, tight tolerances, and flawless finishes for every project.",
    }
  ];
  return (
    <>
        <div className="section-full bg-gray content-inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="sort-title clearfix text-center">
                        <h4>What peolpe are saying style 6</h4>
                    </div>
                    </div>
                </div>
                <div className="section-content">
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
                    breakpoints={{
                        0: {
                        slidesPerView: 1,
                        },
                        991: {
                        slidesPerView: 2,
                        },
                    }}
                    className="testimonial-five owl-carousel owl-btn-center-lr owl-btn-2 primary dots-style-3 owl-theme"
                    >
                    {data.map((item, index) => (
                        <SwiperSlide
                        className="swiper-slide item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.3s"
                        key={index}
                        >
                        <div className="testimonial-14 quote-left">
                            <div className="testimonial-detail clearfix text-white">
                            <h5 className="testimonial-name m-t10 m-b5">
                                {item.title}
                            </h5>
                            </div>
                            <div className="testimonial-text">
                            <p>{item.description}</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  );
}
