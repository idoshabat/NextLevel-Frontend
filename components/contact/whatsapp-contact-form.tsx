"use client";

import Link from "next/link";
import { Check, Send, ShieldCheck } from "lucide-react";

const whatsappPhone = "972553090366";

function getFieldValue(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function isValidIsraeliPhone(phone: string) {
  const compactPhone = phone.replace(/[\s-]/g, "");

  return /^(?:05\d{8}|\+9725\d{8})$/.test(compactPhone);
}

export function WhatsappContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = getFieldValue(formData, "name");
    const phone = getFieldValue(formData, "phone");
    const age = getFieldValue(formData, "age");
    const program = getFieldValue(formData, "program");
    const message = getFieldValue(formData, "message");
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;

    phoneInput.setCustomValidity("");

    if (!isValidIsraeliPhone(phone)) {
      phoneInput.setCustomValidity(
        "הכניסו מספר טלפון ישראלי תקין, לדוגמה: 055-309-0366"
      );
      phoneInput.reportValidity();
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    const whatsappMessage = [
      "שלום, אשמח לקבל פרטים על אקדמיית Next Level.",
      name ? `שם: ${name}` : null,
      phone ? `טלפון: ${phone}` : null,
      age ? `גיל השחקן/ית: ${age}` : null,
      program ? `סוג אימון: ${program}` : null,
      message ? `הודעה: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <form
      className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-md"
      onSubmit={handleSubmit}
      data-scroll-reveal
      data-scroll-reveal-direction="left"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
            שם מלא
          </span>
          <input
            className="min-h-12 rounded-lg border border-white/12 bg-[#030405]/62 px-4 text-[#f7fbff] outline-none transition duration-300 placeholder:text-[#a8b3bd]/60 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
            name="name"
            placeholder="השם שלכם"
            required
            type="text"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
            טלפון
          </span>
          <input
            className="min-h-12 rounded-lg border border-white/12 bg-[#030405]/62 px-4 text-[#f7fbff] outline-none transition duration-300 placeholder:text-[#a8b3bd]/60 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
            inputMode="tel"
            name="phone"
            placeholder="050-000-0000"
            required
            type="tel"
            title="הכניסו מספר טלפון ישראלי תקין, לדוגמה: 055-309-0366"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
            גיל השחקן/ית
          </span>
          <input
            className="min-h-12 rounded-lg border border-white/12 bg-[#030405]/62 px-4 text-[#f7fbff] outline-none transition duration-300 placeholder:text-[#a8b3bd]/60 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
            inputMode="numeric"
            max="30"
            min="5"
            name="age"
            placeholder="לדוגמה: 12"
            required
            type="number"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
            סוג אימון
          </span>
          <select
            className="min-h-12 rounded-lg border border-white/12 bg-[#030405]/62 px-4 text-[#f7fbff] outline-none transition duration-300 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
            name="program"
            defaultValue=""
            required
          >
            <option value="" disabled>
              בחרו אפשרות
            </option>
            <option>תוכנית PRO MAX</option>
            <option>תוכנית MAX</option>
            <option>תוכנית PRO</option>
            <option>תוכנית CLASSIC</option>
            <option>כרטיסיית 10 כניסות</option>
            <option>תוכנית VIDEO ONLINE</option>
            <option>מחנה סלובניה 2026</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2">
        <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
          הודעה
        </span>
        <textarea
          className="min-h-32 resize-y rounded-lg border border-white/12 bg-[#030405]/62 px-4 py-3 text-[#f7fbff] outline-none transition duration-300 placeholder:text-[#a8b3bd]/60 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
          name="message"
          placeholder="ספרו לנו קצת על השחקן/ית ומה אתם מחפשים"
        />
      </label>

      <label className="group mt-4 grid cursor-pointer grid-cols-[auto_1fr] gap-3 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-4 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.065]">
        <input
          className="peer sr-only"
          name="privacyConsent"
          type="checkbox"
          required
        />
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-white/18 bg-[#030405]/84 text-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 group-hover:border-[rgb(var(--cyan-rgb)/0.55)] peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--cyan-rgb)/0.28)] peer-checked:border-[var(--cyan)] peer-checked:bg-[var(--cyan)] peer-checked:text-[#001013] peer-checked:shadow-[0_0_26px_rgb(var(--cyan-rgb)/0.32),inset_0_1px_0_rgba(255,255,255,0.45)]">
          <Check size={20} strokeWidth={3} />
        </span>

        <span className="min-w-0">
          <span className="mb-1 inline-flex items-center gap-2 text-[0.92rem] font-extrabold text-[#f7fbff]">
            <ShieldCheck
              className="text-[var(--cyan)]"
              size={17}
              strokeWidth={2.5}
            />
            אישור פרטיות ותקנון
          </span>
          <span className="block text-[0.9rem] font-bold leading-[1.75] text-[#a8b3bd] transition duration-300 peer-checked:text-[#d6dde3]">
            אני מאשר/ת שקראתי את{" "}
            <Link
              className="rounded-md bg-[rgb(var(--cyan-rgb)/0.12)] px-1.5 py-0.5 font-black !text-[var(--cyan)] underline decoration-[rgb(var(--cyan-rgb)/0.85)] decoration-2 underline-offset-4 ring-1 ring-[rgb(var(--cyan-rgb)/0.22)] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.2)] hover:!text-[var(--cyan-light)] hover:decoration-[var(--cyan-light)]"
              href="/privacy"
              target="_blank"
            >
              מדיניות הפרטיות
            </Link>{" "}
            ואת{" "}
            <Link
              className="rounded-md bg-[rgb(var(--cyan-rgb)/0.12)] px-1.5 py-0.5 font-black !text-[var(--cyan)] underline decoration-[rgb(var(--cyan-rgb)/0.85)] decoration-2 underline-offset-4 ring-1 ring-[rgb(var(--cyan-rgb)/0.22)] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.2)] hover:!text-[var(--cyan-light)] hover:decoration-[var(--cyan-light)]"
              href="/terms"
              target="_blank"
            >
              תקנון ותנאי השימוש
            </Link>
            , ואני מסכים/ה למסירת הפרטים לצורך יצירת קשר.
          </span>
        </span>
      </label>

      <button
        className="mt-5 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.28),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
        type="submit"
      >
        שליחת פרטים ב-WhatsApp
        <Send size={19} strokeWidth={2.5} />
      </button>
    </form>
  );
}
