import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CreditCard,
  FileCheck2,
  FileText,
  LockKeyhole,
  Mail,
  RefreshCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const termsSections = [
  {
    title: "1. כללי וכשירות משפטית",
    icon: Scale,
    paragraphs: [
      "תקנון זה מהווה חוזה משפטי מחייב בין המשתמש לבין הנהלת האתר.",
      "הנהלת האתר שומרת לעצמה את הזכות לעדכן או לשנות את התקנון מעת לעת, על פי שיקול דעתה הבלעדי וללא צורך במתן הודעה מוקדמת. הנוסח המחייב הוא הנוסח המפורסם באתר במועד השימוש.",
      "השימוש באתר ובשירותיו מיועד למשתמשים בעלי כשירות משפטית מגיל 18 ומעלה. משתמש שטרם מלאו לו 18 שנים נדרש לקבל את הסכמת הוריו או אפוטרופוס חוקי מראש ובכתב לצורך שימוש באתר וביצוע רכישות.",
      "האמור בתקנון זה מתייחס באופן שווה לבני שני המינים, והשימוש בלשון זכר או נקבה נעשה מטעמי נוחות בלבד.",
    ],
  },
  {
    title: "2. השירותים והרשמה לקורסים ותוכניות",
    icon: BadgeCheck,
    paragraphs: [
      "האתר מציע מגוון תכנים ושירותים, בין היתר: קורסים דיגיטליים, תוכניות ליווי אישיות או קבוצתיות, חומרי עזר, אימונים, סדנאות מקצועיות ומפגשים פרונטליים או מקוונים.",
      "חלק מהשירותים דורשים הרשמה ומסירת פרטים אישיים כגון שם מלא, טלפון, כתובת דואר אלקטרוני ופרטי אשראי. המשתמש מתחייב למסור פרטים נכונים, מדויקים ומלאים.",
      "הנהלת האתר שומרת לעצמה את הזכות לשנות, להוסיף, להסיר או לעדכן את תכני הקורסים, הסילבוסים, מועדי המפגשים או מחירי השירותים בכל עת.",
    ],
  },
  {
    title: "3. תנאי תשלום ורכישה",
    icon: CreditCard,
    paragraphs: [
      "מחירי השירותים באתר מוצגים בשקלים חדשים וכוללים מע\"מ כחוק, אלא אם צוין אחרת במפורש.",
      "התשלום יתבצע באמצעות כרטיס אשראי תקף, מערכות תשלום דיגיטליות מאושרות או כל אמצעי תשלום אחר שאושר על ידי הנהלת האתר.",
      "אישור הרשמה לתוכניות ליווי, קורסים או מוצרים דיגיטליים יינתן רק לאחר קבלת אישור תשלום סופי.",
      "הנהלת האתר רשאית שלא לאשר עסקה או לבטל הרשמה במקרה של פרטים שגויים, אי קבלת אישור מחברת האשראי, חשש לשימוש לרעה או הפרת תנאי התקנון.",
    ],
  },
  {
    title: "4. מדיניות ביטולים והחזרים כספיים",
    icon: RefreshCcw,
    paragraphs: [
      "מדיניות הביטולים של NEXT LEVEL ACADEMY כפופה להוראות חוק הגנת הצרכן, התשמ\"א-1981, ותקנות הגנת הצרכן, לרבות הוראות ביטול עסקה.",
      "ברכישת מוצרים דיגיטליים או קורסים אונליין הכוללים מידע הניתן להקלטה, שעתוק או שכפול, לא תינתן זכות ביטול לאחר שהגישה לתוכן נפתחה או לאחר שנמסרו למשתמש קבצים, סרטונים, קישורים או תכנים דיגיטליים.",
      "ברכישת שיעורי לימוד, סדנאות, אימונים או תוכניות ליווי בזמן אמת, ניתן לבטל את העסקה בהתאם להוראות הדין ובכפוף למועד קבלת השירות, אופי השירות והתחייבויות שכבר נוצרו מול נותני השירות.",
      "בקשת ביטול או החזר תוגש בכתב להנהלת האתר, בצירוף פרטי העסקה ופרטי ההתקשרות של המשתמש. ההחזר, ככל שיאושר, יבוצע באמצעי התשלום שבו בוצעה העסקה או בכל דרך אחרת שתוסכם בין הצדדים.",
    ],
  },
  {
    title: "5. קניין רוחני ושימוש בתכנים",
    icon: LockKeyhole,
    paragraphs: [
      "כל זכויות הקניין הרוחני באתר ובתכנים המוצגים בו, לרבות טקסטים, מצגות, סרטונים, קבצי וידאו, תמונות, קוד מקור, גרפיקה, תוכניות לימוד, שיעורים וחומרי הדרכה, שייכות ל-NEXT LEVEL ACADEMY או לצדדים שלישיים שהעניקו לה הרשאה להשתמש בהם.",
      "התכנים באתר מוענקים למשתמש לצורך שימוש אישי ופרטי בלבד. אין להעתיק, לשכפל, להפיץ, למכור, להשכיר, להציג בפומבי, לערוך, לתרגם, להעביר או לעשות כל שימוש מסחרי בתכנים ללא קבלת אישור מראש ובכתב מהנהלת האתר.",
      "מסירת גישה לתכנים לאדם אחר, שיתוף קישורים, העברת קבצים או שימוש בתכני האתר שלא בהתאם לתקנון מהווים הפרה של תנאי השימוש.",
    ],
  },
  {
    title: "6. אחריות והגבלת אחריות",
    icon: ShieldAlert,
    paragraphs: [
      "האתר, התכנים והשירותים מוצעים כפי שהם, As-Is. הנהלת האתר משקיעה מאמצים רבים כדי להבטיח איכות, דיוק ורלוונטיות, אך אינה מתחייבת כי התכנים יתאימו לצרכיו האישיים של כל משתמש או יביאו לתוצאה מקצועית, ספורטיבית או אישית מסוימת.",
      "NEXT LEVEL ACADEMY, עובדיה, מנהליה או מי מטעמה לא יהיו אחראים לכל נזק ישיר, עקיף, מיוחד או תוצאתי שייגרם כתוצאה משימוש באתר, בתכניו או בשירותיו.",
      "המשתמש אחראי באופן מלא על ביצוע פעולות גופניות, אימונים או תרגילים בהתאם למצבו הבריאותי, ליכולתו האישית ולהנחיות מקצועיות מתאימות. מומלץ להיוועץ בגורם רפואי מוסמך לפני תחילת פעילות גופנית מאומצת.",
    ],
  },
  {
    title: "7. אבטחת מידע ומדיניות פרטיות",
    icon: ShieldCheck,
    paragraphs: [
      "השימוש במידע שמוסר המשתמש נעשה בהתאם למדיניות הפרטיות של האתר ובהתאם להוראות חוק הגנת הפרטיות, התשמ\"א-1981.",
      "הנהלת האתר נוקטת באמצעים מקובלים לשמירה על אבטחת מידע, אך אינה יכולה להבטיח חסינות מוחלטת מפני חדירה בלתי מורשית, תקלות, וירוסים או אירועי סייבר.",
      "משתמש המעוניין לעיין במידע שנשמר עליו, לתקן אותו או לבקש את מחיקתו, רשאי לפנות להנהלת האתר בכתב.",
    ],
  },
  {
    title: "8. שיפוט וסמכות דין",
    icon: FileCheck2,
    paragraphs: [
      "על תקנון זה ועל כל שימוש באתר יחולו אך ורק דיני מדינת ישראל.",
      "כל מחלוקת הנובעת מהשימוש באתר, מהשירותים או מהתקנון תהיה נתונה לסמכות השיפוט הבלעדית של בתי המשפט המוסמכים בישראל.",
    ],
  },
  {
    title: "9. יצירת קשר",
    icon: Mail,
    paragraphs: [
      "בכל שאלה בנוגע לתנאי שימוש אלו, לשירותי NEXT LEVEL ACADEMY או לרכישה באתר, ניתן לפנות אלינו באמצעות עמוד יצירת הקשר באתר.",
      "ניתן ליצור קשר גם בדואר אלקטרוני: next.level.acadmy@gmail.com.",
    ],
  },
];

