"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

const hiddenFor = {
  up:    { opacity: 0, transform: "translateY(2rem)" },
  left:  { opacity: 0, transform: "translateX(-2rem)" },
  right: { opacity: 0, transform: "translateX(2rem)" },
  none:  { opacity: 0 },
} satisfies Record<string, React.CSSProperties>;

export default function Reveal({ children, className = "", delay = 0, direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const transition: React.CSSProperties = {
    transition: ready
      ? `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`
      : "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={ready && !inView ? { ...transition, ...hiddenFor[direction] } : transition}
    >
      {children}
    </div>
  );
}
