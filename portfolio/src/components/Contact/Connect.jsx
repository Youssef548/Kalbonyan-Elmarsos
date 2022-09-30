import React from "react";

import { socialLinks } from "../../data";

const Connect = () => {
  return (
    <div className="connect-text">
      <h3>connect with me:</h3>
      <p>Statisfied with me? Please contact me</p>
      <ul className="social-icon-links">
        {socialLinks.map((item, index) => {
          const { name, icon, url } = item;
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
  );
};

export default Connect;
