import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Puff Tobacco | Smoke Shop in Kalamazoo, MI",
  description:
    "Best Puff Tobacco & Exotic Snacks — Kalamazoo's one-stop shop for vapes, e-liquids, glass, hookah, cigars, premium tobacco, RAW, exotic snacks & drinks. Lowest prices in town. 21+",
  keywords: [
    "Best Puff Tobacco",
    "smoke shop Kalamazoo",
    "vape shop Kalamazoo",
    "tobacco shop Kalamazoo",
    "hookah Kalamazoo",
    "cigars Kalamazoo",
    "exotic snacks Kalamazoo",
  ],
  openGraph: {
    title: "Best Puff Tobacco | Kalamazoo, MI",
    description:
      "Vapes, e-liquids, glass, hookah, cigars, tobacco, RAW, exotic snacks & drinks. 635 N 9th St Suite E, Kalamazoo, MI.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ink-950 text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
