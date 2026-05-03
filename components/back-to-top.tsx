"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top fixed bottom-6 right-6 z-50 grid size-13 place-items-center rounded-full border border-[rgb(var(--cyan-rgb)/0.42)] bg-[#030405]/72 text-[var(--cyan)] shadow-[0_18px_55px_rgba(0,0,0,0.42),0_0_34px_rgb(var(--cyan-rgb)/0.18),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.72)] hover:bg-[rgb(var(--cyan-rgb)/0.14)] hover:text-[var(--cyan-light)] max-[560px]:bottom-4 max-[560px]:right-4 max-[560px]:size-12 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      type="button"
      aria-label="חזרה לראש העמוד"
      onClick={scrollToTop}
    >
      <span className="absolute inset-1 rounded-full border border-white/10" />
      <ArrowUp className="relative" size={22} strokeWidth={2.6} />
    </button>
  );
}
