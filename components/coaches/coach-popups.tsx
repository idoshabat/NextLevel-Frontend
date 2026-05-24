"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import type { Coach } from "@/data/coaches";

type CoachPopupsProps = {
  coaches: Coach[];
};

export function CoachPopups({ coaches }: CoachPopupsProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const activeCoach = coaches.find((coach) => coach.slug === activeSlug);

  const closePopup = () => setActiveSlug(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!activeCoach) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCoach]);

  const popup = activeCoach ? (
    <div
      className="coach-popup-backdrop fixed inset-0 z-[100] grid place-items-center bg-black/82 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`מידע על ${activeCoach.name}`}
      onClick={closePopup}
    >
      <div
        className="coach-popup-panel relative max-h-[90vh] w-[min(980px,100%)] overflow-y-auto rounded-lg border border-white/10 bg-[#030405] shadow-[0_30px_110px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.1)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute left-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-[#f7fbff] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.18)] hover:text-[var(--cyan)]"
          type="button"
          aria-label="סגירת חלון"
          onClick={closePopup}
        >
          <X size={22} strokeWidth={2.5} />
        </button>

        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[320px] bg-[#0b1114]">
            <img
              className="absolute inset-0 h-full w-full object-cover grayscale"
              src={activeCoach.image}
              alt={`תמונה של ${activeCoach.name}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.88),transparent_58%)]" />
            <div className="absolute bottom-5 right-5 left-5">
              <p className="mb-2 inline-flex items-center gap-2 rounded-lg bg-[#030405]/72 px-3 py-2 text-[0.9rem] font-extrabold text-[var(--cyan)] backdrop-blur-md">
                <Sparkles size={16} strokeWidth={2.5} />
                {activeCoach.role}
              </p>
              <h2 className="m-0 text-[clamp(2rem,5vw,4rem)] leading-none">
                {activeCoach.name}
              </h2>
            </div>
          </div>

          <div className="p-[clamp(22px,4vw,42px)]">
            <p className="m-0 text-[clamp(1.18rem,2.5vw,1.65rem)] font-extrabold leading-[1.45] text-[#f7fbff]">
              {activeCoach.headline}
            </p>

            <div className="mt-6 grid gap-4">
              {activeCoach.bio.map((paragraph) => (
                <p
                  className="m-0 text-[1rem] leading-[1.85] text-[#a8b3bd]"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 text-[0.95rem] font-extrabold text-[var(--cyan)]">
                תחומי התמחות
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {activeCoach.focus.map((item) => (
                  <div
                    className="flex min-h-12 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-[0.92rem] font-extrabold text-[#f7fbff]/84"
                    key={item}
                  >
                    <CheckCircle2
                      className="shrink-0 text-[var(--cyan)]"
                      size={17}
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grid gap-4">
        {coaches.map((coach, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <button
              key={coach.name}
              className={`group mx-auto grid w-full max-w-[780px] cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_42px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075] lg:h-[210px] ${
                imageFirst ? "lg:grid-cols-[240px_1fr]" : "lg:grid-cols-[1fr_240px]"
              }`}
              type="button"
              aria-label={`פתיחת מידע על ${coach.name}`}
              onClick={() => setActiveSlug(coach.slug)}
              data-scroll-reveal
              data-scroll-reveal-direction={index % 2 === 0 ? "right" : "left"}
            >
              <div
                className={`h-[170px] overflow-hidden bg-[#0b1114] sm:h-[190px] lg:h-full ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src={coach.image}
                  alt={`תמונה של ${coach.name}`}
                  loading="lazy"
                />
              </div>

              <div
                className={`flex min-h-0 flex-col justify-center p-5 lg:p-6 ${
                  imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <p className="mb-1 text-[0.82rem] font-extrabold text-[var(--cyan)]">
                  {coach.role}
                </p>
                <h3 className="m-0 text-[clamp(1.35rem,2.4vw,1.85rem)] leading-tight text-[#f7fbff]">
                  {coach.name}
                </h3>
                <p className="mt-2 text-[0.9rem] font-extrabold leading-[1.65] text-[#f7fbff]/88">
                  {coach.headline}
                </p>
                <p className="mt-2 line-clamp-2 max-w-[460px] text-[0.86rem] leading-[1.6] text-[#a8b3bd]">
                  {coach.description}
                </p>
                <span className="mt-3 inline-flex w-fit text-[0.88rem] font-extrabold text-[var(--cyan)] transition duration-300 group-hover:translate-x-[-4px]">
                  לקריאת הסיפור המלא
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {isMounted && popup ? createPortal(popup, document.body) : null}
    </>
  );
}
