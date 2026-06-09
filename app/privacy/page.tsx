import Link from "next/link";
import {
  ArrowLeft,
  Cookie,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRoundCheck,
  Users,
} from "lucide-react";

const policySections = [
  {
    title: "1. המידע שאנו אוספים",
    icon: FileText,
    paragraphs: [
      "אנו עשויים לאסוף שני סוגי מידע מהמשתמשים באתר:",
      "מידע אישי שנמסר מרצון: בעת הרשמה לפעילויות האקדמיה, מחנות אימונים, מילוי טפסי יצירת קשר או הצטרפות לקהילת הלקוחות שלנו, אתם עשויים להתבקש למסור פרטים כגון: שם מלא, מספר טלפון, כתובת דואר אלקטרוני, תאריך לידה/גיל השחקן/ית, ופרטי התקשרות של הורים/אפוטרופוס עבור שחקנים ושחקניות קטינים.",
      "מידע טכנולוגי ואוטומטי: בעת הגלישה באתר, נאסף באופן אוטומטי מידע סטטיסטי ואנליטי על אופן השימוש באתר, לדוגמה: כתובת IP, סוג הדפדפן, דפים בהם ביקרתם, משך השהייה באתר וכדומה. מידע זה אינו מזהה אתכם באופן אישי ונועד לשיפור חווית הגלישה.",
    ],
  },
  {
    title: "2. חשיבות מיוחדת: פרטיות קטינים",
    icon: Users,
    paragraphs: [
      "האקדמיה מייחסת חשיבות עליונה להגנה על פרטיותם של ילדים ובני נוער.",
      "איסוף מידע לגבי שחקנים ושחקניות קטינים מתחת לגיל 18 יתבצע אך ורק באישור ובתיווך של הורה או אפוטרופוס חוקי.",
      "במידה שהורה או אפוטרופוס מגלה כי ילדו מסר מידע אישי באתר ללא הסכמתו, הוא מוזמן לפנות אלינו מיידית לכתובת המייל: Next.level.acadmy@gmail.com ואנו נמחוק את המידע בהקדם.",
    ],
  },
  {
    title: "3. כיצד אנו משתמשים במידע?",
    icon: UserRoundCheck,
    paragraphs: [
      "האקדמיה עושה שימוש במידע שנאסף למטרות הבאות:",
      "ניהול תהליכי הרישום לאקדמיה, למחנות האימונים ולפעילויות השונות.",
      "יצירת קשר, מתן מענה לפניות ושירות לקוחות.",
      "שליחת עדכונים, תכנים מקצועיים, כלים מנטליים ומידע שיווקי על פעילויות האקדמיה באמצעות דוא\"ל, SMS או וואטסאפ, וזאת בכפוף לקבלת הסכמתכם כדין. בכל עת תוכלו לבקש להסיר את עצמכם מרשימת התפוצה.",
      "תפעול, שיפור ואופטימיזציה של האתר וחווית המשתמש.",
    ],
  },
  {
    title: "4. צילום ומדיה",
    icon: ShieldCheck,
    paragraphs: [
      "כחלק מהפעילות השוטפת של אקדמיית Next Level, אנו עשויים לצלם תמונות וסרטוני וידאו של השחקנים והשחקניות במהלך אימונים, משחקים, מחנות ופעילויות של האקדמיה. מדיה זו עשויה לעלות לאתר, לרשתות החברתיות של האקדמיה כגון אינסטגרם או לשמש לצרכים מקצועיים, כמו עריכת וידאו של שחקנים ושחקניות.",
      "הרשמה לפעילות האקדמיה מהווה הסכמה לשימוש בחומרי צילום אלו לצרכים מקצועיים ושיווקיים של האקדמיה. אם הורה, שחקן או שחקנית מעוניינים להסיר תמונה או סרטון ספציפי, ניתן לפנות אלינו והבקשה תטופל ברגישות ובמהירות.",
    ],
  },
  {
    title: "5. העברת מידע לצדדים שלישיים",
    icon: LockKeyhole,
    paragraphs: [
      "האקדמיה לא תמכור, לא תשכיר ולא תעביר את המידע האישי שלכם לצדדים שלישיים, למעט במקרים הבאים:",
      "לספקים ונותני שירותים חיצוניים המסייעים לנו בתפעול האתר והאקדמיה, לדוגמה: מערכות דיוור, מערכות ניהול הרשמה וגבייה, שירותי עריכת וידאו או חברות הסעות/טיסות במקרה של מחנות בחו\"ל, וזאת רק במידה הנדרשת לצורך אספקת השירות.",
      "במידה ויתקבל צו שיפוטי המורה לאקדמיה למסור את הפרטים, או במסגרת הליכים משפטיים במקרה של מחלוקת.",
      "לצורך הגנה על זכויותיה, קניינה או ביטחונה של האקדמיה או של המשתמשים באתר.",
    ],
  },
  {
    title: "6. קבצי Cookie",
    icon: Cookie,
    paragraphs: [
      "האתר משתמש בקבצי Cookie ובטכנולוגיות מעקב דומות כדי להבטיח פעילות תקינה, לאסוף נתונים סטטיסטיים ולהתאים את תכני האתר להעדפותיכם.",
      "באפשרותכם לשנות את הגדרות הדפדפן שלכם כדי לחסום קבצים אלו, אך קחו בחשבון שחלק משירותי האתר עלולים שלא לפעול כראוי.",
    ],
  },
  {
    title: "7. אבטחת מידע",
    icon: LockKeyhole,
    paragraphs: [
      "אנו מיישמים באתר מערכות ונהלים מקובלים לאבטחת מידע כדי להגן על המידע האישי שלכם מפני גישה בלתי מורשית, שינוי או חשיפה.",
      "עם זאת, אף מערכת אינה חסינה לחלוטין, ואיננו יכולים להבטיח חסינות מוחלטת מפני פריצות או גישה זדונית.",
    ],
  },
  {
    title: "8. הזכות לעיין במידע ולמחוק אותו",
    icon: FileText,
    paragraphs: [
      "על פי חוק הגנת הפרטיות, התשמ\"א-1981, לכל משתמש קיימת הזכות לעיין במידע שנשמר עליו במאגרי המידע שלנו.",
      "אם מצאתם שהמידע אינו נכון, או אם אתם מעוניינים שנמחק את המידע האישי שלכם לחלוטין מהמערכות שלנו, אתם מוזמנים לפנות אלינו בכתב.",
    ],
  },
  {
    title: "9. שינויים במדיניות הפרטיות",
    icon: ShieldCheck,
    paragraphs: [
      "האקדמיה שומרת לעצמה את הזכות לעדכן או לשנות מדיניות פרטיות זו מעת לעת.",
      "הנוסח המחייב הוא הנוסח העדכני ביותר המפורסם באתר.",
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.55rem,3vw,2.5rem)] leading-tight">
              אנו מכבדים את הפרטיות שלכם ומחויבים להגן על המידע האישי שאתם
              משתפים עמנו.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.03rem,1.8vw,1.18rem)] leading-[1.85] text-[#a8b3bd]">
              מדיניות זו מפרטת את סוג המידע שאנו אוספים, כיצד אנו משתמשים בו,
              הדרכים שבהן אנו שומרים עליו ואת הזכויות שלכם בקשר למידע זה.
              המדיניות מנוסחת בלשון זכר מטעמי נוחות בלבד, אך פונה לכל
              המגדרים באופן שווה.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(980px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="grid gap-4">
          {policySections.map((section) => {
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
            צרו קשר
          </p>
          <h2 className="m-0 text-[clamp(1.4rem,3vw,2.2rem)] leading-tight">
            לכל שאלה, בקשה לעיון במידע או הסרת מידע
          </h2>
          <p className="mt-3 text-[1rem] leading-[1.8] text-[#a8b3bd]">
            ניתן לפנות אלינו ישירות בדואר אלקטרוני:
          </p>
          <a
            className="mt-4 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 hover:translate-x-[-4px] hover:text-[var(--cyan-light)]"
            href="mailto:Next.level.acadmy@gmail.com"
          >
            Next.level.acadmy@gmail.com
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
