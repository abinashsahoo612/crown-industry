import { serviceItems } from "@/data/services";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">
            Premium uPVC Doors & Windows for Every Space
          </h2>
          <p>
            Discover premium uPVC washroom ventilators, sliding doors, French
            doors, and wood finish options—crafted for style, durability, and a
            perfect fit for your space.
          </p>
        </div>
        <div className="row">
          {serviceItems.map((item, i) => (
            <div
              key={i}
              className={`col-lg-4 col-md-6 col-sm-12 m-b50 wow ${item.animationClass}`}
              data-wow-duration="2s"
              data-wow-delay={item.delay}
            >
              <div className="dlab-box service-box-3">
                <div className="dlab-media radius-sm dlab-img-overlay1 zoom dlab-img-effect">
                  <Link href={`/services-details/${item.title}`}>
                    <Image
                      src={item.imgSrc}
                      width={700}
                      height={500}
                      alt=""
                      style={{ height: "270px" }}
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="title">
                    <Link href={`/services-details/${item.title}`}>
                      {item.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
