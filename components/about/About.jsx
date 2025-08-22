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
                  <video
                    width="100%"
                    height="auto"
                    controls
                    autoPlay
                    muted
                    style={{
                      maxWidth: "100%",
                      height: "470px",
                      borderRadius: "12px",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                      background: "#000",
                      objectFit: "cover",
                    }}
                  >
                    <source src="/video/industry.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx">
                <div className="content-bx1">
                  <p className="m-b30">
                    At Crown Industries, we specialize in designing and
                    manufacturing high-quality uPVC doors, windows, and
                    ventilators tailored to modern living. Our product range
                    includes washroom ventilators, sliding doors, French doors,
                    UPVC doors, and elegant wood finish UPVC solutions—each
                    crafted for durability, style, and energy efficiency.
                  </p>
                  <div className="alert alert-warning no-bg">
                    We understand that every space is unique. That’s why our
                    experienced team offers professional fitting and
                    installation services, ensuring every product is customized
                    and installed to meet your exact requirements and deliver
                    lasting performance.
                  </div>
                  <p className="m-b30">
                    With a commitment to quality, innovation, and customer
                    satisfaction, Crown Industries has become a trusted partner
                    for homeowners, architects, and builders. From consultation
                    to installation, we’re dedicated to enhancing your spaces
                    with products that combine functionality, aesthetics, and
                    reliability.
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
