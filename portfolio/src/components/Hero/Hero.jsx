import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import myImage from "../../imgs/header-img.png";
import Break from "../Break/Break";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "../../index.css";
import "./Hero.css";
const Hero = () => {
  const transition = { duration: 1, type: useSpring };
  return (
    <header className="hero-section" id="home">
      <div className="container">
        <div className="hero">
          <motion.div
            className="my-info"
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform: "translateX(-100%)",
              opacity: 0,
            }}
          >
            <h1 className="welcome-title">hello, im</h1>
            <h2 className="name-title">Youssef Ahmed</h2>
            <p className="info">Front-End Developer</p>
            <div className="btns-container">
              <button className="aboutme-btn">
                <a href="#about">
                  about me{" "}
                  <span className="icon">
                    <BsFillPersonFill />
                  </span>
                </a>
              </button>
              <button className="projects-btn">
                <a href="#portfolio">
                  projects
                  <span className="icon">
                    <AiFillEye />
                  </span>
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            className="img-hero"
            whileInView={{ opacity: 1, transform: "translateX(0%)" }}
            transition={transition}
            initial={{
              opacity: 0,
              transform: "translateX(100%)",
            }}
          >
            <img src={myImage} alt="profile img" />
            <div className="img-bg"></div>
          </motion.div>
        </div>
      </div>
      {/* <Break /> */}
    </header>
  );
};

export default Hero;
