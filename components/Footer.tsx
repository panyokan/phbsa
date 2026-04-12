import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a Session" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <p className="font-display text-2xl tracking-[0.12em] text-gold-light uppercase mb-4">
              Lumière
            </p>
            <p className="text-sm leading-relaxed text-parchment/50">
              Award-winning photography studio<br />
              capturing life&apos;s most meaningful moments.
            </p>
          </div>

          {/* Navigation */}
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

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-parchment/30 mb-5">
              Get in Touch
            </p>
            <ul className="space-y-2.5 text-sm text-parchment/50">
              <li>hello@lumierestudio.com</li>
              <li>+1 (212) 555-0147</li>
              <li className="pt-1">New York, NY 10001</li>
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
        </div>

        <div className="mt-12 pt-8 border-t border-parchment/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-parchment/30">
            © {new Date().getFullYear()} Lumière Studio. All rights reserved.
          </p>
          <p className="text-xs text-parchment/30">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
