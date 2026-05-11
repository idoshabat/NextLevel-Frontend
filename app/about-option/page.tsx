import Link from "next/link";
import { ArrowLeft, BadgeCheck, Sparkles, Target, Trophy } from "lucide-react";
import { coaches } from "@/data/coaches";

const values = [
  {
    title: "מקצוענות",
    text: "שיטה מסודרת, אימונים מדויקים ומעקב אחר התקדמות של כל שחקן.",
    icon: Trophy,
  },
  {
    title: "מעטפת אישית",
    text: "מנטורים שמכירים את השחקנים, את הקצב שלהם ואת הדרך הנכונה עבורם.",
    icon: BadgeCheck,
  },
  {
    title: "דרך לערכים",
    text: "משמעת, ביטחון, אחריות וקבוצתיות כחלק בלתי נפרד מהכדורסל.",
    icon: Target,
  },
];

export default function AboutOptionPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,104px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_10%,rgb(var(--cyan-rgb)/0.18),transparent_24rem),linear-gradient(145deg,#030405_0%,#101719_52%,#050708_100%)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Sparkles size={19} strokeWidth={2.4} />
              About Option 2
            </p>
            <h1 className="m-0 text-[clamp(3.2rem,8vw,7.4rem)] leading-[0.88]">
              מי אנחנו
            </h1>
            <p className="mt-5 max-w-[560px] text-[clamp(1.12rem,2vw,1.34rem)] font-extrabold leading-[1.55] text-[#f7fbff]/88">
              אקדמיית כדורסל שמחברת בין אימון ברמה גבוהה, מנטורים מעורבים
              ותהליך אישי לכל שחקן.
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

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[780px]">
            <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              המנטורים
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.9rem)] leading-none">
              הצוות שמוביל את השחקנים קדימה
            </h2>
          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coaches.slice(0, 6).map((coach, index) => (
            <Link
              className="group relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-[#0b1114] shadow-[0_24px_70px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.48)]"
              href={`/coaches/${coach.slug}`}
              key={coach.slug}
              data-scroll-reveal
              data-scroll-reveal-direction={index % 2 === 0 ? "right" : "left"}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={coach.image}
                alt={`תמונה של ${coach.name}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.96)_0%,rgba(3,4,5,0.72)_42%,rgba(3,4,5,0.08)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 w-fit rounded-lg bg-[rgb(var(--cyan-rgb)/0.16)] px-3 py-2 text-[0.82rem] font-extrabold text-[var(--cyan)] backdrop-blur-md">
                  {coach.role}
                </p>
                <h3 className="m-0 text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">
                  {coach.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-[0.98rem] font-extrabold leading-[1.6] text-[#f7fbff]/88">
                  {coach.headline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 group-hover:translate-x-[-4px]">
                  לפרופיל המאמן
                  <ArrowLeft size={18} strokeWidth={2.6} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-band home-band-smoke mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            הדרך שלנו
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            לא רק להתאמן. להיבנות.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={value.title}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.45rem] leading-tight">
                  {value.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {value.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
