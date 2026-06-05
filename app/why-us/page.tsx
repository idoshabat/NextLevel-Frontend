import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  MessageCircle,
  Target,
  TrendingUp,
  Trophy,
  Video,
} from "lucide-react";

const academyWrap = [
  {
    title: "תוכנית מותאמת תפקיד",
    text: "אפיון מדויק של חוזקות וחולשות השחקן ובניית תוכנית עבודה שמתאימה ספציפית לגוף ולתפקיד שלו על המגרש.",
    icon: Target,
  },
  {
    title: "קריאת משחק וטקטיקה תחת לחץ",
    text: "אנחנו לא מאמנים בוואקום. אנחנו מלמדים את השחקן לקרוא הגנות ולקבל החלטות נכונות בשבריר שנייה - מתי לחדור, מתי למסור ומתי לקחת עליו.",
    icon: Brain,
  },
  {
    title: "חוסן מנטלי ושיפור אתלטיות",
    text: "שילוב של פיתוח גופני (צעד ראשון, כוח מתפרץ) יחד עם ליווי מנטלי שמכין את השחקן להתמודד עם משברים, מאמנים קשוחים וחוסר ביטחון.",
    icon: Trophy,
  },
];

const proofItems = [
  {
    title: "מ-4 דקות על הספסל לחמישייה הפותחת ותואר ה-MVP!",
  },
  {
    title: "הזימון הרשמי לסגל נבחרת ישראל.",
  },
  {
    title: "הילד חזר לחייך ולקחת אחריות - השינוי המנטלי מטורף.",
  },
];

const uniqueValue = [
  {
    title: "ניתוח וידאו ממשחקי הליגה",
    text: "השחקנים שלנו שולחים לנו וידאו מהמשחקים שלהם בקבוצה שלהם. אנחנו מנתחים איתם את הטעויות וההחלטות כדי להפוך אותם לשחקנים חכמים יותר ממשחק למשחק.",
    icon: Video,
  },
  {
    title: "מעקב צמוד בזמן אמת",
    text: "אנחנו מלווים את השחקן בתוך העונה שלו. כשיש משחק פחות טוב או תקופה קשה עם המאמן בקבוצה - אנחנו שם כדי להרים, לדייק ולהכין אותו מנטלית למשחק הבא.",
    icon: TrendingUp,
  },
];

