import { fal } from "@fal-ai/client";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

fal.config({ credentials: process.env.FAL_API_KEY });

const OUTPUT_DIR = join(__dirname, "public", "products");
mkdirSync(OUTPUT_DIR, { recursive: true });

const PRODUCTS = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    prompt: "Minimalist scientific product photography: a sleek glass vial labeled BPC-157 on a dark navy surface with soft opal teal reflections, ultra-clean clinical aesthetic, premium peptide research lab, shallow depth of field, photorealistic, 8k",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    prompt: "Minimalist scientific product photography: elegant glass vial labeled GHK-Cu with a faint copper iridescence, dark pearl white laboratory surface, premium research peptide branding, macro lens, clinical lighting, photorealistic, 8k",
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    prompt: "Minimalist scientific product photography: small amber glass vial labeled NAD+ on dark background with soft golden-opal light gradients, cellular structure bokeh, ultra-premium clinical research aesthetic, photorealistic, 8k",
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    prompt: "Minimalist scientific product photography: premium glass syringe vial labeled Retatrutide on dark navy surface, molecular structure reflection, high-end pharmaceutical research aesthetic, opal iridescent background glow, photorealistic, 8k",
  },
  {
    slug: "selank",
    name: "Selank",
    prompt: "Minimalist scientific product photography: frosted glass vial labeled Selank on clean pearl white surface with deep teal reflections, neuroscience research lab aesthetic, premium peptide branding, soft diffused lighting, photorealistic, 8k",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    prompt: "Minimalist scientific product photography: sleek vial labeled TB-500 with soft gold-opal shimmer on dark navy background, tissue healing motif, premium research peptide photography, clinical precision, photorealistic, 8k",
  },
  {
    slug: "semax",
    name: "Semax",
    prompt: "Minimalist scientific product photography: nasal spray bottle and vial set labeled Semax on soft pearl surface, neuroscience research aesthetic, deep navy-opal gradient background, ultra-clean clinical premium product photo, photorealistic, 8k",
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    prompt: "Minimalist scientific product photography: elegant glass vial labeled MOTS-c with mitochondria-inspired cellular bokeh, dark background with warm amber-opal glow, ultra-premium peptide research product, clinical clean aesthetic, photorealistic, 8k",
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    prompt: "Minimalist scientific product photography: crystalline vial labeled Epithalon on dark surface with soft starlight-opal bokeh, DNA helix light reflections, premium anti-aging research aesthetic, photorealistic, 8k",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    prompt: "Minimalist scientific product photography: glass vial labeled CJC-1295 on dark navy surface, growth hormone research aesthetic, soft blue-opal gradient reflections, ultra-clean clinical laboratory product photography, photorealistic, 8k",
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    prompt: "Minimalist scientific product photography: sleek vial labeled Ipamorelin with precision laboratory instruments in background, dark navy opal surface, premium peptide research product, soft clinical lighting, photorealistic, 8k",
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    prompt: "Minimalist scientific product photography: premium glass vial labeled Semaglutide on dark polished surface with soft opal iridescent light gradients, clinical pharmaceutical research aesthetic, macro precision photography, photorealistic, 8k",
  },
];

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = await response.arrayBuffer();
  writeFileSync(filepath, Buffer.from(buffer));
}

async function generateAll() {
  console.log(`\n🧬 Opal Peptide — Image Generation\n${"─".repeat(40)}`);
  console.log(`Generating ${PRODUCTS.length} product images via fal-ai/nano-banana-pro\n`);

  let succeeded = 0;
  let failed = 0;

  for (const product of PRODUCTS) {
    process.stdout.write(`  Generating ${product.name}... `);
    try {
      const result = await fal.subscribe("fal-ai/nano-banana-pro", {
        input: {
          prompt: product.prompt,
          negative_prompt: "blurry, low quality, distorted, text, watermark, people, hands, faces, unprofessional",
          image_size: "square_hd",
          num_inference_steps: 28,
          guidance_scale: 7.5,
          num_images: 1,
        },
        logs: false,
      });

      const images = result?.data?.images ?? result?.images ?? [];
      if (!images.length) throw new Error("No images in response");

      const imageUrl = images[0].url;
      const outputPath = join(OUTPUT_DIR, `${product.slug}.jpg`);
      await downloadImage(imageUrl, outputPath);

      console.log(`✓`);
      succeeded++;
    } catch (err) {
      console.log(`✗ (${err.message})`);
      failed++;
    }
  }

  console.log(`\n${"─".repeat(40)}`);
  console.log(`Done: ${succeeded} succeeded, ${failed} failed`);
  console.log(`Images saved to: public/products/\n`);
}

generateAll().catch(console.error);
