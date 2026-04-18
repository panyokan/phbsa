"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-3 md:px-10 bg-ink/95 backdrop-blur-md border-t border-parchment/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 animate-[fade-up_0.4s_ease-out_both]">
      <p className="text-parchment/70 text-sm leading-relaxed flex-1">
        We use cookies to improve your experience on our site.{" "}
        <a href="/privacy" className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors duration-200">
          Learn more
        </a>
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={decline}
          className="text-xs tracking-[0.08em] uppercase text-parchment/50 hover:text-parchment transition-colors duration-200 focus-visible:outline-none focus-visible:text-parchment"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="bg-gold text-ink px-5 py-2 text-xs tracking-[0.08em] uppercase font-medium hover:bg-gold-light transition-colors duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
