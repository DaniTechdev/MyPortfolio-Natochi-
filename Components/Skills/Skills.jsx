"use client";

import React from "react";

//Internal import
import Style from "./Skills.module.css";

//Tech icons
import {
  SiSolidity,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiEthereum,
  SiSolana,
  SiIpfs,
  SiOpenai,
  SiGit,
  SiPython,
} from "react-icons/si";
import { FaAnchor, FaHardHat, FaCube, FaEthereum, FaRobot } from "react-icons/fa";

const SKILL_GROUPS = [
  {
    title: "Blockchain & Web3",
    accent: "#6ca2b9",
    skills: [
      { name: "Solidity", icon: SiSolidity, color: "#363636" },
      { name: "Rust", icon: SiRust, color: "#dea584" },
      { name: "Anchor (Solana)", icon: FaAnchor, color: "#14f195" },
      { name: "Move (Sui)", icon: FaCube, color: "#4da2ff" },
      { name: "EVM / Ethereum", icon: SiEthereum, color: "#627eea" },
      { name: "Solana", icon: SiSolana, color: "#9945ff" },
      { name: "Ethers.js", icon: FaEthereum, color: "#3c3c3d" },
      { name: "Hardhat", icon: FaHardHat, color: "#f6c343" },
      { name: "IPFS", icon: SiIpfs, color: "#65c2cb" },
    ],
  },
  {
    title: "Full-Stack",
    accent: "#3a86ff",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "AI & Tools",
    accent: "#a855f7",
    skills: [
      { name: "AI Integration", icon: FaRobot, color: "#a855f7" },
      { name: "OpenAI", icon: SiOpenai, color: "#ffffff" },
      { name: "Python", icon: SiPython, color: "#ffd43b" },
      { name: "Git", icon: SiGit, color: "#f05032" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={Style.skills} aria-label="Skills">
      <div className={Style.skills_title}>
        <h1>My Skills</h1>
        <img
          src="/natochi-logo.svg"
          alt=""
          aria-hidden="true"
          className={Style.theme_patternimg}
        />
      </div>

      <p className={Style.skills_subtitle}>
        The technologies I use to design, build and ship across EVM, Solana
        &amp; Sui.
      </p>

      <div className={Style.skills_groups}>
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className={Style.skill_group}
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ borderTopColor: group.accent }}
          >
            <h2 className={Style.group_title}>{group.title}</h2>
            <ul className={Style.badge_grid}>
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.name} className={Style.badge}>
                    <Icon
                      className={Style.badge_icon}
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
