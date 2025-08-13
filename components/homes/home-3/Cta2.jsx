import React from "react";
import Link from "next/link";
export default function Cta2() {
  return (
    <div
      className="section-full call-action bg-primary wow fadeIn"
      data-wow-duration="0s"
      data-wow-delay="0.0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Let’s build the right solution together.</h2>
            {/* <p className="m-b0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p> */}
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact`}
              className="site-button bg-secondry align-self-center  ms-auto outline-2 btnhover14"
            >
              Plan with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
