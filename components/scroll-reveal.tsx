"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "main section, footer";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector)
    );

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("scroll-reveal-visible");
      });
      return;
    }

    elements.forEach((element) => {
      element.classList.remove("scroll-reveal-visible");
      element.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
          } else {
            entry.target.classList.remove("scroll-reveal-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -4% 0px",
        threshold: 0.01,
      }
    );

    window.requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
