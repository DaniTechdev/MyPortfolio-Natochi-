import React from "react";

//Internal  import
import Style from "./MyWork.module.css";
import { mywork_data } from "../../Asset/mywork_data";

//Internal import
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id="mywork" className={Style.mywork}>
      <div className={Style.mywork_title}>
        <h1>My Lastest Work</h1>
        {/* <img
          className="theme-patternimg"
          src="/natochi-logo.svg"
          alt="theme pattern"
        /> */}
        <img
          src="/natochi-logo.svg"
          alt="theme pattern"
          className={Style.themepattermImg}
        />
      </div>
      <div className={Style.mywork_container}>
        {mywork_data.map((mywork, index) => {
          return (
            <>
              <div
                data-aos="fade-UP"
                data-aos-duration="1500"
                className={Style.work_container}
              >
                <img
                  key={index}
                  className={Style.mywork_img}
                  src={mywork.w_img}
                  alt={mywork.alt}
                />
                <div className={Style.desc_box}>
                  <h2>{mywork.w_name}</h2>
                  <div className={Style.mywork_btn}>
                    <button>Project details</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={Style.mywork_showmore}>
        <p>Show More</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default MyWork;
