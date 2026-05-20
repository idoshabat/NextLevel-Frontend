import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Camera } from "lucide-react";
import {
  galleryCategories,
  getGalleryImagesForCategory,
  type GalleryCategorySlug,
} from "@/data/gallery";

type GalleryCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export const revalidate = 300;

export function generateStaticParams() {
  return galleryCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function GalleryCategoryPage({
  params,
}: GalleryCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = galleryCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const items = await getGalleryImagesForCategory(
    category.slug as GalleryCategorySlug
  );

  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Link
              className="mb-5 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[#a8b3bd] transition duration-300 hover:text-[var(--cyan)]"
              href="/gallery"
            >
              <ArrowRight size={18} strokeWidth={2.5} />
              חזרה לגלריות
            </Link>
            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Camera size={19} strokeWidth={2.4} />
              {category.eyebrow}
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              {category.title}
            </h1>
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <h2 className="m-0 text-[clamp(1.65rem,3vw,2.6rem)] leading-tight">
              {category.description}
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              התמונות בעמוד הן דוגמאות זמניות, כדי לראות איך הגלריה תיראה
              לאחר העלאת המדיה האמיתית.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <article
              className="group mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
              key={`${item.title}-${item.image}`}
            >
              <div className="overflow-hidden bg-[#0b1114]">
                <img
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
