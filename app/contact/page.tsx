import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact | Photo By Sandra Photography Studio",
  description:
    "Get in touch with Photo By Sandra. Reach Sandra Patrice at info@photobysandra.com or +1 202 527 4695 for portrait, wedding, and commercial photography enquiries.",
  alternates: { canonical: "https://photobysandra.com/contact" },
  openGraph: {
    url: "https://photobysandra.com/contact",
    title: "Contact | Photo By Sandra Photography Studio",
    description:
      "Reach out to Photo By Sandra for portrait, wedding, and commercial photography enquiries. Columbia, MD.",
  },
};

const info = [
  { label: "Email",          value: "info@photobysandra.com"            },
  { label: "Phone",          value: "+1 202 527 4695"                   },
  // { label: "Studio Address", value: "10300 Little Patuxent Pkwy, Columbia, MD 21044, United States" },
  // { label: "Office Hours",   value: "Mon–Fri, 9am–6pm ET"               },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 [animation:fade-up_0.5s_ease-out_0.1s_both]">Let&apos;s Talk</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl [animation:fade-up_0.65s_ease-out_0.25s_both]">
            Every great project<br />
            <span className="italic">starts with a hello.</span>
          </h1>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 md:gap-24">

            {/* Form */}
            <Reveal direction="left">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-8">Send a Message</p>
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal direction="right" delay={150}>
              <div className="space-y-10">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold mb-8">Contact Info</p>
                  <div className="space-y-6">
                    {info.map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xs tracking-[0.1em] uppercase text-subtle mb-1">{label}</p>
                        <p className="text-ink text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-parchment-mid" />

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Follow Our Work</p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Instagram @photobysandra",
                      "Pinterest /photobysandra",
                      "Behance /photobysandra",
                    ].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="text-sm text-muted hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:text-gold"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-parchment-mid" />

                <div className="bg-parchment-dark p-6">
                  <p className="font-display text-ink text-xl mb-2">Prefer to book directly?</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    Use our booking system to schedule a discovery call or reserve your session date.
                  </p>
                  <Link
                    href="/book"
                    className="text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
                  >
                    Book a Session →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
