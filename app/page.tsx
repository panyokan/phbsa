import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photo By Sandra | Portrait & Wedding Photographer in Columbia, MD",
  description:
    "Sandra Patrice captures genuine portraits, weddings, maternity, and family sessions in Columbia, MD and the DC/Maryland area. Packages from $450. Book your session today.",
  alternates: { canonical: "https://photobysandra.com" },
  openGraph: {
    url: "https://photobysandra.com",
    title: "Photo By Sandra | Portrait & Wedding Photographer in Columbia, MD",
    description:
      "Genuine portraits, weddings, and commercial photography by Sandra Patrice. Columbia, MD — packages from $450.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://photobysandra.com/#business",
  name: "Photo By Sandra",
  description:
    "Portrait, wedding, maternity, and commercial photography studio based in Columbia, MD, serving the greater DC/Maryland area.",
  url: "https://photobysandra.com",
  telephone: "+12025274695",
  email: "info@photobysandra.com",
  image: "https://photobysandra.com/images/hero/433A5002.jpg",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10300 Little Patuxent Pkwy",
    addressLocality: "Columbia",
    addressRegion: "MD",
    postalCode: "21044",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.2037,
    longitude: -76.861,
  },
  areaServed: [
    { "@type": "City", name: "Columbia" },
    { "@type": "State", name: "Maryland" },
    { "@type": "City", name: "Washington DC" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "The Essential",
        price: "450",
        priceCurrency: "USD",
        description: "1-hour session, 1 location, 15 edited high-resolution images",
      },
      {
        "@type": "Offer",
        name: "The Classic",
        price: "850",
        priceCurrency: "USD",
        description: "2-hour session, up to 2 locations, 30 edited high-resolution images",
      },
      {
        "@type": "Offer",
        name: "The Premium",
        price: "1800",
        priceCurrency: "USD",
        description:
          "4-hour session, up to 3 locations, 50 edited images, commercial license",
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/photobysandra",
    "https://www.pinterest.com/photobysandra",
    "https://www.behance.net/photobysandra",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandra Patrice",
  jobTitle: "Professional Photographer",
  worksFor: { "@type": "LocalBusiness", name: "Photo By Sandra" },
  url: "https://photobysandra.com/about",
  image: "https://photobysandra.com/images/sandra_mit.jpg",
};

const portfolioTeaser = [
  {
    src: "/images/hero/433A5636_port.jpg",
    alt: "Commercial product photography — whisky bottle shoot",
    pos: "object-center",
  },

  {
    src: "/images/port/433A9781copy.jpg",
    alt: "Ethereal portrait photography by Sandra Patrice",
    pos: "object-center",
  },
  {
    src: "/images/port/filler/433A4989.jpg",
    alt: "Fashion editorial photography by Photo By Sandra",
    pos: "object-center",
  },
];

const packages = [
  {
    name: "The Essential",
    price: "$450",
    desc: "1-hour session · 1 location · 15 edited images",
  },
  {
    name: "The Classic",
    price: "$850",
    desc: "2-hour session · 2 locations · 30 edited images",
  },
  {
    name: "The Premium",
    price: "$1,800",
    desc: "4-hour session · 3 locations · 50 edited images",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroSlideshow />

      {/* ── About Teaser ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/mis/philo.jpg"
                  alt="Sandra Patrice — portrait photographer at Photo By Sandra studio"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.2em] uppercase text-gold">About the Studio</p>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.1] tracking-[-0.02em]">
                  Photography is an act of faith.
                </h2>
                <p className="text-muted leading-[1.8]">
                  Photo By Sandra is a small, passionate photography studio in Columbia, MD.
                  We believe every photograph should tell a story — yours, told beautifully.
                </p>
                <p className="text-muted leading-[1.8]">
                  We work with real people on real moments — portraits, weddings, maternity,
                  events, and commercial projects, big or small.
                </p>
                <Link
                  href="/about"
                  className="self-start text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
                >
                  Our Story →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Portfolio Teaser ── */}
      <section className="py-24 md:py-32 bg-parchment-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Recent Work</p>
                <h2 className="font-display text-4xl md:text-5xl text-ink tracking-[-0.02em]">
                  Selected Portfolio
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="self-start text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
              >
                View Full Gallery →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {portfolioTeaser.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <Link
                  href="/portfolio"
                  className="group block relative aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-cover ${item.pos} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Teaser ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Investment</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink tracking-[-0.02em]">
                Simple, Transparent Pricing
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 120}>
                <div
                  className={`p-8 flex flex-col gap-4 ${
                    i === 1 ? "bg-ink text-parchment" : "bg-parchment-dark text-ink"
                  }`}
                >
                  <p className={`text-xs tracking-[0.15em] uppercase ${i === 1 ? "text-gold-light" : "text-gold"}`}>
                    {pkg.name}
                  </p>
                  <p className={`font-display text-4xl tracking-[-0.02em] ${i === 1 ? "text-parchment" : "text-ink"}`}>
                    {pkg.price}
                  </p>
                  <p className={`text-sm leading-relaxed ${i === 1 ? "text-parchment/60" : "text-muted"}`}>
                    {pkg.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="inline-flex text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
              >
                See Full Pricing Details →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Book CTA ── */}
      <section className="py-24 md:py-36 bg-ink-soft">
        <Reveal direction="none">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Ready?</p>
            <h2 className="font-display text-4xl md:text-6xl text-parchment leading-[1.1] tracking-[-0.02em] mb-6">
              Let&apos;s Create Something<br />
              <span className="italic text-gold-light">Extraordinary</span>
            </h2>
            <p className="text-parchment/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Reserve your date today and let&apos;s begin building your story.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center bg-gold text-ink px-10 py-4 text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:bg-gold-light active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book a Session
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
