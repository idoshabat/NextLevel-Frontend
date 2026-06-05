import Link from "next/link";
import { ArrowLeft, HelpCircle, MessageCircle, Phone } from "lucide-react";

const whatsappHref =
  "https://wa.me/972553090366?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%90%D7%A7%D7%93%D7%9E%D7%99%D7%99%D7%AA%20Next%20Level";

const faqGroups = [
  {
    title: "שאלות ותשובות - NEXT",
    questions: [
      {
        question: "האם האימונים מתקיימים רק בימי שישי ושבת?",
        answer:
          "לא. יש לנו תוכניות אימונים מגוונות הפועלות גם במהלך כל ימי השבוע.",
      },
      {
        question: "האם הפעילות ב\"נקסט\" מתאימה לכל הרמות?",
        answer:
          "לגמרי. בזכות מודל האימונים הייחודי שלנו, התוכנית מותאמת אישית לכל הרמות - החל משחקני ליגה בכיתות ה' ועד לבוגרים.",
      },
      {
        question: "האם אתם מספקים גם ייעוץ והכוונה?",
        answer:
          "כן, בטח. זהו חלק בלתי נפרד מתוכניות הליווי הרשמיות שלנו.",
      },
      {
        question: "האם יש לכם תוכניות אונליין?",
        answer:
          "כן. אנו מציעים שירותי ליווי ותמיכה מרחוק באמצעות ניתוחי וידאו של משחקים והכוונה מקצועית לפתרון בעיות בזמן אמת.",
      },
      {
        question: "מאילו גילאים ניתן להצטרף לתוכניות הליווי?",
        answer:
          "התוכניות מיועדות לספורטאים החל מכיתה ה' ועד לבוגרים.",
      },
      {
        question: "האם \"נקסט\" היא גם סוכנות שחקנים?",
        answer:
          "לא, אנחנו לא סוכנות. \"נקסט\" מעניקה מעטפת מקצועית ומחברת את השחקנים למגוון סוכנים שעובדים איתנו, בהתאם לשיקול דעתנו המקצועי.",
      },
      {
        question: "האם דרככם אפשר להגיע למכללות (קולג')?",
        answer:
          "שווה לעקוב! זו בדיוק התוכנית החדשה שלנו - תישארו מעודכנים.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <HelpCircle size={19} strokeWidth={2.4} />
              שאלות ותשובות
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              כל מה שחשוב לדעת.
            </h1>
            <p className="mt-5 max-w-[620px] text-[clamp(1.08rem,2vw,1.25rem)] leading-[1.85] text-[#a8b3bd]">
              ריכזנו כאן את השאלות הנפוצות על הצטרפות, אימונים, התאמה
              לקבוצות ותהליך העבודה באקדמיה.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                שאלה ב-WhatsApp
                <MessageCircle size={20} strokeWidth={2.5} />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
                href="tel:+972553090366"
              >
                התקשרו אלינו
                <Phone size={19} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            {faqGroups.map((group) => (
              <section
                className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={group.title}
              >
                <h2 className="m-0 px-1 pb-3 text-[1.45rem] leading-tight">
                  {group.title}
                </h2>

                <div className="grid gap-3">
                  {group.questions.map((item) => (
                    <details
                      className="group rounded-lg border border-white/10 bg-[#030405]/48 p-4 transition duration-300 open:border-[rgb(var(--cyan-rgb)/0.42)] open:bg-[rgb(var(--cyan-rgb)/0.08)]"
                      key={item.question}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.08rem] font-extrabold text-[#f7fbff] marker:hidden">
                        <span>{item.question}</span>
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[var(--cyan)] transition duration-300 group-open:rotate-45 group-open:bg-[rgb(var(--cyan-rgb)/0.16)]">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 max-w-[760px] text-[1rem] leading-[1.8] text-[#a8b3bd]">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto pb-[clamp(72px,10vw,120px)] w-[min(1180px,calc(100%_-_32px))]">
        <div className="rounded-lg border border-[rgb(var(--cyan-rgb)/0.32)] bg-[rgb(var(--cyan-rgb)/0.1)] p-6">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="m-0 text-[clamp(1.7rem,3vw,2.5rem)] leading-tight">
                לא מצאתם תשובה?
              </h2>
              <p className="mt-2 max-w-[720px] text-[1rem] leading-[1.75] text-[#a8b3bd]">
                שלחו לנו הודעה קצרה ונחזור אליכם עם תשובה מדויקת לפי גיל,
                רמה ומטרת השחקן/ית.
              </p>
            </div>

            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
              href="/contact"
            >
              לעמוד צור קשר
              <ArrowLeft size={20} strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
