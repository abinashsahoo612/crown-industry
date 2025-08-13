import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="react-parallax "
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        src="/images/knifvalv.png"
        alt=""
      fill
        style={{
          position: "absolute",
          left: "0%",
          top: "0px",
          width: "100%",
          filter: "brightness(0.8)",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: "100%",
          width: "100%",
          filter: "none",
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
      <div
        className="hero-sec react-parallax-content"
        style={{ position: "relative" }}
      >
        <div className="hero-section overlay2 relative home-slider-11">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-wrapper height-70 container ">
                  <div className="hero-content custom-hero">
                    <div className="subtitle style3">
                      Building up vision leading future
                    </div>
                    <h1 className="title style3">
                      Precision Engineered Knife Gate Valves for the Toughest Applications
                    </h1>
                    <div className="subtitle fs-16">
                      Delivering reliable flow control solutions for mining, wastewater, pulp & paper, and heavy industries worldwide.
                    </div>
                    <Link className="site-button" href="/services">
                      our services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
