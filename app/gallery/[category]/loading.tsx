import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

const skeletonHeights = [320, 230, 280, 360, 250, 310, 220, 340, 270];

export default function GalleryCategoryLoading() {
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
              טוען גלריה
            </p>
            <div className="gallery-loading-shimmer h-[clamp(3.4rem,8vw,7rem)] w-[min(440px,80vw)] rounded-lg" />
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <div className="gallery-loading-shimmer h-8 w-[min(520px,100%)] rounded-lg" />
            <div className="gallery-loading-shimmer mt-5 h-4 w-full max-w-[720px] rounded-lg" />
            <div className="gallery-loading-shimmer mt-3 h-4 w-[78%] rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {skeletonHeights.map((height, index) => (
            <div
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)]"
              key={`${height}-${index}`}
            >
              <div
                className="gallery-loading-shimmer"
                style={{ height: `${height}px` }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
