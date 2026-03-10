import type { Metadata } from "next";
import { Geist, Geist_Mono, Racing_Sans_One } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import UnifiedBackground from "@/components/UnifiedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const racingSans = Racing_Sans_One({
  weight: "400",
  variable: "--font-racing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developer portfolio — crafting digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${racingSans.variable} antialiased`}>
        <UnifiedBackground />
        <ScrollToTop />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
