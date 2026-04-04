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
  title: "Tharsan Senthivel, PhD - Lead AI | AI Executive & Researcher",
  description: "Tharsan Senthivel, PhD is a Lead AI at PMU (Paris) specializing in AI transformation, enterprise AI strategy, and detection transformers. Published researcher at ICIP and ACCV, driving measurable business impact through AI leadership. Expertise in LLMs, Computer Vision, and AI governance.",
  keywords: ["Tharsan Senthivel", "Lead AI", "AI Strategy", "Executive Leadership", "AI Transformation", "DETR", "Machine Learning", "Computer Vision", "LLM", "PMU", "AI Research", "Detection Transformer", "QR-DETR", "AI Governance", "Enterprise AI"],
  authors: [{ name: "Tharsan Senthivel", url: "https://linkedin.com/in/tharsansenthivel" }],
  creator: "Tharsan Senthivel",
  publisher: "Tharsan Senthivel",
  metadataBase: new URL("https://thad75.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tharsan Senthivel, PhD - Lead AI | AI Executive & Researcher",
    description: "AI Executive driving enterprise transformation at PMU. PhD in AI, published researcher (ICIP, ACCV), strategic AI leadership, and measurable business impact.",
    type: "website",
    url: "https://thad75.github.io",
    siteName: "Tharsan Senthivel",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tharsan Senthivel, PhD - Lead AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharsan Senthivel, PhD - Lead AI | AI Executive & Researcher",
    description: "AI Executive driving enterprise transformation at PMU. PhD in AI, published researcher, strategic AI leadership.",
    creator: "@tharsansenthivel",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlecca0e100b2972929",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thad75.github.io/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tharsan Senthivel",
              "honorificPrefix": "Dr.",
              "givenName": "Tharsan",
              "familyName": "Senthivel",
              "jobTitle": "Lead AI",
              "worksFor": {
                "@type": "Organization",
                "name": "PMU",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Paris",
                    "addressCountry": "FR"
                  }
                }
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "CY Cergy Université"
              },
              "description": "AI Executive driving enterprise transformation. Lead AI at PMU, PhD in Artificial Intelligence, published researcher in Detection Transformers and Computer Vision.",
              "url": "https://thad75.github.io",
              "sameAs": [
                "https://linkedin.com/in/tharsansenthivel",
                "https://github.com/thad75",
                "https://ieeexplore.ieee.org/author/37090588419"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Detection Transformers",
                "DETR",
                "Large Language Models",
                "AI Strategy",
                "AI Governance",
                "Enterprise AI",
                "MLOps"
              ],
              "award": [
                {
                  "@type": "Award",
                  "name": "Best Student Paper Award",
                  "awarder": "Asian Conference on Computer Vision (ACCV)",
                  "year": "2024"
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://thad75.github.io/#website",
                  "url": "https://thad75.github.io/",
                  "name": "Tharsan Senthivel, PhD - Lead AI",
                  "description": "AI Executive driving enterprise transformation. Lead AI at PMU, PhD in AI, published researcher.",
                  "inLanguage": "en-US",
                  "publisher": {
                    "@id": "https://thad75.github.io/#person"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://thad75.github.io/#webpage",
                  "url": "https://thad75.github.io/",
                  "name": "Tharsan Senthivel, PhD - Lead AI",
                  "isPartOf": {
                    "@id": "https://thad75.github.io/#website"
                  },
                  "about": {
                    "@id": "https://thad75.github.io/#person"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://thad75.github.io/og-image.png"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "dateCreated": "2024",
                  "dateModified": "2026-04",
                  "mainContentOfPage": {
                    "@type": "Person",
                    "@id": "https://thad75.github.io/#person"
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ScholarlyArticle",
                  "@id": "https://thad75.github.io/#article-1",
                  "headline": "Subgroups for Detection Transformer",
                  "author": {
                    "@type": "Person",
                    "@id": "https://thad75.github.io/#person",
                    "name": "Tharsan Senthivel"
                  },
                  "datePublished": "2024-10-27",
                  "publisher": {
                    "@type": "Organization",
                    "name": "IEEE"
                  },
                  "isPartOf": {
                    "@type": "Periodical",
                    "name": "2024 IEEE International Conference on Image Processing (ICIP)"
                  },
                  "description": "Novel approach for Detection Transformers using subgroup-based object queries for improved performance.",
                  "keywords": ["Detection Transformer", "DETR", "Computer Vision", "Object Detection", "Deep Learning"],
                  "inLanguage": "en",
                  "url": "https://ieeexplore.ieee.org/abstract/document/10648285"
                },
                {
                  "@type": "ScholarlyArticle",
                  "@id": "https://thad75.github.io/#article-2",
                  "headline": "QR-DETR: Query Routing for Detection Transformer",
                  "author": {
                    "@type": "Person",
                    "@id": "https://thad75.github.io/#person",
                    "name": "Tharsan Senthivel"
                  },
                  "datePublished": "2024-12-01",
                  "publisher": {
                    "@type": "Organization",
                    "name": "CVF"
                  },
                  "isPartOf": {
                    "@type": "Periodical",
                    "name": "Proceedings of the Asian Conference on Computer Vision"
                  },
                  "description": "Query Routing mechanism for Detection Transformers to optimize object query allocation and improve detection accuracy.",
                  "keywords": ["Detection Transformer", "Query Routing", "DETR", "Computer Vision", "Object Detection", "ACCV"],
                  "award": {
                    "@type": "Award",
                    "name": "Best Student Paper Award",
                    "awarder": "Asian Conference on Computer Vision (ACCV)"
                  },
                  "inLanguage": "en",
                  "url": "https://openaccess.thecvf.com/content/ACCV2024/papers/Senthivel_QR-DETR__Query_Routing_for_Detection_Transformer_ACCV_2024_paper.pdf"
                },
                {
                  "@type": "ScholarlyArticle",
                  "@id": "https://thad75.github.io/#article-3",
                  "headline": "Detection Transformer with Diversified Object Queries",
                  "author": {
                    "@type": "Person",
                    "@id": "https://thad75.github.io/#person",
                    "name": "Tharsan Senthivel"
                  },
                  "datePublished": "2023-10-08",
                  "publisher": {
                    "@type": "Organization",
                    "name": "IEEE"
                  },
                  "isPartOf": {
                    "@type": "Periodical",
                    "name": "2023 IEEE International Conference on Image Processing (ICIP)"
                  },
                  "description": "Diversified object queries approach for Detection Transformers to improve object detection performance across diverse scenarios.",
                  "keywords": ["Detection Transformer", "DETR", "Computer Vision", "Object Detection", "Diversified Queries"],
                  "inLanguage": "en",
                  "url": "https://ieeexplore.ieee.org/abstract/document/10221970"
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Tharsan Senthivel's area of expertise?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tharsan Senthivel, PhD is a Lead AI expert specializing in enterprise AI transformation, Detection Transformers (DETR), Computer Vision, Large Language Models, and AI governance. He works at PMU in Paris, France, and has published research at IEEE ICIP and ACCV conferences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is QR-DETR?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "QR-DETR (Query Routing for Detection Transformer) is a novel approach for optimizing Detection Transformers by intelligently routing object queries to improve detection accuracy and efficiency. This research received the Best Student Paper Award at ACCV 2024."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where does Tharsan Senthivel work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tharsan Senthivel works as Lead AI at PMU (Pari Mutuel Urbain) in Paris, France, where he drives enterprise AI transformation and leads AI initiatives combining technical excellence with strategic business impact."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are Tharsan Senthivel's key publications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key publications include: 'Subgroups for Detection Transformer' (ICIP 2024), 'QR-DETR: Query Routing for Detection Transformer' (ACCV 2024, Best Student Paper Award), and 'Detection Transformer with Diversified Object Queries' (ICIP 2023)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Tharsan Senthivel's educational background?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tharsan Senthivel holds a PhD in Artificial Intelligence from CY Cergy Université, with focus on Detection Transformers and Object Detection. He also received the Best Student Paper Award at ACCV 2024."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I connect with Tharsan Senthivel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can connect with Tharsan Senthivel on LinkedIn (linkedin.com/in/tharsansenthivel), GitHub (github.com/thad75), or through his personal website at thad75.github.io. He is based in Paris, France and open to discussions about AI strategy, enterprise transformation, and research collaboration."
                  }
                }
              ]
            }),
          }}
        />
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
