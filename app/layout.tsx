import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import NavBar from "@/components/NavBar";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";
import StructuredData from "./_components/StructuredData";

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
  keywords:
    "Indonesian coffee, NusaBean, premium coffee, coffee beans, arabica coffee, robusta coffee",
  openGraph: {
    title: "Kayana Kreatif Nusantara - Sustainable Export Solutions",
    description: "Connecting eco-conscious producers with global markets",
    url: "https://kayananusantara.com",
    siteName: "NusaBean",
    images: [
      {
        url: "https://kayananusantara.com/header.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayana Kreatif Nusantara - Sustainable Export Solutions",
    description:
      "Connecting eco-conscious producers with global markets",
    images: ["https://kayananusantara.com/header.jpg"],
  },
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
      <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <StructuredData/>
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
