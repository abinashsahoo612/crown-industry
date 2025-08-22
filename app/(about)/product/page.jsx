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
    imageSrc: "/images/product/ventilator.png",
    description:
      "Enhance ventilation and maintain hygiene with our high-quality Washroom Ventilator. Designed to allow maximum air circulation while ensuring privacy, this ventilator is made from durable materials that resist moisture and corrosion. Its sleek frame and smooth finish complement modern bathroom interiors, while the easy-to-operate design makes cleaning and maintenance effortless. Whether for homes, offices, or commercial spaces, our ventilators ensure a fresh and odor-free washroom environment all year round.",
  },
  {
    altText: "Sliding Door",
    imageSrc: "/images/product/slidingdoor.png",
    description:
      "Bring a perfect blend of functionality and style to your interiors with our Sliding Doors. Ideal for modern homes and office spaces, these doors save space while adding an elegant touch. Made from high-quality materials, the sliding mechanism ensures smooth and noiseless operation, making them a practical choice for rooms, balconies, or wardrobes. With multiple design and finish options, our sliding doors enhance the beauty of any space while providing ease of access.",
  },
  {
    altText: "French Door",
    imageSrc: "/images/product/frenchdoor.png",
    description:
      "Redefine elegance with our classic French Doors that blend timeless style with modern engineering. Featuring wide glass panels framed with UPVC or wood finish, French doors allow natural light to flow indoors, creating a bright and welcoming ambiance. Perfect for connecting interior and exterior spaces, these doors provide superior insulation, durability, and aesthetic appeal.",
  },
  {
    altText: "UPVC Door",
    imageSrc: "/images/product/upvcdoor.png",
    description:
      "Our UPVC Doors are designed for strength, style, and sustainability. Crafted with premium-grade UPVC, these doors offer excellent insulation against noise, heat, and dust while requiring minimal maintenance. Resistant to termites, rust, and moisture, they are perfect for both interior and exterior use. Available in multiple colors, textures, and designs, UPVC doors combine functionality with a modern aesthetic, making them an ideal long-term investment for your home or office.",
  },
  {
    altText: "Wood Finish UPVC",
    imageSrc: "/images/product/woodupvc.png",
    description:
      "Get the natural warmth of wood with the durability of UPVC through our Wood Finish UPVC Doors & Windows. These products perfectly mimic the look and feel of real wood while offering the advantages of UPVC—resistance to termites, moisture, and fading. Ideal for homeowners who love wooden aesthetics without the hassle of maintenance, our wood finish UPVC range adds elegance and sophistication to any space.",
  },
];

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
            <div className="section-full overlay-white-middle content-inner">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10" style={{ width: "100%" }}>
                    <div
                      className="card shadow"
                      style={{
                        borderRadius: "18px",
                        overflow: "hidden",
                        border: "none",
                        background: "#fff",
                      }}
                    >
                      <div className="row align-items-center g-0">
                        {idx % 2 === 0 ? (
                          <>
                            <div className="col-md-6">
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  minHeight: 320,
                                  position: "relative",
                                }}
                              >
                                <Image
                                  alt={product.altText}
                                  src={product.imageSrc}
                                  width={700}
                                  height={459}
                                  style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="p-4">
                                <p
                                  style={{
                                    fontSize: "1.1rem",
                                    marginBottom: 0,
                                  }}
                                >
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-md-6">
                              <div className="p-4">
                                <p
                                  style={{
                                    fontSize: "1.1rem",
                                    marginBottom: 0,
                                  }}
                                >
                                  {product.description}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  minHeight: 320,
                                  position: "relative",
                                }}
                              >
                                <Image
                                  alt={product.altText}
                                  src={product.imageSrc}
                                  width={700}
                                  height={459}
                                  style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                />
                              </div>
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
