import React from "react";

import { links } from "../../data";
import { socialLinks } from "../../data";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <div className="logo">
            <a href="/">Youssef Ahmed</a>
          </div>
          <ul className="footer-links">
            {links.map((link, index) => {
              const { url, text } = link;
              return (
                <li key={index}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
          <ul className="footer-social-links">
            {socialLinks.map((item, index) => {
              const { id, name, icon, url } = item;
              return (
                <li key={index}>
                  <a
                    href={url}
                    alt={name}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="break-line"></div>
        <div className="terms">
          <div className="made-by">
            <h4>Made by youssef ahmed</h4>
          </div>
          <div className="rules">
            <ul>
              <li>privacy policy</li>
              <li>Terms of service</li>
              <li>Cookies Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
