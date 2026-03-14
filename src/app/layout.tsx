import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tharsan Senthivel - Portfolio",
  description: "Portfolio de Tharsan Senthivel - Développeur web, projets, publications et parcours professionnel.",
  keywords: ["Tharsan Senthivel", "portfolio", "développeur", "web", "projets", "publications"],
  authors: [{ name: "Tharsan Senthivel" }],
  openGraph: {
    title: "Tharsan Senthivel - Portfolio",
    description: "Portfolio de Tharsan Senthivel - Développeur web, projets, publications et parcours professionnel.",
    type: "website",
    url: "https://thad75.github.io",
    siteName: "Tharsan Senthivel",
  },
  twitter: {
    card: "summary",
    title: "Tharsan Senthivel - Portfolio",
    description: "Portfolio de Tharsan Senthivel - Développeur web, projets, publications et parcours professionnel.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
