"use client";

import React from "react";
// import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";

//Internal import
import Style from "./Hero.module.css";

const Hero = () => {
  const [text, helper] = useTypewriter({
    words: [
      "Blockchain Developer",
      "Web3 Developer",
      "Smart Contract Developer",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div id="home" className={Style.hero}>
      <img className={Style.profilePic} src="/myprofile.jpg" alt=" profile" />
      <h1>
        <span>
          I'm Nneji Tochi, Natochi, Blockchain developer from Nigeria{" "}
        </span>
      </h1>
      <h2>
        <span>A {""}</span>
        {text}
      </h2>
      <p data-aos="fade-up" data-aos-duration="2000">
        I am a blockchain developer, with over 7 years blockchain knowledge and
        over 3 years technical experience in blockchain development, who is
        passionate in building scalable blockchain applications.
      </p>
      <div className={Style.hero_action}>
        <div
          className={Style.hero_connect}
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <a href="#contact">Connect with me</a>
        </div>
        <div className={Style.hero_resume}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
