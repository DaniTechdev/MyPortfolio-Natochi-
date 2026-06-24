"use client";

import React, { useEffect, useRef, useState } from "react";

// Counts up from 0 to `end` once the element scrolls into view.
// Respects prefers-reduced-motion by jumping straight to the final value.
const Counter = ({ end, duration = 1600, suffix = "+", className }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              // easeOutCubic for a natural deceleration
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * end));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h1 ref={ref} className={className}>
      {value}
      {suffix}
    </h1>
  );
};

export default Counter;
