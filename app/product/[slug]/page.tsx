import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/lib/products";
import CoaButton from "@/components/CoaButton";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — Research Peptide`,
    description: `${product.shortDescription} Purity: ${product.purity}. For research use only. CoA included. Order from Opal Peptide.`,
    keywords: [product.name, ...product.tags, "research peptide", "buy research peptide"],
    openGraph: {
      title: `${product.name} | Opal Peptide`,
      description: product.shortDescription,
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const hasDiscount = product.salePrice && product.salePrice !== product.regularPrice;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "Opal Peptide",
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace("$", ""),
      priceCurrency: "USD",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://opalpeptide.com/product/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Opal Peptide",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-pearl-200 border-b border-pearl-300 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-navy-500">
              <li>
                <Link href="/" className="hover:text-navy-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><span className="text-navy-400">/</span></li>
              <li>
                <Link href="/shop" className="hover:text-navy-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded">
                  Shop
                </Link>
              </li>
              <li aria-hidden="true"><span className="text-navy-400">/</span></li>
              <li aria-current="page" className="text-navy-700 font-medium truncate max-w-[200px]">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Image / Visual panel */}
          <div className="sticky top-24">
            <div className="aspect-square rounded-3xl bg-opal-subtle overflow-hidden border border-pearl-300 shadow-card flex items-center justify-center relative">
              {/* Decorative shimmer orbs */}
              <div aria-hidden="true" className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-opal-shimmer opacity-[0.12] blur-2xl" />
              <div aria-hidden="true" className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-opal-shimmer opacity-[0.08] blur-2xl" />

              {/* Product identity visual */}
              <div className="relative z-10 text-center p-10">
                <div className="w-24 h-24 mx-auto rounded-full bg-opal-shimmer flex items-center justify-center shadow-opal mb-6" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="1.5" />
                    <circle cx="24" cy="24" r="9" fill="white" fillOpacity="0.7" />
                  </svg>
                </div>
                <p className="font-display text-3xl font-semibold text-navy-700">{product.shortName}</p>
                <p className="font-body text-sm text-navy-500 mt-1">{product.category}</p>

                {/* Purity badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pearl-300 shadow-sm">
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7.5L5.5 10L11 4" stroke="#1B8A9A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-body text-xs font-semibold text-opal-700">
                    Purity {product.purity} — CoA Included
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail tags below image */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-pearl-200 rounded-full font-body text-xs text-navy-600 border border-pearl-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div>
            {/* Category */}
            <p className="section-label mb-2">{product.category}</p>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy-950 leading-tight mb-4">
              {product.name}
            </h1>

            {/* Short description */}
            <p className="font-body text-base text-navy-600 leading-relaxed mb-6 border-l-4 border-opal-300 pl-4">
              {product.shortDescription}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl font-semibold text-navy-950">
                {hasDiscount ? product.salePrice : product.price}
              </span>
              {hasDiscount && (
                <>
                  <span className="font-body text-lg text-navy-400 line-through">{product.regularPrice}</span>
                  <span className="px-2.5 py-1 bg-gold-light text-gold-dark font-body text-xs font-bold rounded-full uppercase tracking-wider">
                    On Sale
                  </span>
                </>
              )}
            </div>

            {/* Key specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "SKU", value: product.sku },
                { label: "Weight", value: product.weight ?? "N/A" },
                { label: "Purity", value: product.purity },
                { label: "Stock", value: product.inStock ? "In Stock" : "Out of Stock" },
              ].map(({ label, value }) => (
                <div key={label} className="p-3.5 bg-pearl-100 rounded-xl border border-pearl-300">
                  <p className="font-body text-2xs font-semibold text-navy-400 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className={`font-body text-sm font-semibold ${label === "Stock" && product.inStock ? "text-emerald-700" : "text-navy-800"}`}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`mailto:amanda@opalpeptide.com?subject=Order Inquiry: ${encodeURIComponent(product.name)}&body=I'd like to order ${product.name} (SKU: ${product.sku}). Please provide ordering instructions.`}
                className="btn-primary flex-1 text-center justify-center"
                aria-disabled={!product.inStock}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1.5 5L8 9l6.5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                {product.inStock ? "Place Order via Email" : "Out of Stock"}
              </a>

              {/* CoA Download */}
              <CoaButton />
            </div>

            {/* Research disclaimer */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-8">
              <div className="flex gap-3">
                <svg aria-hidden="true" className="flex-shrink-0 mt-0.5 text-amber-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1.5L1.5 13.5h13L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  <path d="M8 6.5v3M8 11v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <p className="font-body text-xs text-amber-800 leading-relaxed">
                  <strong>Research Use Only.</strong> This compound is not intended for human or veterinary use. It is not approved by the FDA as a drug or medical device. For laboratory and in-vitro research only.
                </p>
              </div>
            </div>

            {/* Full description */}
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-navy-950 mb-3">
                Research Profile
              </h2>
              <div className="prose-opal">
                <p className="font-body text-sm text-navy-600 leading-relaxed">{product.description}</p>
              </div>
            </div>

            {/* Benefits */}
            {product.benefits.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-xl font-semibold text-navy-950 mb-3">
                  Research Applications
                </h2>
                <ul className="space-y-2.5" aria-label="Research applications">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <svg aria-hidden="true" className="flex-shrink-0 mt-0.5 text-opal-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.5L6 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-body text-sm text-navy-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Storage & handling */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-pearl-100 rounded-xl border border-pearl-300">
                <h3 className="font-body text-xs font-semibold text-navy-400 uppercase tracking-widest mb-2">Storage</h3>
                <p className="font-body text-sm text-navy-700">{product.storage}</p>
              </div>
              <div className="p-4 bg-pearl-100 rounded-xl border border-pearl-300">
                <h3 className="font-body text-xs font-semibold text-navy-400 uppercase tracking-widest mb-2">Dosage Information</h3>
                <p className="font-body text-sm text-navy-700">{product.dosageInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
