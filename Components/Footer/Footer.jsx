import React from "react";

//internal import
import Style from "./Footer.module.css";

//React icon
import { MdOutlineUnsubscribe } from "react-icons/md";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_top}>
        <div className={Style.footer_top_left}>
          <img
            src="/natochi-logo.svg"
            alt="footer logo"
            className={Style.footerlogo}
          />
          <p>
            I am a blockchain developer, with over 7 years blockchain knowlegdge
            and over 3 years technical experience in blockchain development, who
            is passionation in building scalable blockchain applications.
          </p>
        </div>
        <div className={Style.footer_top_right}>
          <div className={Style.footer_email_input}>
            <MdOutlineUnsubscribe style={{ width: "24px", height: "24px" }} />
            <input type="email" placeholder="Enter your emaail" />
          </div>
          <div className={Style.footer_subscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className={Style.footer_bottom}>
        <p className={Style.footer_bottom_left}>
          @ 2025 Nneji Tochi,Natochi. All Right Reserved
        </p>
        <div className={Style.footer_bottm_right}>
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
