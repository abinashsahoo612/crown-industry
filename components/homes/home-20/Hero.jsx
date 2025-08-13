"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const slides = [
  {
    imageSrc: "/images/banner/banner1.png",
    title: "Precision Machining",
    description:
      "Our gates are manufactured with tight dimensional tolerances, ensuring perfect fit, smooth operation, and longer valve life.",
  },
  {
    imageSrc: "/images/banner/banner2.png",
    title: "Premium Materials",
    description:
      "We use high-grade stainless steels, duplex alloys, and custom materials to ensure maximum durability and corrosion resistance for every gate",
  },
  {
    imageSrc: "/images/banner/banner3.png",
    title: "Enhanced Surface Finishing",
    description:
      "Each gate undergoes advanced surface treatments like grinding and polishing, improving resistance to wear, corrosion, and abrasion.",
  },
  {
    imageSrc: "/images/banner/banner4.png",
    title: "Customized Solutions",
    description:
      "From special coatings to unique edge profiles, we offer fully customized gates tailored to meet your specific industrial needs..",
  }
];
const styles = {
  color: 'transparent',
  background: 'rgb(255, 255, 255)',
  border: '1px solid rgb(207 90 25)',
  borderRadius: '5px',
  boxShadow: '0 0 5px 0 #101010d1',
};
export default function Hero() {
  return (
    <div className="dz-industry2-zone position-relative">
      {/* Fixed certificate images */}
      <div
        className="fixed-certificates"
        style={{
       
        }}
      >
        <Image src="/images/certificates/img1.png" alt="Certificate 1" width={80} height={80} style={styles}/>
        <Image src="/images/certificates/img3.png" alt="Certificate 2" width={80} height={80} style={styles} />
        <Image src="/images/certificates/img2.png" alt="Certificate 3" width={80} height={80}  style={styles} />
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        speed={2500}
        loop
        pagination={{
          clickable: true,
          el: ".sph2",
        }}
        className="swiper mySwiper relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="silder-img overlay-black-middle">
              <Image
                src={slide.imageSrc}
                width={1920}
                height={720}
                data-swiper-parallax="30%"
                alt={slide.title}
              />
            </div>
            <div className="silder-content">
              <h1 className="title fw-semibold">{slide.title}</h1>
              <p className="m-b30">{slide.description}</p>
              {/* <div className="dz-btns d-flex align-items-center">
                <Link
                  href="/services-1"
                  className="bg-primary m-0 text-decoration-none text-white"
                >
                  Read More
                </Link>
                <Link href="/about-1" className="text-white">
                  About Us
                </Link>
              </div> */}
            </div>
          </SwiperSlide>
        ))}

        <div
          style={{
            position: "absolute",
            bottom: "8px",
            zIndex: "1",
            left: "calc(50% - 56px)",
          }}
          className="swiper-pagination style-1 swiper-pagination-bullets swiper-pagination-horizontal sph2"
        ></div>
      </Swiper>
    </div>
  );
}
