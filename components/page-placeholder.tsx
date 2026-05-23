type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-96px)] w-[min(1120px,calc(100%_-_32px))] place-items-center">
      <div className="w-full py-[72px]">
        <p className="mb-3 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
          Next Level Basketball Academy
        </p>
        <h1 className="m-0 text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95]">
          {title}
        </h1>
        <p className="mt-5 max-w-[620px] text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.75] text-[#a8b3bd]">
          כל עמוד באתר נבנה כדי לתת להורים ולשחקנים תמונה ברורה של הדרך,
          הערכים והמסגרת המקצועית של האקדמיה.
        </p>
      </div>
    </section>
  );
}
