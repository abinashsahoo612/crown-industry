"use client";
import { galleryItems3 } from "@/data/gallery";

import Image from "next/image";
import React from "react";

import GallaryWrapper from "../common/GallaryWrapper";

export default function GalleryComponent() {
  const images = [
  {
    id: 1,
    exthumbimage: "/images/gallery/img1.jpg",
    src: "/images/gallery/img1.jpg",
    title: "Title Come here 1",
  },
  {
    id: 2,
    exthumbimage: "/images/gallery/img2.jpg",
    src: "/images/gallery/img2.jpg",
    title: "Title Come here 2",
  },
  {
    id: 3,
    exthumbimage: "/images/gallery/img3.jpg",
    src: "/images/gallery/img3.jpg",
    title: "Title Come here 3",
  },
  {
    id: 4,
    exthumbimage: "/images/gallery/img4.jpg",
    src: "/images/gallery/img4.jpg",
    title: "Title Come here 4",
  },
  {
    id: 5,
    exthumbimage: "/images/gallery/img5.jpg",
    src: "/images/gallery/img5.jpg",
    title: "Title Come here 5",
  },
  {
    id: 6,
    exthumbimage: "/images/gallery/img6.jpg",
    src: "/images/gallery/img6.jpg",
    title: "Title Come here 6",
  },
  {
    id: 7,
    exthumbimage: "/images/gallery/img7.jpg",
    src: "/images/gallery/img7.jpg",
    title: "Title Come here 7",
  },
  {
    id: 8,
    exthumbimage: "/images/gallery/img8.jpg",
    src: "/images/gallery/img8.jpg",
    title: "Title Come here 8",
  },
  {
    id: 9,
    exthumbimage: "/images/gallery/img9.jpg",
    src: "/images/gallery/img9.jpg",
    title: "Title Come here 9",
  },
  {
    id: 10,
    exthumbimage: "/images/gallery/img10.jpg",
    src: "/images/gallery/img10.jpg",
    title: "Title Come here 10",
  }
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
