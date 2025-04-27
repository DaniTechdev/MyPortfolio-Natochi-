"use client";

import React, { useRef, useState, useContext } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdSunny } from "react-icons/md";

//Internal import
import { ThemeContext } from "../../Context/themecontext";
import Style from "./Navbar.module.css";

const Navbar = () => {
  const { text, toggleTheme, theme } = useContext(ThemeContext);

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-400px";
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };
  return (
    <div className={Style.Navbar}>
      <img
        className={Style.brand_nameimg}
        src="/Natochi-logo1.svg"
        alt=" natochi logo"
      />

      {/* toggle mobile views */}
      <button
        className={Style.theme_toggle}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <MdSunny
            Style={{ width: "50px", height: "50px", backGround: "white" }}
          />
        ) : (
          <MdOutlineWbSunny
            Style={{ width: "50px", height: "50px" }}
            className={Style.sunny}
          />
        )}
      </button>
      <MdOutlineMenuOpen className={Style.open_menu} onClick={openMenu} />
      <ul ref={menuRef} className={Style.nav_menu}>
        <FaWindowClose className={Style.menu_closemob} onClick={closeMenu} />
        <li onClick={() => (handleMenuClick("home"), closeMenu())}>
          <a href="#home">
            <p> Home</p>
          </a>
          {menu == "home" ? (
            <img
              src="/horizontl.svg"
              className={Style.horizontalline}
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => (handleMenuClick("about"), closeMenu())}>
          <a href="#about">
            {" "}
            <p>About Me</p>
          </a>
          {menu == "about" ? (
            <img
              src="/horizontl.svg"
              className={Style.horizontalline}
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => (handleMenuClick("services"), closeMenu())}>
          <a href="#services">
            <p>Service</p>
          </a>
          {menu == "services" ? (
            <img
              src="/horizontl.svg"
              className={Style.horizontalline}
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => (handleMenuClick("work"), closeMenu())}>
          <a href="#mywork">
            <p>Portfolio</p>
          </a>
          {menu == "work" ? (
            <img
              src="/horizontl.svg"
              className={Style.horizontalline}
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => (handleMenuClick("contact"), closeMenu())}>
          <a href="#contact">
            {" "}
            <p>Contact</p>
          </a>
          {menu == "contact" ? (
            <img
              src="/horizontl.svg"
              className={Style.horizontalline}
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
      </ul>
      {/* Toggle for Desktop */}
      <button
        className={Style.theme_toggle1}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <div className={Style.nav_connect}>
        <a href="#contact" className={Style.connect_with_me}>
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
