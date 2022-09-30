import React, { useState, useEffect } from "react";

import {
  // AnimatePresence,
  motion,
  // useSpring,
} from "framer-motion/dist/framer-motion";

import { projectsData } from "../../data";
import { projectsNav } from "../../data";

import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  // const transition = {
  //   duration: 0.3,
  //   type: useSpring,
  // };
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (item.name === "all") {
      return setProjects(projectsData);
    }
    const newProjets = projectsData.filter((project) => {
      return project.category.toLowerCase() === item.name;
    });
    setProjects(newProjets);
  }, [item]);

  const handleClick = (event, index) => {
    setItem({ name: event.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="portfolio-projects">
      <nav className="portfolio-nav">
        <ul className="portfolio-items">
          {projectsNav.map((project, index) => {
            const { id, name } = project;
            return (
              <li
                onClick={(e) => {
                  handleClick(e, id);
                }}
                className={`${active === id ? "active" : ""}`}
                key={id}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section>
        <motion.div
          layout
          className="projects-data"
          whileInView={{ opacity: 1 }}
          initial={{
            opacity: 0,
          }}
        >
          {projects.map((project) => {
            return <Project project={project} key={project.id} />;
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
