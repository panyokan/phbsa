import type { Metadata } from "next";
import Link from "next/link";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Schedule your portrait, wedding, or commercial photography session with Photo By Sandra.",
};

export default function BookPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Reserve Your Date</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl">
            Let&apos;s put a date<br />
            <span className="italic">in the diary.</span>
          </h1>
        </div>
      </div>

      {/* ── Booking ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">

          {/* Meta row */}
          <div className="flex flex-wrap items-start justify-between gap-8 mb-12 px-4 py-6 md:px-0 md:py-0">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">How it works</p>
              <ol className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-2">
                {[
                  "Choose a session type.",
                  "Pick a date.",
                  "Complete a questionnaire.",
                  "We confirm within 24 hrs.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-2 text-sm text-body">
                    <span className="font-display text-gold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <Link
              href="/contact"
              className="text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none shrink-0"
            >
              Prefer to email →
            </Link>
          </div>

          {/* Embed */}
          <div className="min-h-[700px] md:min-h-[920px] rounded-sm border border-parchment-mid">
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* ── Reassurance ── */}
      <section className="py-14 bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              "Free reschedule within 48 hours",
              "25% deposit to secure your date",
              "Full refund if we cancel",
              "Response within 24 hours",
            ].map((item) => (
              <p key={item} className="text-xs tracking-[0.08em] uppercase text-parchment/80">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
