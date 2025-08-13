import React from "react";
import Link from "next/link";

import { customFooterLinks, footerLinks2, socialLinks } from "@/data/footerLinks";
import Gallery from "./Gallery";
export default function Footer11() {
  return (
    <footer className="site-footer text-uppercase bg-white">
      
      <div
        className="footer-top"
        style={{
          backgroundImage: "url(/images/background/bg2.png)",
          backgroundSize: "contain",
        }}
      >
        <div className="container saf-footer">
          <div className="row">
            {/* <div className="col-md-6 col-lg-4 col-sm-6">
              <div className="widget widget_getintuch">
                <h5 className="m-b30 text-white">Contact us</h5>
                <ul>
                  <li>
                    <i className="ti-location-pin" />
                    <strong>address</strong> No,11, MUNUSAMY STREET, 1st Cross, Vanagaram Road, Athipet, Chennai - 600 058.
                  </li>
                  <li>
                    <i className="ti-mobile" />
                    <strong>phone</strong>
                    <a href="tel:+4733378901">+91 91766 14250 </a>
                  </li>
                  <li>
                    <i className="ti-email" />
                    <strong>email</strong>
                    <a href="mailto:knifegates@magdaleneindustries.com">knifegates@magdaleneindustries.com</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div
              className="col-lg-4 col-md-12 col-sm-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="widget widget_getintuch">
                <h5 className="m-b30 text-white">Contact us</h5>
                <div className="icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1">
                  <ul>
                    <li>
                      <i className="ti-location-pin" />
                      <strong>address</strong> No,11, MUNUSAMY STREET, 1st Cross, Vanagaram Road, Athipet, Chennai - 600 058.
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <strong>phone</strong>
                      <a href="tel:+4733378901">+91 91766 14250 </a>
                    </li>
                    <li>
                      <i className="ti-email" />
                      <strong>email</strong>
                      <a href="mailto:knifegates@magdaleneindustries.com">knifegates@magdaleneindustries.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-sm-6">
              <div className="widget widget_getintuch border-0">
                <h5 className="m-b30 text-white">Useful Link</h5>
                <ul>
                  {customFooterLinks.slice(0, 6).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6">
              <div className="widget widget_gallery gallery-grid-4">
                <h5 className="m-b30 text-white">Gallery</h5>
                <Gallery />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-left">
              <span>
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dertzinfotech.com/" target="_blank">
                   &nbsp; Dertzinfotech
                </a>{" "}
                . all rights reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
              <div className="widget-link">
                <ul>
                  <li>
                    <Link href={`/help-desk`}> Help Desk</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}> Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
