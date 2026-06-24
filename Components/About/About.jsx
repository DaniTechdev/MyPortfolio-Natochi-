import React from "react";

//Internal import
import Style from "./About.module.css";
import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className={Style.about} aria-label="About me">
      <div className={Style.about_title}>
        <h1>About me</h1>
        <img
          className={Style.theme_patternimg}
          src="/natochi-logo.svg"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className={Style.about_sections}>
        <div className={Style.about_left}>
          <img
            className={Style.about_profileimg}
            src="/myprofile.jpg"
            alt="Nneji Daniel Tochukwu (Natochi)"
          />
        </div>
        <div className={Style.about_right}>
          <div
            className={Style.about_para}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p>
              I'm a Blockchain &amp; Full-Stack Developer with 7+ years of
              blockchain knowledge and 3+ years of hands-on technical
              experience. I specialize in building secure, AI-enhanced Web3
              solutions, from smart contracts to full-stack dApps, that bridge
              traditional systems with decentralized technology.
            </p>
            <p>
              I work across EVM (Solidity), Solana (Rust/Anchor) and Sui (Move),
              and ship full-stack products with the MERN/Next.js ecosystem.
              Beyond development, I offer strategic consulting on Web3
              integration, tokenomics, and blockchain security. My portfolio
              spans NFT marketplaces, DeFi protocols, and enterprise-grade
              Web2-to-Web3 migrations.
            </p>
            <p>
              I hold a First-Class B.Sc. in Industrial Mathematics &amp; Applied
              Statistics, and my engineering is grounded in rigorous
              mathematical modeling. When I'm not coding, I contribute to
              open-source, audit smart contracts, and explore AI/blockchain
              convergence. Let's build the future, one secure and efficient
              block at a time.
            </p>
          </div>

          {/* Credibility / publications strip */}
          <div
            className={Style.about_credibility}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className={Style.cred_label}>Recognition</span>
            <ul className={Style.cred_list}>
              <li>
                🎓 First-Class B.Sc. in Industrial Mathematics &amp; Applied
                Statistics (4.66/5.00)
              </li>
              <li>
                📄 Two peer-reviewed publications in mathematical &amp;
                stochastic modeling (2026)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={Style.about_achievements}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div className={Style.about_ahcievement}>
          <Counter end={7} className={Style.counter} />
          <p> YEARS OF BLOCKCHAIN KNOWLEDGE</p>
        </div>
        <hr />
        <div className={Style.about_ahcievement}>
          <Counter end={3} className={Style.counter} />
          <p> YEARS HANDS-ON DEVELOPMENT</p>
        </div>
        <hr />
        <div className={Style.about_ahcievement}>
          <Counter end={15} className={Style.counter} />
          <p> PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className={Style.about_ahcievement}>
          <Counter end={5} className={Style.counter} />
          <p> HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
};

export default About;
