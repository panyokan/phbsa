import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Photo By Sandra collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact us or book a session through our website, we collect information you provide directly: your name, email address, phone number, and any details about your project or enquiry.",
      "We also collect basic usage data through cookies — pages visited, time on site, and browser type — to understand how our site is used and improve your experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your contact information solely to respond to your enquiry, confirm and manage your booking, deliver your final images, and send you relevant updates about your project.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes. Ever.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our site uses essential cookies to ensure the website functions correctly, and optional analytics cookies to understand visitor behaviour in aggregate. No personally identifiable information is stored in cookies.",
      "You can accept or decline non-essential cookies via the banner when you first visit. You can also clear cookies at any time through your browser settings.",
    ],
  },
  {
    title: "Data Storage & Security",
    body: [
      "Your data is stored securely and only accessible to Photo By Sandra. We use industry-standard encryption for all data in transit and at rest.",
      "We retain your contact and booking information for up to 3 years after your last interaction with us, after which it is securely deleted.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to access, correct, or delete the personal information we hold about you at any time. You may also request that we stop using your data for any purpose.",
      "To exercise any of these rights, email us at info@photobysandra.com. We will respond within 14 days.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "We use Formspark to process contact form submissions, and Cal.com to manage session bookings. Both services have their own privacy policies and handle your data in accordance with GDPR.",
      // "Our website is hosted on Vercel. Basic server logs (IP address, request time) may be retained by Vercel for up to 30 days for security purposes.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our site after changes constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-28 bg-ink-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 [animation:fade-up_0.5s_ease-out_0.1s_both]">Legal</p>
          <h1 className="font-display text-5xl md:text-7xl text-parchment leading-[1.05] tracking-[-0.02em] max-w-2xl [animation:fade-up_0.65s_ease-out_0.25s_both]">
            Privacy Policy
          </h1>
          <p className="text-parchment/40 text-sm mt-6 [animation:fade-up_0.65s_ease-out_0.35s_both]">
            Effective date: April 17, 2026
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-24 md:py-32 bg-parchment">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <p className="text-muted leading-[1.85] mb-16">
              Photo By Sandra (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy.
              This policy explains what information we collect, how we use it, and your rights regarding your personal data.
            </p>
          </Reveal>

          <div className="space-y-14">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-display text-lg text-ink leading-snug">{s.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-muted leading-[1.85] text-sm">{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-16 pt-10 border-t border-parchment-mid">
              <p className="text-muted text-sm leading-relaxed">
                Questions about this policy?{" "}
                <a
                  href="mailto:info@photobysandra.com"
                  className="text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200"
                >
                  info@photobysandra.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
