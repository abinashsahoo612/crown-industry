import Contact4 from "@/components/contact/Contact4";
import Footer from "@/components/footers/Footer11";
import Header10 from "@/components/headers/Header10";
import Hero from "@/components/homes/home-20/Hero";
import React from "react";

export const metadata = {
  title: "Contact 4 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header10 />
        <div className="page-content bg-white">
          <Contact4 />
        </div>
        <Footer />
      </div>
    </>
  );
}
