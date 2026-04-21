import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://photobysandra.com"),
  title: {
    default: "Photo By Sandra | Portrait & Wedding Photographer in Columbia, MD",
    template: "%s | Photo By Sandra",
  },
  description:
    "Sandra Patrice is a portrait, wedding, and commercial photographer based in Columbia, MD. Genuine moments, timeless edits, and a relaxed approach — from $450.",
  keywords: [
    "portrait photographer Columbia MD",
    "wedding photographer Maryland",
    "professional photography studio",
    "family portrait photographer",
    "maternity photographer",
    "headshot photographer Columbia Maryland",
    "commercial photographer MD",
    "Photo By Sandra",
    "Sandra Patrice photographer",
  ],
  authors: [{ name: "Sandra Patrice", url: "https://photobysandra.com/about" }],
  creator: "Sandra Patrice",
  publisher: "Photo By Sandra",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Photo By Sandra",
    title: "Photo By Sandra | Portrait & Wedding Photographer in Columbia, MD",
    description:
      "Genuine portraits, weddings, and commercial photography by Sandra Patrice. Based in Columbia, MD — serving the greater DC/Maryland area.",
    images: [
      {
        url: "/images/hero/433A5002.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait photography by Sandra Patrice — Photo By Sandra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo By Sandra | Portrait & Wedding Photographer",
    description:
      "Genuine portraits, weddings, and commercial photography by Sandra Patrice. Columbia, MD.",
    images: ["/images/hero/433A5002.jpg"],
  },
  alternates: {
    canonical: "https://photobysandra.com",
  },
  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
  },
  category: "photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-parchment text-body font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
