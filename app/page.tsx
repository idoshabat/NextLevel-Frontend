import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Target, Trophy, Users } from "lucide-react";

const highlights = [
  { value: "6+", label: "קבוצות גיל" },
  { value: "12", label: "אימונים שבועיים" },
  { value: "1:1", label: "יחס אישי לשחקנים" },
];

const tracks = [
  {
    title: "אימוני יסודות",
    text: "כדרור, מסירה, קליעה, עבודת רגליים והבנת משחק כבר מהאימון הראשון.",
    icon: Target,
  },
  {
    title: "קבוצות תחרותיות",
    text: "קצב גבוה, משמעת קבוצתית וקבלת החלטות תחת לחץ משחק אמיתי.",
    icon: Trophy,
  },
  {
    title: "מחנות וחופשות",
    text: "ימים מרוכזים של כדורסל, אתלטיקה, אתגרים וחוויית קבוצה חזקה.",
    icon: CalendarDays,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate flex min-h-[calc(100vh-96px)] items-center">
        <div className="home-motion-bg absolute inset-0 -z-20" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,4,5,0.95)_0%,rgba(3,4,5,0.78)_42%,rgba(3,4,5,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#030405,transparent)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 py-[clamp(52px,8vw,88px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[760px]">
            <p className="mb-4 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Users size={19} strokeWidth={2.4} />
              אקדמיית כדורסל לילדים ונוער
            </p>

            <h1 className="m-0 text-[clamp(3.4rem,9vw,8.2rem)] leading-[0.88]">
              Next Level
            </h1>
            <p className="mt-5 max-w-[680px] text-[clamp(1.25rem,2.4vw,1.75rem)] font-extrabold leading-[1.45] text-[#f7fbff]">
              המקום שבו שחקנים צעירים בונים יסודות, ביטחון ואופי מנצח.
            </p>
            <p className="mt-4 max-w-[660px] text-[clamp(1.02rem,1.8vw,1.18rem)] leading-[1.85] text-[#a8b3bd]">
              אימונים מקצועיים בקבוצות קטנות, צוות שמכיר כל שחקן ותהליך שמחבר
              בין טכניקה, אתלטיות, חשיבה מהירה ואהבה למשחק.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                href="/contact"
              >
                קביעת אימון ניסיון
                <ArrowLeft size={20} strokeWidth={2.6} />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
                href="/programs"
              >
                צפייה בתוכניות
              </Link>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-[520px] place-items-center lg:justify-self-end">
            <div className="absolute inset-8 rounded-full bg-[rgb(var(--cyan-rgb)/0.18)] blur-3xl" />
            <div className="home-logo-orbit relative grid aspect-square w-[min(78vw,470px)] place-items-center rounded-full border border-[rgb(var(--cyan-rgb)/0.32)] bg-[#030405]/60 shadow-[0_30px_120px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
              <Image
                className="h-auto w-[72%] object-contain drop-shadow-[0_14px_45px_rgba(0,0,0,0.55)]"
                src="/assets/logo.png"
                alt="Next Level"
                width={440}
                height={440}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-4 pb-[clamp(64px,8vw,96px)] md:grid-cols-3">
        {highlights.map((item) => (
          <div
            className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            key={item.label}
          >
            <p className="m-0 text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-none text-[var(--cyan)]">
              {item.value}
            </p>
            <p className="mt-2 text-[1.05rem] font-extrabold text-[#f7fbff]/88">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            מה קורה באקדמיה
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            אימונים שמרגישים כמו משחק, ובונים שחקנים לאורך זמן.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {tracks.map((track) => {
            const Icon = track.icon;

            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={track.title}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.45rem] leading-tight">
                  {track.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {track.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
