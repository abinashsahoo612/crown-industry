"use client";

import React from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { teamData } from "@/data/team";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Contact4() {
  return (
    <>
      <div className="section-full content-inner bg-white contact-style-1">
        <div className="container">
          {/* <div className="section-full bg-white content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team6">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          alt=""
                          src="/images/our-team/pic2.jpg"
                          width="500"
                          height="500"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">Reginald Thomas</a>
                      </h4>
                      <span className="dlab-position">Proprietor</span>
                      <h5>+91 8939723284</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team6">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          alt=""
                          src="/images/our-team/pic3.jpg"
                          width="500"
                          height="600"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">C.K Ashis</a>
                      </h4>
                      <span className="dlab-position">Prodict Manager</span>
                      <h5>+91 8939723284</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="dlab-box m-b30 dlab-team6">
                    <div className="dlab-media">
                      <a href="#">
                        <Image
                          alt=""
                          src="/images/our-team/pic4.jpg"
                          width="500"
                          height="600"
                        />
                      </a>
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="#">Danish Jonathan</a>
                      </h4>
                      <span className="dlab-position">Commercial Manager</span>
                      <h5>+91 8939723284</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            {/* Left part start */}
            <div className="col-lg-6 col-md-6 d-flex m-b30">
              <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm">
                <h3 className="m-b5">Quick Contact</h3>
                <p>
                  If you have any questions simply use the following contact
                  details.
                </p>
                <ul className="no-margin">
                  <li className="icon-bx-wraper left m-b30">
                    <div className="icon-bx-xs border-1">
                      <a href="#" className="icon-cell">
                        <i className="ti-location-pin" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">
                        Address:
                      </h6>
                      <p>
                        D2 - 18, Sancoale Industrial Estate, Zuarinagar,
                        Sancoale, Goa 403726.
                      </p>
                    </div>
                  </li>
                  <li className="icon-bx-wraper left m-b30">
                    <div className="icon-bx-xs border-1">
                      <a href="#" className="icon-cell">
                        <i className="ti-email" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">
                        Email:
                      </h6>
                      <p>
                        <a href="mailto:crowntechnogoa@gmail.com">
                          crowntechnogoa@gmail.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="icon-bx-wraper left">
                    <div className="icon-bx-xs border-1">
                      <a href="#" className="icon-cell">
                        <i className="ti-mobile" />
                      </a>
                    </div>
                    <div className="icon-content">
                      <h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                      <p>
                        <a href="tel:+917700005459">+91 77000 05459</a>
                      </p>
                    </div>
                  </li>
                </ul>
                {/* <div className="m-t20">
                  <ul className="dlab-social-icon border dlab-social-icon-lg">
                    <li>
                      <a href="#" className="fab fa-facebook-f bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-twitter bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-linkedin-in bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-pinterest-p bg-primary" />
                    </li>{" "}
                    <li>
                      <a href="#" className="fab fa-google-plus-g bg-primary" />
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            {/* Left part END */}
            {/* right part start */}
            <div className="col-lg-6 m-b30 ">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Crown%20Industries%20Gos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                className="align-self-stretch radius-sm"
                style={{ border: 0, width: "100%", minHeight: "100%" }}
                allowFullScreen=""
              />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7772.330837559481!2d80.1527983425922!3d13.088700698950095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo%2C11%2C%20MUNUSAMY%20STREET%2C%201st%20Cross%2C%20Vanagaram%20Road%2C%20Athipet%2C%20Chennai%20-%20600%20058.!5e0!3m2!1sen!2sin!4v1753955976100!5m2!1sen!2sin"
                className="align-self-stretch radius-sm"
                style={{ border: 0, width: "100%", minHeight: "50%" }}
                allowFullScreen=""
              /> */}
            </div>
            {/* right part END */}
          </div>
          {/* <div className="site-footer style1 bg-grey">
            <div className="section-full p-t50 p-b20 text-white  footer-info-bar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div
                      className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1"
                      style={{ border: "2px solid #e87800" }}
                    >
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-location-pin" />
                          </span>
                          Plant-1 Address
                        </h5>
                        <p className="op7">
                          No,11, MUNUSAMY STREET, 1st Cross, Vanagaram Road,
                          Athipet, Chennai - 600 058.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div
                      className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1"
                      style={{ border: "2px solid #e87800" }}
                    >
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-map" />
                          </span>
                          Plant-2 Address
                        </h5>
                        <p className="op7">
                          NO.377, AMBATTUR LAKE, NATESAN NAGAR Nageswara Road,
                          Vanagaram Road Athipet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div
                      className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1"
                      style={{ border: "2px solid #e87800" }}
                    >
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-email" />
                          </span>
                          E-mail
                        </h5>
                        <p className="op7">For any queries Mail Us</p>
                        <p className="op7">
                          <a href="mailto:knifegates@magdaleneindustries.com">
                            knifegates@magdaleneindustries.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div
                      className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1"
                      style={{ border: "2px solid #e87800" }}
                    >
                      <div className="icon-content">
                        <h5 className="dlab-tilte">
                          <span className="icon-sm">
                            <i className="ti-mobile" />
                          </span>
                          Phone Numbers
                        </h5>
                        <p className="op7">For any queries give us a call</p>
                        <p className="m-b0 op7">
                          Mobile : <a href="tel:+4733378901">+91 91766 14250</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                  <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1" style={{ border: "2px solid #e87800" }}>
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm">
                          <i className="ti-alarm-clock" />
                        </span>
                        Office Hours
                      </h5>
                      <p className="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                      <p className="op7">Sunday - Close</p>
                    </div>
                  </div>
                </div> 
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
