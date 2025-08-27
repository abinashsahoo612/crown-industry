import React from "react";
import Header6 from "@/components/headers/Header6";
import Footer from "@/components/footers/Footer11";
import Image from "next/image";
import Fact from "./fact";

export const metadata = {
  title: "Product || Crown Industries - uPVC Doors, Windows & Ventilators",
  description: "Crown Industries - Premium uPVC Doors, Windows & Ventilators",
};

const productList = [
  {
    altText: "Washroom Ventilator",
    header: "Washroom Ventilator",
    imageSrc: "/images/product/ventilator.png",
    bgColor: "#f6f3f9",
    description:
      "Improve washroom ventilation with our durable, moisture-resistant ventilator. Designed for maximum airflow and privacy, it features a sleek finish that complements modern interiors. Easy to clean and maintain, it keeps spaces fresh and odor-free year-round",
  },
  {
    altText: "Sliding Door",
    header: "Sliding Door",
    imageSrc: "/images/product/slidingdoor.png",
    bgColor: "#edf2fc",
    description:
      "Add style and functionality with our space-saving Sliding Doors. Built with durable materials for smooth, silent operation, they suit rooms, balconies, and wardrobes while offering elegant design options to enhance any space.",
  },
  {
    altText: "French Door",
    header: "French Door",
    bgColor: "#f6f3f9",
    imageSrc: "/images/product/frenchdoor.png",
    description:
      "Redefine elegance with our French Doors, featuring wide glass panels in UPVC or wood finish. They brighten interiors with natural light while offering durability, insulation, and timeless style for both indoor and outdoor spaces.",
  },
  {
    altText: "UPVC Door",
    header: "UPVC Door",
    bgColor: "#edf2fc",
    imageSrc: "/images/product/upvcdoor.png",
    description:
      "Our UPVC Doors combine strength, style, and low maintenance. Offering insulation from noise, heat, and dust, they resist rust, termites, and moisture—making them a durable choice for both interiors and exteriors with versatile design options.",
  },
  {
    altText: "Wood Finish UPVC",
    header: "Wood Finish UPVC",
    bgColor: "#f6f3f9",
    imageSrc: "/images/product/woodupvc.png",
    description:
      "Enjoy the warmth of wood with the durability of UPVC in our Wood Finish Doors & Windows. They replicate natural wood while resisting termites, moisture, and fading—offering elegant aesthetics with minimal maintenance.",
  },
];

const productDescription = ({ product, left = false }) => {
  return (
    <div className="p-4" style={{ paddingLeft: left ? "80px !important" : "" }}>
      <strong
        style={{
          fontSize: "1.5rem",
          marginBottom: "12px",
          display: "block",
          fontWeight: "600",
          color: "#697183",
          lineHeight: "1.3",
        }}
      >
        {product.header}
      </strong>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: 0,
          color: "#697183",
        }}
      >
        {product.description}
      </p>
    </div>
  );
};

const productImageSection = ({ product }) => {
  return (
    <div
      // className="p-4"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 320,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: "1.5rem 1.5rem 0px 1.5rem !important",
      }}
    >
      <Image
        alt={product.altText}
        src={product.imageSrc}
        width={700}
        height={459}
        style={{
          objectFit: "fill",
          width: "350px",
          height: "350px",
          borderTopRightRadius: "18px",
          borderTopLeftRadius: "18px",
          position: "relative",
          boxShadow: "0 -10px 20px 0 rgba(0, 0, 0, .341)",
        }}
      />
    </div>
  );
};

export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header6 />
        <div className="page-content bg-white p-0">
          <div className="container p-t80">
            <div className="our-story text-center">
              <h2 className="title">
                Engineered for Modern Living <br />
                <span className="text-primary">Lasting Performance</span> <br />
                Trusted Quality
              </h2>
            </div>
          </div>
          {productList.map((product, idx) => (
            <div className="section-full overlay-white-middle content-inner-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div
                      className="card shadow"
                      style={{
                        borderRadius: "18px",
                        overflow: "hidden",
                        border: "none",
                        background: "#fff",
                        backgroundColor: product.bgColor,
                        height: "100%",
                      }}
                    >
                      <div className="row  g-0" style={{ minHeight: "400px" }}>
                        {idx % 2 === 0 ? (
                          <>
                            <div className="col-md-6">
                              {productImageSection({ product })}
                            </div>
                            <div
                              className="col-md-6"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {productDescription({ product })}
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className="col-md-6"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {productDescription({ product, left: true })}
                            </div>
                            <div className="col-md-6">
                              {productImageSection({ product })}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