const introParagraphs = [
  "ברוכים הבאים לאתר של NEXT LEVEL ACADEMY (להלן: \"האקדמיה\" ו/או \"הנהלת האתר\" ו/או \"החברה\").",
  "האתר מציע קורסים, תוכניות ליווי, תכנים דיגיטליים, סדנאות ואימונים (להלן: \"השירותים\").",
  "שימושך באתר, בתכניו ובשירותים המוצעים בו מותנים בקבלתך את התנאים, ההנחיות וההודעות הכלולים בתקנון זה כלשונם. הגלישה באתר ו/או הרשמה לשירותים ו/או רכישת מוצר דיגיטלי או פיזי באתר ייחשבו להסכמה מצדך לתנאים המפורטים להלן (להלן: \"המשתמש\" או \"הלקוח\").",
  "אם אינך מסכים לתנאי השימוש הבאים, כולם או חלקם, אינך רשאי לעשות שימוש באתר זה או בשירותיו לכל מטרה שהיא.",
];

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <FileText size={19} strokeWidth={2.4} />
              Next Level Basketball Academy
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              תקנון ותנאי שימוש
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.55rem,3vw,2.5rem)] leading-tight">
              תנאי השימוש באתר ובתוכניות הלימוד של האקדמיה.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.03rem,1.8vw,1.18rem)] leading-[1.85] text-[#a8b3bd]">
              שימוש באתר, בתכניו ובשירותים המוצעים בו מהווה הסכמה לתנאים
              המפורטים בעמוד זה. אם אינכם מסכימים לתנאים, כולם או חלקם, אין
              לעשות שימוש באתר או בשירותי האקדמיה.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(980px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <article className="mb-4 rounded-lg border border-[rgb(var(--cyan-rgb)/0.28)] bg-[rgb(var(--cyan-rgb)/0.08)] p-[clamp(20px,4vw,34px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
              <FileText size={22} strokeWidth={2.4} />
            </span>
            <h2 className="m-0 text-[clamp(1.35rem,2.6vw,2rem)] leading-tight">
              ברוכים הבאים
            </h2>
          </div>

          <div className="grid gap-3 text-[1rem] leading-[1.85] text-[#d6dde3]">
            {introParagraphs.map((paragraph) => (
              <p className="m-0" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="grid gap-4">
          {termsSections.map((section) => {
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
            <Mail size={18} strokeWidth={2.4} />
            פנייה בנושא התקנון
          </p>
          <h2 className="m-0 text-[clamp(1.4rem,3vw,2.2rem)] leading-tight">
            צריכים הבהרה לגבי תנאי השימוש?
          </h2>
          <p className="mt-3 text-[1rem] leading-[1.8] text-[#a8b3bd]">
            ניתן ליצור קשר עם האקדמיה דרך עמוד צור קשר או בדואר אלקטרוני:
          </p>
          <a
            className="mt-4 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 hover:translate-x-[-4px] hover:text-[var(--cyan-light)]"
            href="mailto:next.level.acadmy@gmail.com"
          >
            next.level.acadmy@gmail.com
            <ArrowLeft size={18} strokeWidth={2.6} />
          </a>
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
