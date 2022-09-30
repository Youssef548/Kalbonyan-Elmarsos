import React from "react";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "./AboutMe.css";
import "../../index.css";
import me from "../../imgs/me.jpg";

const AboutMe = () => {
  const transition = {
    duration: 1,
    type: useSpring,
  };

  return (
    <article className="about-section" id="about">
      <div className="container">
        <div className="about-me">
          <motion.div
            className="img-section"
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform: "translateX(-100%)",
              opacity: 0,
            }}
          >
            <img src={me} alt="my-iamge" />
          </motion.div>
          <motion.div
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform: "translateX(100%)",
              opacity: 0,
            }}
            className="info-section"
          >
            <h3 className="section-title">About Me:</h3>
            <h3 className="about-title">Hi, my name is youssef ahmed</h3>
            <p className="info">
              I am front-end web developer, i have honed skills in web
              development and i have core understanding front-end design
              principles.
            </p>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
