"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
};

export function AnimatedStat({
  end,
  label,
  suffix = "",
  duration = 1100,
}: AnimatedStatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef(0);
  const hasPlayedInViewRef = useRef(false);
  const isInViewRef = useRef(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    lastScrollYRef.current = window.scrollY;

    const runAnimation = () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      setValue(0);

      const startedAt = performance.now();

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValue(Math.round(end * easedProgress));

        if (progress < 1) {
          animationFrameRef.current = window.requestAnimationFrame(tick);
        }
      };

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const playIfScrollingDown = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY >= lastScrollYRef.current;

      lastScrollYRef.current = currentScrollY;

      if (
        !isInViewRef.current ||
        !isScrollingDown ||
        hasPlayedInViewRef.current
      ) {
        return;
      }

      hasPlayedInViewRef.current = true;
      runAnimation();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (!entry.isIntersecting) {
          isInViewRef.current = false;
          hasPlayedInViewRef.current = false;
          window.cancelAnimationFrame(animationFrameRef.current);
          setValue(0);
          return;
        }

        isInViewRef.current = true;
        playIfScrollingDown();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);
    window.addEventListener("scroll", playIfScrollingDown, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("scroll", playIfScrollingDown);
      observer.disconnect();
    };
  }, [duration, end]);

  return (
    <div
      ref={ref}
      className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
    >
      <p className="m-0 text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-none text-[var(--cyan)]">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-[1.05rem] font-extrabold text-[#f7fbff]/88">
        {label}
      </p>
    </div>
  );
}
