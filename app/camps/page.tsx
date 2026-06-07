"use client";

import Link from "next/link";
import { useState } from "react";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock,
  Globe2,
  MapPin,
  Plane,
  Sun,
  Users,
} from "lucide-react";

function cloudinaryFallback(publicId: string, transformation: string) {
  const encodedPublicId = publicId.split("/").map(encodeURIComponent).join("/");

  return `https://res.cloudinary.com/djud4xysp/image/upload/${transformation}/${encodedPublicId}`;
}

function campImage(publicId: string) {
  const transformation = "f_auto,q_auto,w_900,h_720,c_fill,g_auto";

  return getCloudinaryImageUrl(
    publicId,
    cloudinaryFallback(publicId, transformation),
    {
      width: 900,
      height: 720,
      crop: "fill",
      gravity: "auto",
    }
  );
}

const camps = [
  {
    title: "בלגרד 2024",
    category: "abroad",
    audience: "youth",
    location: "בלגרד, סרביה",
    status: "הסתיים",
    statusTone: "muted",
    date: "קיץ 2024",
    ages: "גילאי 12-16",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Serbia (2025)/IMG_8522_sgteiu"),
    description:
      "מחנה בינלאומי ראשון שנתן לשחקנים טעימה מאימונים בקצב גבוה, תרבות כדורסל אירופאית וחוויה קבוצתית מחוץ לארץ.",
    highlights: [
      "אימונים מקצועיים באולם",
      "עבודה על יסודות וקבלת החלטות",
      "חוויה קבוצתית ולמידה מחוץ למגרש",
    ],
  },
  {
    title: "בלגרד 2025",
    category: "abroad",
    audience: "youth",
    location: "בלגרד, סרביה",
    status: "הסתיים",
    statusTone: "muted",
    date: "קיץ 2025",
    ages: "גילאי 12-16",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Serbia (2025)/IMG_8522_sgteiu"),
    description:
      "המשך טבעי למחנה הראשון, עם רמת אימון גבוהה יותר, דגש על תחרותיות, משמעת קבוצתית והתמודדות עם אתגרים חדשים.",
    highlights: [
      "אימוני כדורסל ואתלטיקה",
      "משחקונים ותחרויות פנימיות",
      "התפתחות אישית וקבוצתית",
    ],
  },
  {
    title: "סלובניה 2026",
    category: "abroad",
    audience: "youth",
    location: "סלובניה",
    status: "Sold Out",
    statusTone: "soldOut",
    date: "יוני 2026",
    ages: "גילאי 12-16",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3908_ohowgk"),
    description:
      "המחנה הקרוב של האקדמיה יוצא לסלובניה ביוני 2026. המחנה מיועד לשחקנים שרוצים להתאמן בסביבה מקצועית, לחוות כדורסל בינלאומי ולהתקדם ברמה האישית והקבוצתית.",
    highlights: [
      "אימונים מקצועיים לאורך המחנה",
      "ליווי צוות האקדמיה",
      "פרטים מלאים והרשמה דרך עמוד צור קשר",
    ],
  },
  {
    title: "מחנה קיץ 2025",
    category: "israel",
    audience: "youth",
    location: "ישראל",
    status: "הסתיים",
    statusTone: "muted",
    date: "קיץ 2025",
    ages: "גילאי 14 ועד נוער",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_4350_c7k9h4"),
    description:
      "מחנה קיץ אינטנסיבי לשחקנים צעירים שרוצים לשמור על קצב עבודה גבוה, לשפר יכולות אישיות ולהגיע מוכנים יותר לעונה.",
    highlights: [
      "אימוני כדורסל בקבוצות עבודה",
      "דגש על יכולת אישית וקצב משחק",
      "מסגרת מקצועית לאורך חופשת הקיץ",
    ],
  },
  {
    title: "מחנה קיץ 2026",
    category: "israel",
    audience: "youth",
    location: "ישראל",
    status: "הרשמה פתוחה",
    statusTone: "active",
    date: "קיץ 2026",
    ages: "גילאי 14 ועד נוער",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_5705-3_djzvui"),
    description:
      "מחנה קיץ לשחקני נוער, עם מעטפת אימונים מקצועית ועבודה ממוקדת על יכולות המשחק.",
    highlights: [
      "אימונים מקצועיים לאורך המחנה",
      "עבודה על יסודות, קבלת החלטות וקצב",
      "פרטים מלאים והרשמה דרך עמוד צור קשר",
    ],
  },
  {
    title: "מחנה קיץ 2025",
    category: "israel",
    audience: "adults",
    location: "ישראל",
    status: "הסתיים",
    statusTone: "muted",
    date: "קיץ 2025",
    ages: "בוגרים",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_4350_c7k9h4"),
    description:
      "מחנה קיץ אינטנסיבי לשחקנים בוגרים שרוצים לשמור על קצב עבודה גבוה, לשפר יכולות אישיות ולהגיע מוכנים יותר לעונה.",
    highlights: [
      "אימוני כדורסל בקבוצות עבודה",
      "דגש על יכולת אישית וקצב משחק",
      "מסגרת מקצועית לאורך חופשת הקיץ",
    ],
  },
  {
    title: "מחנה קיץ 2026",
    category: "israel",
    audience: "adults",
    location: "ישראל",
    status: "הרשמה פתוחה",
    statusTone: "active",
    date: "קיץ 2026",
    ages: "בוגרים",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_5705-3_djzvui"),
    description:
      "מחנה קיץ לשחקנים בוגרים, עם מעטפת אימונים מקצועית ועבודה ממוקדת על יכולות המשחק.",
    highlights: [
      "אימונים מקצועיים לאורך המחנה",
      "עבודה על יסודות, קבלת החלטות וקצב",
      "פרטים מלאים והרשמה דרך עמוד צור קשר",
    ],
  },
  {
    title: "מחנה וינגייט אוגוסט 2026",
    category: "israel",
    audience: "youth",
    location: "וינגייט",
    status: "הרשמה פתוחה",
    statusTone: "active",
    date: "אוגוסט 2026",
    ages: "גילאי 11-16",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3908_ohowgk"),
    description:
      "מחנה המיועד לשחקנים צעירים שרוצים להיכנס למסגרת מקצועית, לשפר יסודות ולבנות הרגלי עבודה נכונים כבר בגיל צעיר.",
    highlights: [
      "אימונים מותאמים לגילאי 11-16",
      "דגש על יסודות, ביטחון ואהבה למשחק",
      "סביבה מקצועית ותומכת",
    ],
  },
  {
    title: "קטורה פסח 2025",
    category: "israel",
    audience: "youth",
    location: "קטורה",
    status: "הסתיים",
    statusTone: "muted",
    date: "פסח 2025",
    ages: "גילאי 12-16",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_4350_c7k9h4"),
    description:
      "מחנה פסח באווירה קבוצתית ומקצועית, עם אימונים אינטנסיביים וחוויית כדורסל שממשיכה מעבר למגרש.",
    highlights: [
      "מחנה מרוכז בחופשת פסח",
      "אימונים מקצועיים וגיבוש קבוצתי",
      "עבודה על יסודות וקבלת החלטות",
    ],
  },
];

