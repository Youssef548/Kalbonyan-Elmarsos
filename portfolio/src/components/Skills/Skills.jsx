import React from "react";

import { skills } from "../../data";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "./Skills.css";
const Skills = () => {
  const transition = {
    duration: 1,
    type: useSpring,
  };

  return (
    <div className="skills-break">
      <div className="container">
        <motion.ul
          whileInView={{ opacity: 1 }}
          transition={{ transition }}
          initial={{
            opacity: 0,
          }}
          className="skills"
        >
          {skills.map((skill) => {
            const { id, image, text } = skill;
            return (
              <li key={id}>
                <img src={image} alt={text} />
              </li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
