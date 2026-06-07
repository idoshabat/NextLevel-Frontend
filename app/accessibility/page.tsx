import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  FileText,
  Keyboard,
  Mail,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const accessibilitySections = [
  {
    title: "התאמות נגישות באתר",
    icon: SlidersHorizontal,
    paragraphs: [
      "אתר Next Level Basketball Academy נבנה מתוך מטרה לאפשר חוויית גלישה נוחה וברורה לכלל המשתמשים, לרבות אנשים עם מוגבלות.",
      "אנו פועלים ככל האפשר בהתאם להנחיות תקן ישראלי ת״י 5568 לנגישות תכנים באינטרנט, המבוסס על הנחיות WCAG ברמת AA.",
    ],
  },
  {
    title: "מבנה, ניווט וקריאות",
    icon: Keyboard,
    paragraphs: [
      "האתר כולל מבנה כותרות מסודר, אזורי תוכן ברורים, קישורים וכפתורים עם טקסט משמעותי, והתאמות המאפשרות ניווט באמצעות מקלדת.",
      "הצבעים באתר נבחרו תוך התייחסות לניגודיות, והטקסטים מוצגים בגודל קריא ככל האפשר במסכי מחשב ומובייל.",
    ],
  },
  {
    title: "תמונות, מדיה ותוכן חזותי",
    icon: Eye,
    paragraphs: [
      "לתמונות באתר מוגדרים טקסטים חלופיים במקומות הרלוונטיים, כדי לסייע למשתמשים הנעזרים בקוראי מסך.",
      "סרטוני רקע באתר מוצגים ללא קול ואינם חיוניים להבנת התוכן. ככל שתיתקלו במדיה שאינה נגישה, נשמח לקבל פנייה ולטפל בכך.",
    ],
  },
  {
    title: "רכיבים שאולי עדיין אינם נגישים במלואם",
    icon: FileText,
    paragraphs: [
      "אנו ממשיכים לשפר את האתר באופן שוטף. ייתכן שחלקים מסוימים, תכנים שהועלו מצד שלישי, תמונות ישנות או תוספים חיצוניים עדיין אינם נגישים במלואם.",
      "אם נתקלתם בקושי בגלישה, בקריאת תוכן, בהפעלת כפתור או בצפייה במדיה, נשמח שתעדכנו אותנו ונפעל לתיקון הבעיה בהקדם האפשרי.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <ShieldCheck size={19} strokeWidth={2.4} />
              Next Level Basketball Academy
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              Accessibility Statement
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.55rem,3vw,2.5rem)] leading-tight">
              אנו רואים חשיבות במתן אפשרות שווה, מכבדת ונוחה לשימוש באתר לכל
              אדם.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.03rem,1.8vw,1.18rem)] leading-[1.85] text-[#a8b3bd]">
              הצהרה זו מפרטת את מאמצי הנגישות באתר, את ההתאמות שבוצעו ואת
              הדרך לפנות אלינו במקרה של קושי או בעיית נגישות.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(980px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="grid gap-4">
          {accessibilitySections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.055] p-[clamp(20px,4vw,34px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={section.title}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                    <Icon size={22} strokeWidth={2.4} />
                  </span>
                  <h2 className="m-0 text-[clamp(1.35rem,2.6vw,2rem)] leading-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="grid gap-3 text-[1rem] leading-[1.85] text-[#a8b3bd]">
                  {section.paragraphs.map((paragraph) => (
                    <p className="m-0" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 rounded-lg border border-[rgb(var(--cyan-rgb)/0.28)] bg-[rgb(var(--cyan-rgb)/0.09)] p-[clamp(20px,4vw,34px)]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <MessageCircle size={18} strokeWidth={2.4} />
            פניות בנושא נגישות
          </p>
          <h2 className="m-0 text-[clamp(1.4rem,3vw,2.2rem)] leading-tight">
            נתקלתם בבעיה? נשמח שתפנו אלינו
          </h2>
          <p className="mt-3 text-[1rem] leading-[1.8] text-[#a8b3bd]">
            ניתן לפנות אלינו עם פירוט הבעיה, העמוד שבו נתקלתם בקושי, סוג
            המכשיר והדפדפן שבהם השתמשתם.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
              href="mailto:next.level.acadmy@gmail.com"
            >
              next.level.acadmy@gmail.com
              <Mail size={19} strokeWidth={2.5} />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
              href="tel:+972553090366"
              dir="ltr"
            >
              +972 55 309 0366
            </a>
          </div>
          <p className="mt-5 text-[0.92rem] font-bold text-[#f7fbff]/68">
            עודכן לאחרונה: מאי 2026
          </p>
        </div>

        <Link
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
          href="/contact"
        >
          מעבר ליצירת קשר
          <ArrowLeft size={19} strokeWidth={2.6} />
        </Link>
      </section>
    </div>
  );
}
