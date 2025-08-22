"use client";
import { projectItems } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="section-full content-inner-2 bg-white">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Project</h2>
          <p>
            Our projects reflect our commitment to quality and customer
            satisfaction. We’re proud to have earned excellent feedback from
            clients who appreciate our attention to detail
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <video
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              style={{
                maxWidth: "100%",
                height: "280px",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                background: "#000",
                objectFit: "cover",
              }}
            >
              <source src="/video/project1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <video
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              style={{
                maxWidth: "100%",
                height: "280px",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                background: "#000",
                objectFit: "cover",
              }}
            >
              <source src="/video/project2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-12 col-md-12">
            {/* <Swiper
              slidesPerView={4}
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
                480: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              className="img-carousel-dots-nav owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3"
            >
              {projectItems.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="item wow bounceInUp"
                  data-wow-duration="2s"
                  data-wow-delay={item.delay}
                >
                  <div className="dlab-box project-bx">
                    <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect zoom">
                      <Link href={`/portfolio-details/${item.title}`}>
                        <Image
                          src={item.imgSrc}
                          width={700}
                          height={500}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h5 className="dlab-title">
                        <Link href={`/portfolio-details/${item.title}`}>
                          {item.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
        </div>
      </div>
    </div>
  );
}
