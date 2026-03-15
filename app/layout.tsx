import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarfieldBackground from "@/components/layout/StarfieldBackground";
import MotionProvider from "@/components/providers/MotionProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.midnightdreams.online'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dreamscape - A Journal of Dreams",
    template: "%s | Dreamscape",
  },
  description: "Explore a curated journal of vivid dreams, lucid adventures, and surreal nightscapes. Dive into the subconscious world of Dreamscape.",
  keywords: [
    "dream journal",
    "lucid dreaming",
    "dream diary",
    "dream analysis",
    "surreal dreams",
    "dream stories",
    "dreamscape",
    "sleep dreams",
    "nightmare journal",
    "dream archive",
  ],
  authors: [{ name: "Dreamscape" }],
  creator: "Dreamscape",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Dreamscape",
    title: "Dreamscape - A Journal of Dreams",
    description: "Explore a curated journal of vivid dreams, lucid adventures, and surreal nightscapes.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dreamscape",
    creator: "@dreamscape",
    title: "Dreamscape - A Journal of Dreams",
    description: "Explore a curated journal of vivid dreams, lucid adventures, and surreal nightscapes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <StarfieldBackground />
        <Navbar />
        <MotionProvider>
          <main className="relative z-10 pt-16">
            {children}
          </main>
        </MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
