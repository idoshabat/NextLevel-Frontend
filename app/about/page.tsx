import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { CoachPopups } from "@/components/coaches/coach-popups";
import { coaches } from "@/data/coaches";

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

const featuredCoachSlugs = ["tal-dunn", "avi-eliyahu", "dori-asaf"];
const featuredCoaches = featuredCoachSlugs
  .map((slug) => coaches.find((coach) => coach.slug === slug))
  .filter(Boolean) as typeof coaches;

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,100px)]">
        <div className="about-poster-bg absolute inset-0 -z-10" aria-hidden="true" />

        <div className="mx-auto w-[min(1080px,calc(100%_-_32px))] rounded-lg border border-white/10 bg-[#030405]/82 px-[clamp(20px,5vw,56px)] py-[clamp(32px,7vw,68px)] shadow-[0_26px_90px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-4 text-[clamp(1.8rem,5vw,4.3rem)] font-black uppercase leading-none tracking-normal text-[var(--cyan)]">
              We believe in
            </p>
            <h1 className="m-0 text-[clamp(3rem,9vw,7.6rem)] font-black uppercase leading-[0.86] tracking-normal text-[#f7fbff]">
              The small details
            </h1>
            <p className="mt-3 text-[clamp(1.8rem,5vw,4.4rem)] font-black uppercase leading-none tracking-normal text-[#f7fbff]">
              that make a{" "}
              <span className="text-[var(--cyan)]">big difference</span>
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[880px] gap-5 text-center text-[clamp(1.02rem,1.8vw,1.18rem)] leading-[1.85] text-[#d6dde3]">
            <p className="m-0">
              Next Level Basketball היא אקדמיה לפיתוח יכולות אישיות בכדורסל,
              שהוקמה כדי להקפיץ שחקנים לרמות
              הגבוהות ביותר בשכבות הגיל שלהם.
            </p>
            <p className="m-0">
              אנחנו מאמינים שההבדל בין שחקן טוב לשחקן מצוין נמצא בפרטים
              הקטנים: הרגלי עבודה, קבלת החלטות, טכניקה נקייה, ביטחון ומנטליות.
            </p>
            <p className="m-0 text-[#f7fbff]">
             המטרה: לספק מעטפת מקצועית, מנטאלית וליווי אישי לאורך כל שלבי
              ההתפתחות, ולמצות את הפוטנציאל הטמון בכל שחקן ושחקן.
            </p>
          </div>

          {/* <div className="mx-auto mt-11 grid max-w-[820px] gap-5">
            {featuredCoaches.map((coach) => (
              <Link
                className="group grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 text-right transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.07] sm:grid-cols-[1fr_116px] sm:items-center"
                href={`/coaches/${coach.slug}`}
                key={coach.slug}
              >
                <div>
                  <h2 className="m-0 text-[1.28rem] leading-tight">
                    <span className="text-[var(--cyan)]">{coach.name}</span>
                    <span className="mx-2 text-[#f7fbff]/42">/</span>
                    <span className="text-[#f7fbff]/86">{coach.role}</span>
                  </h2>
                  <p className="mt-2 text-[0.98rem] leading-[1.75] text-[#c4cbd1]">
                    {coach.bio[0]}
                  </p>
                </div>

                <div className="order-first h-[116px] overflow-hidden rounded-lg border-2 border-[var(--cyan)] bg-[#0b1114] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.2)] sm:order-none">
                  <img
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={coach.image}
                    alt={`תמונה של ${coach.name}`}
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%_-_32px))] pb-[clamp(64px,9vw,112px)]">
        <div className="mb-7 max-w-[820px]">
          <p className="mb-2 text-[0.9rem] font-extrabold text-[var(--cyan)]">
            הצוות שלנו
          </p>
          <h2 className="m-0 text-[clamp(2rem,4.5vw,4rem)] leading-none">
            האנשים שמובילים את הדרך
          </h2>
          <p className="mt-4 max-w-[720px] text-[1.02rem] leading-[1.75] text-[#a8b3bd]">
הצוות שלנו מורכב משחקני הווה ועבר שעברו בעצמם את כל שלבי ההתפתחות של ספורטאי. מהצעדים הראשונים, דרך האתגרים, הלחצים והכישלונות, ועד להישגים ולהצלחות ברמות הגבוהות ביותר.          </p>
        </div>

        <CoachPopups coaches={coaches} />
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
    </div>
  );
}
