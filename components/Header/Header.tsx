"use client";

import { useEffect, useState } from "react";
import { headerData } from "../../Data/header-data";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.scss";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => setActiveMenu(!activeMenu);

  return (
    <>
      <MobileMenu activeMenu={activeMenu} toggleMenu={toggleMenu} />
      <header className={`header ${!show ? "hidden" : ""}`}>
        <div className="container">
          <div className="header__inner">
            <ul className="header__list">
              {headerData.map((data) => (
                <li
                  className={data.className || "header__item"}
                  key={data.name}
                >
                  <a href={data.path} className="header__link">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className={`header__burger ${activeMenu ? "active" : ""}`}
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
