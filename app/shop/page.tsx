import type { Metadata } from "next";
import Link from "next/link";
import ShopClientPage from "@/components/ShopClientPage";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Research Peptide Catalog",
  description:
    "Browse Opal Peptide's full catalog — BPC-157, GHK-Cu, NAD+, Retatrutide, Semaglutide, Selank, TB-500, Semax, MOTS-c, Epithalon, CJC-1295, Ipamorelin. ≥98% purity. CoA included. Research use only.",
  keywords: PRODUCTS.map((p) => p.name),
};

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy-950 py-14 md:py-20 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-[0.05] bg-opal-shimmer blur-3xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-body text-xs text-navy-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-navy-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="text-navy-700">/</span>
              </li>
              <li aria-current="page" className="text-navy-300">
                Shop
              </li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
            Research Peptide Catalog
          </h1>
          <p className="font-body text-base text-navy-400 max-w-xl">
            {PRODUCTS.length} compounds. ≥98% purity verified. CoA on every order.{" "}
            <span className="text-navy-600">For research use only.</span>
          </p>
        </div>
      </div>

      {/* Interactive catalog — client component */}
      <ShopClientPage />
    </>
  );
}
