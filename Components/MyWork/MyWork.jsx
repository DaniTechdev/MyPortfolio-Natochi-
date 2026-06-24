"use client";

import React, { useState, useMemo } from "react";

//Internal import
import Style from "./MyWork.module.css";
import { mywork_data } from "../../Asset/mywork_data";

//React icons
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const FILTERS = ["All", "Blockchain", "Full-Stack", "Solana", "EVM", "Sui"];

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProduct, setVisibleProduct] = useState(6);

  // Filter first, then limit, so the Show More button pages through the filtered set.
  const filtered = useMemo(() => {
    if (activeFilter === "All") return mywork_data;
    return mywork_data.filter((p) => p.categories?.includes(activeFilter));
  }, [activeFilter]);

  const visible = filtered.slice(0, visibleProduct);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setVisibleProduct(6); // reset paging when switching filters
  };

  return (
    <section id="mywork" className={Style.mywork} aria-label="Projects">
      <div className={Style.mywork_title}>
        <h1>My Latest Work</h1>
        <img
          src="/natochi-logo.svg"
          alt=""
          aria-hidden="true"
          className={Style.themepattermImg}
        />
      </div>

      <p className={Style.mywork_subtitle}>
        A selection of full-stack web and blockchain projects across Web2 and
        Web3.
      </p>

      {/* Filter chips */}
      <div
        className={Style.filter_bar}
        role="tablist"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={activeFilter === filter}
            className={`${Style.filter_chip} ${
              activeFilter === filter ? Style.filter_chip_active : ""
            }`}
            onClick={() => handleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={Style.mywork_container}>
        {visible.map((project, index) => (
          <article
            key={project.w_no}
            className={Style.work_card}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={`${(index % 3) * 100}`}
          >
            {/* Thumbnail: real screenshot if provided, else a generated gradient */}
            <div
              className={Style.card_thumb}
              style={
                project.image
                  ? undefined
                  : {
                      background: `linear-gradient(135deg, ${project.accent} 0%, #0c1a20 100%)`,
                    }
              }
            >
              {project.featured && (
                <span className={Style.featured_badge}>★ Featured</span>
              )}
              {project.image ? (
                <img
                  className={Style.card_img}
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
              ) : (
                <FaCode className={Style.card_thumb_icon} aria-hidden="true" />
              )}
            </div>

            <div className={Style.card_body}>
              <h2 className={Style.card_title}>{project.w_name}</h2>
              <p className={Style.card_desc}>{project.desc}</p>

              <ul className={Style.tag_list}>
                {project.tags?.map((tag) => (
                  <li
                    key={tag}
                    className={Style.tag}
                    style={{ borderColor: project.accent }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className={Style.card_actions}>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.btn_demo}
                    aria-label={`Open live demo of ${project.w_name}`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.btn_github}
                    aria-label={`View ${project.w_name} source on GitHub`}
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={Style.no_results}>No projects in this category yet.</p>
      )}

      {filtered.length > 6 && (
        <div className={Style.mywork_showmore}>
          {visibleProduct >= filtered.length ? (
            <button onClick={() => setVisibleProduct(6)}>Show Less</button>
          ) : (
            <button onClick={() => setVisibleProduct((p) => p + 3)}>
              Show More
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default MyWork;
