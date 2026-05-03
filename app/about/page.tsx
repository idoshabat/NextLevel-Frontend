"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const coaches = [
  {
    name: "דניאל כהן",
    role: "מאמן ראשי",
    image: "https://i.pravatar.cc/640?img=12",
    description: "מוביל אימוני יסודות, קבלת החלטות ומשחק קבוצתי.",
  },
  {
    name: "נועה לוי",
    role: "מאמנת יכולות אישיות",
    image: "https://i.pravatar.cc/640?img=47",
    description: "מתמחה בכדרור, קליעה, שינויי קצב וביטחון עם הכדור.",
  },
  {
    name: "איתי מזרחי",
    role: "מאמן אתלטיקה",
    image: "https://i.pravatar.cc/640?img=15",
    description: "בונה מהירות, קואורדינציה, יציבות וכוח מותאם לשחקני כדורסל.",
  },
  {
    name: "מאיה פרץ",
    role: "מאמנת קבוצות צעירות",
    image: "https://i.pravatar.cc/640?img=32",
    description: "יוצרת סביבת אימון חיובית עם דגש על הנאה, משמעת והתקדמות.",
  },
  {
    name: "עומר ביטון",
    role: "מאמן קליעה",
    image: "https://i.pravatar.cc/640?img=59",
    description: "עובד על טכניקת זריקה, עבודת רגליים ושחרור מהיר.",
  },
  {
    name: "שירה אברהם",
    role: "מאמנת מנטלית",
    image: "https://i.pravatar.cc/640?img=45",
    description: "מחזקת ריכוז, התמדה, התמודדות עם לחץ ומנהיגות על המגרש.",
  },
];

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "next" | "previous") => {
    carouselRef.current?.scrollBy({
      left: direction === "next" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="mx-auto w-[min(1120px,calc(100%_-_32px))] py-[clamp(56px,8vw,96px)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              Next Level Basketball Academy
            </p>
            <h1 className="m-0 text-[clamp(2.8rem,7vw,6.7rem)] leading-[0.95]">
              אודותינו
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              מגדלים שחקנים שחושבים מהר, עובדים נכון ומשחקים יחד.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              נקסט לבל היא אקדמיית כדורסל שמחברת בין יסודות מקצועיים,
              יחס אישי ואווירה תחרותית בריאה. אנחנו מאמינים שכל שחקן צריך
              להבין את המשחק, לפתח ביטחון, ללמוד הרגלי עבודה וליהנות מכל
              אימון בדרך למטרה הבאה שלו.
            </p>
            <p className="mt-4 max-w-[720px] text-[clamp(1.02rem,1.8vw,1.16rem)] leading-[1.8] text-[#f7fbff]/78">
              התוכניות שלנו משלבות אימוני טכניקה, יכולות גופניות, קבלת החלטות,
              עבודת צוות וליווי מנטלי. מהצעד הראשון על המגרש ועד לרמות
              תחרותיות יותר, אנחנו בונים תהליך שמותאם לגיל, לקצב ולשאיפות של
              כל שחקן ושחקנית.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[clamp(64px,9vw,112px)]">
        <div className="mx-auto mb-6 flex w-[min(1120px,calc(100%_-_32px))] items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-[0.9rem] font-extrabold text-[var(--cyan)]">
              הצוות שלנו
            </p>
            <h2 className="m-0 text-[clamp(2rem,4.5vw,4rem)] leading-none">
              המאמנים שמובילים את הדרך
            </h2>
          </div>

          <div className="flex items-center gap-2 max-[640px]:hidden" dir="ltr">
            <button
              className="grid size-11 cursor-pointer place-items-center rounded-lg bg-white/[0.06] text-[#f7fbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.12)] hover:text-[var(--cyan)]"
              type="button"
              aria-label="מאמן קודם"
              onClick={() => scrollCarousel("next")}
            >
              <ChevronLeft size={22} strokeWidth={2.4} />
            </button>
            <button
              className="grid size-11 cursor-pointer place-items-center rounded-lg bg-white/[0.06] text-[#f7fbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.12)] hover:text-[var(--cyan)]"
              type="button"
              aria-label="מאמן הבא"
              onClick={() => scrollCarousel("previous")}
            >
              <ChevronRight size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(16px,calc((100vw_-_1120px)/2))] pb-4 [scrollbar-color:rgb(var(--cyan-rgb)/0.6)_rgba(255,255,255,0.08)] [scrollbar-width:thin]"
          dir="rtl"
          aria-label="קרוסלת מאמנים"
        >
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="group relative min-w-[min(78vw,320px)] snap-start overflow-hidden rounded-lg bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#0b1114]">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={coach.image}
                  alt={`תמונה של ${coach.name}`}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="mb-1 text-[0.9rem] font-extrabold text-[var(--cyan)]">
                  {coach.role}
                </p>
                <h3 className="m-0 text-[1.45rem] leading-tight">
                  {coach.name}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[#a8b3bd]">
                  {coach.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
