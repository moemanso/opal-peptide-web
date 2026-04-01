import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-hero-gradient min-h-[92vh] md:min-h-[80vh] flex items-center"
    >
      {/* Opal iridescent orbs — purely decorative */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07] bg-opal-shimmer blur-3xl" />
        <div className="absolute -bottom-48 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.06] bg-opal-shimmer blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] bg-opal-shimmer blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 bg-white/[0.07] border border-white/[0.12] rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-opal-400 animate-shimmer flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-xs font-semibold text-opal-200 uppercase tracking-widest">
              Research-Grade Peptides
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
          >
            Precision Peptides
            <br />
            <span className="text-transparent bg-clip-text bg-opal-shimmer">
              for Serious Research
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-navy-300 leading-relaxed mb-4 max-w-2xl">
            Clinically synthesized, independently verified. Every compound at Opal Peptide is
            delivered with a Certificate of Analysis and meets the exacting purity standards
            your laboratory demands.
          </p>

          {/* Research disclaimer inline */}
          <p className="font-body text-sm text-navy-500 mb-10">
            For research use only — not for human consumption.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 min-h-[52px] px-8 py-3.5 bg-white text-navy-950 font-body text-base font-semibold rounded-2xl
                hover:bg-pearl-200 active:bg-pearl-300
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950
                shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
            >
              Browse Full Catalog
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 bg-transparent text-pearl-200 font-body text-base font-semibold rounded-2xl
                border border-white/20 hover:border-white/40 hover:bg-white/[0.06]
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1 focus-visible:ring-offset-navy-950"
            >
              Our Standards
            </Link>
          </div>

          {/* Trust stats */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6">
            {[
              { value: "12+", label: "Compounds Available" },
              { value: "≥98%", label: "Minimum Purity" },
              { value: "CoA", label: "Every Order" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-3xl font-semibold text-white">{value}</span>
                <span className="font-body text-sm text-navy-400 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to body */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pearl-100 to-transparent"
      />
    </section>
  );
}
