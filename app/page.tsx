import type { Metadata } from "next";
import InteractiveHomepage from "@/components/InteractiveHomepage";

export const metadata: Metadata = {
  title: "Premium Research Peptides — Opal Peptide",
  description:
    "Opal Peptide delivers research-grade peptides — BPC-157, GHK-Cu, NAD+, Retatrutide, Semaglutide and more — with ≥98% purity and CoA documentation. For laboratory research use only.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Opal Peptide",
  url: "https://opalpeptide.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "amanda@opalpeptide.com",
    contactType: "customer service",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InteractiveHomepage />
    </>
  );
}
