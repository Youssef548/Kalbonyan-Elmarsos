import React, { useEffect, useState } from "react";
import { links } from "../../data";
import { BsList } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../../index.css";
import "./Nav.css";

const Nav = () => {
  const [navFix, setNavFixed] = useState(false);
  const [active, setActive] = useState(0);

  const [openList, setOpenList] = useState(false);

  const handleClick = (e, index) => {
    setActive(index);
  };
  const handleOpenNav = () => {
    setOpenList(true);
  };
  const handleCloseNav = () => {
    setOpenList(false);
  };

  const fixNav = () => {
    if (window.scrollY < 784) {
      setNavFixed(false);
      setActive(0);
    }
    if (window.scrollY > 783) {
      setNavFixed(true);
      setActive(1);
    }
    if (window.scrollY > 1806) {
      setActive(2);
    }
    if (window.scrollY > 2450) {
      setActive(3);
    }
    if (window.scrollY > 4250) {
      setActive(4);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <div className={`${navFix ? "nav-section fixed" : "nav-section"}`}>
      <nav className={`${openList ? "header-nav open" : "header-nav"}`}>
        <div className="logo">
          <a href="/">Youssef Ahmed</a>
        </div>
        <span className="bullet-list" onClick={handleOpenNav}>
          <BsList />
        </span>
        <ul className="links">
          <span className="close-menu" onClick={handleCloseNav}>
            <AiOutlineCloseCircle />
          </span>
          {links.map((link, index) => {
            const { id, url, text } = link;
            return (
              <li
                key={id}
                onClick={(e) => handleClick(e, index)}
                className={`${active === index ? "active" : ""}`}
              >
                <a href={url} onClick={handleCloseNav}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
