import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Sandra Patrice | Portrait Photographer Columbia, MD",
  description:
    "Meet Sandra Patrice — portrait and wedding photographer based in Columbia, MD. A relaxed, unhurried approach that lets genuine moments shine. Learn her story.",
  alternates: { canonical: "https://photobysandra.com/about" },
  openGraph: {
    url: "https://photobysandra.com/about",
    title: "About Sandra Patrice | Portrait Photographer Columbia, MD",
    description:
      "Meet Sandra Patrice, a portrait and wedding photographer based in Columbia, MD. Genuine moments, relaxed approach.",
    images: [
      {
        url: "/images/sandra_mit.jpg",
        width: 1200,
        height: 630,
        alt: "Sandra Patrice — Photographer & Founder of Photo By Sandra",
      },
    ],
  },
};

const values = [
  {
    title: "Authenticity",
    desc: "We capture genuine moments, never staged ones. Real emotion is always more powerful than a perfect pose.",
  },
  {
    title: "Craft",
    desc: "Every image goes through rigorous post-processing to achieve the exact tone and mood we're after.",
  },
  {
    title: "Presence",
    desc: "We believe in being present — not hiding behind gear, but connecting with subjects first.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 [animation:fade-up_0.5s_ease-out_0.1s_both]">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl [animation:fade-up_0.65s_ease-out_0.25s_both]">
            A photo shop with<br />
            <span className="italic">a big passion.</span>
          </h1>
        </div>
      </div>

      {/* ── Story ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <div className="group relative overflow-hidden md:sticky md:top-32">
                <Image
                  src="/images/sandra_mit.jpg"
                  alt="Sandra, Photographer & Founder of Photo By Sandra"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Warm gold tint — intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent mix-blend-multiply transition-opacity duration-700 group-hover:opacity-150" />
                {/* Vignette — softens on hover to let the image breathe */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(20,18,16,0.45)_100%)] transition-opacity duration-700 group-hover:opacity-60" />
                {/* Bottom scrim — grounds the name caption */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-parchment text-xl">Sandra Patrice</p>
                  <p className="text-parchment/60 text-sm mt-1">Photographer &amp; Founder</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="space-y-8">
                <p className="text-muted text-xs tracking-[0.15em] uppercase">
                  A note from the founder
                </p>
                <p className="font-display text-2xl text-ink leading-[1.4] italic">
                  &ldquo;Every person has a story worth capturing. I just help tell it.&rdquo;
                </p>
                {[
                  "My name is Sandra Patrice, and I have a deep passion for photography. There is nothing that makes me happier than creating lasting memories for people to cherish forever. I truly enjoy the process and love engaging with every person I meet through my work. With just me and my camera, I take real care to ensure your photos are exactly right.",
                  "To provide the dedicated attention each project deserves, I work with only a small number of clients at a time. Whether it's a family portrait, graduation, maternity session, children's portraits, or professional headshots, I treat every booking as my top priority.",
                  "My approach is relaxed and unhurried because I want you to feel completely comfortable, never forced or over-posed. I believe the best photos happen naturally when you forget there's even a camera in the room.",
                ].map((text, i) => (
                  <p key={i} className="text-muted leading-[1.85]">
                    {text}
                  </p>
                ))}
                <Link
                  href="/how-we-work"
                  className="inline-flex text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
                >
                  How We Work →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 md:py-32 bg-parchment-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">What We Believe</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-[-0.02em] mb-16">
              Our Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="flex flex-col gap-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                  <div className="h-px w-8 bg-gold" />
                  <p className="text-muted leading-[1.8] text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