const sortActiveFirst = (campList: typeof camps) =>
  [...campList].sort((a, b) => {
    const statusPriority = {
      active: 0,
      soldOut: 1,
      muted: 2,
    };
    const getYear = (date: string) => Number(date.match(/\d{4}/)?.[0] ?? 0);
    const statusDiff =
      statusPriority[a.statusTone as keyof typeof statusPriority] -
      statusPriority[b.statusTone as keyof typeof statusPriority];

    if (statusDiff !== 0) {
      return statusDiff;
    }

    return getYear(b.date) - getYear(a.date);
  });

const processSteps = [
  {
    title: "משאירים פרטים",
    text: "השאירו פרטי שחקן/ית ונחזור עם התאמה ראשונית למחנה הרלוונטי לפי גיל, רמה ומועד.",
    icon: Users,
  },
  {
    title: "מקבלים מידע מלא",
    text: "נשלח פרטים על תאריכים, עלויות, לוח זמנים, ציוד וכל מה שצריך לדעת.",
    icon: Clock,
  },
  {
    title: "מתכוננים לדרך",
    text: "לאחר אישור התאמה, מתחילים הכנה מקצועית ומנטלית לקראת המחנה בארץ או בחו״ל.",
    icon: Plane,
  },
];

export default function CampsPage() {
  const [selectedAudience, setSelectedAudience] = useState<"youth" | "adults">(
    "youth"
  );

  const audienceSections =
    selectedAudience === "youth"
      ? [
          {
            title: "מחנות בחו״ל",
            text: "מחנות לשחקנים צעירים שרוצים לחוות קצב אימון בינלאומי, עבודה מקצועית וחוויה קבוצתית מחוץ לארץ.",
            icon: Plane,
            camps: sortActiveFirst(
              camps.filter(
                (camp) =>
                  camp.audience === "youth" && camp.category === "abroad"
              )
            ),
          },
          {
            title: "מחנות בארץ",
            text: "מסגרות מרוכזות בארץ לשיפור יסודות, ביטחון, קצב משחק והרגלי עבודה נכונים.",
            icon: Sun,
            camps: sortActiveFirst(
              camps.filter(
                (camp) =>
                  camp.audience === "youth" && camp.category === "israel"
              )
            ),
          },
        ]
      : [
          {
            title: "מחנות בארץ",
            text: "מחנות לשחקני נוער ובוגרים שרוצים לשמור על קצב עבודה גבוה ולהגיע מוכנים יותר לעונה.",
            icon: Sun,
            camps: sortActiveFirst(
              camps.filter(
                (camp) =>
                  camp.audience === "adults" && camp.category === "israel"
              )
            ),
          },
        ];

  const sectionLabel =
    selectedAudience === "youth" ? "מחנות לצעירים" : "מחנות לבוגרים";
  const sectionTitle =
    selectedAudience === "youth"
      ? "מחנות צעירים בארץ ובחו״ל לפי גיל ורמה"
      : "מחנות בוגרים בארץ עם מעטפת אימון מקצועית";

  const getGridClass = (count: number) => {
    if (count === 1) {
      return "mx-auto max-w-[420px] grid-cols-1";
    }

    if (count === 2 || count === 4) {
      return "mx-auto max-w-[900px] md:grid-cols-2";
    }

    return "lg:grid-cols-3";
  };

  const renderCampCards = (campList: typeof camps) => (
    <div className={`grid gap-4 ${getGridClass(campList.length)}`} dir="rtl">
      {campList.map((camp) => (
        <article
          className={`group flex min-h-full flex-col overflow-hidden rounded-lg border bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 ${
            camp.statusTone === "active"
              ? "border-[rgb(var(--cyan-rgb)/0.42)]"
              : camp.statusTone === "soldOut"
                ? "border-[rgb(var(--cyan-rgb)/0.56)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_34px_rgb(var(--cyan-rgb)/0.18),0_20px_60px_rgba(0,0,0,0.24)]"
                : "border-white/10"
          }`}
          key={camp.title}
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1114]">
            <img
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              src={camp.image}
              alt={camp.title}
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.92),transparent)] p-4">
              <span
                className={`rounded-lg px-3 py-2 text-[0.88rem] font-extrabold ${
                  camp.statusTone === "active"
                    ? "bg-[var(--cyan)] text-[#001013]"
                    : camp.statusTone === "soldOut"
                      ? "border border-[rgb(var(--cyan-rgb)/0.72)] bg-[#031014]/88 text-[var(--cyan)] shadow-[0_0_22px_rgb(var(--cyan-rgb)/0.34)]"
                      : "bg-[#030405]/78 text-[#f7fbff]/74"
                }`}
              >
                {camp.status}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <p className="mb-2 flex items-center gap-2 text-[0.92rem] font-extrabold text-[var(--cyan)]">
              <CalendarDays size={17} strokeWidth={2.4} />
              {camp.date}
            </p>
            <h3 className="m-0 text-[1.65rem] leading-tight">{camp.title}</h3>
            <p className="mt-2 flex items-center gap-2 text-[0.96rem] font-bold text-[#f7fbff]/72">
              <MapPin size={16} strokeWidth={2.4} />
              {camp.location}
            </p>
            <p className="mt-2 flex items-center gap-2 text-[0.96rem] font-bold text-[#f7fbff]/72">
              <Users size={16} strokeWidth={2.4} />
              {camp.ages}
            </p>
            <p className="mt-4 text-[1rem] leading-[1.75] text-[#a8b3bd]">
              {camp.description}
            </p>

            <ul className="mb-6 mt-5 grid gap-3 p-0">
              {camp.highlights.map((highlight) => (
                <li
                  className="flex items-start gap-2 text-[0.98rem] leading-[1.65] text-[#f7fbff]/82"
                  key={highlight}
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[var(--cyan)]"
                    size={18}
                    strokeWidth={2.5}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid gap-2">
              {camp.statusTone === "active" ? (
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                  href="/contact"
                >
                  פרטים להרשמה
                  <ArrowLeft size={19} strokeWidth={2.6} />
                </Link>
              ) : (
                <p
                  className={`m-0 rounded-lg px-4 py-3 text-[0.95rem] font-extrabold ${
                    camp.statusTone === "soldOut"
                      ? "border border-[rgb(var(--cyan-rgb)/0.34)] bg-[rgb(var(--cyan-rgb)/0.1)] text-[var(--cyan)]"
                      : "bg-white/[0.055] text-[#f7fbff]/72"
                  }`}
                >
                  {camp.statusTone === "soldOut"
                    ? "המחנה התמלא בעקבות ביקוש גבוה. מוזמנים לעקוב אחרי המחנות הבאים."
                    : "המחנה הסתיים. מוזמנים להתרשם מהמחנות הפעילים שלנו."}
                </p>
              )}

              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[rgb(var(--cyan-rgb)/0.34)] bg-[rgb(var(--cyan-rgb)/0.08)] px-5 py-3 text-[1rem] font-extrabold text-[var(--cyan)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.68)] hover:bg-[rgb(var(--cyan-rgb)/0.14)] hover:text-[var(--cyan-light)]"
                href="/gallery/camps"
              >
                לגלריית המחנה
                <Camera size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Globe2 size={19} strokeWidth={2.4} />
              מחנות האקדמיה
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              Camps & Experiences
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              מחנות האקדמיה מחברים בין אימון מקצועי, חוויה קבוצתית וחשיפה
              לעולם כדורסל רחב יותר, בארץ ובחו״ל.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              חילקנו את המחנות לשתי קבוצות כדי שיהיה קל להבין מה מתאים
              לשחקן: מחנות בארץ ומחנות בחו״ל, עם גילאים וסטטוס הרשמה לכל מחנה.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(48px,7vw,80px)]">
        <div className="inline-flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.055] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <button
            aria-pressed={selectedAudience === "youth"}
            className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-[0.98rem] font-extrabold transition duration-300 hover:-translate-y-0.5 ${
              selectedAudience === "youth"
                ? "bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] text-[#001013]"
                : "bg-white/[0.065] text-[#f7fbff]/86 hover:bg-[rgb(var(--cyan-rgb)/0.12)] hover:text-[var(--cyan)]"
            }`}
            onClick={() => setSelectedAudience("youth")}
            type="button"
          >
            <Users size={18} strokeWidth={2.5} />
            צעירים
          </button>
          <button
            aria-pressed={selectedAudience === "adults"}
            className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 text-[0.98rem] font-extrabold transition duration-300 hover:-translate-y-0.5 ${
              selectedAudience === "adults"
                ? "bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] text-[#001013]"
                : "bg-white/[0.065] text-[#f7fbff]/86 hover:bg-[rgb(var(--cyan-rgb)/0.12)] hover:text-[var(--cyan)]"
            }`}
            onClick={() => setSelectedAudience("adults")}
            type="button"
          >
            <Users size={18} strokeWidth={2.5} />
            בוגרים
          </button>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(56px,8vw,88px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Users size={18} strokeWidth={2.4} />
            {sectionLabel}
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid gap-12">
          {audienceSections.map((section) => {
            const Icon = section.icon;

            return (
              <div key={section.title}>
                <div className="mb-5 max-w-[760px]">
                  <h3 className="m-0 inline-flex items-center gap-2 text-[clamp(1.45rem,3vw,2.25rem)] leading-tight text-[#f7fbff]">
                    <Icon size={23} strokeWidth={2.4} />
                    {section.title}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                    {section.text}
                  </p>
                </div>
                {renderCampCards(section.camps)}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            איך נרשמים למחנות הפעילים?
          </p>
          <h2 className="m-0 text-[clamp(2.1rem,5vw,4.4rem)] leading-none">
            משאירים פרטים ומקבלים את כל המידע.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={step.title}
              >
                <div className="mb-4 inline-grid size-11 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={22} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.35rem] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
