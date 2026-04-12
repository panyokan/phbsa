"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/hero/portrait.jpg",
    headline: "Portraits That\nReveal the Soul",
    sub: "Intimate, editorial portrait sessions crafted to tell your story.",
    cta1: { label: "View Portfolio", href: "/portfolio" },
    cta2: { label: "Book a Session", href: "/book" },
  },
  {
    id: 2,
    image: "/images/hero/weeding.jpg",
    headline: "Weddings Worth\nRemembering Forever",
    sub: "Documentary-style wedding photography with a timeless, editorial eye.",
    cta1: { label: "See Weddings", href: "/portfolio" },
    cta2: { label: "Check Pricing", href: "/pricing" },
  },
  {
    id: 3,
    image: "/images/hero/commercial.jpg",
    headline: "Commercial Imagery\nThat Converts",
    sub: "Brand photography and commercial work that elevates your identity.",
    cta1: { label: "Our Work", href: "/portfolio" },
    cta2: { label: "Get in Touch", href: "/contact" },
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 350);
    },
    [fading]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-ink">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />
        </div>
      ))}


      <div
        className={`relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto transition-opacity duration-300 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] mb-6 whitespace-pre-line">
            {slide.headline}
          </h1>
          <p className="text-parchment/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {slide.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.cta1.href}
              className="inline-flex items-center bg-gold text-ink px-7 py-3 text-sm tracking-[0.08em] uppercase font-medium transition-colors duration-200 hover:bg-gold-light active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {slide.cta1.label}
            </Link>
            <Link
              href={slide.cta2.href}
              className="inline-flex items-center border border-parchment/50 text-parchment px-7 py-3 text-sm tracking-[0.08em] uppercase transition-colors duration-200 hover:border-parchment active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {slide.cta2.label}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`block h-px transition-all duration-300 focus-visible:outline-none ${
                i === current ? "w-10 bg-gold" : "w-4 bg-parchment/40 hover:bg-parchment/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-parchment/40 text-xs tracking-[0.15em] uppercase">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-parchment/40 to-transparent" />
      </div>
    </section>
  );
}
