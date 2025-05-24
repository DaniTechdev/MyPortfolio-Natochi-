import React from "react";

//Internal import
import Style from "./Services.module.css";
import { Services_Data } from "../../Asset/Service_data";

//React iconss
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className={Style.services}>
      <div className={Style.servicess_title}>
        <h1>My Services</h1>
        <img
          src="/natochi-logo.svg"
          alt="theme patterm image"
          className={Style.theme_patternimg}
        />
      </div>
      <div className={Style.services_container}>
        {Services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className={Style.service_format}
              data-aos="fade-UP"
              data-aos-duration="1500"
            >
              <h3>{service.S_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_description}</p>
              {/* <div className={Style.services_readmore}>
                <p>Read More</p>
                <FaArrowRight className={Style.services_icon} />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
