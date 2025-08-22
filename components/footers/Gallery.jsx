"use client";
import { galleryItems3 } from "@/data/gallery";

import Image from "next/image";
import React from "react";

import GallaryWrapper from "../common/GallaryWrapper";

export default function GalleryComponent() {
  const images = [
    {
      id: 1,
      exthumbimage: "/images/gallery/slide1.jpg",
      src: "/images/gallery/slide1.jpg",
      title: "Title Come here 1",
    },
    {
      id: 2,
      exthumbimage: "/images/gallery/slide2.webp",
      src: "/images/gallery/slide2.webp",
      title: "Title Come here 2",
    },
    {
      id: 3,
      exthumbimage: "/images/gallery/slide3.avif",
      src: "/images/gallery/slide3.avif",
      title: "Title Come here 3",
    },
    {
      id: 4,
      exthumbimage: "/images/gallery/slide4.webp",
      src: "/images/gallery/slide4.webp",
      title: "Title Come here 4",
    },
    {
      id: 5,
      exthumbimage: "/images/gallery/slide5.jpg",
      src: "/images/gallery/slide5.jpg",
      title: "Title Come here 5",
    },
    {
      id: 6,
      exthumbimage: "/images/gallery/slide6.avif",
      src: "/images/gallery/slide6.avif",
      title: "Title Come here 6",
    },
    {
      id: 7,
      exthumbimage: "/images/gallery/slide7.jpg",
      src: "/images/gallery/slide7.jpg",
      title: "Title Come here 7",
    },
    {
      id: 8,
      exthumbimage: "/images/gallery/slide8.png",
      src: "/images/gallery/slide8.png",
      title: "Title Come here 8",
    },
    {
      id: 9,
      exthumbimage: "/images/gallery/slide9.png",
      src: "/images/gallery/slide9.png",
      title: "Title Come here 9",
    },
    {
      id: 10,
      exthumbimage: "/images/gallery/slide10.png",
      src: "/images/gallery/slide10.png",
      title: "Title Come here 10",
    },
  ];
  return (
    <ul className="lightgallery">
      <GallaryWrapper>
        {images.map((item, i) => (
          <li key={i} className="img-effect2">
            <span
              data-exthumbimage={item.src}
              data-src={item.src}
              className="check-km"
            >
              <Image alt="" src={item.src} width="100" height="90" />
            </span>
          </li>
        ))}{" "}
      </GallaryWrapper>
    </ul>
  );
}
