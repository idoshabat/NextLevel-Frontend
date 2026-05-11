"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "main section, footer, [data-scroll-reveal]";

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

    let lastScrollY = window.scrollY;
    let isScrollingDown = true;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      isScrollingDown = currentScrollY >= lastScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    elements.forEach((element, index) => {
      const direction = element.dataset.scrollRevealDirection;

      element.classList.remove("scroll-reveal-visible");
      element.classList.remove("scroll-reveal-from-left");
      element.classList.remove("scroll-reveal-from-right");
      element.classList.add("scroll-reveal");
      element.classList.add(
        direction === "left" || direction === "right"
          ? `scroll-reveal-from-${direction}`
          : index % 2 === 0
            ? "scroll-reveal-from-right"
            : "scroll-reveal-from-left"
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isScrollingDown && window.scrollY > 8) {
              entry.target.classList.add("scroll-reveal-no-motion");
            }

            entry.target.classList.add("scroll-reveal-visible");

            window.requestAnimationFrame(() => {
              entry.target.classList.remove("scroll-reveal-no-motion");
            });
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
      window.removeEventListener("scroll", updateScrollDirection);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
