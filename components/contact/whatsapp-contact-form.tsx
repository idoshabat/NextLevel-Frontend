"use client";

import { Send } from "lucide-react";

const whatsappPhone = "972549408667";

function getFieldValue(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export function WhatsappContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getFieldValue(formData, "name");
    const phone = getFieldValue(formData, "phone");
    const age = getFieldValue(formData, "age");
    const program = getFieldValue(formData, "program");
    const message = getFieldValue(formData, "message");

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
            type="text"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
            טלפון
          </span>
          <input
            className="min-h-12 rounded-lg border border-white/12 bg-[#030405]/62 px-4 text-[#f7fbff] outline-none transition duration-300 placeholder:text-[#a8b3bd]/60 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
            name="phone"
            placeholder="050-000-0000"
            type="tel"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[0.95rem] font-extrabold text-[#f7fbff]/88">
            גיל השחקן/ית
          </span>
          <input
            className="min-h-12 rounded-lg border border-white/12 bg-[#030405]/62 px-4 text-[#f7fbff] outline-none transition duration-300 placeholder:text-[#a8b3bd]/60 focus:border-[rgb(var(--cyan-rgb)/0.7)] focus:ring-2 focus:ring-[rgb(var(--cyan-rgb)/0.16)]"
            name="age"
            placeholder="לדוגמה: 12"
            type="text"
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
          >
            <option value="" disabled>
              בחרו אפשרות
            </option>
            <option>אימון ניסיון</option>
            <option>אימון אישי</option>
            <option>רכישת כרטיסייה</option>
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
