import Link from "next/link";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Globe2,
  MapPin,
  Plane,
  Trophy,
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
    location: "בלגרד, סרביה",
    status: "הסתיים",
    statusTone: "muted",
    date: "קיץ 2024",
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
    location: "בלגרד, סרביה",
    status: "הסתיים",
    statusTone: "muted",
    date: "קיץ 2025",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_4350_c7k9h4"),
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
    location: "סלובניה",
    status: "הרשמה פתוחה",
    statusTone: "active",
    date: "יוני 2026",
    image: campImage("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3908_ohowgk"),
    description:
      "המחנה הקרוב של האקדמיה יוצא לסלובניה ביוני 2026. המחנה מיועד לשחקנים שרוצים להתאמן בסביבה מקצועית, לחוות כדורסל בינלאומי ולהתקדם ברמה האישית והקבוצתית.",
    highlights: [
      "אימונים מקצועיים לאורך המחנה",
      "ליווי צוות האקדמיה",
      "פרטים מלאים והרשמה דרך עמוד צור קשר",
    ],
  },
];

const processSteps = [
  {
    title: "משאירים פרטים",
    text: "השאירו פרטי שחקן/ית ונחזור עם התאמה ראשונית למחנה סלובניה 2026.",
    icon: Users,
  },
  {
    title: "מקבלים מידע מלא",
    text: "נשלח פרטים על תאריכים, עלויות, לוח זמנים, ציוד וכל מה שצריך לדעת.",
    icon: Clock,
  },
  {
    title: "מתכוננים לדרך",
    text: "לאחר אישור התאמה, מתחילים הכנה מקצועית ומנטלית לקראת המחנה.",
    icon: Plane,
  },
];

export default function CampsPage() {
  const upcomingCamp = camps.find((camp) => camp.statusTone === "active");

  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Globe2 size={19} strokeWidth={2.4} />
              מחנות בינלאומיים
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              כדורסל, חוויה והתפתחות מחוץ למגרש.
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              מחנות האקדמיה מחברים בין אימון מקצועי, חוויה קבוצתית וחשיפה
              לעולם כדורסל רחב יותר.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              בלגרד 2024 ובלגרד 2025 כבר מאחורינו ונשארים כאן כארכיון חוויות.
              היעד הבא הוא סלובניה ביוני 2026, וההרשמה אליו פתוחה לקבלת
              פרטים והתאמה.
            </p>
          </div>
        </div>
      </section>

      {upcomingCamp ? (
        <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(48px,7vw,80px)]">
          <div className="grid overflow-hidden rounded-lg border border-[rgb(var(--cyan-rgb)/0.34)] bg-[rgb(var(--cyan-rgb)/0.09)] shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.1)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-[#0b1114]">
              <img
                className="h-full w-full object-cover"
                src={upcomingCamp.image}
                alt={upcomingCamp.title}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,5,0.92),rgba(3,4,5,0.18))]" />
              <span className="absolute right-5 top-5 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-4 py-2 text-[0.95rem] font-extrabold text-[#001013] shadow-[0_0_30px_rgb(var(--cyan-rgb)/0.3)]">
                {upcomingCamp.status}
              </span>
            </div>

            <div className="p-[clamp(22px,4vw,42px)]">
              <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
                <CalendarDays size={18} strokeWidth={2.4} />
                {upcomingCamp.date}
              </p>
              <h2 className="m-0 text-[clamp(2.2rem,5vw,4.4rem)] leading-none">
                {upcomingCamp.title}
              </h2>
              <p className="mt-4 flex items-center gap-2 text-[1rem] font-extrabold text-[#f7fbff]/78">
                <MapPin size={18} strokeWidth={2.4} />
                {upcomingCamp.location}
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.85] text-[#a8b3bd]">
                {upcomingCamp.description}
              </p>

              <ul className="mt-6 grid gap-3 p-0">
                {upcomingCamp.highlights.map((highlight) => (
                  <li
                    className="flex items-start gap-2 text-[1rem] leading-[1.65] text-[#f7fbff]/84"
                    key={highlight}
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[var(--cyan)]"
                      size={19}
                      strokeWidth={2.5}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Link
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.28),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                href="/contact"
              >
                קבלת פרטים והרשמה
                <ArrowLeft size={20} strokeWidth={2.6} />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(56px,8vw,88px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Trophy size={18} strokeWidth={2.4} />
            כל המחנות
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            עבר, הווה והיעד הבא
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {camps.map((camp) => (
            <article
              className={`group flex min-h-full flex-col overflow-hidden rounded-lg border bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 ${
                camp.statusTone === "active"
                  ? "border-[rgb(var(--cyan-rgb)/0.42)]"
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
                <h3 className="m-0 text-[1.65rem] leading-tight">
                  {camp.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-[0.96rem] font-bold text-[#f7fbff]/72">
                  <MapPin size={16} strokeWidth={2.4} />
                  {camp.location}
                </p>
                <p className="mt-4 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {camp.description}
                </p>

                <ul className="mt-5 grid gap-3 p-0">
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

                {camp.statusTone === "active" ? (
                  <Link
                    className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                    href="/contact"
                  >
                    פרטים להרשמה
                    <ArrowLeft size={19} strokeWidth={2.6} />
                  </Link>
                ) : (
                  <p className="mt-auto rounded-lg bg-white/[0.055] px-4 py-3 text-[0.95rem] font-extrabold text-[#f7fbff]/72">
                    המחנה הסתיים. מוזמנים להתרשם מהמחנות הפעילים שלנו.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7 max-w-[760px]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            איך נרשמים לסלובניה 2026?
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
