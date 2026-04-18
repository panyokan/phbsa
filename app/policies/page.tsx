import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Studio Policies",
  description:
    "Booking, payment, rescheduling, delivery, and copyright policies for Photo By Sandra Patrice.",
};

const sections = [
  {
    number: "01",
    title: "Booking & Payments",
    items: [
      {
        label: "Retainer",
        body: "A non-refundable retainer fee of 25% is required at the time of booking to secure your date and time. Wedding and full-day coverage requires a 50% retainer.",
      },
      {
        label: "Final Payment",
        body: "The remaining balance is due on or before the day of your session.",
      },
      {
        label: "Late Arrival",
        body: "Your session starts at the scheduled time. Time lost to late arrival is deducted from your session. If you are more than 20 minutes late, the session may be canceled at our discretion and your retainer forfeited.",
      },
    ],
  },
  {
    number: "02",
    title: "Rescheduling & Cancellations",
    items: [
      {
        label: "Client Rescheduling",
        body: "You may reschedule your session once with at least 48 hours' notice at no extra cost. Reschedules made with less than 48 hours' notice may incur a $50 fee.",
      },
      {
        label: "Weather",
        body: "For outdoor shoots, if weather is unsuitable — heavy rain, storms, or unsafe conditions — we will reschedule at the first available mutual date at no extra charge.",
      },
      {
        label: "Cancellations",
        body: "If you cancel and do not wish to reschedule, the retainer fee remains non-refundable. If we must cancel due to illness or emergency, you will receive a full refund and priority rebooking.",
      },
    ],
  },
  {
    number: "03",
    title: "Delivery & Editing",
    items: [
      {
        label: "Timeline",
        body: "Your fully edited digital gallery will be delivered within 15–20 business days of your session. Peak seasons may extend this slightly — you'll be notified in advance.",
      },
      {
        label: "Editing Style",
        body: "All photos include standard color correction and lighting adjustments in my signature style. Each image is individually reviewed and refined.",
      },
      {
        label: "Enhanced Edits",
        body: "Premium Package clients receive minor blemish removal and advanced skin retouching. Requests for heavy body manipulation or major background changes are not included and may incur an additional fee.",
      },
      {
        label: "RAW Files",
        body: "Unedited RAW files are not provided. This ensures the quality and integrity of the work delivered under my name.",
      },
    ],
  },
  {
    number: "04",
    title: "Usage & Copyright",
    items: [
      {
        label: "Ownership",
        body: "Sandra Patrice retains the legal copyright to all images created during your session.",
      },
      {
        label: "Personal Use",
        body: "All clients receive a license to print and share images for personal, non-commercial use.",
      },
      {
        label: "Commercial Use",
        body: "Only the Classic and Premium packages include a license for business or promotional use. If you require commercial licensing on another package, please contact us.",
      },
      {
        label: "Social Media",
        body: "When sharing on social media, a credit to @PhotoBySandraPatrice is always appreciated — though never required.",
      },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 [animation:fade-up_0.5s_ease-out_0.1s_both]">
            Studio Policies
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl [animation:fade-up_0.65s_ease-out_0.25s_both]">
            Clear terms,<br />
            <span className="italic">no surprises.</span>
          </h1>
          <p className="mt-6 text-parchment/50 text-sm max-w-md leading-relaxed [animation:fade-up_0.75s_ease-out_0.4s_both]">
            These policies exist to protect both you and us — so we can focus on making great work together.
          </p>
        </div>
      </div>

      {/* ── Policies ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">

          {/* Jump links */}
          <Reveal>
            <nav className="grid grid-cols-2 md:grid-cols-4 mb-20 border border-parchment-mid divide-x divide-y md:divide-y-0 divide-parchment-mid">
              {sections.map((s) => (
                <a
                  key={s.number}
                  href={`#section-${s.number}`}
                  className="group flex flex-col gap-2 px-6 py-5 hover:bg-parchment-dark transition-colors duration-200 focus-visible:outline-none focus-visible:bg-parchment-dark"
                >
                  <span className="font-display text-2xl text-gold/30 leading-none tracking-[-0.02em] group-hover:text-gold/60 transition-colors duration-200">
                    {s.number}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-muted group-hover:text-gold transition-colors duration-200">
                    {s.title}
                  </span>
                </a>
              ))}
            </nav>
          </Reveal>

          <div className="space-y-24">
            {sections.map((section, si) => (
              <Reveal key={section.number} delay={si * 60}>
                <div
                  id={`section-${section.number}`}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-16 scroll-mt-32"
                >
                  {/* Number + title */}
                  <div className="md:pt-1">
                    <p className="font-display text-5xl text-gold/20 leading-none tracking-[-0.03em] mb-2">
                      {section.number}
                    </p>
                    <p className="text-xs tracking-[0.18em] uppercase text-gold">
                      {section.title}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="space-y-8">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="group">
                        <div className="flex items-start gap-4">
                          <div className="mt-[3px] h-px w-5 bg-gold/40 shrink-0 group-hover:w-8 group-hover:bg-gold transition-all duration-300" />
                          <div>
                            <p className="text-xs tracking-[0.12em] uppercase text-ink font-medium mb-2">
                              {item.label}
                            </p>
                            <p className="text-muted text-sm leading-[1.85]">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {si < sections.length - 1 && (
                  <div className="mt-24 h-px bg-parchment-mid" />
                )}
              </Reveal>
            ))}
          </div>

          {/* Footer note */}
          <Reveal delay={200}>
            <div className="mt-24 pt-10 border-t border-parchment-mid flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-xs text-subtle leading-relaxed max-w-sm">
                By booking a session you confirm that you have read and agree to these studio policies.
              </p>
              <Link
                href="/book"
                className="shrink-0 text-sm tracking-[0.08em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 focus-visible:outline-none"
              >
                Book a Session →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
