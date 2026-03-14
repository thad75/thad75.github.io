import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "Tharsan Senthivel, PhD - Lead AI",
  description: "AI Executive driving enterprise transformation. Lead AI at PMU, PhD in AI, published researcher. Strategic leadership, AI governance, and measurable business impact.",
  keywords: ["Tharsan Senthivel", "Lead AI", "AI Strategy", "Executive Leadership", "AI Transformation", "DETR", "Machine Learning"],
  authors: [{ name: "Tharsan Senthivel" }],
  openGraph: {
    title: "Tharsan Senthivel, PhD - Lead AI",
    description: "AI Executive driving enterprise transformation. Lead AI at PMU, PhD in AI, published researcher. Strategic leadership, AI governance, and measurable business impact.",
    type: "website",
    url: "https://thad75.github.io",
    siteName: "Tharsan Senthivel",
  },
  twitter: {
    card: "summary",
    title: "Tharsan Senthivel, PhD - Lead AI",
    description: "AI Executive driving enterprise transformation. Lead AI at PMU, PhD in AI, published researcher.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (theme === 'dark' || (!theme && systemDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.add('light');
              }
            })();
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
