import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Russo Brothers Inc | Wilmington's Trusted Plumber | Professional Plumbing Services",
  description:
    "Russo Brothers Inc is Wilmington, DE's most trusted plumbing company. Family owned, licensed & insured. Professional service, fair pricing, and quick response. Call (302) 762-3307.",
  keywords: "plumber Wilmington DE, plumbing repair, drain cleaning, water heater, Russo Brothers, professional plumbing",
  openGraph: {
    title: "Russo Brothers Inc | Wilmington Plumber",
    description: "Licensed & insured plumber in Wilmington, DE. Family owned business with professional plumbing services.",
    type: "website",
    locale: "en_US",
    siteName: "Russo Brothers Inc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
