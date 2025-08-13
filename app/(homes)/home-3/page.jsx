import About from "@/components/homes/home-10/About";
import Blogs from "@/components/homes/home-3/Blogs";
// import Cta from "@/components/homes/home-3/Cta";
import Cta2 from "@/components/homes/home-3/Cta2";
import Features from "@/components/homes/home-3/Features";
import Projects from "@/components/homes/home-3/Projects";
import Team from "@/components/homes/home-3/Team";
import Testimonials from "@/components/common/Testimonials2";
import React from "react";
import Hero from "@/components/homes/home-11/Hero";
import Hero20 from "@/components/homes/home-20/Hero";
import Header4 from "@/components/headers/Header4";
import Footer7 from "@/components/footers/Footer7";
import { services5 } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import Header10 from "@/components/headers/Header10";
import Footer15 from "@/components/footers/Footer15";
import Footer3 from "@/components/footers/Footer3";
import Footer12 from "@/components/footers/Footer12";
import Footer from "@/components/footers/Footer11";
import LogoCarousel from "./logoSlider";
import Cta from "@/components/homes/home-11/Cta";

export const metadata = {
  title: "Home 3 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header10 />
        <div className="page-content bg-white">
          <Hero />
          <Cta />
          <About />
          <div className="section-full content-inner bg-gray">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="title">Our Services</h2>
                <p>
                  From design to delivery, we craft reliable knife gate valves
                  for critical applications. Engineered for efficiency, built to
                  withstand tough industrial environments.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="section-content row">
                    {services5.map((service, index) => (
                      <div
                        key={index}
                        className="col-lg-4 col-md-6 service-box style3 "
                        data-wow-duration="2s"
                        data-wow-delay={service.delay}
                      >
                        <div
                          className="icon-bx-wraper"
                          data-name={`0${index + 1}`}
                        >
                          <div className="icon-lg">
                            <a href="#" className="icon-cell">
                              <i className={service.icon} />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h2 className="dlab-title">{service.title}</h2>
                            <p className="">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-block">
            <div className="section-full content-inner">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="title">Our clients</h4>
                </div>
                <LogoCarousel />
              </div>
            </div>
            <div className="section-full content-inner pt-0">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="title">What We Manufacture!</h4>
                </div>
                <div className="row gx-5">
                  <div className="col-lg-6 m-t10">
                    <Image
                      alt=""
                      src="/images/prod.jpg"
                      width="700"
                      height="459"
                    />
                  </div>
                  <div className="col-lg-6 m-b30">
                    <h4 className="text-black font-weight-600 m-b15">
                      As pioneers in the industry, we specialize in crafting
                      Knife Gates.
                    </h4>
                    <h3 className="text-primary">23,000 sq. ft. facility</h3>
                    <p>
                      At Magdalene Industries, precision meets innovation. With
                      decades of expertise in knife gate manufacturing, we
                      engineer high-performance solutions tailored to meet the
                      toughest industry demands. Our 23,000 sq. ft. facility,
                      equipped with advanced technology and a skilled workforce,
                      ensures that every product we deliver upholds our
                      commitment to quality, durability, and efficiency.
                    </p>
                    <p>
                      Our precision-engineered knife gates ensure reliable flow
                      control in demanding applications. Built for durability,
                      they provide tight seals for slurries, powders, and thick
                      fluids, making them ideal for industries like pulp &
                      paper, mining, wastewater, and chemicals.
                    </p>
                    <Link
                      href={`/product`}
                      className="site-button bg-secondry btnhover14"
                    >
                      Read More
                    </Link>
                    {/* <div className="row">
                      <div className="col-lg-12">
                        <div className="icon-bx-wraper m-b30 left">
                          <div className="icon-md">
                            <a href="#" className="icon-cell text-primary">
                              <i className="flaticon-factory" />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">Dependable Partnerships</h5>
                            <p>
                              We build long-term relationships by delivering consistent quality and meeting critical deadlines.
                            </p>
                          </div>
                        </div>
                        <div className="icon-bx-wraper m-b30 left">
                          <div className="icon-md">
                            <a href="#" className="icon-cell text-primary">
                              <i className="flaticon-settings" />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte"> Relentless Innovation</h5>
                            <p>
                              We continuously invest in advanced technologies and manufacturing processes, delivering future-ready solutions that push industry standards.
                            </p>
                          </div>
                        </div>
                        <div className="icon-bx-wraper left">
                          <div className="icon-md">
                            <a href="#" className="icon-cell text-primary">
                              <i className="flaticon-worker" />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">End-to-End Reliability</h5>
                            <p>
                              From raw material selection to final inspection, we maintain strict control at every stage — guaranteeing quality you can trust, every time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="section-full content-inner bg-white">
              <div className="container">
                <h2 className="text-center text-black font-weight-600 m-b50">
                  Built On Trust & Precision
                </h2>
                <div className="row align-item-center gx-5">
                  <div className="col-lg-6 m-b30">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="icon-bx-wraper m-b30 left">
                          <div className="icon-md">
                            <a href="#" className="icon-cell text-primary">
                              <i className="flaticon-factory" />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">
                              Dependable Partnerships
                            </h5>
                            <p>
                              We build long-term relationships by delivering
                              consistent quality and meeting critical deadlines.
                            </p>
                          </div>
                        </div>
                        <div className="icon-bx-wraper m-b30 left">
                          <div className="icon-md">
                            <a href="#" className="icon-cell text-primary">
                              <i className="flaticon-settings" />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">
                              {" "}
                              Relentless Innovation
                            </h5>
                            <p>
                              We continuously invest in advanced technologies
                              and manufacturing processes, delivering
                              future-ready solutions that push industry
                              standards.
                            </p>
                          </div>
                        </div>
                        <div className="icon-bx-wraper left">
                          <div className="icon-md">
                            <a href="#" className="icon-cell text-primary">
                              <i className="flaticon-worker" />
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte">
                              End-to-End Reliability
                            </h5>
                            <p>
                              From raw material selection to final inspection,
                              we maintain strict control at every stage —
                              guaranteeing quality you can trust, every time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Image
                      alt=""
                      src="/images/our_commitment.png"
                      width="700"
                      height="459"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overlay-black-middle bg-secondry"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              // style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
            >
              <div style={{position: "absolute", height: "100%", width: "100%"}}>
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  poster=""
                  src="https://magdaleneindustries.com/wp-content/uploads/2025/03/ojkj-1.mp4"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="container  content-inner-2">
                <div className="row">
                  <div className="col-lg-12 text-center service-info">
                    <h2 className="title text-white">
                      Amazing things happen to your business when we connect
                      those dots of utility and value.
                    </h2>
                    <p className="text-white">
                      Our precision-engineered knife gates ensure reliable flow
                      control in demanding applications. Built for durability,
                      they provide tight seals for slurries, powders, and thick
                      fluids, making them ideal for industries like pulp &
                      paper, mining, wastewater, and chemicals.
                    </p>
                    <div style={{ marginTop: "25px" }}>
                      <Link
                        href={`/contact`}
                        className="site-button white align-self-center outline ms-auto outline-2 btnhover14"
                      >
                        Plan with us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="section-full">
              <video autoPlay playsInline muted loop poster="" src="https://magdaleneindustries.com/wp-content/uploads/2025/03/ojkj-1.mp4">
               
                Your browser does not support the video tag.
              </video>
            </div> */}
            {/* <Cta /> */}
            {/* <Projects /> */}
            {/* <Testimonials />  */}
            {/* <Blogs /> */}
            <Team />
            {/* <Features /> */}
            <Cta2 />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
