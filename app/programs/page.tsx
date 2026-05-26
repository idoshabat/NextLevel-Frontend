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
    title: "PRO MAX",
    subtitle: "המעטפת המושלמת למקצוענים",
    ages: "24 אימונים אישיים",
    schedule: "ליווי מלא לעונה",
    icon: Trophy,
    description:
      "המסלול היוקרתי והמקיף ביותר שלנו, שנועד לשחקנים השואפים להגיע לטופ. ליווי אישי צמוד המדמה את התנאים של שחקן מקצועני בליגות הבכירות.",
    points: [
      "24 אימונים אישיים לאורך העונה עם פוקוס בלעדי עליך",
      "ניהול וליווי אונליין על ידי מאמן אישי לכל סיטואציה במגרש ומחוצה לו",
      "8 מפגשי ניתוח וידאו מעמיקים לדיוק קבלת ההחלטות",
      "כולל את כל הטבות ה-PRO: קליפ ביצועים, מעקב גופני חודשי וגישה לאימוני אקדמיה בסופ\"ש",
    ],
  },
  {
    title: "MAX",
    subtitle: "ניהול קריירה ושיפור ביצועים",
    ages: "ניתוח וידאו שבועי",
    schedule: "ליווי מקצועי",
    icon: Target,
    description:
      "תוכנית הליווי המנטלי והמקצועי שנותנת לך יתרון על פני המתחרים בכל שבוע מחדש.",
    points: [
      "שיחה שבועית לפני כל משחק להצבת מטרות ומיקוד באתגרים",
      "ניתוח וידאו שבועי, אבן היסוד של התוכנית - למידת המשחק דרך העיניים של המאמנים שלנו",
      "מענה שוטף להתמודדות עם לחץ, שפת גוף וקשר מול המועדון",
      "כולל את כל חבילת ה-PRO: מעקב גופני וגישה לאימוני סופ\"ש",
    ],
  },
  {
    title: "PRO",
    subtitle: "הטמעת הרגלים מקצועניים",
    ages: "36 יחידות אימון",
    schedule: "וידאו ומעקב גופני",
    icon: Dumbbell,
    description:
      "הצעד הראשון במעבר משחקן רגיל לשחקן PRO. פוקוס על עבודה נכונה ומעקב מדעי.",
    points: [
      "36 יחידות אימון באקדמיה במסגרת אימוני סופ\"ש",
      "6 מפגשי ניתוח וידאו קבוצתיים/אישיים לדיוק תוכנית האימון",
      "מעקב חודשי אונליין עם מאמני כושר מוסמכים לבניית חוסן ואתלטיות",
      "עריכת קליפ ביצועים מרגעי השיא שלך מהעונה",
    ],
  },
  {
    title: "CLASSIC",
    subtitle: "יסודות ושיפור יכולת אישית",
    ages: "36 יחידות אימון",
    schedule: "אימוני סופ\"ש",
    icon: Users,
    description:
      "התוכנית הבסיסית והחזקה שלנו לשיפור הטכניקה וקצב המשחק.",
    points: [
      "36 יחידות אימון (סופי שבוע) בקבוצות עבודה איכותיות",
      "פיתוח יכולות עם דגש על קליעה, כדרור, סיומות ומשחק ה-1 על 1",
      "מעטפת האקדמיה הכוללת ליווי של הצוות המקצועי הבכיר שלנו לאורך כל העונה",
    ],
  },
  {
    title: "כרטיסיית 10 כניסות",
    subtitle: "גמישות מקסימלית",
    ages: "10 כניסות",
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
    title: "VIDEO ONLINE",
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
              מתוכניות בסיס ועד מעטפת מקצוענית מלאה, כל מסלול בנוי סביב
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

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-4 pb-[clamp(56px,8vw,88px)] md:grid-cols-2 xl:grid-cols-3">
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
