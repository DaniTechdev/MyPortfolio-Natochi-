"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

//Internal import
import Style from "./Hero.module.css";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Developer",
      "Web2 & Web3 Engineer",
      "Blockchain Developer",
      "MERN Stack Developer",
      "Smart Contract Engineer",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className={Style.hero} aria-label="Introduction">
      <img
        className={Style.profilePic}
        src="/myprofile.jpg"
        alt="Nneji Daniel Tochukwu (Natochi), Blockchain and Full-Stack Developer"
        data-aos="zoom-in"
        data-aos-duration="1200"
      />

      <p className={Style.eyebrow} data-aos="fade-up" data-aos-duration="800">
        Hi, I&apos;m Nneji Daniel Tochukwu, <span>Natochi</span>
      </p>

      <h1 data-aos="fade-up" data-aos-duration="1000">
        <span>I build secure, AI-enhanced products</span> across Web2 &amp; Web3,
        from full-stack apps to smart contracts.
      </h1>

      <h2 aria-live="polite">
        <span className={Style.iam}>I&apos;m a </span>
        <span className={Style.typed}>{text}</span>
        <Cursor cursorColor="var(--primary)" />
      </h2>

      <p
        className={Style.tagline}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Full-Stack &amp; Blockchain Developer with 7+ years in tech and 3+ years
        of hands-on experience. I build everything from MERN/Next.js web apps and
        APIs to smart contracts, DeFi protocols and dApps, bridging traditional
        systems with decentralized technology.
      </p>

      <div
        className={Style.hero_action}
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <a href="#mywork" className={Style.hero_connect}>
          View My Work
        </a>
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className={Style.hero_resume}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
