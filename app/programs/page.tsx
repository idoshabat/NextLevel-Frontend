"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "כרטיסיית אימונים",
    subtitle: "גמישות מקסימלית",
    ages: "כניסות גמישות",
    schedule: "בתיאום מראש",
    icon: CalendarDays,
    description:
      "מתאים לשחקנים שרוצים לטעום מהשיטה של Next Level או לשלב אימוני תגבור נקודתיים.",
    points: [
      "הגעה לאימוני האקדמיה בהתאם ללו\"ז האישי שלך",
      "תיאום מראש כדי לשמור על איכות קבוצות העבודה",
      "אותה רמת אימון גבוהה וצוות מאמנים בכיר, ללא התחייבות שנתית",
    ],
  },
  {
    title: " מנוי שנתי - CLASSIC",
    subtitle: "יסודות ושיפור יכולת אישית",
    ages: "יחידות אימון",
    schedule: "אימוני סופ\"ש",
    icon: Users,
    description:
      "התוכנית הבסיסית והחזקה שלנו לשיפור הטכניקה וקצב המשחק.",
    points: [
      "יחידות אימון בסופי שבוע בקבוצות עבודה איכותיות",
      "פיתוח יכולות עם דגש על קליעה, כדרור, סיומות ומשחק אישי",
      "מעטפת האקדמיה הכוללת ליווי של הצוות המקצועי הבכיר שלנו לאורך כל העונה",
    ],
  },
  {
    title: "תוכניות PREMUIM",
    subtitle: "שלוש תוכניות ליווי שונות",
    ages: "איפיון מדויק",
    schedule: "לפרטים",
    icon: Trophy,
    description:
      "מסלולי ליווי לשחקנים שרוצים מעטפת אישית ומקצועית לאורך העונה, עם התאמה מדויקת לצרכים, למטרות ולשלב ההתפתחות של השחקן.",
    points: [
      "איפיון מדויק של השחקן, המטרות והצרכים המקצועיים",
      "שליטה ומעקב על הלו״ז המקצועי לאורך העונה",
      "ניתוחי וידאו להבנת המשחק וקבלת החלטות טובה יותר",
      "הכנה למשחקים והתמקדות באתגרים הקרובים",
      "התנהלות שוטפת במהלך העונה מול עומסים, לחץ ומטרות",
      "ליווי בקבלת החלטות מקצועיות ובהסתכלות רחבה על הקריירה",
    ],
    note: "תוכניות הליווי מוגבלות בכמות ואינן מתאימות לכל שחקן. התאמה נעשית לאחר שיחה והיכרות מקצועית.",
  },
  
  {
    title: "ליווי מרחוק - VIDEO ONLINE",
    subtitle: "לראות את המשחק אחרת",
    ages: "מפגשי אונליין",
    schedule: "מכל מקום בארץ",
    icon: Target,
    description:
      "הכלי העוצמתי ביותר לשיפור ה-Basketball IQ ודיוק קבלת ההחלטות. אצלנו הווידאו הוא אבן היסוד לשיפור היכולת בזמן אמת.",
    points: [
      "מפגשי אונליין שבועיים לצפייה משותפת במשחקים שלך עם מאמני האקדמיה",
      "זיהוי טעויות בזמן אמת, שיפור ראיית המגרש והבנת התמונה המלאה כפי שהמאמן רואה אותה",
      "דף עבודה שבועי עם יעדים ברורים לאימונים האישיים והקבוצתיים במועדון",
      "עבודה על שפת גוף, חיוביות במגרש, מנהיגות והתמודדות עם לחץ ומשוב ממאמנים",
      "למידת המשחק בעיניים מקצועיות כדי להפוך משחקן מוכשר לשחקן חכם ומנהיג",
    ],
  },
  {
    title: "אימונים אישיים",
    subtitle: "פיתוח אישי ומדויק לשחקן",
    ages: "אימון אישי",
    schedule: "בתיאום אישי",
    icon: Dumbbell,
    description:
      "אימונים אישיים לשחקנים שרוצים לעבוד לעומק על יכולות ספציפיות, לתקן הרגלים ולבנות ביטחון דרך יחס אישי מלא.",
    points: [
      "עבודה ממוקדת על קליעה, כדרור, סיומות, מצבי משחק אישיים וקבלת החלטות",
      "תיקון פרטים קטנים שמייצרים שינוי גדול במשחק",
      "התאמת האימון לגיל, לרמה, לתפקיד ולמטרות של השחקן",
      "אפשרות לשלב כחיזוק נקודתי לצד מסלול אקדמיה או תוכנית ליווי",
    ],
  },
  {
    title: "מחנות",
    subtitle: "חוויה מקצועית בארץ ובחו״ל",
    ages: "צעירים ובוגרים",
    schedule: "לפי מועדי המחנות",
    icon: CalendarDays,
    href: "/camps",
    description:
      "מחנות אינטנסיביים שמחברים בין אימון מקצועי, חוויה קבוצתית, חשיפה לרמות שונות ועבודה ממוקדת בתקופות מפתח בעונה.",
    points: [
      "מחנות בארץ ובחו״ל לפי גיל ורמה",
      "עבודה מקצועית מרוכזת על יסודות, קצב משחק וקבלת החלטות",
      "ליווי צוות האקדמיה לאורך המחנה",
      "אפשרות להצטרף למחנות פעילים בהתאם להתאמה ולזמינות",
    ],
  },
];

