"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled || menuOpen ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between md:h-20">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-xl tracking-[0.12em] text-gold-light uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
            >
              Photo By Sandra
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs tracking-[0.1em] uppercase transition-colors duration-200 ${
                    isActive(href)
                      ? "text-gold-light [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                      : "text-parchment [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Book CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/book"
                className="hidden md:inline-flex items-center border border-gold px-5 py-2 text-xs tracking-[0.1em] uppercase text-gold transition-colors duration-200 hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95"
              >
                Book a Session
              </Link>

              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((v) => !v)}
                className="flex md:hidden flex-col justify-center gap-[5px] p-2"
              >
                <span className={`block h-px w-6 bg-parchment/80 origin-center transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`block h-px w-6 bg-parchment/80 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-6 bg-parchment/80 origin-center transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-3xl transition-colors duration-200 ${
                isActive(href)
                  ? "text-gold-light italic"
                  : "text-parchment/80 hover:text-parchment"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-gold px-8 py-3 text-sm tracking-[0.1em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-200 active:scale-95 focus-visible:outline-none"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </>
  );
}
