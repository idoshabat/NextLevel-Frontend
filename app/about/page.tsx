"use client";

import { useRef } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const coaches = [
  {
    name: "אבי אליהו",
    role: "מאמן ראשי",
    image: "https://i.pravatar.cc/640?img=12",
    description: "מוביל אימוני יסודות, קבלת החלטות ומשחק קבוצתי.",
  },
  {
    name: "טל דן",
    role: "מאמנת יכולות אישיות",
    image: "https://i.pravatar.cc/640?img=47",
    description: "מתמחה בכדרור, קליעה, שינויי קצב וביטחון עם הכדור.",
  },
  {
    name: "דורי אסף",
    role: "מאמן אתלטיקה",
    image: "https://i.pravatar.cc/640?img=15",
    description: "בונה מהירות, קואורדינציה, יציבות וכוח מותאם לשחקני כדורסל.",
  },
  {
    name: "עידו שבת",
    role: "מאמנת קבוצות צעירות",
    image: "https://i.pravatar.cc/640?img=32",
    description: "יוצרת סביבת אימון חיובית עם דגש על הנאה, משמעת והתקדמות.",
  },
  {
    name: "שמואל מלכוב",
    role: "מאמן קליעה",
    image: "https://i.pravatar.cc/640?img=59",
    description: "עובד על טכניקת זריקה, עבודת רגליים ושחרור מהיר.",
  },
  // {
  //   name: "שירה אברהם",
  //   role: "מאמנת מנטלית",
  //   image: "https://i.pravatar.cc/640?img=45",
  //   description: "מחזקת ריכוז, התמדה, התמודדות עם לחץ ומנהיגות על המגרש.",
  // },
];

const pillars = [
  {
    title: "מצוינות, ליווי וערכים",
    text: "אנחנו לא רק מאמנים שחקנים, אנחנו בונים אנשים, מנהיגים ומקצוענים. התהליך משלב דרישה מקצועית גבוהה יחד עם יחס אישי, חום וערכים.",
    icon: Trophy,
  },
  {
    title: "מהפרקט אל המציאות",
    text: "המאמנים שלנו מכירים את הדרך מבפנים. הניסיון כשחקני עבר והווה מאפשר להם לדבר כדורסל כשפת אם ולכוון כל שחקן בצורה פרקטית.",
    icon: ShieldCheck,
  },
  {
    title: "שיפור הוא תהליך",
    text: "התקדמות לא קורית במקרה. אנחנו הופכים מטרות לתהליך ברור, עם כלים מדויקים, משוב עקבי ודגש על הפרטים הקטנים שעושים הבדל גדול.",
    icon: Target,
  },
];

const developmentPoints = [
  "פרקטיקה ודיוק בפעולות המשחק",
  "קבלת החלטות והבנת המשחק המודרני",
  "שפת גוף, ביטחון והתמודדות עם לחץ",
  "ניהול עומסים, לו\"ז והרגלי עבודה",
  "ליווי בהתפתחות, קשיים והצלחות",
  "בניית שחקנים חזקים קודם כל כבני אדם",
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
            <p className="mt-5 max-w-[480px] text-[clamp(1.05rem,2vw,1.25rem)] font-extrabold leading-[1.55] text-[#f7fbff]/86">
              יותר ממשחק, זו הדרך.
            </p>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              בית מקצועי, חם ותומך לשחקנים שרוצים לקחת את עצמם לשלב הבא.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              החזון שלנו הוא להיות הבית המקצועי הערכי והמוביל בישראל לפיתוח
              שחקני ושחקניות כדורסל. אנחנו מאמינים שכל שחקן יכול לפרוץ דרך
              ולהגיע למקסימום הפוטנציאל שלו, אם יקבל את הכלים הנכונים,
              ההכוונה המדויקת והליווי המתאים בכל שלב.
            </p>
            <p className="mt-4 max-w-[720px] text-[clamp(1.02rem,1.8vw,1.16rem)] leading-[1.8] text-[#f7fbff]/78">
              המטרה שלנו היא ליצור מעטפת שלמה: מאמנים שעברו את הדרך בעצמם,
              שיטת אימון פרקטית, יחס אישי ותהליך שמפתח את הילד או הילדה
              כשחקנים, אבל קודם כל כבני אדם חזקים, ערכיים ומאמינים בעצמם.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%_-_32px))] pb-[clamp(64px,9vw,112px)]">
        <div className="mb-7 max-w-[780px]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Sparkles size={18} strokeWidth={2.4} />
            הדרך שלנו
          </p>
          <h2 className="m-0 text-[clamp(2.1rem,5vw,4.4rem)] leading-none">
            עברנו את הדרך. עכשיו התור שלכם.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={pillar.title}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.45rem] leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%_-_32px))] pb-[clamp(64px,9vw,112px)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Zap size={18} strokeWidth={2.4} />
              מה באמת משנה שחקן
            </p>
            <h2 className="m-0 text-[clamp(2.1rem,5vw,4.4rem)] leading-none">
              כלים פרקטיים. תהליך אמיתי. בכל רמה לשלב הבא.
            </h2>
            <p className="mt-5 max-w-[620px] text-[1.05rem] leading-[1.85] text-[#a8b3bd]">
              אנחנו מלמדים את הדברים שמייצרים שינוי אמיתי, מהצעד הראשון על
              המגרש ועד לשאיפה להשתלב ברמות הגבוהות.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {developmentPoints.map((point) => (
              <div
                className="flex min-h-20 items-start gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 text-[1rem] font-extrabold leading-[1.55] text-[#f7fbff]/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={point}
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-[var(--cyan)]"
                  size={19}
                  strokeWidth={2.5}
                />
                <span>{point}</span>
              </div>
            ))}
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
              המנטורים שמובילים את הדרך
            </h2>
            <p className="mt-4 max-w-[720px] text-[1.02rem] leading-[1.75] text-[#a8b3bd]">
              הצוות שלנו בנוי ממאמנים ושחקנים שמכירים את האתגרים, הלחץ
              וההצלחות של הדרך, ויודעים להפוך ניסיון אישי להכוונה מקצועית.
            </p>
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
