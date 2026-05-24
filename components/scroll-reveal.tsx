"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "main section, footer, [data-scroll-reveal]";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let animationFrame = 0;
    let timeout = 0;
    let removeScrollListener: (() => void) | null = null;

    const setupReveal = () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const observedElements = new Set<HTMLElement>();
      let lastScrollY = window.scrollY;
      let isScrollingDown = true;

      const updateScrollDirection = () => {
        const currentScrollY = window.scrollY;
        isScrollingDown = currentScrollY >= lastScrollY;
        lastScrollY = currentScrollY;
      };

      const prepareElement = (element: HTMLElement) => {
        if (observedElements.has(element)) {
          return;
        }

        observedElements.add(element);

        if (reducedMotion) {
          element.classList.add("scroll-reveal-visible");
          return;
        }

        const direction = element.dataset.scrollRevealDirection;

        element.classList.remove("scroll-reveal-visible");
        element.classList.remove("scroll-reveal-from-left");
        element.classList.remove("scroll-reveal-from-right");
        element.classList.add("scroll-reveal");
        element.classList.add(
          direction === "left" || direction === "right"
            ? `scroll-reveal-from-${direction}`
            : observedElements.size % 2 === 0
              ? "scroll-reveal-from-left"
              : "scroll-reveal-from-right"
        );

        observer?.observe(element);
      };

      if (reducedMotion) {
        document
          .querySelectorAll<HTMLElement>(revealSelector)
          .forEach(prepareElement);
        return;
      }

      window.addEventListener("scroll", updateScrollDirection, {
        passive: true,
      });
      removeScrollListener = () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };

      observer = new IntersectionObserver(
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

      animationFrame = window.requestAnimationFrame(() => {
        document
          .querySelectorAll<HTMLElement>(revealSelector)
          .forEach(prepareElement);
      });

      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) {
              return;
            }

            if (node.matches(revealSelector)) {
              prepareElement(node);
            }

            node
              .querySelectorAll<HTMLElement>(revealSelector)
              .forEach(prepareElement);
          });
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    timeout = window.setTimeout(setupReveal, 250);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(animationFrame);
      removeScrollListener?.();
      mutationObserver?.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
