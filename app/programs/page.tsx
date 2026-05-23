import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Dumbbell,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "יסודות המשחק",
    subtitle: "לשחקנים בתחילת הדרך",
    ages: "גילאי 8-11",
    schedule: "פעמיים בשבוע",
    icon: Target,
    description:
      "מסלול שמעניק בסיס חזק ונכון: שליטה בכדור, מסירות, קליעה, עבודת רגליים והבנת משחק ראשונית.",
    points: [
      "תרגול טכני בקבוצות קטנות",
      "למידה דרך משחקים ואתגרים",
      "בניית ביטחון והרגלי אימון",
    ],
  },
  {
    title: "שחקן מתקדם",
    subtitle: "לשחקנים שרוצים לעלות רמה",
    ages: "גילאי 12-15",
    schedule: "2-3 אימונים בשבוע",
    icon: Trophy,
    description:
      "תוכנית בקצב גבוה יותר עם דגש על קבלת החלטות, משחק קבוצתי, קליעה תחת לחץ ויכולת להתמודד מול הגנה.",
    points: [
      "קריאת מצבי משחק והתקפה",
      "עבודת רגליים, שינויי קצב וסיומות",
      "משוב אישי ומעקב התקדמות",
    ],
  },
  {
    title: "אימון אישי פרימיום",
    subtitle: "תהליך ממוקד לפי מטרת השחקן",
    ages: "כל הגילאים",
    schedule: "בתיאום אישי",
    icon: Dumbbell,
    description:
      "אימונים אישיים או זוגיים שמותאמים בדיוק לשחקן: טכניקה, קליעה, אתלטיות, ביטחון או הכנה לרמה תחרותית.",
    points: [
      "אבחון נקודות חוזקה ושיפור",
      "תוכנית עבודה אישית וברורה",
      "קצב אימון גבוה ותיקונים בזמן אמת",
    ],
  },
];

const benefits = [
  {
    title: "קבוצות לפי רמה",
    text: "כל שחקן נכנס למסגרת שמתאימה לגיל, ניסיון וקצב התקדמות.",
    icon: Users,
  },
  {
    title: "תהליך מסודר",
    text: "לא רק אימון בודד, אלא דרך ברורה עם מטרות ודגשים לאורך זמן.",
    icon: CalendarDays,
  },
  {
    title: "יחס אישי",
    text: "המאמנים מכירים את השחקנים ונותנים תיקונים ודגשים אישיים.",
    icon: CheckCircle2,
  },
];

export default function ProgramsPage() {
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
              מסלול שמתאים לשחקן.
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              מהבסיס הראשון ועד הכנה לרמה תחרותית, כל תוכנית בנויה סביב
              התקדמות אמיתית.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              כל מסלול מדגיש מטרות אחרות, אבל כולם נשענים על אותו עיקרון:
              אימון מקצועי, יחס אישי, והרבה אהבה למשחק.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-4 pb-[clamp(56px,8vw,88px)] lg:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <article
              className="group flex min-h-full flex-col rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
              key={program.title}
            >
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

              <ul className="mt-5 grid gap-3 p-0">
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

              <Link
                className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                href="/contact"
              >
                בדיקת התאמה
                <ArrowLeft size={20} strokeWidth={2.6} />
              </Link>
            </article>
          );
        })}
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
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={benefit.title}
              >
                <div className="mb-4 inline-grid size-11 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={22} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.35rem] leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.75] text-[#a8b3bd]">
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
