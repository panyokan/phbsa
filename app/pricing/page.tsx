import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photography Pricing & Packages | Photo By Sandra",
  description:
    "Transparent photography pricing for portraits, weddings, maternity, and commercial sessions. Packages from $450 — studio rental included. No hidden fees. Columbia, MD.",
  alternates: { canonical: "https://photobysandra.com/pricing" },
  openGraph: {
    url: "https://photobysandra.com/pricing",
    title: "Photography Pricing & Packages | Photo By Sandra",
    description:
      "Portrait and wedding photography packages from $450. Studio rental included, no hidden fees. Columbia, MD.",
  },
};

const packages = [
  {
    name: "The Essential",
    price: "$450",
    tagline: "Ideal for a focused studio portrait or a beautiful outdoor session",
    studioNote: "Includes up to $100 studio rental fee",
    includes: [
      "1-hour session",
      "1 location — studio or outdoor",
      "15 fully edited high-resolution images",
      "Private online gallery",
      "Personal use license",
      "15–20 day delivery",
    ],
    extras: [],
    popular: false,
  },
  {
    name: "The Classic",
    price: "$850",
    tagline: "Perfect for family stories or maternity sessions",
    studioNote: "Includes up to $200 studio rental fee",
    includes: [
      "2-hour session",
      "Up to 2 locations — studio & outdoor available",
      "30 fully edited high-resolution images",
      "Private online gallery",
      "Personal use license",
      "15–20 day delivery",
    ],
    extras: ["$50 Print Credit"],
    popular: true,
  },
  {
    name: "The Premium",
    price: "$1,800",
    tagline: "The full professional experience for branding or events",
    studioNote: "Includes up to $400 studio rental fee",
    includes: [
      "4-hour session",
      "Up to 3 locations — studio & outdoor available",
      "50 fully edited images",
      "Private online gallery",
      "Personal + commercial use license",
      "10–15 day delivery",
    ],
    extras: ["USB Backup Delivery"],
    popular: false,
  },
];

const addOns = [
  { name: "Extra Hour",                        price: "$220"      },
  { name: "Printed Photo Book (20 pages)",     price: "$350"      },
  { name: "Rush Delivery (48 hrs)",            price: "$300"      },
  { name: "Second Photographer",               price: "$500/day"  },
  { name: "Hair & Make-up Coordination",       price: "$200"      },
  { name: "Location Scouting",                 price: "$150"      },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Photography",
  provider: {
    "@type": "LocalBusiness",
    name: "Photo By Sandra",
    url: "https://photobysandra.com",
  },
  areaServed: {
    "@type": "State",
    name: "Maryland",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Packages",
    itemListElement: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      price: pkg.price.replace("$", "").replace(",", ""),
      priceCurrency: "USD",
      description: pkg.tagline,
    })),
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 [animation:fade-up_0.5s_ease-out_0.1s_both]">Investment</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl [animation:fade-up_0.65s_ease-out_0.25s_both]">
            Honest pricing,<br />
            <span className="italic">zero surprises.</span>
          </h1>
        </div>
      </div>

      {/* ── Packages ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-start gap-4 mb-12 pb-10 border-b border-parchment-mid">
              <div className="mt-1 h-4 w-px bg-gold shrink-0" />
              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                Pricing for all packages is all-inclusive — your professional studio rental is already covered.{" "}
                <span className="text-ink">No hidden fees, just your beautiful photos.</span>
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 120}>
                <div
                  className={`relative flex flex-col p-8 md:p-10 h-full ${
                    pkg.popular ? "bg-ink text-parchment" : "bg-parchment-dark text-ink"
                  }`}
                >
                  {pkg.popular && (
                    <p className="absolute top-0 right-8 -translate-y-1/2 bg-gold text-ink text-xs tracking-[0.15em] uppercase px-3 py-1">
                      Most Popular
                    </p>
                  )}
                  <p className={`text-xs tracking-[0.15em] uppercase mb-2 ${pkg.popular ? "text-gold-light" : "text-gold"}`}>
                    {pkg.name}
                  </p>
                  <p className={`font-display text-5xl tracking-[-0.02em] mb-2 ${pkg.popular ? "text-parchment" : "text-ink"}`}>
                    {pkg.price}
                  </p>
                  <p className={`text-sm mb-1 ${pkg.popular ? "text-parchment/50" : "text-muted"}`}>
                    {pkg.tagline}
                  </p>
                  <p className={`text-xs mb-8 ${pkg.popular ? "text-gold-light/70" : "text-gold/70"}`}>
                    {pkg.studioNote}
                  </p>
                  <div className={`h-px mb-8 ${pkg.popular ? "bg-parchment/10" : "bg-parchment-mid"}`} />
                  <ul className="space-y-3 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className={`mt-1.5 block h-1 w-1 shrink-0 rounded-full ${pkg.popular ? "bg-gold-light" : "bg-gold"}`} />
                        <span className={pkg.popular ? "text-parchment/70" : "text-muted"}>
                          {item}
                        </span>
                      </li>
                    ))}
                    {pkg.extras.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className={`mt-1.5 block h-1 w-1 shrink-0 rounded-full ${pkg.popular ? "bg-gold-light" : "bg-gold"}`} />
                        <span className={`font-medium ${pkg.popular ? "text-gold-light" : "text-gold"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link
                      href="/book"
                      className={`block w-full text-center py-3.5 text-sm tracking-[0.08em] uppercase transition-colors duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        pkg.popular
                          ? "bg-gold text-ink hover:bg-gold-light focus-visible:ring-gold focus-visible:ring-offset-ink"
                          : "border border-gold text-gold hover:bg-gold hover:text-ink focus-visible:ring-gold focus-visible:ring-offset-parchment-dark"
                      }`}
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="py-24 md:py-32 bg-parchment-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Customise</p>
            <h2 className="font-display text-4xl text-ink tracking-[-0.02em] mb-14">
              Add-ons &amp; Extras
            </h2>
          </Reveal>
          <div>
            {addOns.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <div
                  className={`flex justify-between items-center py-5 ${
                    i < addOns.length - 1 ? "border-b border-parchment-mid" : ""
                  }`}
                >
                  <p className="text-ink">{item.name}</p>
                  <p className="font-display text-xl text-gold">{item.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ── */}
      <section className="py-16 md:py-20 bg-ink text-center">
        <Reveal direction="none">
          <div className="mx-auto max-w-2xl px-6">
            <p className="text-parchment/50 text-sm leading-relaxed mb-8">
              All prices are in USD. A 25% deposit is required to hold your date.
              Custom packages are available for multi-day projects and corporate clients —{" "}
              <Link
                href="/contact"
                className="text-gold hover:text-gold-light transition-colors duration-200 underline underline-offset-4"
              >
                contact us
              </Link>{" "}
              to discuss.
            </p>
            <Link
              href="/book"
              className="inline-flex bg-gold text-ink px-8 py-3.5 text-sm tracking-[0.08em] uppercase font-medium hover:bg-gold-light transition-colors duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book Your Session
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
