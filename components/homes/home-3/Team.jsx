"use client";
import { teamMembers } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Team() {
  const prductImage = [
    {
      name: "Laser Cutting",
      src: "/images/machinery/img1.jpg",
      delay: "0.2s",
    },
    {
      name: "Vertical Machining Center",
      src: "/images/machinery/img2.jpg",
      delay: "0.4s",
    },
    {
      name: "Rotary Surface Grinding",
      src: "/images/machinery/img3.jpg",
      delay: "0.6s",
    },
    {
      name: "Vertical Turning Lathe",
      src: "/images/machinery/img4.jpg",
      delay: "0.8s",
    },
    {
      name: "Bending Machine",
      src: "/images/machinery/img5.jpg",
      delay: "0.2s",
    },
    {
      name: "Hydralic Press",
      src: "/images/machinery/img6.jpg",
      delay: "0.4s",
    },
    {
      name: "Drilling Machine",
      src: "/images/machinery/img7.jpg",
      delay: "0.6s",
    },
    {
      name: "Milling Machine",
      src: "/images/machinery/img8.jpg",
      delay: "0.8s",
    },
    {
      name: "Air Plasma Cutting",
      src: "/images/machinery/img9.jpg",
      delay: "0.4s",
    },
    {
      name: "HP Compressor",
      src: "/images/machinery/img10.jpg",
      delay: "0.6s",
    },
    {
      name: "Weldin Machine",
      src: "/images/machinery/img11.jpg",
      delay: "0.8s",
    },
  ];
  return (
    <div className="section-full bg-white content-inner">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Our Advanced Machinery</h2>
          <p>
            We utilize state-of-the-art machinery to ensure precision, efficiency, and quality in every process.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="dlab-team10-area"
        >
          {prductImage.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="dlab-box m-b30 dlab-team10">
                <div className="dlab-media">
                  <Link href="#">
                    <Image
                      alt=""
                      src={item.src}
                      width={500}
                      height={600}
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href="#">{item.name}</Link>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
