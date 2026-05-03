import Link from "next/link";
import { ArrowLeft, Medal, Sparkles, Star, Trophy } from "lucide-react";

const players = [
  {
    name: "יונתן לוי",
    age: "14",
    position: "רכז",
    image: "https://i.pravatar.cc/640?img=11",
    highlight: "שיפור שליטה בכדור וקבלת החלטות",
    story:
      "יונתן הגיע לאקדמיה עם אהבה גדולה למשחק ורצון להוביל. דרך עבודה עקבית על כדרור, קריאת מצבים וביטחון מול לחץ, הוא הפך לשחקן שמנהל קצב ומרים את החברים סביבו.",
  },
  {
    name: "מיקה כהן",
    age: "13",
    position: "קלעית",
    image: "https://i.pravatar.cc/640?img=49",
    highlight: "טכניקת קליעה יציבה יותר",
    story:
      "מיקה עבדה לאורך חודשים על בסיס יציב, שחרור מהיר ובחירת זריקות נכונה. היום היא עולה לזריקה בביטחון, מבינה מתי לתקוף ומתי להניע כדור, ומשחקת עם הרבה שקט.",
  },
  {
    name: "איתי בן דוד",
    age: "15",
    position: "פורוורד",
    image: "https://i.pravatar.cc/640?img=14",
    highlight: "אתלטיות וסיומת ליד הטבעת",
    story:
      "איתי התחיל כשחקן חזק אבל לא תמיד מאוזן. בעבודה על רגליים, שינויי כיוון וסיומות בשתי ידיים, הוא למד להשתמש בגוף בצורה חכמה ולהיות איום קבוע באזור הצבע.",
  },
  {
    name: "נועה אברהם",
    age: "12",
    position: "גארדית",
    image: "https://i.pravatar.cc/640?img=44",
    highlight: "ביטחון עם הכדור",
    story:
      "נועה הייתה שחקנית חרוצה שהעדיפה למסור מהר מדי. באימונים היא למדה להרים ראש, להחזיק כדור תחת לחץ וליצור מצבים לעצמה ולאחרות. השינוי שלה מורגש בכל משחק.",
  },
  {
    name: "רועי מזרחי",
    age: "16",
    position: "סנטר",
    image: "https://i.pravatar.cc/640?img=17",
    highlight: "עבודת רגליים ומשחק גב לסל",
    story:
      "רועי הגיע עם גובה ונוכחות, אבל היה צריך כלים. דרך תרגול מיקום, חסימות, ריבאונד וסיומות קצרות, הוא הפך לשחקן שמשפיע גם בלי לגעת הרבה בכדור.",
  },
  {
    name: "תמר פרץ",
    age: "15",
    position: "רכזת",
    image: "https://i.pravatar.cc/640?img=31",
    highlight: "מנהיגות וקבלת החלטות",
    story:
      "תמר למדה לקחת אחריות בלי למהר. היא עובדת על קריאת הגנות, תקשורת עם הקבוצה ושליטה בקצב, והפכה לשחקנית שמאמנים סומכים עליה ברגעים חשובים.",
  },
  {
    name: "עומר ביטון",
    age: "11",
    position: "גארד",
    image: "https://i.pravatar.cc/640?img=8",
    highlight: "יסודות והרגלי אימון",
    story:
      "עומר התחיל מהבסיס: עמידת מוצא, כדרור נכון, מסירות ועבודת רגליים. ההתמדה שלו הפכה אותו לשחקן מסודר יותר, רעב יותר, ובעיקר כזה שמבין איך להשתפר.",
  },
  {
    name: "שירה מלכה",
    age: "14",
    position: "כנף",
    image: "https://i.pravatar.cc/640?img=38",
    highlight: "הגנה אישית ומשחק מעבר",
    story:
      "שירה תמיד אהבה לרוץ, אבל באקדמיה היא למדה לרוץ נכון. היום היא סוגרת קווי חדירה, יוצאת מהר למתפרצות ומביאה אנרגיה שמדביקה את כל הקבוצה.",
  },
  {
    name: "דניאל אוחנה",
    age: "13",
    position: "קלעי",
    image: "https://i.pravatar.cc/640?img=18",
    highlight: "קליעה אחרי תנועה",
    story:
      "דניאל עבד על יציאה מחסימות, עצירה מאוזנת וזריקה בקצב משחק. במקום לחכות לכדור במקום, הוא למד לזוז חכם וליצור לעצמו זריקות איכותיות.",
  },
  {
    name: "ליה רוזן",
    age: "12",
    position: "פורוורדית",
    image: "https://i.pravatar.cc/640?img=41",
    highlight: "חוזק מנטלי והתמדה",
    story:
      "ליה התמודדה עם רגעים של חוסר ביטחון, אבל לא ויתרה. בעזרת יעדים קטנים, משוב אישי והרבה עבודה, היא למדה להאמין בתהליך ולהביא את עצמה בכל אימון מחדש.",
  },
  {
    name: "אדם גולן",
    age: "17",
    position: "גארד",
    image: "https://i.pravatar.cc/640?img=20",
    highlight: "הכנה לרמה תחרותית",
    story:
      "אדם הגיע עם מטרה ברורה להתקדם לרמה גבוהה יותר. האימונים התמקדו בקצב, פיזיות, החלטות מהירות ודיוק בפרטים הקטנים, כדי להכין אותו למשחק תחרותי יותר.",
  },
  {
    name: "מאיה לוי",
    age: "10",
    position: "שחקנית צעירה",
    image: "https://i.pravatar.cc/640?img=25",
    highlight: "אהבה למשחק ובסיס נכון",
    story:
      "מאיה התחילה את הדרך עם חיוך גדול והמון סקרנות. באימונים היא לומדת יסודות דרך משחקים ואתגרים, ובונה ביטחון בקצב שמתאים לגיל ולחוויה שלה.",
  },
];

