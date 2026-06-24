"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import Style from "./ScrollToTop.module.css";

// Floating control that appears after the user scrolls down and
// smooth-scrolls back to the top of the page.
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 400);
      setProgress(height > 0 ? Math.min(scrolled / height, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Conic gradient ring shows how far down the page the user is.
  const ringStyle = {
    background: `conic-gradient(var(--primary) ${progress * 360}deg, var(--card-border) 0deg)`,
  };

  return (
    <button
      className={`${Style.toTop} ${visible ? Style.visible : ""}`}
      onClick={scrollUp}
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
    >
      <span className={Style.ring} style={ringStyle} aria-hidden="true" />
      <span className={Style.core}>
        <FaArrowUp />
      </span>
    </button>
  );
};

export default ScrollToTop;
