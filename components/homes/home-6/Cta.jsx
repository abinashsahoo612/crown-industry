import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <div
      className="section-full call-action bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">
              Transform Your Space with Premium uPVC Doors & Windows
            </h2>
            <p className="m-b0">
              Discover our premium uPVC range—washroom ventilators, sliding
              doors, French doors, UPVC doors, and elegant wood finish options.
              Built for durability, energy efficiency, and style, each solution
              is tailored to your space and taste.
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact-1`}
              className="site-button btnhover15 white align-self-center outline ms-auto radius-xl outline-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
