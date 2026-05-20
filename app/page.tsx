import Image from "next/image";
import Link from "next/link";
import { AnimatedStat } from "@/components/animated-stat";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const highlights = [
  { value: 6, suffix: "+", label: "קבוצות גיל" },
  { value: 12, label: "אימונים שבועיים" },
  { value: 1, suffix: ":1", label: "יחס אישי לשחקנים" },
];

const heroVideoWebm = "/assets/home-basketball-training.webm";
const heroVideoMp4 = "/assets/mp_.mp4";

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

const reasons = [
  {
    title: "תהליך אישי בתוך מסגרת קבוצתית",
    text: "כל שחקן מקבל דגשים שמתאימים לרמה, לאופי ולמטרות שלו, גם כשהאימון מתקיים בקבוצה.",
    icon: HeartHandshake,
  },
  {
    title: "יסודות שנשארים לאורך זמן",
    text: "אנחנו בונים שליטה בכדור, קליעה, עבודת רגליים וקבלת החלטות בצורה מסודרת ולא מקרית.",
    icon: ShieldCheck,
  },
  {
    title: "קצב, אנרגיה ותחרות בריאה",
    text: "האימונים דוחפים קדימה, אבל שומרים על סביבת למידה שמחזקת ביטחון ואהבה למשחק.",
    icon: Zap,
  },
];

const audiences = [
  "שחקנים בתחילת הדרך שרוצים בסיס נכון",
  "שחקנים פעילים שרוצים לעלות רמה",
  "ילדים ונוער שצריכים ביטחון עם הכדור",
  "שחקנים שרוצים אימון אישי וממוקד",
  "קבוצות גיל שמחפשות מסגרת מקצועית",
  "שחקנים שמתכוננים למחנות או רמה תחרותית",
];

const joinSteps = [
  {
    title: "משאירים פרטים",
    text: "ממלאים פנייה קצרה או שולחים הודעה, ואנחנו חוזרים אליכם עם כמה שאלות התאמה.",
    icon: MessageCircle,
  },
  {
    title: "שיחת התאמה קצרה",
    text: "מבינים את גיל השחקן, הרמה, המטרות והמסגרת שהכי נכונה עבורו.",
    icon: Users,
  },
  {
    title: "מגיעים לאימון ניסיון",
    text: "השחקן נכנס לאימון, מכיר את הצוות ומרגיש את הקצב של Next Level מקרוב.",
    icon: Trophy,
  },
];

const testimonials = [
  {
    quote:
      "הילד חזר מהאימון עם ביטחון אחר לגמרי. סוף סוף יש מקום שרואה גם את השחקן וגם את האדם.",
    name: "הורה לשחקן באקדמיה",
  },
  {
    quote:
      "האימונים מדויקים, מאתגרים ועם אנרגיה גבוהה. כל שבוע מרגישים התקדמות אמיתית.",
    name: "שחקן קבוצת נוער",
  },
  {
    quote:
      "הצוות שם לב לפרטים הקטנים: עבודת רגליים, קבלת החלטות, ביטחון ודרך חשיבה.",
    name: "משפחת שחקן מתקדם",
  },
];

