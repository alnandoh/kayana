import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kayana Kreatif Nusantara - Sustainable Export Solutions",
  description: "Connecting eco-conscious producers with global markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ProgressBar />
        <NavBar />
        {children}
        <Footer />
        <ScrollToTop />
        <CTA />
      </body>
    </html>
  );
}
