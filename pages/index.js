"use client";
import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//Internal imporrt
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Service from "../Components/Services/Services";
import MyWork from "../Components/MyWork/MyWork";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const index = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }), [];
  });
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
