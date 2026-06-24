"use client";

import React, { useState, useContext, useEffect } from "react";
import { MdOutlineWbSunny, MdSunny } from "react-icons/md";

//Internal import
import { ThemeContext } from "../../Context/themecontext";
import Style from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Service" },
  { id: "mywork", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: highlight the nav item for whichever section is in view.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Trigger when a section crosses the upper-middle band of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll + close on Escape while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className={Style.Navbar} aria-label="Main navigation">
      <a href="#home" aria-label="Go to top" className={Style.brand}>
        <img
          className={Style.brand_nameimg}
          src="/Natochi-logo1.svg"
          alt="Natochi logo"
        />
      </a>

      {/* Desktop nav links */}
      <ul className={Style.nav_menu_desktop}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id} onClick={() => handleNavClick(item.id)}>
            <a
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              <p>{item.label}</p>
            </a>
            {activeSection === item.id && (
              <span className={Style.activeDot} aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>

      <div className={Style.nav_right}>
        {/* Theme toggle (shared desktop + mobile) */}
        <button
          className={Style.theme_toggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <MdSunny className={Style.toggleIcon} />
          ) : (
            <MdOutlineWbSunny className={Style.toggleIcon} />
          )}
        </button>

        <div className={Style.nav_connect}>
          <a href="#contact" className={Style.connect_with_me}>
            Connect With Me
          </a>
        </div>

        {/* Animated hamburger (mobile only) */}
        <button
          className={`${Style.hamburger} ${menuOpen ? Style.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Dim backdrop behind the mobile drawer */}
      <div
        className={`${Style.backdrop} ${menuOpen ? Style.backdropOpen : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile slide-in drawer */}
      <aside
        id="mobile-drawer"
        className={`${Style.drawer} ${menuOpen ? Style.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <span className={Style.drawerTitle}>Navigate</span>
        <ul className={Style.drawer_menu}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} onClick={() => handleNavClick(item.id)}>
              <a
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={Style.drawer_connect}
          onClick={() => setMenuOpen(false)}
        >
          Connect With Me
        </a>
      </aside>
    </nav>
  );
};

export default Navbar;
