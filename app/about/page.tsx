import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Opal Peptide — our commitment to research-grade quality, purity standards, and responsible scientific supply for qualified researchers worldwide.",
};

const VALUES = [
  {
    title: "Purity as a Non-Negotiable",
    desc: "We set a minimum ≥98% purity threshold for every compound in our catalog. Batches that fall short are rejected — no exceptions. Independent HPLC and mass spectrometry verification on every lot.",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 6.5V12c0 4.5 3.3 8.7 8 9.9C17.7 20.7 21 16.5 21 12V6.5L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Full Chain of Custody",
    desc: "Raw material sourcing, synthesis conditions, QC testing, and cold-chain logistics are all documented. You receive a batch-specific Certificate of Analysis with every order.",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Research Integrity",
    desc: "We take compliance seriously. Our products are sold exclusively to qualified researchers and institutions. We verify use-case eligibility and maintain strict records per applicable regulations.",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M12 8v4M12 14v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    desc: "If a compound is backordered, reformulated, or discontinued, we tell you immediately. No ambiguous listings, no misleading claims. What you see is what we provide.",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy-950 py-14 md:py-20 relative overflow-hidden">
        <div aria-hidden="true" className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-[0.05] bg-opal-shimmer blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-body text-xs text-navy-500">
              <li><Link href="/" className="hover:text-navy-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded">Home</Link></li>
              <li aria-hidden="true"><span className="text-navy-700">/</span></li>
              <li aria-current="page" className="text-navy-300">About</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
            About Opal Peptide
          </h1>
          <p className="font-body text-base text-navy-400 max-w-xl">
            Built for researchers who demand verified quality, complete documentation, and a supplier they can trust.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section aria-labelledby="mission-heading" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Our Mission</p>
              <h2 id="mission-heading" className="font-display text-3xl md:text-4xl font-semibold text-navy-950 mb-6 leading-tight">
                Precision Compounds for Serious Science
              </h2>
              <div className="space-y-4 font-body text-base text-navy-600 leading-relaxed">
                <p>
                  Opal Peptide was founded on a simple premise: researchers deserve a supplier who
                  treats purity and documentation as non-negotiables, not marketing claims.
                </p>
                <p>
                  We specialize in synthetic peptides, metabolic compounds, and nootropic research
                  molecules. Every compound in our catalog is independently verified, documented with
                  a batch-specific Certificate of Analysis, and shipped under cold-chain conditions
                  to preserve integrity from our facility to your lab.
                </p>
                <p>
                  We exist to serve researchers — not to exploit regulatory gray areas. All of our
                  compounds are sold strictly for in-vitro and preclinical research use only.
                </p>
              </div>
            </div>

            {/* Visual panel */}
            <div className="bg-opal-subtle rounded-3xl p-10 border border-pearl-300 flex flex-col gap-8">
              {[
                { label: "Compounds Available", value: "12+" },
                { label: "Minimum Purity Standard", value: "≥98%" },
                { label: "QC Method", value: "HPLC + MS" },
                { label: "CoA Documentation", value: "Every Batch" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-pearl-300 pb-5 last:border-0 last:pb-0">
                  <span className="font-body text-sm text-navy-600">{label}</span>
                  <span className="font-display text-2xl font-semibold text-navy-950">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="py-16 md:py-24 bg-pearl-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-2">What We Stand For</p>
            <h2 id="values-heading" className="font-display text-3xl md:text-4xl font-semibold text-navy-950">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ title, desc, icon }) => (
              <div key={title} className="p-6 bg-white rounded-2xl border border-pearl-300 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-opal-50 flex items-center justify-center text-opal-600 mb-4">
                  {icon}
                </div>
                <h3 className="font-body text-sm font-semibold text-navy-950 mb-2">{title}</h3>
                <p className="font-body text-sm text-navy-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research commitment */}
      <section aria-labelledby="commitment-heading" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Research Compliance</p>
          <h2 id="commitment-heading" className="font-display text-3xl md:text-4xl font-semibold text-navy-950 mb-6">
            Our Commitment to Responsible Supply
          </h2>
          <div className="space-y-4 font-body text-base text-navy-600 leading-relaxed mb-8 text-left">
            <p>
              Opal Peptide operates with the understanding that the peptide research supply space
              carries significant ethical and legal responsibilities. We are committed to:
            </p>
            <ul className="space-y-3 pl-4">
              {[
                "Selling exclusively to licensed researchers, institutions, and qualified professionals",
                "Maintaining accurate, FDA/FTC-compliant product descriptions with no therapeutic claims",
                "Providing full transparency on synthesis origins, QC results, and compound specifications",
                "Refusing orders where intended use appears inconsistent with legitimate research purposes",
                "Staying current with evolving DEA, FDA, and international regulatory developments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg aria-hidden="true" className="flex-shrink-0 mt-0.5 text-opal-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8.5L6 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn-primary">Browse Catalog</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-12 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-body text-base text-navy-300 mb-3">
            Questions about our compounds, processes, or ordering?
          </p>
          <a
            href="mailto:inquiry@opalpeptide.com"
            className="inline-flex items-center gap-2 font-body text-lg font-semibold text-opal-400 hover:text-opal-300 transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
          >
            inquiry@opalpeptide.com
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