const benefits = [
  {
    title: "משאירים פרטים",
    text: "בוחרים תוכנית שמעניינת אתכם או שולחים הודעת WhatsApp, ואנחנו חוזרים עם הכוונה ראשונית.",
    icon: CalendarDays,
  },
  {
    title: "שיחת איפיון והתאמה",
    text: "מבררים צרכים, רמה, מטרות ואת סוג המעטפת הנכון: אימוני סופ\"ש, ליווי אישי, וידאו אונליין או מסלול מלא.",
    icon: Users,
  },
  {
    title: "יוצאים לתהליך",
    text: "לאחר הבנת הצרכים, מגיעים לאימון ניסיון ויוצאים לדרך.",
    icon: Trophy,
  },
];

export default function ProgramsPage() {
  const [focusedProgramIndex, setFocusedProgramIndex] = useState(0);
  const [isDesktopCarousel, setIsDesktopCarousel] = useState(true);
  const [touchSwipeDirection, setTouchSwipeDirection] = useState<
    "left" | "right" | null
  >(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchAnimationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    const updateMode = () => {
      const isDesktop = window.innerWidth >= 1024;

      setIsDesktopCarousel(isDesktop);
      setFocusedProgramIndex((currentIndex) => {
        if (isDesktop) {
          return Math.min(Math.max(currentIndex, 0), programs.length - 1);
        }

        return currentIndex;
      });
    };

    updateMode();
    window.addEventListener("resize", updateMode);

    return () => {
      window.removeEventListener("resize", updateMode);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (touchAnimationTimeoutRef.current) {
        clearTimeout(touchAnimationTimeoutRef.current);
      }
    };
  }, []);

  const carouselSlots = isDesktopCarousel
    ? [
        focusedProgramIndex - 1 >= 0 ? focusedProgramIndex - 1 : null,
        focusedProgramIndex,
        focusedProgramIndex + 1 < programs.length
          ? focusedProgramIndex + 1
          : null,
      ]
    : [focusedProgramIndex];

  const moveProgramFocus = (direction: "right" | "left") => {
    setFocusedProgramIndex((currentIndex) => {
      const nextIndex = direction === "right" ? currentIndex - 1 : currentIndex + 1;

      return Math.min(Math.max(nextIndex, 0), programs.length - 1);
    });
  };

  const isAtRightEdge = focusedProgramIndex === 0;
  const isAtLeftEdge = focusedProgramIndex === programs.length - 1;
  const isRightArrowDisabled = isAtRightEdge;
  const isLeftArrowDisabled = isAtLeftEdge;
  const currentProgramNumber = focusedProgramIndex + 1;

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];

    if (!touch) {
      return;
    }

    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY);

    if (!isHorizontalSwipe) {
      return;
    }

    setTouchSwipeDirection(deltaX > 0 ? "right" : "left");
    moveProgramFocus(deltaX > 0 ? "left" : "right");

    if (touchAnimationTimeoutRef.current) {
      clearTimeout(touchAnimationTimeoutRef.current);
    }

    touchAnimationTimeoutRef.current = setTimeout(() => {
      setTouchSwipeDirection(null);
    }, 360);
  };

  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_6%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Target size={19} strokeWidth={2.4} />
              תוכניות אימון
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              Find Your Path
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              מתוכנית אימונים מקצועית ועד מעטפת מלאה לשחקן ברמות הגבוהות, כל מסלול בנוי סביב
              התקדמות אמיתית לאורך העונה.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              כל תוכנית מדגישה עומק אחר של ליווי, אימון וניתוח משחק, אבל כולן
              נשענות על אותו עיקרון: עבודה מקצועית, יחס אישי והטמעת הרגלים של
              שחקנים ברמה גבוהה.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(56px,8vw,88px)]">
        <div className="relative">
          <div className="mb-6 flex items-center justify-center gap-4" dir="ltr">
            <span className="rounded-lg border border-white/10 bg-[#030405]/72 px-4 py-2 text-[0.92rem] font-black tracking-[0.16em] text-[#f7fbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
              {String(currentProgramNumber).padStart(2, "0")}
              <span className="mx-2 text-[var(--cyan)]">/</span>
              {String(programs.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2" aria-hidden="true">
              {[...programs].reverse().map((program, reverseIndex) => {
                const index = programs.length - 1 - reverseIndex;

                return (
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === focusedProgramIndex
                      ? "w-8 bg-[var(--cyan)] shadow-[0_0_18px_rgb(var(--cyan-rgb)/0.45)]"
                      : "w-2 bg-white/20"
                  }`}
                  key={program.title}
                />
                );
              })}
            </div>
          </div>

          <button
            aria-label="התוכניות הקודמות"
            className={`absolute right-0 top-[320px] z-10 inline-grid size-12 translate-x-1/2 place-items-center rounded-lg border shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-md transition duration-300 max-[640px]:top-[280px] max-[640px]:translate-x-0 ${
              isRightArrowDisabled
                ? "cursor-not-allowed border-white/8 bg-[#030405]/44 text-[#f7fbff]/28 shadow-none"
                : "border-white/12 bg-[#030405]/82 text-[#f7fbff] hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.62)] hover:bg-[rgb(var(--cyan-rgb)/0.16)] hover:text-[var(--cyan)]"
            }`}
            disabled={isRightArrowDisabled}
            onClick={() => moveProgramFocus("right")}
            type="button"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
          <button
            aria-label="התוכניות הבאות"
            className={`absolute left-0 top-[320px] z-10 inline-grid size-12 -translate-x-1/2 place-items-center rounded-lg border shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-md transition duration-300 max-[640px]:top-[280px] max-[640px]:translate-x-0 ${
              isLeftArrowDisabled
                ? "cursor-not-allowed border-white/8 bg-[#030405]/44 text-[#f7fbff]/28 shadow-none"
                : "border-white/12 bg-[#030405]/82 text-[#f7fbff] hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.62)] hover:bg-[rgb(var(--cyan-rgb)/0.16)] hover:text-[var(--cyan)]"
            }`}
            disabled={isLeftArrowDisabled}
            onClick={() => moveProgramFocus("left")}
            type="button"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          <div
            className="grid min-h-[680px] gap-4 touch-pan-y lg:grid-cols-3"
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
          >
          {carouselSlots.map((programIndex, slotIndex) => {
            if (programIndex === null) {
              return (
                <div
                  aria-hidden="true"
                  className="hidden rounded-lg border border-transparent lg:block"
                  key={`empty-${slotIndex}`}
                />
              );
            }

            const program = programs[programIndex];
            const Icon = program.icon;
            const programHref =
              "href" in program && program.href ? program.href : "/contact";
            const ctaLabel = "href" in program ? "לצפייה במחנות" : "בדיקת התאמה";
            const isFocused = programIndex === focusedProgramIndex;

            return (
              <div
                className={`program-carousel-card-mobile transition duration-500 ${
                  isFocused
                    ? "lg:scale-100 lg:opacity-100 lg:blur-0"
                    : "cursor-pointer lg:scale-[0.96] lg:opacity-45 lg:blur-[2px]"
                }`}
                data-swipe={isFocused ? touchSwipeDirection ?? undefined : undefined}
                key={program.title}
                onClick={
                  isFocused
                    ? undefined
                    : () => setFocusedProgramIndex(programIndex)
                }
              >
                <article className="group flex h-full min-h-full flex-col rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]">
                  <div className="mb-5 grid size-13 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)] transition duration-300 group-hover:bg-[rgb(var(--cyan-rgb)/0.22)]">
                    <Icon size={27} strokeWidth={2.4} />
                  </div>

                  <p className="m-0 text-[0.92rem] font-extrabold text-[var(--cyan)]">
                    {program.subtitle}
                  </p>
                  <h2 className="mt-2 mb-0 text-[1.75rem] leading-tight">
                    {program.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white/[0.07] px-3 py-2 text-[0.92rem] font-extrabold text-[#f7fbff]/82">
                      {program.ages}
                    </span>
                    <span className="rounded-lg bg-white/[0.07] px-3 py-2 text-[0.92rem] font-extrabold text-[#f7fbff]/82">
                      {program.schedule}
                    </span>
                  </div>

                  <p className="mt-5 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                    {program.description}
                  </p>

                  <ul className="mt-5 mb-7 grid gap-3 p-0">
                    {program.points.map((point) => (
                      <li
                        className="flex items-start gap-2 text-[0.98rem] leading-[1.65] text-[#f7fbff]/82"
                        key={point}
                      >
                        <CheckCircle2
                          className="mt-1 shrink-0 text-[var(--cyan)]"
                          size={18}
                          strokeWidth={2.5}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {"note" in program ? (
                    <p className="mb-7 mt-0 rounded-lg border border-[rgb(var(--cyan-rgb)/0.28)] bg-[rgb(var(--cyan-rgb)/0.08)] px-4 py-3 text-[0.95rem] font-extrabold leading-[1.65] text-[#f7fbff]/84">
                      * {program.note}
                    </p>
                  ) : null}

                  <Link
                    className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                    href={programHref}
                  >
                    {ctaLabel}
                    <ArrowLeft size={20} strokeWidth={2.6} />
                  </Link>
                </article>
              </div>
            );
          })}
            <div
              aria-hidden="true"
              className="hidden shrink-0 basis-1/3 lg:block"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            איך בוחרים מסלול?
          </p>
          <h2 className="m-0 text-[clamp(2.1rem,5vw,4.4rem)] leading-none">
            מתחילים משיחה קצרה ואימון ניסיון.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={benefit.title}
              >
                <span className="absolute left-5 top-4 text-[4.4rem] font-black leading-none text-white/[0.045]">
                  {index + 1}
                </span>
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.5rem] leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
