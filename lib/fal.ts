import { fal } from "@fal-ai/client";

fal.config({ credentials: process.env.FAL_API_KEY });

export interface GeneratedImage {
  url: string;
  width: number;
  height: number;
}

export async function generateProductImage(
  prompt: string,
  productName: string
): Promise<GeneratedImage | null> {
  try {
    const enhancedPrompt = `${prompt}, photorealistic, 8k, product photography, premium quality, no text overlays`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await (fal.subscribe as any)("fal-ai/nano-banana-pro", {
      input: { prompt: enhancedPrompt, width: 768, height: 768 },
    });

    const output = result?.data as { images?: Array<{ url: string; width?: number; height?: number }> } | undefined;
    if (output?.images?.[0]) {
      return { url: output.images[0].url, width: output.images[0].width ?? 768, height: output.images[0].height ?? 768 };
    }
    return null;
  } catch (error) {
    console.error(`Failed to generate image for ${productName}:`, error);
    return null;
  }
}

export async function generateHeroImage(prompt: string): Promise<GeneratedImage | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await (fal.subscribe as any)("fal-ai/nano-banana-pro", {
      input: { prompt, width: 1280, height: 720 },
    });

    const output = result?.data as { images?: Array<{ url: string }> } | undefined;
    if (output?.images?.[0]) {
      return { url: output.images[0].url, width: 1280, height: 720 };
    }
    return null;
  } catch (error) {
    console.error("Failed to generate hero image:", error);
    return null;
  }
}
