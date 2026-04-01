const BADGES = [
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 6.5V12c0 4.5 3.3 8.7 8 9.9C17.7 20.7 21 16.5 21 12V6.5L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "≥98% Purity Guaranteed",
    description: "Every batch independently verified by third-party labs with CoA documentation.",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 4V3M16 4V3M3 9h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 13h1M11.5 13h1M15 13h1M8 16.5h1M11.5 16.5h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "CoA on Every Order",
    description: "Certificate of Analysis included with every shipment. Download anytime from your order.",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Research-Grade Standards",
    description: "Synthesized under GMP-aligned protocols with full traceability from raw materials.",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 11v2M8 11v2M16 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1 10h2M21 10h2M1 14h2M21 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Secure & Discreet Shipping",
    description: "Cold-chain compliant packaging. Shipped in neutral, unlabeled packaging for privacy.",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fast Processing",
    description: "Orders processed within 24 hours. Tracking provided automatically on dispatch.",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Transparent Pricing",
    description: "No hidden fees. Bulk pricing available. Volume discounts for institutional orders.",
  },
];

export default function TrustBadges() {
  return (
    <section aria-labelledby="trust-heading" className="py-16 md:py-24 bg-pearl-100 border-t border-pearl-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="trust-heading"
            className="font-display text-3xl md:text-4xl font-semibold text-navy-950 mb-3"
          >
            Why Researchers Choose Opal
          </h2>
          <p className="font-body text-base text-navy-500 max-w-xl mx-auto">
            Every compound we provide meets the rigorous standards your research demands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BADGES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-pearl-300 shadow-card"
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl bg-opal-50 flex items-center justify-center text-opal-600"
                aria-hidden="true"
              >
                {icon}
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold text-navy-950 mb-1">{title}</h3>
                <p className="font-body text-sm text-navy-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
