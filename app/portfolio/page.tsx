import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Photography Portfolio | Portraits, Weddings & Commercial Work",
  description:
    "Browse Sandra Patrice's portfolio of portrait, wedding, maternity, family, and commercial photography. Based in Columbia, MD — serving DC and Maryland.",
  alternates: { canonical: "https://photobysandra.com/portfolio" },
  openGraph: {
    url: "https://photobysandra.com/portfolio",
    title: "Photography Portfolio | Portraits, Weddings & Commercial Work",
    description:
      "Portrait, wedding, maternity, and commercial photography by Sandra Patrice. Columbia, MD.",
    images: [
      {
        url: "/images/mis/ethereal-portraits.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait photography portfolio — Photo By Sandra",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Our Work</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl">
            A decade of<br />
            <span className="italic">beautiful images.</span>
          </h1>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}
