import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import "./Project.css";
const Project = (props) => {
  const { projectImage, projectName, projectDesc, demoLink, gitHubLink, id } =
    props.project;

  return (
    <motion.div layout className="project-box" key={id}>
      <img src={projectImage} alt={projectName} />
      <div className="project-box-text">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-info">{projectDesc}</p>
        <div className="link-btns">
          <a
            className="btn view-demo"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            alt="demo-link"
          >
            view live
          </a>
          <a
            className="btn git-repo"
            href={gitHubLink}
            alt="repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
