"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollHint() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY < 120);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollDown = () => {
    const nextSection = document.querySelector<HTMLElement>(
      "main section:nth-of-type(2)"
    );

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-hint fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition duration-500 max-[640px]:bottom-4 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      type="button"
      aria-label="גלילה למטה"
      onClick={scrollDown}
    >
      <span className="flex flex-col items-center gap-1 rounded-full border border-white/10 bg-[#030405]/64 px-4 py-2 text-[0.82rem] font-extrabold text-[#f7fbff]/78 shadow-[0_16px_48px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-[rgb(var(--cyan-rgb)/0.1)] hover:text-[#f7fbff]">
        <span>גללו למטה</span>
        <ChevronDown className="text-[var(--cyan)]" size={18} strokeWidth={2.6} />
      </span>
    </button>
  );
}