export default function WhyUsPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(72px,10vw,132px)]">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_12%,rgb(var(--cyan-rgb)/0.2),transparent_25rem),radial-gradient(circle_at_16%_78%,rgba(255,255,255,0.08),transparent_22rem)]"
          aria-hidden="true"
        />

        <div className="mx-auto w-[min(1060px,calc(100%_-_32px))] text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-4 max-[640px]:gap-3">
            <span className="h-px w-[clamp(36px,8vw,110px)] bg-[linear-gradient(90deg,transparent,var(--cyan))]" />
            <h1 className="m-0 bg-[linear-gradient(135deg,#f7fbff_0%,var(--cyan)_48%,#f7fbff_100%)] bg-clip-text text-[clamp(4rem,12vw,10.5rem)] font-black uppercase leading-[0.78] tracking-normal text-transparent drop-shadow-[0_0_32px_rgb(var(--cyan-rgb)/0.22)]">
              Why us?
            </h1>
            <span className="h-px w-[clamp(36px,8vw,110px)] bg-[linear-gradient(90deg,var(--cyan),transparent)]" />
          </div>
          <h2 className="m-0 text-[clamp(2.35rem,6vw,5.3rem)] leading-[0.98]">
            הילד שלכם מתאמן קשה? מוכשר? זה כבר לא מספיק היום
          </h2>
          <p className="mx-auto mt-8 max-w-[900px] text-[clamp(1.08rem,2vw,1.35rem)] leading-[1.85] text-[#a8b3bd]">
            עברתם מאמנים אישיים, שילמתם אלפי שקלים והאימונים נראו מעולה
            באינסטגרם. אבל בשורה התחתונה? במשחקים האמיתיים זה לא תורגם לדקות
            משחק או לביטחון עצמי.
          </p>
          <p className="mx-auto mt-5 max-w-[900px] text-[clamp(1.08rem,2vw,1.35rem)] leading-[1.85] text-[#f7fbff]/88">
            הסיבה? רוב המאמנים בשוק מלמדים "תרגילי קונוסים" יפים, אבל מעולם לא
            שיחקו ברמות הגבוהות ולא יודעים איך להכין שחקן ללחץ של משחק אמיתי.
            ב-Next Level אנחנו עושים משהו אחר לגמרי.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1060px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)] text-center">
        <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
          המעטפת שמביאה תוצאות
        </h2>
        <p className="mx-auto mt-7 max-w-[860px] text-[clamp(1.18rem,2.4vw,1.7rem)] font-extrabold leading-[1.6] text-[#f7fbff]/88">
          הנוסחה של Next Level לרמה הבאה:
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {academyWrap.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={item.title}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.45rem] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-[min(1060px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)] text-center">
        <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
          הוכחות מהשטח
        </h2>
        <p className="mx-auto mt-7 max-w-[860px] text-[clamp(1.18rem,2.4vw,1.7rem)] font-extrabold leading-[1.6] text-[#f7fbff]/88">
          התוצאות מדברות מהשטח:
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {proofItems.map((item) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              key={item.title}
            >
              <CheckCircle2
                className="mb-5 text-[var(--cyan)]"
                size={28}
                strokeWidth={2.5}
              />
              <h3 className="m-0 text-[1.28rem] font-extrabold leading-tight text-[var(--cyan)]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1060px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)] text-center">
        <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
          מה קורה ברגע שמתחילים?
        </h2>
        <p className="mx-auto mt-7 max-w-[880px] text-[clamp(1.18rem,2.4vw,1.7rem)] font-extrabold leading-[1.6] text-[#f7fbff]/88">
          ההבדל בין עוד אימון למעטפת מקצוענית:
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {uniqueValue.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 text-right transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                key={item.title}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="m-0 text-[1.45rem] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-[min(1060px,calc(100%_-_32px))] pb-[clamp(80px,11vw,132px)] text-center">
        <div className="rounded-lg border border-[rgb(var(--cyan-rgb)/0.34)] bg-[linear-gradient(135deg,rgb(var(--cyan-rgb)/0.14),rgba(255,255,255,0.055))] p-[clamp(24px,5vw,52px)] shadow-[0_30px_100px_rgba(0,0,0,0.3),0_0_44px_rgb(var(--cyan-rgb)/0.12)]">
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none text-[var(--cyan)]">
            אל תתנו לעוד עונה לעבור בתחושת פספוס.
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-[1.08rem] font-bold leading-[1.8] text-[#d6edf2]/82">
            הזמן של שחקן צעיר קצר, וכל שנה קריטית להתפתחות שלו. אל תחכו
            שהמאמן בקבוצה ישתנה - שנו את היכולות של השחקן.
          </p>
          <p className="mx-auto mt-6 max-w-[820px] text-[1.16rem] font-extrabold leading-[1.8] text-[#f7fbff]">
            לתיאום פגישת אפיון ומבדק ביצועים על המגרש לגמרי בחינם 👇
          </p>
          <p className="mx-auto mt-4 max-w-[720px] text-[0.98rem] font-bold leading-[1.7] text-[#d6edf2]/76">
            כדי לשמור על יחס אישי, אנחנו מקבלים רק 5 שחקנים חדשים החודש.
          </p>
          <Link
            className="mt-7 inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-7 py-3.5 text-[1.05rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.55)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            href="/contact"
          >
            קבעו לי פגישה
            <ArrowLeft size={21} strokeWidth={2.6} />
            <MessageCircle size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
