"use client";
import { projectItems } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="section-full content-inner-2 bg-white">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Project</h2>
          <p>
            Our projects reflect our commitment to quality and customer
            satisfaction. We’re proud to have earned excellent feedback from
            clients who appreciate our attention to detail
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <video
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              style={{
                maxWidth: "100%",
                height: "280px",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                background: "#000",
                objectFit: "cover",
              }}
            >
              <source src="/video/project1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <video
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              style={{
                maxWidth: "100%",
                height: "280px",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                background: "#000",
                objectFit: "cover",
              }}
            >
              <source src="/video/project2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <img
              alt=""
              src="/images/project/project_image1.png"
              style={{ height: "300px", width: "100%", borderRadius: "12px" }}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-4 text-center">
            <img
              alt=""
              src="/images/project/project_image2.jpeg"
              style={{ height: "300px", width: "100%", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
