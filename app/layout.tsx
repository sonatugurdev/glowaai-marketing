import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Glowa AI — AI pre-visit intelligence for independent medspas",
  description:
    "Glowa AI sits between patient intake and the consultation. Structured skin analysis reports arrive before the visit, so practitioners walk in with a plan instead of a blank page.",
  metadataBase: new URL("https://glowaai.com"),
  openGraph: {
    title: "Glowa AI — AI pre-visit intelligence for independent medspas",
    description:
      "Structured skin analysis reports arrive before the visit. Practitioners walk in with a plan.",
    url: "https://glowaai.com",
    siteName: "Glowa AI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Glowa AI",
    description: "AI pre-visit intelligence for independent medspas."
  }
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
