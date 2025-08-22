import About from "@/components/about/About";
import Banner from "@/components/about/Banner";
import Facts from "@/components/common/Facts";
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
import Header6 from "@/components/headers/Header6";

export const metadata = {
  title: "About || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
const images = [
  {
    src: "/images/about/about_img5.png",
    alt: "Image 1",
    title: "Our Vision",
    description:
      "To set the benchmark for quality and innovation in uPVC doors, windows, and ventilators, making every space more comfortable and secure.",
  },
  {
    src: "/images/about/about_img6.png",
    alt: "Image 2",
    title: "Our Mission",
    description:
      "Deliver reliable, stylish uPVC solutions and expert fitting services, always tailored to our customers’ needs.",
  },
];
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header6 />
        <div className="page-content bg-white">
          <About />
          {/* <Facts /> */}
          <Faq1 />
          <div className="container">
            <div className="row">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="dlab-box m-b30 dlab-team1">
                    <div className="dlab-media">
                      <Image
                        width={358}
                        height={460}
                        alt=""
                        className="lazy"
                        src={item.src}
                      />
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <h4>{item.title}</h4>
                      </h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <Team /> */}
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
