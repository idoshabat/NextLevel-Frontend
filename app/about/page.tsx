import Link from "next/link";
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
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

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="mx-auto w-[min(1120px,calc(100%_-_32px))] py-[clamp(56px,8vw,96px)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              Next Level Basketball Academy
            </p>
            <h1 className="m-0 text-[clamp(2.8rem,7vw,6.7rem)] leading-[0.95]">
              מי אנחנו?
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
        <div className="mb-7 max-w-[820px]">
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

        <div className="grid gap-4">
          {coaches.map((coach, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <Link
                key={coach.name}
                className={`group mx-auto grid w-full max-w-[780px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_42px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075] lg:h-[210px] ${
                  imageFirst
                    ? "lg:grid-cols-[240px_1fr]"
                    : "lg:grid-cols-[1fr_240px]"
                }`}
                href={`/coaches/${coach.slug}`}
                aria-label={`מעבר לעמוד של ${coach.name}`}
                data-scroll-reveal
                data-scroll-reveal-direction={index % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`h-[170px] overflow-hidden bg-[#0b1114] sm:h-[190px] lg:h-full ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={coach.image}
                    alt={`תמונה של ${coach.name}`}
                    loading="lazy"
                  />
                </div>

                <div
                  className={`flex min-h-0 flex-col justify-center p-5 lg:p-6 ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="mb-1 text-[0.82rem] font-extrabold text-[var(--cyan)]">
                    {coach.role}
                  </p>
                  <h3 className="m-0 text-[clamp(1.35rem,2.4vw,1.85rem)] leading-tight">
                    {coach.name}
                  </h3>
                  <p className="mt-2 text-[0.9rem] font-extrabold leading-[1.65] text-[#f7fbff]/88">
                    {coach.headline}
                  </p>
                  <p className="mt-2 line-clamp-2 max-w-[460px] text-[0.86rem] leading-[1.6] text-[#a8b3bd]">
                    {coach.description}
                  </p>
                  <span className="mt-3 inline-flex w-fit text-[0.88rem] font-extrabold text-[var(--cyan)] transition duration-300 group-hover:translate-x-[-4px]">
                    לפרופיל המאמן
                  </span>
                </div>
              </Link>
            );
          })}
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
    </div>
  );
}
