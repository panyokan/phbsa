"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// scrim controls the bottom gradient intensity over the image
// "none" | "light" | "medium" | "heavy" — omit to default to "medium"
const scrimGradients = {
  none:   "none",
  light:  "linear-gradient(to top, rgba(20,18,16,0.45), rgba(20,18,16,0.15), transparent)",
  medium: "linear-gradient(to top, rgba(20,18,16,0.75), rgba(20,18,16,0.30), transparent)",
  heavy:  "linear-gradient(to top, rgba(20,18,16,0.92), rgba(20,18,16,0.50), transparent)",
} as const;

type Scrim = keyof typeof scrimGradients;

const slides: {
  id: number;
  image: string;
  mobileImage?: string;
  objectPosition: string;
  mobileObjectPosition?: string;
  scrim?: Scrim;
  headline: string;
  sub: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}[] = [
  {
    id: 1,
    image: "/images/hero/portrait.jpg",
    mobileImage: "/images/hero/433A5636_port.jpg",
    mobileObjectPosition: "28% 100%",
    objectPosition: "top",
    scrim: "none",
    headline: "Portraits That\nReveal the Soul",
    sub: "Intimate, editorial portrait sessions crafted to tell your story.",
    cta1: { label: "View Portfolio", href: "/portfolio" },
    cta2: { label: "Book a Session", href: "/book" },
  },
  {
    id: 2,
    image: "/images/hero/service-event.jpg",
    objectPosition: "bottom",
    scrim: "light",
    headline: "Weddings Worth\nRemembering Forever",
    sub: "Documentary-style wedding photography with a timeless, editorial eye.",
    cta1: { label: "See Weddings", href: "/portfolio" },
    cta2: { label: "Check Pricing", href: "/pricing" },
  },
  {
    id: 3,
    image: "/images/hero/433A5002.jpg",
    mobileImage: "/images/hero/433A5010.jpg",
    objectPosition: "bottom",
    mobileObjectPosition: "28% 100%",
    scrim: "heavy",
    headline: "Every Moment\nDeserves to Last",
    sub: "Authentic, heartfelt photography that captures life as it truly is.",
    cta1: { label: "View Portfolio", href: "/portfolio" },
    cta2: { label: "Book a Session", href: "/book" },
  },
  {
    id: 4,
    image: "/images/hero/lake-wide.jpg",
    objectPosition: "center",
    scrim: "light",
    headline: "Commercial Imagery\nThat Converts",
    sub: "Brand photography and commercial work that elevates your identity.",
    cta1: { label: "Our Work", href: "/portfolio" },
    cta2: { label: "Get in Touch", href: "/contact" },
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [activations, setActivations] = useState<number[]>(slides.map(() => 0));

  const goTo = useCallback(
    (index: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setActivations(prev => {
          const next = [...prev];
          next[index] += 1;
          return next;
        });
      }, 300);
      setTimeout(() => setFading(false), 1300);
    },
    [fading]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-dvh min-h-[600px] overflow-hidden bg-ink">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            key={`${s.id}-${activations[i]}`}
            className="absolute inset-0 animate-ken-burns"
          >
          {/* mobile image */}
          <Image
            src={s.mobileImage ?? s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover md:hidden"
            style={{ objectPosition: s.mobileObjectPosition ?? "center" }}
            sizes="100vw"
          />
          {/* desktop image */}
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover hidden md:block"
            style={{ objectPosition: s.objectPosition }}
            sizes="100vw"
          />
          </div>
          {/* top scrim — nav legibility */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />
          {/* bottom scrim — text legibility */}
          {(s.scrim ?? "medium") !== "none" && (
            <div className="absolute inset-x-0 bottom-0 h-2/3" style={{ background: scrimGradients[s.scrim ?? "medium"] }} />
          )}
        </div>
      ))}


      <div
        className={`relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto transition-opacity duration-300 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-xl">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-parchment leading-[1.1] tracking-[-0.02em] mb-3 whitespace-pre-line [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            {slide.headline}
          </h1>
          <p className="text-parchment/80 text-sm md:text-base leading-relaxed mb-6 max-w-md [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
            {slide.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={slide.cta1.href}
              className="hidden sm:inline-flex justify-center items-center w-full sm:w-auto bg-gold text-ink px-7 py-3 text-sm tracking-[0.08em] uppercase font-medium transition-colors duration-200 hover:bg-gold-light active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {slide.cta1.label}
            </Link>
            <Link
              href={slide.cta2.href}
              className="inline-flex justify-center items-center w-full sm:w-auto border border-parchment/50 text-parchment px-7 py-3 text-sm tracking-[0.08em] uppercase transition-colors duration-200 hover:border-parchment active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-parchment/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {slide.cta2.label}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
