import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Photo By Sandra and our approach to photography.",
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
              <div className="relative aspect-[3/4] overflow-hidden md:sticky md:top-32">
                <Image
                  src="/images/mis/fashion-forward.jpg"
                  alt="Elena Moreau, Lead Photographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 to-transparent">
                  <p className="font-display text-parchment text-xl">Sandra</p>
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
                  "Hi, I'm Sandra. I started Photo By Sandra because I genuinely love photography and the people I get to meet through it. Just me, my camera, and a real care for getting your photos right.",
                  "I work with a small number of clients at a time so I can give each project the attention it deserves. Whether it's a family portrait, a wedding day, or a product shoot, I treat every booking as if it's the only one.",
                  "My approach is relaxed and unhurried. I want you to feel comfortable, not posed. The best photos happen when people forget there's a camera in the room.",
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
