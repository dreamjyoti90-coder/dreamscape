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

export const metadata: Metadata = {
  title: "Dreamscape - A Journal of Dreams",
  description: "A journal of dreams beneath the stars",
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
