import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Schedule your portrait, wedding, or commercial photography session with Lumière Studio.",
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
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-14 md:gap-20 items-start">

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">How it works</p>
                <ol className="space-y-4">
                  {[
                    "Choose a session type below.",
                    "Pick a date that works for you.",
                    "Complete a brief questionnaire.",
                    "We'll confirm within 24 hours.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="font-display text-gold/50 text-base shrink-0 leading-none mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="h-px bg-parchment-mid" />

              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Session Types</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li>· Portrait Session</li>
                  <li>· Couples Session</li>
                  <li>· Family Session</li>
                  <li>· Wedding Consultation</li>
                  <li>· Commercial Enquiry</li>
                </ul>
              </div>

              <div className="h-px bg-parchment-mid" />

              <p className="text-xs text-subtle leading-relaxed">
                Sessions book out 4–6 weeks in advance. A 25% deposit is required to confirm your booking.
              </p>

              <Link
                href="/contact"
                className="block text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
              >
                Prefer to email instead →
              </Link>
            </div>

            {/* Cal.com embed placeholder */}
            <div className="min-h-[600px] bg-parchment-dark border border-parchment-mid flex flex-col items-center justify-center gap-6">
              {/*
                Replace this placeholder with your Cal.com embed:

                Install: npm install @calcom/embed-react
                Import:  import Cal from "@calcom/embed-react";
                Usage:   <Cal calLink="your-username/session" />
              */}
              <div className="text-center px-8">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 rounded-full mb-6">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="font-display text-2xl text-ink mb-2">Cal.com Embed</p>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  Booking calendar will appear here once connected. Replace this placeholder
                  with your Cal.com embed code.
                </p>
                <div className="mt-6 inline-block bg-parchment-mid/50 rounded px-3 py-1.5">
                  <code className="text-xs text-muted font-mono">
                    {'<Cal calLink="username/session" />'}
                  </code>
                </div>
              </div>
            </div>
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
              <p key={item} className="text-xs tracking-[0.08em] uppercase text-parchment/40">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
