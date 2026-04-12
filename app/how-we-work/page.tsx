import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Our process — from the first inquiry through delivery of your final images.",
};

const steps = [
  {
    number: "01",
    title: "Initial Enquiry",
    duration: "Day 1",
    desc: "You reach out via our contact form or email. We respond within 24 hours with a brief questionnaire to understand your vision, timeline, and budget.",
  },
  {
    number: "02",
    title: "Discovery Call",
    duration: "Days 2–5",
    desc: "We schedule a 30-minute call to get to know each other. This isn't a sales call — it's a conversation to see if there's genuine creative alignment.",
  },
  {
    number: "03",
    title: "Proposal & Booking",
    duration: "Within 1 week",
    desc: "We send a detailed proposal outlining the session plan, deliverables, timeline, and investment. Once approved, a 25% deposit secures your date.",
  },
  {
    number: "04",
    title: "Session Day",
    duration: "Your chosen date",
    desc: "We arrive prepared. Whether that's a location scout the day before or a thorough brief, we don't leave anything to chance. The session itself is unhurried — we give you time to relax into it.",
  },
  {
    number: "05",
    title: "Post-Processing",
    duration: "2–3 weeks",
    desc: "Every selected image receives our full retouching treatment — colour grading, tonal correction, skin retouching where applicable. We aim for a consistent, timeless aesthetic.",
  },
  {
    number: "06",
    title: "Delivery",
    duration: "Within 3 weeks",
    desc: "Images are delivered via a private gallery with full download access. Print-ready files, web-optimised files, and a printed preview booklet are all included.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend 4–6 weeks for portrait sessions, and 6–12 months for weddings. We do occasionally have last-minute availability — enquire to check.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes. We travel for destination weddings and commercial work. Travel costs are billed at cost — usually just flights and accommodation.",
  },
  {
    q: "What if the weather is bad on shoot day?",
    a: "We monitor the forecast closely and communicate early. For outdoor shoots, we have a free reschedule policy for severe weather.",
  },
  {
    q: "Can I request specific editing styles?",
    a: "Absolutely. We have a thorough pre-session brief where you can share reference images and colour preferences. Our style is adaptable within our aesthetic range.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Process</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl">
            Thoughtful work<br />
            <span className="italic">takes time.</span>
          </h1>
        </div>
      </div>

      {/* ── Steps ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-12 ${
                i < steps.length - 1 ? "border-b border-parchment-mid" : ""
              }`}
            >
              <div className="flex md:flex-col gap-4 md:gap-2">
                <p className="font-display text-3xl text-gold-pale">{step.number}</p>
                <p className="text-xs tracking-[0.1em] uppercase text-subtle self-end md:self-auto">
                  {step.duration}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-2xl md:text-3xl text-ink">{step.title}</h2>
                <p className="text-muted leading-[1.8] max-w-xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 bg-parchment-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">FAQs</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-[-0.02em] mb-16">
            Common Questions
          </h2>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                <h3 className="font-display text-xl text-ink">{faq.q}</h3>
                <p className="text-muted leading-[1.8] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-ink text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl md:text-5xl text-parchment tracking-[-0.02em] mb-8">
            Ready to get started?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex bg-gold text-ink px-8 py-3.5 text-sm tracking-[0.08em] uppercase font-medium hover:bg-gold-light transition-colors duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="inline-flex border border-parchment/30 text-parchment/80 px-8 py-3.5 text-sm tracking-[0.08em] uppercase hover:border-parchment hover:text-parchment transition-colors duration-200 active:scale-95 focus-visible:outline-none"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
