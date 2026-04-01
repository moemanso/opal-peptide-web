import { NextResponse } from "next/server";
import { getProducts } from "@/lib/woocommerce";

export const revalidate = 3600; // 1 hour ISR

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error("Products API error:", err);
    return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
  }
}
