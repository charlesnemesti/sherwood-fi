import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sherwood Fi — Onchain Real-World Asset Markets",
  description:
    "Tokenized tax liens and tax deeds on Robinhood Chain. Defined terms, real estate collateral, and 24/7 marketplace liquidity settled in USDC.",
  openGraph: {
    title: "Sherwood Fi",
    description: "Own the lien markets of Robinhood Chain",
    siteName: "Sherwood Fi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
