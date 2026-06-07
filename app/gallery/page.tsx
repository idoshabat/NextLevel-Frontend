import Link from "next/link";
import { ArrowLeft, Camera, Images } from "lucide-react";
import {
  galleryCategories,
  getGalleryCategoryPreview,
} from "@/data/gallery";

export const revalidate = 300;

export default async function GalleryPage() {
  const categories = await Promise.all(
    galleryCategories.map(async (category) => ({
      ...category,
      preview: await getGalleryCategoryPreview(category),
    }))
  );

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
              Gallery Moments
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              בחרו קטגוריה וצפו בגלריה המתאימה.
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              הצצה לאימונים, למחנות ולרגעים שמרכיבים את הדרך של השחקנים
              באקדמיה.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Camera size={18} strokeWidth={2.4} />
            קטגוריות
          </p>
          <h2 className="m-0 text-[clamp(2.2rem,5vw,4.8rem)] leading-none">
            בחרו את הסיפור שתרצו לראות
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
              href={`/gallery/${category.slug}`}
              key={category.slug}
              data-scroll-reveal
              data-scroll-reveal-direction={index % 2 === 0 ? "right" : "left"}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0b1114]">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={category.preview.image}
                  alt={category.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.9),rgba(3,4,5,0.08))]" />
                <div className="absolute bottom-4 right-4 rounded-lg bg-[#030405]/76 px-3 py-2 text-[0.88rem] font-extrabold text-[var(--cyan)] backdrop-blur-md">
                  {category.preview.count} תמונות
                </div>
              </div>

              <div className="p-5">
                <p className="mb-2 text-[0.9rem] font-extrabold text-[var(--cyan)]">
                  {category.eyebrow}
                </p>
                <h3 className="m-0 text-[1.75rem] leading-tight">
                  {category.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 group-hover:translate-x-[-4px]">
                  לצפייה בגלריה
                  <ArrowLeft size={18} strokeWidth={2.6} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
