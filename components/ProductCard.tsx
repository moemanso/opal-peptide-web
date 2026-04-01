import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  imageUrl?: string;
}

export default function ProductCard({ product, imageUrl }: ProductCardProps) {
  const hasDiscount = product.salePrice && product.salePrice !== product.regularPrice;

  return (
    <article className="group relative bg-white rounded-2xl border border-pearl-300 shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col">
      {/* Sale badge */}
      {hasDiscount && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-gold-DEFAULT text-navy-950 font-body text-2xs font-bold rounded-full uppercase tracking-wider">
          Sale
        </div>
      )}

      {/* Stock badge */}
      {!product.inStock && (
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-navy-300 text-white font-body text-2xs font-semibold rounded-full uppercase tracking-wider">
          Out of Stock
        </div>
      )}

      {/* Image */}
      <Link
        href={`/product/${product.slug}`}
        aria-label={`View ${product.name} details`}
        className="block aspect-square overflow-hidden bg-opal-subtle relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 focus-visible:ring-offset-2"
        tabIndex={0}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${product.name} — research peptide product image`}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder when no AI image is available yet */
          <div className="w-full h-full flex flex-col items-center justify-center bg-opal-subtle gap-3">
            <div className="w-16 h-16 rounded-full bg-opal-shimmer opacity-30 flex items-center justify-center">
              <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="6" fill="white" fillOpacity="0.6" />
              </svg>
            </div>
            <span className="font-body text-xs text-opal-700 font-medium">
              {product.shortName}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        {/* Category */}
        <span className="font-body text-2xs font-semibold text-opal-600 uppercase tracking-widest mb-1.5">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="font-display text-lg font-semibold text-navy-950 leading-tight mb-1.5 group-hover:text-opal-700 transition-colors duration-150">
          <Link
            href={`/product/${product.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 rounded"
          >
            {product.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="font-body text-sm text-navy-500 leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Purity tag */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-opal-50 border border-opal-200 rounded-md font-body text-2xs text-opal-700 font-semibold">
            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Purity {product.purity}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 bg-pearl-200 rounded-md font-body text-2xs text-navy-500">
            {product.weight}
          </span>
        </div>

        {/* Price + CTA row */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-pearl-300">
          <div className="flex items-baseline gap-1.5">
            <span className="font-body text-xl font-bold text-navy-950">
              {hasDiscount ? product.salePrice : product.price}
            </span>
            {hasDiscount && (
              <span className="font-body text-sm text-navy-400 line-through">
                {product.regularPrice}
              </span>
            )}
          </div>

          <Link
            href={`/product/${product.slug}`}
            aria-label={`Order ${product.name}`}
            className={`min-h-[40px] min-w-[80px] flex items-center justify-center px-4 py-2 font-body text-sm font-semibold rounded-xl
              transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opal-500 focus-visible:ring-offset-2
              ${
                product.inStock
                  ? "bg-navy-950 text-white hover:bg-navy-800 active:bg-navy-900"
                  : "bg-pearl-200 text-navy-400 cursor-not-allowed pointer-events-none"
              }`}
          >
            {product.inStock ? "Order" : "Sold Out"}
          </Link>
        </div>
      </div>
    </article>
  );
}
