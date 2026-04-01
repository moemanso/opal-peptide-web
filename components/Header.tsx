"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Trap focus / close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-pearl-300 shadow-[0_1px_8px_rgba(10,22,40,0.08)]"
          : "bg-white border-b border-pearl-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Opal Peptide — go to homepage"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded-lg"
          >
            <div className="w-8 h-8 rounded-full bg-opal-shimmer flex items-center justify-center shadow-opal flex-shrink-0" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.2" />
                <circle cx="8" cy="8" r="3.5" fill="white" fillOpacity="0.85" />
              </svg>
            </div>
            <span className="font-display text-xl font-semibold text-navy-950 tracking-tight group-hover:text-opal-600 transition-colors duration-150">
              Opal Peptide
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500
                  ${
                    pathname === href
                      ? "text-opal-600 bg-opal-50"
                      : "text-navy-700 hover:text-navy-950 hover:bg-pearl-200"
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile menu button */}
          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 min-h-[40px] px-5 py-2 bg-navy-950 text-white font-body text-sm font-semibold rounded-xl
                hover:bg-navy-800 active:bg-navy-900 transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 focus-visible:ring-offset-2"
            >
              View Catalog
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-navy-700 hover:bg-pearl-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 transition-colors duration-150"
            >
              {menuOpen ? (
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden border-t border-pearl-300 bg-white animate-fade-in"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`min-h-[48px] flex items-center px-4 rounded-xl font-body text-sm font-medium transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500
                  ${
                    pathname === href
                      ? "text-opal-600 bg-opal-50 font-semibold"
                      : "text-navy-700 hover:bg-pearl-200"
                  }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="mt-2 min-h-[48px] flex items-center justify-center px-5 bg-navy-950 text-white font-body text-sm font-semibold rounded-xl
                hover:bg-navy-800 transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
