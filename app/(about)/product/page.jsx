import React from "react";
import Header10 from "@/components/headers/Header10";
import Hero20 from "@/components/homes/home-20/Hero";
import Footer from "@/components/footers/Footer11";
import Image from "next/image";
import Fact from "./fact";
import Banner from "@/components/about/Banner";

export const metadata = {
  title: "Product || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header10 />
        
        <div className="page-content bg-white  p-0">
            
            <div className="container p-t80">
                <div className="our-story text-center">
                <h2 className="title">
                    Built to last with precision <br /> <span className="text-primary"> Unyielding performance </span> <br/>
                    Uncompromising quality
                </h2>
                </div>
            </div>
            <div className="section-full overlay-white-middle content-inner">
                <div className="container">
                    <div className="section-head text-black text-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 m-b30">
                                <Image
                                alt=""
                                src="/images/product/prod1.png"
                                width="700"
                                height="459"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <p>At Magdalene Industries, we manufacture high-precision gates for knife gate valves, engineered for exceptional shut-off control in the most demanding industrial environments. These gates feature round openings, making them ideal for handling slurries, pulp stock, and corrosive fluids with consistent performance and minimal wear. Built using premium materials like stainless steel grades 304, 316, 2205, Inconel 600, and Monel 400, our gates are designed to offer unmatched durability and corrosion resistance. Each gate undergoes advanced machining to tight tolerances and enhanced surface finishing, such as grinding and polishing, for smoother operation and extended valve life. With options for customized coatings, edge profiles, and tailored builds, we deliver solutions that meet the exact needs of your operation ensuring long-lasting reliability and operational excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fact />
            <div className="section-full overlay-white-middle content-inner">
                <div className="container">
                    <div className="section-head text-black text-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 m-b30">
                                <p>With a commitment to engineering excellence, Magdalene Industries goes beyond standard manufacturing by offering precision-crafted knife gate valve components tailored to your unique operational demands. Our advanced fabrication processes ensure every gate delivers superior shut-off accuracy, even in high-pressure and corrosive environments. By integrating premium alloys such as Stainless Steel 316Ti, 317L, 2507, and specialty materials like Monel and Inconel, we ensure each product withstands extreme industrial conditions. From surface treatments that enhance wear resistance to custom edge profiles and specialty coatings, every gate is a result of rigorous quality control and precision craftsmanship. Trust Magdalene Industries to deliver performance-driven solutions that keep your systems efficient, secure, and running at peak reliability.</p>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <Image
                                alt=""
                                src="/images/product/prod2.png"
                                width="700"
                                height="459"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
