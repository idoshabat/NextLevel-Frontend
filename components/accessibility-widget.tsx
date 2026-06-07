"use client";

import {
  Contrast,
  Link as LinkIcon,
  Minus,
  Pause,
  Plus,
  RotateCcw,
  SlidersHorizontal,
  Type,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type TextScale = -1 | 0 | 1 | 2;

const storageKey = "next-level-accessibility";

type AccessibilitySettings = {
  textScale: TextScale;
  highContrast: boolean;
  highlightLinks: boolean;
  reduceMotion: boolean;
};

const defaultSettings: AccessibilitySettings = {
  textScale: 0,
  highContrast: false,
  highlightLinks: false,
  reduceMotion: false,
};

function applySettings(settings: AccessibilitySettings) {
  const root = document.documentElement;

  root.classList.toggle("accessibility-text-small", settings.textScale === -1);
  root.classList.toggle("accessibility-text-large", settings.textScale === 1);
  root.classList.toggle("accessibility-text-xlarge", settings.textScale === 2);
  root.classList.toggle("accessibility-high-contrast", settings.highContrast);
  root.classList.toggle("accessibility-highlight-links", settings.highlightLinks);
  root.classList.toggle("accessibility-reduce-motion", settings.reduceMotion);
}

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const savedSettings = window.localStorage.getItem(storageKey);

    if (!savedSettings) {
      applySettings(defaultSettings);
      return;
    }

    try {
      const parsedSettings = JSON.parse(savedSettings) as AccessibilitySettings;
      const nextSettings = { ...defaultSettings, ...parsedSettings };

      setSettings(nextSettings);
      applySettings(nextSettings);
    } catch {
      applySettings(defaultSettings);
    }
  }, []);

  useEffect(() => {
    applySettings(settings);
    window.localStorage.setItem(storageKey, JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (nextSettings: Partial<AccessibilitySettings>) => {
    setSettings((currentSettings) => ({
      ...currentSettings,
      ...nextSettings,
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <div
      className="fixed right-0 bottom-24 z-50 max-[560px]:bottom-20"
      dir="rtl"
    >
      <button
        className="grid min-h-24 w-11 place-items-center rounded-l-lg border-y border-l border-[rgb(var(--cyan-rgb)/0.5)] bg-[#030405]/86 text-[var(--cyan)] shadow-[0_18px_48px_rgba(0,0,0,0.42),0_0_28px_rgb(var(--cyan-rgb)/0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition duration-300 hover:w-12 hover:border-[rgb(var(--cyan-rgb)/0.8)] hover:text-[var(--cyan-light)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.55)] max-[560px]:min-h-20 max-[560px]:w-10"
        type="button"
        aria-label={isOpen ? "סגירת כלי נגישות" : "פתיחת כלי נגישות"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="grid gap-2 justify-items-center">
          <SlidersHorizontal size={25} strokeWidth={2.4} />
          <span className="writing-mode-vertical text-[0.72rem] font-extrabold tracking-normal [writing-mode:vertical-rl] max-[560px]:hidden">
            נגישות
          </span>
        </span>
      </button>

      <div
        className={`absolute right-full bottom-0 mr-3 w-[min(330px,calc(100vw_-_58px))] origin-bottom-right rounded-lg border border-white/10 bg-[#030405]/92 p-4 text-right text-[#f7fbff] shadow-[0_22px_70px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition duration-300 max-[560px]:mr-2 ${
          isOpen
            ? "pointer-events-auto translate-x-0 scale-100 opacity-100"
            : "pointer-events-none translate-x-3 scale-[0.98] opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="m-0 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <SlidersHorizontal size={18} strokeWidth={2.5} />
              כלי נגישות
            </p>
            <p className="mt-1 text-[0.82rem] font-bold leading-[1.55] text-[#a8b3bd]">
              התאמות תצוגה אישיות נשמרות בדפדפן.
            </p>
          </div>
          <button
            className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/8 text-[#f7fbff] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.14)] hover:text-[var(--cyan)]"
            type="button"
            aria-label="סגירת כלי נגישות"
            onClick={() => setIsOpen(false)}
          >
            <X size={19} strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3">
            <div className="mb-3 flex items-center gap-2 text-[0.9rem] font-extrabold">
              <Type className="text-[var(--cyan)]" size={18} strokeWidth={2.5} />
              גודל טקסט
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                className="inline-flex min-h-10 items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/[0.055] px-3 text-[0.9rem] font-extrabold transition duration-300 hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-45"
                type="button"
                disabled={settings.textScale === -1}
                onClick={() =>
                  updateSettings({
                    textScale: Math.max(settings.textScale - 1, -1) as TextScale,
                  })
                }
              >
                <Minus size={16} strokeWidth={2.8} />
                הקטן
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.055] px-3 text-[0.9rem] font-extrabold transition duration-300 hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)]"
                type="button"
                onClick={() => updateSettings({ textScale: 0 })}
              >
                רגיל
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/[0.055] px-3 text-[0.9rem] font-extrabold transition duration-300 hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-45"
                type="button"
                disabled={settings.textScale === 2}
                onClick={() =>
                  updateSettings({
                    textScale: Math.min(settings.textScale + 1, 2) as TextScale,
                  })
                }
              >
                <Plus size={16} strokeWidth={2.8} />
                הגדל
              </button>
            </div>
          </div>

          <button
            className={`flex min-h-12 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-right transition duration-300 ${
              settings.highContrast
                ? "border-[var(--cyan)] bg-[rgb(var(--cyan-rgb)/0.16)] text-[var(--cyan)]"
                : "border-white/10 bg-white/[0.045] text-[#f7fbff] hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)]"
            }`}
            type="button"
            aria-pressed={settings.highContrast}
            onClick={() =>
              updateSettings({ highContrast: !settings.highContrast })
            }
          >
            <span className="inline-flex items-center gap-2 font-extrabold">
              <Contrast size={18} strokeWidth={2.5} />
              ניגודיות גבוהה
            </span>
            <span className="text-[0.78rem] font-bold">
              {settings.highContrast ? "פעיל" : "כבוי"}
            </span>
          </button>

          <button
            className={`flex min-h-12 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-right transition duration-300 ${
              settings.highlightLinks
                ? "border-[var(--cyan)] bg-[rgb(var(--cyan-rgb)/0.16)] text-[var(--cyan)]"
                : "border-white/10 bg-white/[0.045] text-[#f7fbff] hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)]"
            }`}
            type="button"
            aria-pressed={settings.highlightLinks}
            onClick={() =>
              updateSettings({ highlightLinks: !settings.highlightLinks })
            }
          >
            <span className="inline-flex items-center gap-2 font-extrabold">
              <LinkIcon size={18} strokeWidth={2.5} />
              הדגשת קישורים
            </span>
            <span className="text-[0.78rem] font-bold">
              {settings.highlightLinks ? "פעיל" : "כבוי"}
            </span>
          </button>

          <button
            className={`flex min-h-12 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-right transition duration-300 ${
              settings.reduceMotion
                ? "border-[var(--cyan)] bg-[rgb(var(--cyan-rgb)/0.16)] text-[var(--cyan)]"
                : "border-white/10 bg-white/[0.045] text-[#f7fbff] hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)]"
            }`}
            type="button"
            aria-pressed={settings.reduceMotion}
            onClick={() =>
              updateSettings({ reduceMotion: !settings.reduceMotion })
            }
          >
            <span className="inline-flex items-center gap-2 font-extrabold">
              <Pause size={18} strokeWidth={2.5} />
              עצירת אנימציות
            </span>
            <span className="text-[0.78rem] font-bold">
              {settings.reduceMotion ? "פעיל" : "כבוי"}
            </span>
          </button>

          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-3 text-[0.92rem] font-extrabold transition duration-300 hover:border-[rgb(var(--cyan-rgb)/0.48)] hover:text-[var(--cyan)]"
            type="button"
            onClick={resetSettings}
          >
            <RotateCcw size={17} strokeWidth={2.5} />
            איפוס התאמות
          </button>
        </div>
      </div>
    </div>
  );
}
