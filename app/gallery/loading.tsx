import { Camera, Images } from "lucide-react";

export default function GalleryLoading() {
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
            <div className="gallery-loading-shimmer h-[clamp(3.4rem,8vw,7rem)] w-[min(520px,86vw)] rounded-lg" />
          </div>

          <div className="border-r border-[rgb(var(--cyan-rgb)/0.45)] pr-6 max-[640px]:border-r-0 max-[640px]:pr-0">
            <div className="gallery-loading-shimmer h-8 w-[min(520px,100%)] rounded-lg" />
            <div className="gallery-loading-shimmer mt-5 h-4 w-full max-w-[720px] rounded-lg" />
            <div className="gallery-loading-shimmer mt-3 h-4 w-[82%] rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-7">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Camera size={18} strokeWidth={2.4} />
            טוען קטגוריות
          </p>
          <div className="gallery-loading-shimmer h-14 w-[min(580px,90vw)] rounded-lg" />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)]"
              key={index}
            >
              <div className="gallery-loading-shimmer aspect-[16/11]" />
              <div className="p-5">
                <div className="gallery-loading-shimmer h-4 w-28 rounded-lg" />
                <div className="gallery-loading-shimmer mt-4 h-8 w-44 rounded-lg" />
                <div className="gallery-loading-shimmer mt-4 h-4 w-full rounded-lg" />
                <div className="gallery-loading-shimmer mt-3 h-4 w-[72%] rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