const previews = [
  {
    title: "תוכניות אימון",
    text: "מסלולים לפי גיל, רמה ומטרה: יסודות, שחקן מתקדם ואימון אישי.",
    href: "/programs",
    cta: "לתוכניות",
    image: "https://picsum.photos/seed/next-level-home-programs/900/720",
    icon: Target,
  },
  {
    title: "מחנות",
    text: "בלגרד מאחורינו, סלובניה 2026 בדרך. מחנות שמשלבים כדורסל וחוויה.",
    href: "/camps",
    cta: "למחנות",
    image: "https://picsum.photos/seed/next-level-home-camps/900/720",
    icon: Globe2,
  },
  {
    title: "גלריה",
    text: "הצצה לאימונים, רגעים מהדרך, מחנות והאנרגיה של האקדמיה.",
    href: "/gallery",
    cta: "לגלריה",
    image: "https://picsum.photos/seed/next-level-home-gallery/900/720",
    icon: Camera,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate flex min-h-[calc(100vh-96px)] items-center">
        <div className="home-motion-bg absolute inset-0 -z-30" aria-hidden="true" />
        <video
          aria-hidden="true"
          autoPlay
          className="home-hero-video absolute inset-0 -z-20 h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,4,5,0.68)_0%,rgba(3,4,5,0.46)_42%,rgba(3,4,5,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,rgba(3,4,5,0.92),transparent)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 py-[clamp(52px,8vw,88px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[760px]">
            <p className="mb-4 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Users size={19} strokeWidth={2.4} />
              אקדמיית כדורסל לילדים ונוער בנס ציונה
            </p>

            <h1 className="m-0 text-[clamp(3.4rem,9vw,8.2rem)] leading-[0.88]">
              Next Level
            </h1>
            <p className="mt-5 max-w-[680px] text-[clamp(1.25rem,2.4vw,1.75rem)] font-extrabold leading-[1.45] text-[#f7fbff]">
              אקדמיית כדורסל לילדים ונוער בנס ציונה, שבה שחקנים צעירים בונים
              יסודות, ביטחון ואופי מנצח.
            </p>
            <p className="mt-4 max-w-[660px] text-[clamp(1.02rem,1.8vw,1.18rem)] leading-[1.85] text-[#a8b3bd]">
              אימונים מקצועיים בקבוצות קטנות, צוות שמכיר כל שחקן ותהליך שמחבר
              בין טכניקה, אתלטיות, חשיבה מהירה ואהבה למשחק.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--cyan-rgb)/0.35)] bg-[#030405]/52 px-4 py-2 text-[1rem] font-extrabold text-[#f7fbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
              <MapPin size={19} strokeWidth={2.5} className="text-[var(--cyan)]" />
              נס ציונה
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
            {/* <div className="home-logo-orbit relative grid aspect-square w-[min(78vw,470px)] place-items-center rounded-full border border-[rgb(var(--cyan-rgb)/0.32)] bg-[#030405]/60 shadow-[0_30px_120px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
              <Image
                className="h-auto w-[72%] object-contain drop-shadow-[0_14px_45px_rgba(0,0,0,0.55)]"
                src="/assets/logo.png"
                alt="Next Level"
                width={440}
                height={440}
                priority
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="home-band home-band-light mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-4 py-[clamp(48px,7vw,84px)] md:grid-cols-3">
        {highlights.map((item) => (
          <AnimatedStat
            key={item.label}
            end={item.value}
            label={item.label}
            suffix={item.suffix}
          />
        ))}
      </section>

      <section className="home-band home-band-deep mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
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

      <section className="home-band home-band-smoke mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Sparkles size={18} strokeWidth={2.4} />
              למה לבחור בנו
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              אימון טוב הוא לא רק תרגיל טוב. הוא תהליך.
            </h2>
            <p className="mt-5 max-w-[620px] text-[1.05rem] leading-[1.85] text-[#a8b3bd]">
              נקסט לבל משלבת מקצועיות, יחס אישי ואווירה שמחזירה את השחקנים
              למגרש עם רצון לעבוד ולהשתפר.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                  key={reason.title}
                >
                  <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
                    <div className="grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                      <Icon size={24} strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="m-0 text-[1.5rem] leading-tight">
                        {reason.title}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-band home-band-court mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[760px]">
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <MessageCircle size={18} strokeWidth={2.4} />
              איך מצטרפים
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              שלושה צעדים פשוטים לאימון הראשון.
            </h2>
          </div>

          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
            href="/contact"
          >
            להתחלת התהליך
            <ArrowLeft size={20} strokeWidth={2.6} />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {joinSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={step.title}
              >
                <span className="absolute left-5 top-4 text-[4.4rem] font-black leading-none text-white/[0.045]">
                  {index + 1}
                </span>
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.5rem] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-band home-band-deep mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Star size={18} strokeWidth={2.4} />
            מה אומרים עלינו
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            הורים ושחקנים מרגישים את ההבדל.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={testimonial.name}
            >
              <div className="mb-5 flex gap-1 text-[var(--cyan)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    fill="currentColor"
                    key={index}
                    size={17}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <p className="m-0 text-[1.06rem] font-extrabold leading-[1.75] text-[#f7fbff]/88">
                "{testimonial.quote}"
              </p>
              <p className="mt-5 text-[0.95rem] font-bold text-[#a8b3bd]">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-band home-band-court mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Users size={18} strokeWidth={2.4} />
            למי זה מתאים
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            לכל שחקן שרוצה להתקדם בצורה נכונה.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div
              className="flex min-h-20 items-start gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 text-[1rem] font-extrabold leading-[1.55] text-[#f7fbff]/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={item}
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-[var(--cyan)]"
                size={19}
                strokeWidth={2.5}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-band home-band-light mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[760px]">
            <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              המשיכו להכיר אותנו
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              תוכניות, מחנות ורגעים מהאקדמיה.
            </h2>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
            href="/contact"
          >
            אימון ניסיון
            <ArrowLeft size={20} strokeWidth={2.6} />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {previews.map((preview) => {
            const Icon = preview.icon;

            return (
              <Link
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
                href={preview.href}
                key={preview.href}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1114]">
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={preview.image}
                    alt={preview.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.92),transparent)]" />
                  <div className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.16)] text-[var(--cyan)] backdrop-blur-md">
                    <Icon size={22} strokeWidth={2.4} />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="m-0 text-[1.55rem] leading-tight">
                    {preview.title}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                    {preview.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 group-hover:translate-x-[-4px]">
                    {preview.cta}
                    <ArrowLeft size={18} strokeWidth={2.6} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
