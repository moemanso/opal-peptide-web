import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResearchBanner from "@/components/ResearchBanner";
import AgeGate from "@/components/AgeGate";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://opalpeptide.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Opal Peptide — Premium Research Peptides",
    template: "%s | Opal Peptide",
  },
  description:
    "Premium research-grade peptides including BPC-157, GHK-Cu, NAD+, Retatrutide, Semaglutide, and more. For laboratory research use only. ≥98% purity. CoA on every order.",
  keywords: [
    "research peptides",
    "BPC-157",
    "GHK-Cu",
    "NAD+",
    "Retatrutide",
    "Semaglutide",
    "peptide research",
    "laboratory compounds",
    "research chemicals",
    "GLP-1 research",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Opal Peptide",
    title: "Opal Peptide — Premium Research Peptides",
    description:
      "Research-grade peptides with ≥98% purity. Certificate of Analysis on every order. For laboratory use only.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Opal Peptide — Premium Research Peptides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opal Peptide — Premium Research Peptides",
    description:
      "Research-grade peptides with ≥98% purity. Certificate of Analysis on every order.",
    images: [`${SITE_URL}/og-image.png`],
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
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Age gate — rendered client-side, reads sessionStorage */}
        <AgeGate />

        {/* Persistent research-only banner */}
        <ResearchBanner />

        {/* Primary navigation */}
        <Header />

        {/* Page content */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
