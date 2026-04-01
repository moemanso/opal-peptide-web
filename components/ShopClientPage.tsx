"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export default function ShopClientPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name">("default");

  const filtered = useMemo(() => {
    let results = PRODUCTS;

    if (activeCategory !== "All") {
      results = results.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    const sorted = [...results];
    if (sortBy === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "price-asc")
      sorted.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
    if (sortBy === "price-desc")
      sorted.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));

    return sorted;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <>
      {/* Filters bar */}
      <div className="bg-white border-b border-pearl-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <label htmlFor="search-products" className="sr-only">
                Search products
              </label>
              <svg
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                id="search-products"
                type="search"
                placeholder="Search compounds…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-4 bg-pearl-100 border border-pearl-300 rounded-xl font-body text-sm text-navy-800 placeholder-navy-400
                  focus:outline-none focus:ring-2 focus:ring-opal-500 focus:border-transparent transition-colors duration-150"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-products" className="font-body text-xs text-navy-500 flex-shrink-0">
                Sort:
              </label>
              <select
                id="sort-products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="h-10 px-3 pr-8 bg-pearl-100 border border-pearl-300 rounded-xl font-body text-sm text-navy-800
                  focus:outline-none focus:ring-2 focus:ring-opal-500 transition-colors duration-150 cursor-pointer appearance-none"
              >
                <option value="default">Featured</option>
                <option value="name">Name A–Z</option>
                <option value="price-asc">Price: Low–High</option>
                <option value="price-desc">Price: High–Low</option>
              </select>
            </div>
          </div>

          {/* Category pills */}
          <div
            className="mt-3 flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Product categories"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 min-h-[36px] px-4 py-1.5 rounded-full font-body text-sm font-medium transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500
                  ${
                    activeCategory === cat
                      ? "bg-navy-950 text-white"
                      : "bg-pearl-200 text-navy-600 hover:bg-pearl-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <p
          className="font-body text-sm text-navy-500 mb-6"
          aria-live="polite"
          aria-atomic="true"
        >
          {filtered.length === 0
            ? "No compounds found."
            : `Showing ${filtered.length} compound${filtered.length !== 1 ? "s" : ""}${
                activeCategory !== "All" ? ` in ${activeCategory}` : ""
              }`}
        </p>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-2xl text-navy-400 mb-3">No compounds found</p>
            <p className="font-body text-sm text-navy-400 mb-6">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} imageUrl={`/products/${product.slug}.jpg`} />
            ))}
          </div>
        )}

        {/* Research disclaimer */}
        <div className="mt-16 p-6 bg-pearl-200 rounded-2xl border border-pearl-300">
          <p className="font-body text-xs text-navy-500 leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-navy-700">Research Use Only Disclaimer:</strong> All products
            listed on this page are intended exclusively for in-vitro laboratory research. They are
            not approved by the FDA for human or veterinary use and must not be used as drugs,
            medications, food additives, or for any other purpose outside of controlled research
            settings.
          </p>
        </div>
      </div>
    </>
  );
}
