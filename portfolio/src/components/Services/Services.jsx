import React from "react";
import { services } from "../../data";

import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "./Services.css";

const Services = () => {
  const transition = {
    duration: 0.5,
    type: useSpring,
  };

  return (
    <div className="services-section" id="services">
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ transition }}
          initial={{ opacity: 0 }}
          className="text"
        >
          <h3 className="section-title">what i do</h3>
          <h4 className="special-in">specializing in</h4>
        </motion.div>
        <div className="services">
          {services.map((service) => {
            const { id, serviceIcon, text, serviceInfo } = service;
            return (
              <motion.div
                whileInView={{ opacity: 1 }}
                transition={transition}
                initial={{
                  opacity: 0,
                }}
                key={id}
                className="service-box"
              >
                <div className="service-icon-box">
                  <img
                    className="service-icon"
                    src={serviceIcon}
                    alt={text}
                  ></img>
                  <h3 className="service-title">{text}</h3>
                </div>
                <p className="service-info">{serviceInfo}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="cv"
          whileInView={{ opacity: 1 }}
          transition={transition}
          initial={{
            opacity: 0,
          }}
        >
          <button className="cv-btn">
            <a
              href="https://spiral-antique-cbb.notion.site/Youssef-Ahmed-2c65b83c13e140538b746f7fb5a7c5aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
