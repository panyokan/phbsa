"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "photobysandra" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-bg": "#F8F4EF",
            "cal-bg-muted": "#EDE8E2",
            "cal-bg-subtle": "#E8E2DA",
            "cal-bg-emphasis": "#D8CFBF",
            "cal-bg-inverted": "#2C241C",
            "cal-border": "#D6CFC8",
            "cal-border-subtle": "#E0D9D0",
            "cal-border-emphasis": "#B8873A",
            "cal-border-booker": "#D6CFC8",
            "cal-text": "#1C1813",
            "cal-text-muted": "#8A7D72",
            "cal-text-subtle": "#A8998E",
            "cal-text-inverted": "#F8F4EF",
            "cal-text-emphasis": "#141210",
            "cal-brand": "#B8873A",
            "cal-brand-emphasis": "#9A6E2A",
            "cal-brand-text": "#F8F4EF",
          },
          dark: {
            "cal-bg": "#F8F4EF",
            "cal-bg-muted": "#EDE8E2",
            "cal-bg-subtle": "#E8E2DA",
            "cal-bg-emphasis": "#D8CFBF",
            "cal-bg-inverted": "#2C241C",
            "cal-border": "#D6CFC8",
            "cal-border-subtle": "#E0D9D0",
            "cal-border-emphasis": "#B8873A",
            "cal-border-booker": "#D6CFC8",
            "cal-text": "#1C1813",
            "cal-text-muted": "#8A7D72",
            "cal-text-subtle": "#A8998E",
            "cal-text-inverted": "#F8F4EF",
            "cal-text-emphasis": "#141210",
            "cal-brand": "#B8873A",
            "cal-brand-emphasis": "#9A6E2A",
            "cal-brand-text": "#F8F4EF",
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace="photobysandra"
      calLink="photobysandra"
      style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
