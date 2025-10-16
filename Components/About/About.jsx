import React from "react";

//Internal import
import Style from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={Style.about}>
      <div className={Style.about_title}>
        <h1>About me</h1>
        <img
          className={Style.theme_patternimg}
          src="/natochi-logo.svg"
          alt="theme pattern"
        />
      </div>
      <div className={Style.about_sections}>
        <div className={Style.about_left}>
          <img
            className={Style.about_profileimg}
            src="/myprofile.jpg"
            alt="profile imaga"
          />
        </div>
        <div
          className={Style.about_right}
          // data-aos="fade-up"
          // data-aos-duration="2000"
        >
          <div
            className={Style.about_para}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p>
              {" "}
              I'm a full-stack blockchain and full-stack developer with 6+ years
              of deep blockchain expertise and 3 years of hands-on technical
              experience. I specialize in building secure, AI-enhanced Web3
              solutions—from smart contracts to full-stack dApps—that bridge
              traditional systems with decentralized technology.{" "}
            </p>{" "}
            <p>
              {" "}
              Beyond development, I offer strategic consulting to help
              businesses navigate Web3 integration, tokenomics, and blockchain
              security. My portfolio includes NFT marketplaces, DeFi protocols,
              and enterprise-grade Web2-to-Web3 migrations, all designed with
              scalability and real-world utility in mind.{" "}
            </p>{" "}
            <p>
              {" "}
              When I’m not coding, I contribute to open-source projects, audit
              smart contracts, and explore AI/blockchain convergence to stay
              ahead of industry shifts. Let’s build the future—one secure,
              efficient block at a time.{" "}
            </p>
          </div>{" "}
          <div
            className={Style.about_skills}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={Style.about_skill}>
              <p>HTML & CSS </p>
              <hr style={{ width: "48%" }} />
            </div>
            <div className={Style.about_skill}>
              <p>React & NextJs</p>
              <hr style={{ width: "49%" }} />
            </div>
            <div className={Style.about_skill}>
              <p>Javascript </p>
              <hr style={{ width: "55%" }} />
            </div>

            <div className={Style.about_skill}>
              <p>Solidity for Evm chains</p>
              <hr style={{ width: "61%" }} />
            </div>

            <div className={Style.about_skill}>
              <p>
                Hardhat & <br />
                Ether.js{" "}
              </p>
              <hr style={{ width: "54%" }} />
            </div>
            <div className={Style.about_skill}>
              <p>Solana Anchor/Rust</p>
              <hr style={{ width: "55%" }} />
            </div>

            <div className={Style.about_skill}>
              <p>Solana/Ether.js</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className={Style.about_skill}>
              <p>Tokenomics Design </p>
              <hr style={{ width: "57%" }} />
            </div>
            <div className={Style.about_skill}>
              <p>
                Nodej & Express & <br />
                Mongoose{" "}
              </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
          {/* About Skills mobile */}
          <div
            className={Style.about_skills_mob}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className={Style.about_skill_mob}>
              <p>HTML & CSS </p>
              <div className={Style.horidiv}>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>React & NextJs & ReduxToolkit</p>
              <div className={Style.horidiv}>
                <hr style={{ width: "67%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>Javascript </p>
              <div className={Style.horidiv}>
                <hr style={{ width: "70%" }} />
              </div>
            </div>

            <div className={Style.about_skill_mob}>
              <p>Solidity</p>
              <div className={Style.horidiv}>
                <hr style={{ width: "75%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>Hardhat & Ether.js </p>
              <div className={Style.horidiv}>
                <hr style={{ width: "55%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>Solana Anchor/Rust</p>
              <div className={Style.horidiv}>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>Solana/Ether.js</p>
              <div className={Style.horidiv}>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>Tokenomics Design </p>
              <div className={Style.horidiv}>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
            <div className={Style.about_skill_mob}>
              <p>Nodej & Express & Mongoose </p>
              <div className={Style.horidiv}>
                <hr style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={Style.about_achievements}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div className={Style.about_ahcievement}>
          <h1> 7+</h1>
          <p> YEARS OF BLOCHCHAIN KNOWLEDGE EXPERIENCE</p>
        </div>
        <hr />
        <div className={Style.about_ahcievement}>
          <h1> 3+</h1>
          <p> YEARS OF BLOCHCHAIN AND FULL-STACK DEVELOPEMENT</p>
        </div>
        <hr />
        <div className={Style.about_ahcievement}>
          <h1> 15+</h1>
          <p> PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className={Style.about_ahcievement}>
          <h1> 5+</h1>
          <p>Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default About;
