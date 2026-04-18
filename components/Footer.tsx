import Link from "next/link";
import Reveal from "@/components/Reveal";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a Session" },
  { href: "/policies", label: "Studio Policies" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          <Reveal direction="up" delay={0}>
            <div>
              <p className="font-display text-2xl tracking-[0.12em] text-gold-light uppercase mb-4">
                Photo By Sandra
              </p>
              <p className="text-sm leading-relaxed text-parchment/50">
                A small photography shop with a big<br />
                love for capturing your moments.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-parchment/30 mb-5">
                Navigation
              </p>
              <ul className="space-y-2.5">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-parchment/50 hover:text-gold-light transition-colors duration-200 focus-visible:outline-none focus-visible:text-gold-light"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-parchment/30 mb-5">
                Get in Touch
              </p>
              <ul className="space-y-2.5 text-sm text-parchment/50">
                <li>info@photobysandra.com</li>
                <li>+1 202 527 4695</li>
                {/* <li className="pt-1">10300 Little Patuxent Pkwy, Columbia, MD 21044</li> */}
              </ul>
              <div className="flex gap-4 mt-6">
                {["Instagram", "Pinterest", "X"].map((name) => (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="text-xs tracking-[0.08em] text-parchment/40 hover:text-gold-light transition-colors duration-200 focus-visible:outline-none focus-visible:text-gold-light"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 pt-8 border-t border-parchment/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-parchment/30">
            © {new Date().getFullYear()} Photo By Sandra. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-parchment/30">
            <Link href="/privacy" className="hover:text-parchment/60 transition-colors duration-200">Privacy Policy</Link>
            <span>·</span>
            <Link href="/policies" className="hover:text-parchment/60 transition-colors duration-200">Studio Policies</Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-parchment/20">
          Built by{" "}
          <a
            href="https://algonixtechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-parchment/50 transition-colors duration-200"
          >
            Algonix Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
