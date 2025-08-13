import About from "@/components/about/About";
import Banner from "@/components/about/Banner";
import Facts from "./facts";
import Pricing from "@/components/about/Pricing";
import Testimonials from "@/components/common/Testimonials2";
import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import Team from "@/components/homes/home-1/Team";
import React from "react";
import Header10 from "@/components/headers/Header10";
import Hero20 from "@/components/homes/home-20/Hero";
import Footer from "@/components/footers/Footer11";
import Image from "next/image";
import Faq1 from "@/components/faq/Faq1";

export const metadata = {
  title: "Services || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header10 />
        <div className="page-content bg-white">
          <div className="container">
            <div className="our-story text-center p-t80 p-b80">
              <h2 className="title">
                We manufacture using <br /> <span className="text-primary"> “All types of Metals” </span> <br/>
                with precision and versatility.
              </h2>
            </div>
          </div>
          <div className="section-full content-inner overlay-black-dark bg-img-fix">
            <div className="container">
              <div className="section-content text-center text-white">
                <div className="row dzseth">
                  <div className="col-lg-6 col-md-12 m-b30 align-self-center wow rubberBand fly-box-ho" data-wow-delay="0.6s">
                    <div className="content-bx1">
                      <h2 className="m-b15 title">Our Service
                      </h2>
                      <p className="m-b30">
                        At <span className="text-primary">Magdalene Industries</span>, we specialize in delivering high-precision machining and cutting solutions that drive industrial excellence. With state-of-the-art equipment, skilled professionals, and a commitment to quality, <span className="text-primary">decades of experience</span>, we ensure every product meets the highest industry standards. Whether it’s precision cutting, surface grinding, or intricate machining, our services are designed to enhance efficiency, durability, and performance across various industries.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 m-b30 wow rubberBand fly-box-ho" data-wow-delay="0.9s">
                    <div className="video-bx">
                      <Image
                        alt="Signature"
                        src="/images/service.jpg"
                        width="1000"
                        height="674"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Facts/>
          {/* <Team /> */}
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
