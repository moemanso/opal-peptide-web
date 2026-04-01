import { PRODUCTS, Product } from "./products";

interface WooProduct {
  id: number;
  slug: string;
  name: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  categories: { id: number; name: string; slug: string }[];
  tags: { id: number; name: string; slug: string }[];
  images: { id: number; src: string; alt: string }[];
  stock_status: string;
  sku: string;
}

async function fetchWooProducts(): Promise<WooProduct[]> {
  const url = process.env.WOOCOMMERCE_URL;
  const key = process.env.WOOCOMMERCE_KEY;
  const secret = process.env.WOOCOMMERCE_SECRET;

  if (!url || !key || !secret) {
    return [];
  }

  try {
    const credentials = Buffer.from(`${key}:${secret}`).toString("base64");
    const res = await fetch(`${url}/wp-json/wc/v3/products?per_page=100`, {
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.warn("WooCommerce API error:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.warn("WooCommerce fetch failed, using static data:", error);
    return [];
  }
}

function mapWooToProduct(woo: WooProduct): Product {
  return {
    id: woo.id,
    slug: woo.slug,
    name: woo.name,
    shortName: woo.name,
    price: woo.price ? `$${woo.price}` : "$0.00",
    regularPrice: woo.regular_price ? `$${woo.regular_price}` : "$0.00",
    salePrice: woo.sale_price ? `$${woo.sale_price}` : undefined,
    description: woo.description.replace(/<[^>]*>/g, ""), // Strip HTML
    shortDescription: woo.short_description.replace(/<[^>]*>/g, ""),
    category: woo.categories?.[0]?.name ?? "Peptides",
    tags: woo.tags?.map((t) => t.name) ?? [],
    sku: woo.sku,
    inStock: woo.stock_status === "instock",
    purity: "≥98.0%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only.",
    imagePrompt: "",
    benefits: [],
  };
}

/**
 * Returns products from WooCommerce if configured, otherwise returns
 * the curated static product list.
 */
export async function getProducts(): Promise<Product[]> {
  const wooProducts = await fetchWooProducts();

  if (wooProducts.length > 0) {
    return wooProducts.map(mapWooToProduct);
  }

  return PRODUCTS;
}
