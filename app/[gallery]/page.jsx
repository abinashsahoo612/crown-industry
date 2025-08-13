'use client';
import { useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Autoplay from "lightgallery/plugins/autoplay";
import Share from "lightgallery/plugins/share";
import Hash from "lightgallery/plugins/hash";
import Image from "next/image";
import Footer from "@/components/footers/Footer11";
import Header10 from "@/components/headers/Header10";
import Hero20 from "@/components/homes/home-20/Hero";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
];

export default function GalleryPage() {
  const galleryRef = useRef();

  return (
    <div className="page-wraper  ">
      <Header10 />
      <div className="page-content bg-white">
        <div style={{ padding: "40px 0", background: "#f8f9fa" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: 32 }}>Gallery</h2>
            <LightGallery
              onInit={(ref) => (galleryRef.current = ref.instance)}
              speed={500}
              plugins={[lgThumbnail, lgZoom, Autoplay, Share, Hash]}
              selector=".gallery-item"
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: 24,
                }}
              >
                {images.map((img, idx) => (
                  <div
                    key={img}
                    style={{
                      position: "relative",
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                      background: "#fff",
                      minHeight: 400, // make card larger
                      transition: "box-shadow 0.3s, transform 0.3s",
                    }}
                    className="gallery-card"
                  >
                    <a
                      href={`/images/gallery/${img}`}
                      className="gallery-item"
                      data-src={`/images/gallery/${img}`}
                      data-lg-size="1400-900"
                      style={{ display: "block", position: "relative", height: "100%" }}
                    >
                      <Image
                        src={`/images/gallery/${img}`}
                        alt={`Gallery ${idx + 1}`}
                        width={800}
                        height={500}
                        style={{
                          width: "100%",
                          height: "400px",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s cubic-bezier(.4,2,.6,1), filter 0.3s",
                        }}
                      />
                      <span className="zoom-plus-icon">
                        <span className="plus-circle">+</span>
                      </span>
                    </a>
                    <style jsx>{`
                      .gallery-card:hover {
                        box-shadow: 0 12px 40px rgba(0,0,0,0.22);
                        transform: translateY(-8px) scale(1.04);
                      }
                      .gallery-item .zoom-plus-icon {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s;
                        background: rgba(0,0,0,0.25);
                        backdrop-filter: blur(2.5px);
                        z-index: 2;
                      }
                      .gallery-item:hover .zoom-plus-icon {
                        opacity: 1;
                      }
                      .plus-circle {
                        width: 64px;
                        height: 64px;
                        border-radius: 50%;
                        border: 2px solid #fff;
                        background: rgba(0,0,0,0.35);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 2.5rem;
                        color: #fff;
                        font-weight: 700;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
                        transition: background 0.2s, border 0.2s;
                        user-select: none;
                      }
                      .gallery-item:hover img {
                        filter: blur(1.5px) brightness(0.85);
                        transform: scale(1.08) rotate(-1deg);
                      }
                    `}</style>
                  </div>
                ))}
              </div>
            </LightGallery>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
