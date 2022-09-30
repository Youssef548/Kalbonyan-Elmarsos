import React from "react";
import Projects from "./Projects";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "./Portfolio.css";

const Portfolio = () => {
  const transition = {
    duration: 1,
    type: useSpring,
  };
  return (
    <motion.section
      id="portfolio"
      className="portfolio"
      whileInView={{ opacity: 1 }}
      transition={transition}
      initial={{
        opacity: 0,
      }}
    >
      <div className="container">
        <div className="portfolio-text">
          <h3 className="portfolio-title">Portfolio</h3>
        </div>
        <Projects />
      </div>
    </motion.section>
  );
};

export default Portfolio;
