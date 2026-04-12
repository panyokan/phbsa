"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Portraits", "Weddings", "Events", "Commercial"] as const;
type Category = (typeof categories)[number];

interface GalleryItem {
  id: number;
  src: string;
  category: Exclude<Category, "All">;
  alt: string;
  w: number;
  h: number;
}

const items: GalleryItem[] = [
  { id: 1,  src: "https://placehold.co/800x1000/2D2820/C4A06A?text=Portrait",     category: "Portraits",   alt: "Portrait session",    w: 800, h: 1000 },
  { id: 2,  src: "https://placehold.co/800x600/1A1714/B8873A?text=Wedding",       category: "Weddings",    alt: "Wedding ceremony",    w: 800, h: 600  },
  { id: 3,  src: "https://placehold.co/800x800/3D3730/D4A454?text=Event",         category: "Events",      alt: "Corporate event",     w: 800, h: 800  },
  { id: 4,  src: "https://placehold.co/800x1000/1A1714/C4A06A?text=Portrait+2",   category: "Portraits",   alt: "Studio portrait",     w: 800, h: 1000 },
  { id: 5,  src: "https://placehold.co/800x600/2D2820/D4A454?text=Commercial",    category: "Commercial",  alt: "Commercial product",  w: 800, h: 600  },
  { id: 6,  src: "https://placehold.co/800x600/3D3730/B8873A?text=Wedding+2",     category: "Weddings",    alt: "Wedding reception",   w: 800, h: 600  },
  { id: 7,  src: "https://placehold.co/800x800/1A1714/C4A06A?text=Portrait+3",    category: "Portraits",   alt: "Outdoor portrait",    w: 800, h: 800  },
  { id: 8,  src: "https://placehold.co/800x1000/2D2820/D4A454?text=Event+2",      category: "Events",      alt: "Gala event",          w: 800, h: 1000 },
  { id: 9,  src: "https://placehold.co/800x600/3D3730/B8873A?text=Commercial+2",  category: "Commercial",  alt: "Brand shoot",         w: 800, h: 600  },
  { id: 10, src: "https://placehold.co/800x1000/1A1714/D4A454?text=Wedding+3",    category: "Weddings",    alt: "Bride and groom",     w: 800, h: 1000 },
  { id: 11, src: "https://placehold.co/800x800/2D2820/C4A06A?text=Event+3",       category: "Events",      alt: "Birthday event",      w: 800, h: 800  },
  { id: 12, src: "https://placehold.co/800x600/3D3730/B8873A?text=Portrait+4",    category: "Portraits",   alt: "Family portrait",     w: 800, h: 600  },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
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
    </div>
  );
}
