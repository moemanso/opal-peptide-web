import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-opal-subtle flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#1B8A9A" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M14 14l12 12M26 14L14 26" stroke="#1B8A9A" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="font-display text-4xl font-semibold text-navy-950 mb-3">Page Not Found</h1>
        <p className="font-body text-base text-navy-500 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Return to our catalog to
          browse available research compounds.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/shop" className="btn-secondary">
            Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
