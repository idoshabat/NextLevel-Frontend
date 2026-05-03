import Link from "next/link";
import { ArrowLeft, Camera, Images, Sparkles } from "lucide-react";

const galleryItems = [
  {
    title: "אימון קליעה",
    category: "אימונים",
    image: "https://picsum.photos/seed/next-level-gallery-1/900/1100",
  },
  {
    title: "עבודה קבוצתית",
    category: "קבוצה",
    image: "https://picsum.photos/seed/next-level-gallery-2/900/700",
  },
  {
    title: "רגע לפני משחק",
    category: "משחקים",
    image: "https://picsum.photos/seed/next-level-gallery-3/900/1000",
  },
  {
    title: "אימון יסודות",
    category: "טכניקה",
    image: "https://picsum.photos/seed/next-level-gallery-4/900/800",
  },
  {
    title: "מחנה חופשה",
    category: "מחנות",
    image: "https://picsum.photos/seed/next-level-gallery-5/900/1050",
  },
  {
    title: "אנרגיה על המגרש",
    category: "אווירה",
    image: "https://picsum.photos/seed/next-level-gallery-6/900/720",
  },
  {
    title: "אימון אישי",
    category: "פיתוח אישי",
    image: "https://picsum.photos/seed/next-level-gallery-7/900/1080",
  },
  {
    title: "משחקון פנימי",
    category: "תחרות",
    image: "https://picsum.photos/seed/next-level-gallery-8/900/760",
  },
  {
    title: "סיום אימון",
    category: "רגעים",
    image: "https://picsum.photos/seed/next-level-gallery-9/900/980",
  },
];

export default function GalleryPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Images size={19} strokeWidth={2.4} />
              גלריה
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              רגעים מהדרך.
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              אימונים, משחקים, מחנות והרגעים הקטנים שמספרים את הסיפור של
              האקדמיה.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              התמונות כאן הן דוגמאות זמניות. בהמשך אפשר להחליף אותן בתמונות
              אמיתיות מהאימונים, מהשחקנים ומהאירועים של Next Level.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
              <Camera size={18} strokeWidth={2.4} />
              תמונות לדוגמה
            </p>
            <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
              החיים על המגרש
            </h2>
          </div>

          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
            href="/contact"
          >
            שליחת תמונות / פרטים
            <ArrowLeft size={19} strokeWidth={2.6} />
          </Link>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <article
              className="group mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
              key={`${item.title}-${item.category}`}
            >
              <div className="relative overflow-hidden bg-[#0b1114]">
                <img
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.92),transparent)] p-4">
                  <p className="m-0 inline-flex items-center gap-2 rounded-lg bg-[#030405]/74 px-3 py-2 text-[0.88rem] font-extrabold text-[var(--cyan)] backdrop-blur-md">
                    <Sparkles size={15} strokeWidth={2.5} />
                    {item.category}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <h3 className="m-0 text-[1.25rem] leading-tight">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
