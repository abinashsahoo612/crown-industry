import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks, customFooterLinks } from "@/data/footerLinks";
export default function Footer7() {
  return (
    <footer className="site-footer footer-full text-white">
      <div className="p-tb60 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start text-center footer-logo">
              <img
                alt=""
                width={100}
                src="/images/client-logo/Final_Logo.png"
                height="75"
              />
              <p className="m-b0 m-t10">
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dertzinfotech.com/" target="_blank">
                  Dertzinfotech
                </a>{" "}
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <div className="widget-link">
                <ul>
                  {customFooterLinks.slice(0, 6).map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="list-inline m-b0 m-t10">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <a
                        href={link.href}
                        className={`site-button-link hover ${link.className}`}
                      >
                        <i className={link.iconClass} />
                      </a>
                    </li>{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
