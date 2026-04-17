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
            "cal-border": "#D6CFC8",
            "cal-border-emphasis": "#B8873A",
            "cal-text": "#1C1813",
            "cal-text-muted": "#8A7D72",
            "cal-brand": "#B8873A",
            "cal-brand-emphasis": "#9A6E2A",
            "cal-brand-text": "#141210",
          },
          dark: {
            "cal-bg": "#1C1813",
            "cal-bg-muted": "#2A2118",
            "cal-border": "#3A302A",
            "cal-border-emphasis": "#B8873A",
            "cal-text": "#F8F4EF",
            "cal-text-muted": "#8A7D72",
            "cal-brand": "#B8873A",
            "cal-brand-emphasis": "#9A6E2A",
            "cal-brand-text": "#141210",
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
