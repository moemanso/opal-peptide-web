import { NextRequest, NextResponse } from "next/server";
import { generateProductImage } from "@/lib/fal";

export async function POST(req: NextRequest) {
  try {
    const { prompt, productName } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    if (!process.env.FAL_API_KEY) {
      return NextResponse.json({ error: "FAL_API_KEY not configured" }, { status: 503 });
    }

    const image = await generateProductImage(prompt, productName ?? "product");

    if (!image) {
      return NextResponse.json({ error: "Image generation failed" }, { status: 500 });
    }

    return NextResponse.json(image);
  } catch (err) {
    console.error("Image generation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
