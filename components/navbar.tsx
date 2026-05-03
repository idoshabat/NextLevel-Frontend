"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  // { href: "/team", label: "צוות" },
  { href: "/players", label: "שחקנים שלנו" },
  { href: "/gallery", label: "גלריה" },
  { href: "/programs", label: "תוכניות" },
  { href: "/camps", label: "מחנות" },
  { href: "/contact", label: "צור קשר" },
  { href: "/faq", label: "שאלות ותשובות" },
];

const contactItems = [
  {
    href: "tel:0501234567",
    label: "טלפון",
    icon: Phone,
  },
  {
    href: "mailto:info@nextlevel.co.il",
    label: "אימייל",
    icon: Mail,
  },
  {
    href: "https://www.instagram.com/next_level_basketball_academy/",
    label: "אינסטגרם",
    icon: InstagramIcon,
  },
];

function InstagramIcon({
  size = 21,
  strokeWidth = 2.4,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle cx="17.5" cy="6.5" r="1.35" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mobilePanelState = isOpen
    ? "max-[980px]:pointer-events-auto max-[980px]:translate-y-0 max-[980px]:scale-100 max-[980px]:opacity-100"
    : "max-[980px]:pointer-events-none max-[980px]:-translate-y-3 max-[980px]:scale-[0.98] max-[980px]:opacity-0";
  const mobileBackdropState = isOpen
    ? "max-[980px]:pointer-events-auto max-[980px]:opacity-100"
    : "max-[980px]:pointer-events-none max-[980px]:opacity-0";

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-0">
      <button
        className={`hidden max-[980px]:fixed max-[980px]:inset-0 max-[980px]:top-19 max-[980px]:z-0 max-[980px]:block max-[980px]:cursor-default max-[980px]:bg-black/62 max-[980px]:backdrop-blur-[3px] max-[980px]:transition max-[980px]:duration-300 ${mobileBackdropState}`}
        type="button"
        aria-label="סגירת תפריט"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
      />
      <nav
        className="relative z-10 flex min-h-22 w-full items-center justify-between gap-6 overflow-hidden bg-[linear-gradient(90deg,rgba(2,3,4,0.96),rgba(8,15,18,0.9)_48%,rgba(2,3,4,0.96))] px-[clamp(16px,4vw,56px)] py-3 shadow-[0_22px_70px_rgba(0,0,0,0.42),inset_0_-1px_0_rgb(var(--cyan-rgb)/0.16)] backdrop-blur-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgb(var(--cyan-rgb)/0.85),transparent)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_18%_0%,rgb(var(--cyan-rgb)/0.18),transparent_24rem),radial-gradient(circle_at_82%_0%,rgba(255,255,255,0.08),transparent_22rem)] max-[980px]:min-h-19 max-[980px]:overflow-visible max-[980px]:px-4 max-[980px]:py-2.5"
        aria-label="ניווט ראשי"
        dir="ltr"
      >
        <Link
          className="group relative z-10 inline-flex min-w-55 items-center gap-3 max-[980px]:min-w-0"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative grid h-19 w-27.5 place-items-center overflow-hidden transition duration-300 group-hover:scale-105 max-[980px]:h-16 max-[980px]:w-26.5 max-[560px]:h-14 max-[560px]:w-23">
            <Image
              className="h-full w-full object-contain p-0.5 transition duration-300 group-hover:brightness-110"
              src="/assets/logo-navbar.png"
              alt="Next Level"
              width={110}
              height={76}
              priority
            />
          </span>
        </Link>

        <div className="relative z-10 flex items-center gap-2 max-[560px]:gap-1.5" dir="rtl">
          <div className="flex items-center gap-2 max-[980px]:hidden max-[560px]:gap-1.5">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  className="group/icon grid size-11 place-items-center text-[#f7fbff]/78 transition duration-300 hover:-translate-y-1 hover:text-(--cyan) max-[560px]:size-10"
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="transition duration-300 group-hover/icon:scale-110">
                    <Icon size={21} strokeWidth={2.4} />
                  </span>
                </a>
              );
            })}
          </div>

          <button
            className="hidden size-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg bg-white/6 text-[#f7fbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.12)] hover:text-(--cyan) max-[980px]:flex max-[560px]:size-10"
            type="button"
            aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span
              className={`block h-0.5 w-4.5 rounded-full bg-current transition duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4.5 rounded-full bg-current transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4.5 rounded-full bg-current transition duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`absolute left-1/2 z-10 flex -translate-x-1/2 items-center max-[980px]:left-0 max-[980px]:right-0 max-[980px]:top-full max-[980px]:origin-top max-[980px]:translate-x-0 max-[980px]:bg-[#030405]/95 max-[980px]:p-2.5 max-[980px]:shadow-[0_18px_60px_rgba(0,0,0,0.44)] max-[980px]:backdrop-blur-[18px] max-[980px]:transition max-[980px]:duration-300 max-[980px]:ease-out ${mobilePanelState}`}
          dir="rtl"
        >
          <div className="flex items-center gap-1  p-1  max-[980px]:grid max-[980px]:w-full max-[980px]:grid-cols-2 max-[980px]:gap-1.5 max-[980px]:bg-transparent max-[980px]:p-0 max-[980px]:shadow-none max-[560px]:grid-cols-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  className={`group relative inline-flex min-h-11 items-center justify-center overflow-hidden whitespace-nowrap rounded-lg px-4 py-3 text-[1.08rem] font-extrabold transition duration-300 after:absolute after:inset-x-4 after:bottom-1.5 after:h-px after:origin-center after:scale-x-0 after:bg-(--cyan) after:transition after:duration-300 hover:-translate-y-px hover:bg-white/[0.07] hover:text-[#f7fbff] hover:after:scale-x-100 max-[980px]:min-h-12 max-[980px]:text-base ${
                    isActive
                      ? "bg-cyan-500 after:scale-x-0 hover:bg-cyan-500 hover:text-[#f7fbff]"
                      : "text-[#f7fbff]/75"
                  }`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    transitionDelay: isOpen ? `${index * 28}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
