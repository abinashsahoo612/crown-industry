"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="section-full content-inner bg-white video-section"
        style={{ backgroundImage: 'url("/images/background/bg-video.png")' }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row d-flex">
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="video-bx">
                  <Image
                    alt="Signature"
                    src="/images/about/pic5.jpg"
                    width="1000"
                    height="674"
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-youtube video bg-primary"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                <div className="content-bx1">
                 
                  <p className="m-b30">
                    At Magdalene Industries, precision isn’t just a goal — it’s our standard. With over three decades of specialized experience in Knife Gate Valve manufacturing, we deliver solutions that drive performance across industries.
                  </p>
                  <div className="alert alert-warning no-bg">
                    Backed by two fully equipped facilities covering 23,000 sq. ft. and a dedicated two-shift workforce, we ensure every product meets the highest standards of quality, durability, and timely delivery.
                  </div>
                  <p className="m-b30">
                    Our passion for innovation and commitment to excellence have earned us the trust of customers worldwide — and we’re just getting started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