const stats = [
  { value: "12", label: "סיפורי שחקנים לדוגמה" },
  { value: "4", label: "תחומי התקדמות מרכזיים" },
  { value: "100%", label: "תוכן מוכן לעריכה" },
];

export default function PlayersPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Star size={19} strokeWidth={2.4} />
              שחקנים שלנו
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              הסיפורים שמראים את הדרך.
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              כל שחקן מגיע עם נקודת פתיחה אחרת. התהליך הוא מה שעושה את ההבדל.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              בעמוד הזה אפשר להציג בהמשך סיפורים אמיתיים של שחקנים ושחקניות
              שהתפתחו באקדמיה: מטרות, אתגרים, התקדמות, רגעי פריצה ומה הם למדו
              על עצמם דרך המשחק.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-4 pb-[clamp(48px,7vw,76px)] md:grid-cols-3">
        {stats.map((item) => (
          <div
            className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            key={item.label}
          >
            <p className="m-0 text-[clamp(2.1rem,4vw,3.3rem)] font-extrabold leading-none text-[var(--cyan)]">
              {item.value}
            </p>
            <p className="mt-2 text-[1.05rem] font-extrabold text-[#f7fbff]/88">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Trophy size={18} strokeWidth={2.4} />
              נבחרת הסיפורים
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              שחקנים לדוגמה
            </h2>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
            href="/contact"
          >
            רוצים להצטרף?
            <ArrowLeft size={19} strokeWidth={2.6} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {players.map((player) => (
            <article
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
              key={player.name}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0b1114]">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={player.image}
                  alt={`תמונה של ${player.name}`}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.92),transparent)] p-4">
                  <p className="m-0 inline-flex items-center gap-2 rounded-lg bg-[#030405]/74 px-3 py-2 text-[0.9rem] font-extrabold text-[var(--cyan)] backdrop-blur-md">
                    <Medal size={16} strokeWidth={2.5} />
                    {player.highlight}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="m-0 text-[1.55rem] leading-tight">
                      {player.name}
                    </h3>
                    <p className="mt-1 text-[0.98rem] font-extrabold text-[#f7fbff]/72">
                      גיל {player.age} · {player.position}
                    </p>
                  </div>
                  <Sparkles
                    className="text-[var(--cyan)]"
                    size={22}
                    strokeWidth={2.4}
                  />
                </div>

                <p className="mt-4 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {player.story}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
