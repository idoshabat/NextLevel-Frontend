"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";

type GalleryLightboxImage = {
  title: string;
  image: string;
  width?: number;
  height?: number;
};

type GalleryLightboxProps = {
  images: GalleryLightboxImage[];
};

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dragPointRef = useRef<{ x: number; y: number } | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const closeLightbox = () => setActiveIndex(null);
  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };
  const zoomIn = () => setZoom((current) => Math.min(current + 0.25, 3));
  const zoomOut = () =>
    setZoom((current) => {
      const nextZoom = Math.max(current - 0.25, 1);

      if (nextZoom === 1) {
        setPan({ x: 0, y: 0 });
      }

      return nextZoom;
    });
  const showNext = () => {
    resetZoom();
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % images.length
    );
  };
  const showPrevious = () => {
    resetZoom();
    setActiveIndex((current) =>
      current === null ? images.length - 1 : (current - 1 + images.length) % images.length
    );
  };

  const openLightbox = (index: number) => {
    resetZoom();
    setActiveIndex(index);
  };

  const toggleDoubleClickZoom = () => {
    if (zoom > 1) {
      resetZoom();
      return;
    }

    setZoom(2);
    setPan({ x: 0, y: 0 });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getBoundedPan = (nextPan: { x: number; y: number }, nextZoom = zoom) => {
    const image = imageRef.current;
    const viewport = viewportRef.current;

    if (!image || !viewport || nextZoom <= 1) {
      return { x: 0, y: 0 };
    }

    const imageWidth = image.offsetWidth * nextZoom;
    const imageHeight = image.offsetHeight * nextZoom;
    const viewportWidth = viewport.clientWidth;
    const viewportHeight = viewport.clientHeight;
    const maxX = Math.max((imageWidth - viewportWidth) / 2, 0);
    const maxY = Math.max((imageHeight - viewportHeight) / 2, 0);

    return {
      x: Math.min(Math.max(nextPan.x, -maxX), maxX),
      y: Math.min(Math.max(nextPan.y, -maxY), maxY),
    };
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        showPrevious();
      }

      if (event.key === "ArrowLeft") {
        showNext();
      }

      if (event.key === "+" || event.key === "=") {
        zoomIn();
      }

      if (event.key === "-") {
        zoomOut();
      }

      if (event.key === "0") {
        resetZoom();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  useEffect(() => {
    setPan((current) => getBoundedPan(current, zoom));
  }, [zoom, activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleResize = () => {
      setPan((current) => getBoundedPan(current, zoom));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex, zoom]);

  const startDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) {
      return;
    }

    dragPointRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const dragImage = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragPointRef.current || zoom <= 1) {
      return;
    }

    const deltaX = event.clientX - dragPointRef.current.x;
    const deltaY = event.clientY - dragPointRef.current.y;

    setPan((current) =>
      getBoundedPan({
        x: current.x + deltaX,
        y: current.y + deltaY,
      })
    );

    dragPointRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    dragPointRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const lightbox = activeImage ? (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/88 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="תצוגת תמונה מוגדלת"
      onClick={closeLightbox}
    >
      <div
        className="absolute left-1/2 top-4 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#030405]/72 p-1 text-[#f7fbff] shadow-[0_18px_50px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.16)] hover:text-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-40"
          type="button"
          aria-label="הקטנת תמונה"
          onClick={zoomOut}
          disabled={zoom <= 1}
        >
          <Minus size={18} strokeWidth={2.5} />
        </button>
        <button
          className="min-w-14 rounded-full px-2 py-2 text-center text-[0.82rem] font-extrabold text-[#f7fbff]/86 transition duration-300 hover:bg-white/10"
          type="button"
          aria-label="איפוס זום"
          onClick={resetZoom}
        >
          {Math.round(zoom * 100)}%
        </button>
        <button
          className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.16)] hover:text-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-40"
          type="button"
          aria-label="הגדלת תמונה"
          onClick={zoomIn}
          disabled={zoom >= 3}
        >
          <Plus size={18} strokeWidth={2.5} />
        </button>
        <button
          className="grid size-10 place-items-center rounded-full transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.16)] hover:text-[var(--cyan)]"
          type="button"
          aria-label="איפוס זום"
          onClick={resetZoom}
        >
          <RotateCcw size={17} strokeWidth={2.5} />
        </button>
      </div>

      <button
        className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/10 text-[#f7fbff] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.18)] hover:text-[var(--cyan)]"
        type="button"
        aria-label="סגירת תמונה"
        onClick={closeLightbox}
      >
        <X size={22} strokeWidth={2.5} />
      </button>

      {images.length > 1 ? (
        <>
          <button
            className="absolute left-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-[#f7fbff] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.18)] hover:text-[var(--cyan)]"
            type="button"
            aria-label="תמונה קודמת"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button
            className="absolute right-4 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-[#f7fbff] transition duration-300 hover:bg-[rgb(var(--cyan-rgb)/0.18)] hover:text-[var(--cyan)]"
            type="button"
            aria-label="תמונה הבאה"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </>
      ) : null}

      <div
        ref={viewportRef}
        className={`relative grid max-h-[88vh] max-w-[min(1120px,92vw)] place-items-center overflow-auto rounded-lg ${
          zoom > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={startDragging}
        onPointerMove={dragImage}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onDoubleClick={(event) => {
          event.stopPropagation();
          toggleDoubleClickZoom();
        }}
        onWheel={(event) => {
          event.stopPropagation();

          if (event.deltaY < 0) {
            zoomIn();
          } else {
            zoomOut();
          }
        }}
      >
        <img
          ref={imageRef}
          className={`max-h-[88vh] max-w-full select-none rounded-lg object-contain shadow-[0_30px_100px_rgba(0,0,0,0.55)] ${
            isDragging ? "" : "transition-transform duration-200"
          }`}
          src={activeImage.image}
          alt={activeImage.title}
          draggable={false}
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transformOrigin: "center",
            touchAction: "none",
          }}
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((item, index) => (
          <article
            className="group mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
            key={`${item.title}-${item.image}`}
            data-scroll-reveal
            data-scroll-reveal-direction={index % 2 === 0 ? "right" : "left"}
          >
            <button
              className="block w-full cursor-zoom-in text-right"
              type="button"
              aria-label={`הגדלת תמונה ${index + 1}`}
              onClick={() => openLightbox(index)}
            >
              <div
                className="gallery-image-frame relative overflow-hidden bg-[#0b1114]"
                style={{
                  aspectRatio: `${item.width ?? 1} / ${item.height ?? 1}`,
                }}
              >
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 grid size-10 place-items-center rounded-full bg-[#030405]/68 text-[#f7fbff] opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <Expand size={18} strokeWidth={2.4} />
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {isMounted && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}
