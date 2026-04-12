import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Lumière Studio and our approach to photography.",
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
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl">
            Twelve years of<br />
            <span className="italic">chasing light.</span>
          </h1>
        </div>
      </div>

      {/* ── Story ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[3/4] overflow-hidden md:sticky md:top-32">
              <Image
                src="https://placehold.co/700x900/2D2820/C4A06A?text=Elena+Moreau"
                alt="Elena Moreau, Lead Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 to-transparent">
                <p className="font-display text-parchment text-xl">Elena Moreau</p>
                <p className="text-parchment/60 text-sm mt-1">Lead Photographer &amp; Founder</p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-muted text-xs tracking-[0.15em] uppercase">
                A note from the founder
              </p>
              <p className="font-display text-2xl text-ink leading-[1.4] italic">
                &ldquo;I picked up my first camera at seventeen. I haven&apos;t put it down since.&rdquo;
              </p>
              {[
                "After studying photojournalism at Columbia and spending three years shooting editorial for The New York Times Magazine, I founded Lumière Studio in 2012 with a simple belief: photography is a collaborative act. The best images happen when trust exists between photographer and subject.",
                "Today, our team of three works on an intentionally small roster of clients each year. We don't take every booking — we take the ones where we feel genuine alignment with the vision and the people involved.",
                "Our approach is unhurried. We spend time with you before the session — understanding your aesthetic, your story, what matters to you. That preparation makes every image more intentional.",
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
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 md:py-32 bg-parchment-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">What We Believe</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-[-0.02em] mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={v.title} className="flex flex-col gap-4">
                <p className="text-xs tracking-[0.2em] uppercase text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <div className="h-px w-8 bg-gold" />
                <p className="text-muted leading-[1.8] text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press ── */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold/60 mb-10 text-center">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {["Vogue", "ELLE", "The New York Times", "Harper&apos;s Bazaar", "W Magazine"].map((pub) => (
              <p key={pub} className="font-display text-lg text-parchment/30 tracking-[0.05em]">
                {pub}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
