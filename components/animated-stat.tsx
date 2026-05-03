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
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        const startedAt = performance.now();

        const tick = (currentTime: number) => {
          const progress = Math.min((currentTime - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setValue(Math.round(end * easedProgress));

          if (progress < 1) {
            window.requestAnimationFrame(tick);
            return;
          }

          setHasAnimated(true);
          observer.unobserve(element);
        };

        window.requestAnimationFrame(tick);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [duration, end, hasAnimated]);

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
