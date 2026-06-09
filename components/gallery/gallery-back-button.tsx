"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type GalleryBackButtonProps = {
  fallbackHref?: string;
};

export function GalleryBackButton({
  fallbackHref = "/",
}: GalleryBackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      className="mb-5 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[#a8b3bd] transition duration-300 hover:text-[var(--cyan)]"
      type="button"
      onClick={handleBack}
    >
      <ArrowRight size={18} strokeWidth={2.5} />
      חזרה
    </button>
  );
}
