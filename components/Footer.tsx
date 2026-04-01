import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-pearl-200" role="contentinfo">
      {/* Research disclaimer band */}
      <div className="border-b border-navy-800 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy-900/60 rounded-2xl p-6 border border-navy-800">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2L2 17h16L10 2z" stroke="#C9A96E" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M10 8v4M10 14v.5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-body text-sm font-semibold text-gold-DEFAULT mb-2 uppercase tracking-wider">
                  Research Use Only — Important Disclaimer
                </h3>
                <p className="font-body text-xs text-navy-300 leading-relaxed mb-2">
                  All products offered by Opal Peptide are strictly for <strong className="text-pearl-200">in-vitro laboratory and preclinical research use only</strong>. These compounds are not approved by the Food and Drug Administration (FDA) for human or veterinary use, are not drugs or medications, and are not intended for diagnosis, treatment, cure, or prevention of any disease or condition.
                </p>
                <p className="font-body text-xs text-navy-300 leading-relaxed mb-2">
                  These statements have not been evaluated by the FDA. All purchasers acknowledge and represent that they are licensed researchers, qualified professionals, or institutions authorized to handle research compounds, and that compounds will be used solely for legitimate scientific research purposes.
                </p>
                <p className="font-body text-xs text-navy-400 leading-relaxed">
                  <strong className="text-navy-300">FTC Disclosure:</strong> Results mentioned in any educational content on this site are based on preclinical research and do not represent what you should expect from personal use. Opal Peptide makes no claims regarding therapeutic benefit for any individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Opal Peptide — go to homepage"
              className="inline-flex items-center gap-2.5 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded-lg"
            >
              <div className="w-7 h-7 rounded-full bg-opal-shimmer flex items-center justify-center" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.1" />
                  <circle cx="7" cy="7" r="3" fill="white" fillOpacity="0.85" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-white tracking-tight">
                Opal Peptide
              </span>
            </Link>
            <p className="font-body text-sm text-navy-400 leading-relaxed mb-4">
              Premium research-grade peptides for qualified researchers and laboratory professionals.
            </p>
            <a
              href="mailto:amanda@opalpeptide.com"
              className="inline-flex items-center gap-2 font-body text-sm text-opal-400 hover:text-opal-300 transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4.5L7 8l6-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              amanda@opalpeptide.com
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body text-xs font-semibold text-pearl-200 uppercase tracking-widest mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/shop?cat=Repair+Peptides", label: "Repair Peptides" },
                { href: "/shop?cat=GLP-1+Class", label: "GLP-1 Class" },
                { href: "/shop?cat=Nootropic+Peptides", label: "Nootropic Peptides" },
                { href: "/shop?cat=Longevity+Peptides", label: "Longevity Peptides" },
                { href: "/shop?cat=Metabolic+Peptides", label: "Metabolic Peptides" },
                { href: "/shop?cat=GH+Secretagogues", label: "GH Secretagogues" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-navy-400 hover:text-pearl-200 transition-colors duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs font-semibold text-pearl-200 uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/shop", label: "Full Catalog" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-navy-400 hover:text-pearl-200 transition-colors duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body text-xs font-semibold text-pearl-200 uppercase tracking-widest mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/shipping", label: "Shipping Policy" },
                { href: "/returns", label: "Returns & Refunds" },
                { href: "/compliance", label: "Research Compliance" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-navy-400 hover:text-pearl-200 transition-colors duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-body text-xs text-navy-500">
            © {currentYear} Opal Peptide. All rights reserved.
          </p>
          <p className="font-body text-xs text-navy-600">
            Research compounds — not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
