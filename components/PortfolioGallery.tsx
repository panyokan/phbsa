"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const categories = ["All", "Portraits", "Weddings", "Events"] as const;
type FilterCategory = (typeof categories)[number];
type ItemCategory = Exclude<FilterCategory, "All"> | "Family";

interface GalleryItem {
  id: number;
  src: string;
  category: ItemCategory;
  alt: string;
  w: number;
  h: number;
}

const items: GalleryItem[] = [
  { id: 1,  src: "/images/hero/433A5636_port.jpg",  category: "Portraits",  alt: "Portrait session",   w: 800, h: 1000 },
  { id: 2,  src: "/images/port/cropped-40294.jpg",         category: "Weddings",   alt: "Wedding ceremony",   w: 800, h: 600  },
  { id: 3,  src: "/images/port/433A4934.jpg",        category: "Events",     alt: "Corporate event",    w: 800, h: 800  },
  { id: 4,  src: "/images/port/433A9781copy.jpg",          category: "Weddings",   alt: "Wedding reception",  w: 800, h: 600  },
  { id: 5,  src: "/images/port/filler/433A4973.jpg",   category: "Events",  alt: "Baby Shower",   w: 800, h: 800  },
  { id: 6,  src: "/images/port/filler/433A4989.jpg",              category: "Events",     alt: "Baby Shower",         w: 800, h: 1000 },
  { id: 7, src: "/images/port/433A9207copy.jpg",          category: "Weddings",   alt: "Bride and Groom",    w: 800, h: 1000 },
  { id: 8, src: "/images/port/filler/433A5010.jpg",  category: "Events",     alt: "Baby Shower",     w: 800, h: 800  },
  { id: 9, src: "/images/port/filler/433A9509.jpg",  category: "Weddings",     alt: "Bride and Groom",     w: 800, h: 800  },
  { id: 10, src: "/images/port/filler/433A9749.jpg",  category: "Weddings",     alt: "Bride and Groom",     w: 800, h: 800  },
  { id: 11, src: "/images/port/filler/433A9904.jpg",  category: "Family",     alt: "Family portrait session",     w: 800, h: 800  },
  { id: 12, src: "/images/port/filler/cropped-40340.jpg",  category: "Weddings",     alt: "Bride and Groom",     w: 800, h: 800  },
  { id: 13,  src: "/images/port/filler/433A5610.jpg",         category: "Portraits",  alt: "Studio portrait",    w: 800, h: 1000 },
];

export default function PortfolioGallery() {
  const [active, setActive]     = useState<FilterCategory>("All");
  const [hovered, setHovered]   = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    if (!lightbox) return;
    const idx = filtered.findIndex((i) => i.id === lightbox.id);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
  }, [lightbox, filtered]);

  const next = useCallback(() => {
    if (!lightbox) return;
    const idx = filtered.findIndex((i) => i.id === lightbox.id);
    setLightbox(filtered[(idx + 1) % filtered.length]);
  }, [lightbox, filtered]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-xs tracking-[0.1em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-95 ${
              active === cat
                ? "bg-gold text-ink"
                : "border border-parchment-mid text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid relative overflow-hidden group cursor-pointer"
            onClick={() => setLightbox(item)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              className={`w-full transition-transform duration-500 ${
                hovered === item.id ? "scale-105" : "scale-100"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className={`absolute inset-0 bg-ink/60 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
                hovered === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-xs tracking-[0.15em] uppercase text-gold-light">
                {item.category}
              </span>
              <div className="h-px w-8 bg-gold" />
              <span className="text-parchment/70 text-xs">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 text-parchment/60 hover:text-parchment transition-colors duration-200 focus-visible:outline-none text-2xl leading-none"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 text-parchment/50 hover:text-gold transition-colors duration-200 focus-visible:outline-none text-3xl leading-none select-none"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full mx-16 md:mx-24 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={lightbox.w}
              height={lightbox.h}
              className="w-full h-auto max-h-[90vh] object-contain"
              sizes="100vw"
              priority
            />
            <p className="mt-3 text-center text-xs tracking-[0.15em] uppercase text-parchment/40">
              {lightbox.alt} &mdash; {lightbox.category}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 text-parchment/50 hover:text-gold transition-colors duration-200 focus-visible:outline-none text-3xl leading-none select-none"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
