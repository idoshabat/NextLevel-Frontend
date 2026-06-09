import Image from "next/image";
import Link from "next/link";
import { preload } from "react-dom";
import { AnimatedStat } from "@/components/animated-stat";
import { getCloudinaryImageUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const highlights = [
  { value: 150, suffix: "+", label: "Active Players" },
  { value: 15, suffix: "+", label: "Partner Clubs" },
  { value: 25, suffix: "", label: "Top League & National Team" },
];

const heroVideoPublicId = "hero-video";
const heroPosterPublicId = "hero-poster";
const heroVideoFallback = "/assets/hero-video.mp4";
const heroVideoMobile = getCloudinaryVideoUrl(
  heroVideoPublicId,
  heroVideoFallback,
  "f_auto,q_auto:good,w_800,c_limit"
);
const heroVideoDesktop = getCloudinaryVideoUrl(
  heroVideoPublicId,
  heroVideoFallback,
  "f_auto,q_auto:good,w_1600,c_limit"
);
const heroPoster = getCloudinaryImageUrl(heroPosterPublicId, "", {
  width: 1600,
  crop: "limit",
  quality: "auto",
  format: "auto",
});

function cloudinaryFallback(publicId: string, transformation: string) {
  const encodedPublicId = publicId.split("/").map(encodeURIComponent).join("/");

  return `https://res.cloudinary.com/djud4xysp/image/upload/${transformation}/${encodedPublicId}`;
}

function homeImage(
  publicId: string,
  options: {
    width: number;
    height?: number;
    crop?: "fill" | "limit";
  }
) {
  const transformation = [
    "f_auto",
    "q_auto",
    `w_${options.width}`,
    options.height ? `h_${options.height}` : null,
    `c_${options.crop ?? "limit"}`,
    options.height ? "g_auto" : null,
  ]
    .filter(Boolean)
    .join(",");

  return getCloudinaryImageUrl(
    publicId,
    cloudinaryFallback(publicId, transformation),
    {
      width: options.width,
      height: options.height,
      crop: options.crop ?? "limit",
      gravity: options.height ? "auto" : undefined,
    }
  );
}

const academyMoments = [
  {
    title: "Fundamentals Training",
    image: homeImage("moments_fundamentals", {
      width: 900,
      height: 1125,
      crop: "fill",
    }),
  },
  {
    title: "Personal Precision",
    image: homeImage("moment_precision", {
      width: 900,
      height: 1125,
      crop: "fill",
    }),
  },
  {
    title: "Training Experience",
    image: homeImage("moment_training", {
      width: 900,
      height: 1125,
      crop: "fill",
    }),
  },
];

const tracks = [
  {
    title: "תוכניות ליווי PRO ו-PRO MAX",
    text: "מעטפת מקצועית ומנטלית לשחקנים שרוצים לנהל תהליך אמיתי: אימונים אישיים, ניתוח וידאו, מעקב גופני וליווי אונליין.",
    icon: Target,
  },
  {
    title: "CLASSIC וכרטיסיית 10 אימונים",
    text: "אימוני סופ\"ש בקבוצות עבודה איכותיות, עם דגש על יסודות, יכולת אישית וגמישות לשחקנים שרוצים תגבור נקודתי.",
    icon: Trophy,
  },
  {
    title: "VIDEO ONLINE",
    text: "ניתוח משחקים מרחוק, דף עבודה שבועי ושיפור Basketball IQ דרך העיניים של מאמני האקדמיה.",
    icon: CalendarDays,
  },
];

const reasons = [
  {
    title: "הפרטים הקטנים שעושים הבדל גדול",
    text: "האקדמיה נבנתה סביב הרעיון שההתקדמות האמיתית נמצאת בהרגלי עבודה, טכניקה נקייה, קבלת החלטות, ביטחון וחוסן מנטלי.",
    icon: HeartHandshake,
  },
  {
    title: "מעטפת מקצועית ומנטלית",
    text: "לצד האימון על הפרקט, השחקנים מקבלים ליווי בהתמודדות עם לחץ, שפת גוף, קשר מול המועדון והבנת המשחק.",
    icon: ShieldCheck,
  },
  {
    title: "מודל שמתאים לרמות שונות",
    text: "הפעילות מותאמת אישית לכל הרמות, החל מכיתה ה' ועד לבוגרים, דרך מודל אימונים שמאפשר לכל שחקן לקבל את המסגרת הנכונה.",
    icon: Zap,
  },
];

const audiences = [
  "שחקני כדורסל מקצועיים בליגות השונות החל מליגת הקט סל ועד בוגרים",
  "שחקנים מובילים שמחפשים לקחת תמשחק צעד קדימה",
  "שחקנים שרוצים לשפר Basketball IQ וקבלת החלטות",
  "שחקנים שצריכים ליווי מנטלי והתמודדות עם לחץ",
  "שחקנים שצריכים ליווי והכוונה להמשך הקריירה",
  "שחקנים שמחפשים ניתוח וידאו ותמיכה מרחוק",
];

const joinSteps = [
  {
    title: "משאירים פרטים",
    text: "בוחרים תוכנית שמעניינת אתכם או שולחים הודעת WhatsApp, ואנחנו חוזרים עם הכוונה ראשונית.",
    icon: MessageCircle,
  },
  {
    title: " שיחת איפיון והתאמה",
    text: "מבררים צרכים, רמה, מטרות ואת סוג המעטפת הנכון: אימוני סופ\"ש, ליווי אישי, וידאו אונליין או מסלול מלא.",
    icon: Users,
  },
  {
    title: "יוצאים לתהליך",
    text: "לאחר הבנת הצרכים, מגיעים לאימון ניסיון ויוצאים לדרך.",
    icon: Trophy,
  },
];

const previews = [
  {
    title: "תוכניות אימון",
    text: "PRO MAX, PRO, CLASSIC, כרטיסיית 10 כניסות, VIDEO ONLINE ואימונים אישיים.",
    href: "/programs",
    cta: "לתוכניות",
    image: homeImage("explore_programs", {
      width: 900,
      height: 720,
      crop: "fill",
    }),
    icon: Target,
  },
  {
    title: "מחנות",
    text: "בלגרד 2024 ו-2025 כבר מאחורינו. סלובניה 2026 היא התחנה הבאה ביוני הקרוב.",
    href: "/camps",
    cta: "למחנות",
    image: homeImage("explore_camps", {
      width: 900,
      height: 720,
      crop: "fill",
    }),
    icon: Globe2,
  },
  {
    title: "ניהול קריירה לאחר גיל נוער",
    text: "חיבור לסוכנים וקבוצות, תכנון קריירה והכנה לקולג׳.",
    href: "/why-us",
    cta: "למה אנחנו?",
    image: homeImage("explore_manage", {
      width: 900,
      height: 720,
      crop: "fill",
    }),
    icon: Camera,
  },
];

export default function HomePage() {
  if (heroPoster) {
    preload(heroPoster, {
      as: "image",
      fetchPriority: "high",
    });
  }

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
          poster={heroPoster || undefined}
          preload="auto"
        >
          <source
            src={heroVideoMobile}
            type="video/mp4"
            media="(max-width: 640px)"
          />
          <source src={heroVideoDesktop} type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,4,5,0.68)_0%,rgba(3,4,5,0.46)_42%,rgba(3,4,5,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,rgba(3,4,5,0.92),transparent)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 py-[clamp(52px,8vw,88px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[760px]">
            <p className="mb-4 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Users size={19} strokeWidth={2.4} />
              Basketball Academy
            </p>

            <h1 className="m-0 text-[clamp(3.4rem,9vw,8.2rem)] leading-[0.88]">
              Next Level
            </h1>
            <p className="mt-5 max-w-[680px] text-[clamp(1.25rem,2.4vw,1.75rem)] font-extrabold leading-[1.45] text-[#f7fbff]">
              אקדמיה לפיתוח יכולות אישיות בכדורסל, שגורמת לשחקנים להגיע לקצה גבול היכולת שלהם.
            </p>
            <p className="mt-4 max-w-[660px] text-[clamp(1.02rem,1.8vw,1.18rem)] leading-[1.85] text-[#a8b3bd]">
              אנו מספקים מעטפת מקצועית, מנטאלית וליווי אישי לאורך כל
              שלבי ההתפתחות, בכדי למצות את הפוטנציאל הטמון בכל שחקן ושחקנית.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                href="/contact"
              >
                בדיקת התאמה
                <ArrowLeft size={20} strokeWidth={2.6} />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
                href="/programs"
              >
                למה אנחנו?
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

      <section className="home-band home-band-smoke mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(64px,9vw,108px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[760px]">
            <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              Academy Moments
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              ההשגיות האמיתית נמצאת בפרטים הקטנים
            </h2>
          </div>
          <p className="max-w-[320px] text-[1rem] font-bold leading-[1.7] text-[#a8b3bd]">
            מודל אימונים ייחודי . שיטת עבודה מוכחת .
            סינרגיה מושלמת בין עבודה אישית , אימוני סוף שבוע ומחנות מקצועיים , המייצרת מעטפת ליווי מדוייקת ומקיפה בכל שלב בהתפתחות
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {academyMoments.map((moment) => (
            <div
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0b1114] shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={moment.title}
            >
              <div className="aspect-[4/5]">
                <img
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.82),transparent_58%)]" />
              <p className="absolute bottom-4 right-4 m-0 rounded-lg bg-[#030405]/68 px-3 py-2 text-[0.95rem] font-extrabold text-[#f7fbff] backdrop-blur-md">
                {moment.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-band home-band-deep mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[760px]">
            <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              Academy Programs
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              מתוכנית אימונים מקצועית ועד מעטפת מלאה לשחקן ברמות הגבוהות.
            </h2>
          </div>

          <Link
            className="relative z-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[rgb(var(--cyan-rgb)/0.42)] bg-[rgb(var(--cyan-rgb)/0.1)] px-5 py-3 text-[1.02rem] font-extrabold text-[var(--cyan)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.72)] hover:bg-[rgb(var(--cyan-rgb)/0.16)] hover:text-[var(--cyan-light)]"
            href="/programs"
          >
            לפירוט התוכניות
            <ArrowLeft size={20} strokeWidth={2.6} />
          </Link>
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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:[direction:ltr]">
          <div className="lg:sticky lg:top-32 lg:[direction:ltr]">
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Sparkles size={18} strokeWidth={2.4} />
              Why Choose Us
            </p>
            <h2 dir="ltr" className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              We believe in the small details that make big difference
            </h2>
            <p dir="rtl" className="mt-5 max-w-[620px] text-[1.05rem] leading-[1.85] text-[#a8b3bd]">
              זה לא רק סלוגן. לפי חזון האקדמיה, ההבדל נמצא בהרגלי עבודה,
              קבלת החלטות, טכניקה, ביטחון וחוסן מנטלי לאורך כל שלבי ההתפתחות.
            </p>
          </div>

          <div className="grid gap-4 lg:[direction:rtl]">
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

        <div className="group mx-auto mt-12 w-[min(980px,100%)] overflow-hidden rounded-lg border border-white/10 bg-[#0b1114] shadow-[0_24px_80px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="relative aspect-[16/8] max-[640px]:aspect-[16/11]">
            <img
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              src={homeImage("why_choose_us", {
                width: 1400,
                height: 700,
                crop: "fill",
              })}
              alt="שחקנים באימון Next Level"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.72),transparent)]" />
            <p dir="rtl" className="absolute bottom-4 right-4 m-0 max-w-[360px] text-[1.05rem] font-extrabold leading-[1.55] text-[#f7fbff]">
              מעטפת שמחברת אימון, וידאו, ליווי אישי ותהליך מקצועי.
            </p>
          </div>
        </div>
      </section>

      <section className="home-band home-band-court mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[760px]">
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <MessageCircle size={18} strokeWidth={2.4} />
              How To Join
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              מתאימים את המסלול הייחודי והמדויק לכל שחקן.
            </h2>
          </div>

          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
            href="/contact"
          >
            לשיחת התאמה
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

      <div className="relative z-10 mx-auto -my-[clamp(38px,7vw,76px)] w-[min(1040px,calc(100%_-_32px))]">
        <div className="group relative overflow-hidden rounded-lg border border-[rgb(var(--cyan-rgb)/0.34)] bg-[#0b1114] shadow-[0_28px_90px_rgba(0,0,0,0.36),0_0_44px_rgb(var(--cyan-rgb)/0.12),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <div className="aspect-[16/7] max-[640px]:aspect-[16/10]">
            <img
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              src={homeImage("how_to_join", {
                width: 1400,
                height: 760,
                crop: "fill",
              })}
              alt="רגע אימון באקדמיית Next Level"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,5,0.72),transparent_48%,rgba(3,4,5,0.34))]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgb(var(--cyan-rgb)/0.8),transparent)]" />
          <p className="absolute bottom-4 right-4 m-0 rounded-lg bg-[#030405]/70 px-4 py-2 text-[0.95rem] font-extrabold text-[#f7fbff] backdrop-blur-md">
            רגע אחד על הפרקט. עוד צעד בדרך לרמה הבאה.
          </p>
        </div>
      </div>

      <section className="home-band home-band-court mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Users size={18} strokeWidth={2.4} />
            Who It Fits
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            האם אתה מתאים?
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
              Explore Next Level
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              תוכניות, מחנות וגלריה מתוך הפעילות.
            </h2>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
            href="/contact"
          >
            בדיקת התאמה
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
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
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
