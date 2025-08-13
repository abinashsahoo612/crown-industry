import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/* Service Info Head */}

      {/* Service Info Head End */}
      {/* About Us */}
      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="our-story">
                <span>Our Service</span>
                <h2 className="title">
                  Commited to High <br />
                  Quality <span className="text-primary"> Service </span>
                </h2>
                <h4 className="title">
                  As pioneers in the industry, we specialize in crafting Knife Gates.
                </h4>
                <p>
                  At Magdalene Industries, precision meets innovation. With decades of expertise in knife gate manufacturing, we engineer high-performance solutions tailored to meet the toughest industry demands. Our 23,000 sq. ft. facility, equipped with advanced technology and a skilled workforce, ensures that every product we deliver upholds our commitment to quality, durability, and efficiency.
                </p>
                <Link href={`/services`} className="site-button bg-secondry btnhover14">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <Image
                className="radius-sm"
                alt=""
                src="/images/service_img.png"
                width="600"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Us End */}
    </>
  );
}
