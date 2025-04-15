"use client";

import React from "react";
// import { Typewriter, useTypewriter } from "react-simple-typewriter";

//Internal import
import Style from "./Hero.module.css";

const Hero = () => {
  return (
    <div id="home" className={Style.hero}>
      <img className={Style.profilePic} src="/myprofile.jpg" alt=" profile" />
      <h1>
        <span>
          I'm Nneji Tochi, Natochi, Blockchain developer from Nigeria{" "}
        </span>
      </h1>
      <h2>
        {/* <span>A {""}</span> */}
        {/* {text} */}
      </h2>
      <p>
        I am a blockchain developer, with over 7 years blockchain knowlegdge and
        over 3 years technical experience in blockchain development, who is
        passionation in building scalable blockchain applications.
      </p>
      <div className={Style.hero_action}>
        <div className={Style.hero_connect}>
          <a href="#contact">Connect with me</a>
        </div>
        <div className={Style.hero_resume}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
