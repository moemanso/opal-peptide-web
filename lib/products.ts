export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  price: string;
  regularPrice: string;
  salePrice?: string;
  description: string;
  shortDescription: string;
  category: string;
  tags: string[];
  weight?: string;
  sku: string;
  inStock: boolean;
  imagePrompt: string;
  benefits: string[];
  dosageInfo: string;
  storage: string;
  purity: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "bpc-157",
    name: "BPC-157",
    shortName: "BPC-157",
    price: "$49.99",
    regularPrice: "$49.99",
    description:
      "BPC-157 (Body Protection Compound 157) is a synthetic peptide composed of 15 amino acids. It is a partial sequence of body protection compound found in human gastric juice. Research models have been used to study its potential regenerative properties in musculoskeletal tissue.",
    shortDescription:
      "15-amino-acid synthetic peptide. Studied for tissue regeneration in preclinical models.",
    category: "Repair Peptides",
    tags: ["regeneration", "musculoskeletal", "GI"],
    weight: "5mg",
    sku: "OP-BPC157-5",
    inStock: true,
    purity: "≥99.0%",
    storage: "Store at -20°C. Protect from light and moisture.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: a sleek glass vial labeled BPC-157 on a dark navy surface with soft opal teal reflections, ultra-clean clinical aesthetic, premium peptide research lab, shallow depth of field",
    benefits: [
      "Preclinical musculoskeletal research",
      "Gastrointestinal tissue studies",
      "Angiogenesis investigation",
    ],
  },
  {
    id: 2,
    slug: "ghk-cu",
    name: "GHK-Cu (Copper Peptide)",
    shortName: "GHK-Cu",
    price: "$54.99",
    regularPrice: "$54.99",
    description:
      "GHK-Cu is a naturally occurring copper complex of the tripeptide glycyl-L-histidyl-L-lysine. It is found in human plasma, saliva, and urine. Extensive preclinical research has explored its role in wound healing, skin remodeling, and anti-inflammatory pathways.",
    shortDescription:
      "Copper-binding tripeptide. Studied for skin remodeling and wound healing in research models.",
    category: "Regenerative Peptides",
    tags: ["skin", "wound healing", "anti-inflammatory"],
    weight: "50mg",
    sku: "OP-GHKCU-50",
    inStock: true,
    purity: "≥98.5%",
    storage: "Store at -20°C. Avoid freeze-thaw cycles.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: elegant glass vial labeled GHK-Cu with a faint copper iridescence, dark pearl white laboratory surface, premium research peptide branding, macro lens, clinical lighting",
    benefits: [
      "Skin collagen synthesis research",
      "Anti-inflammatory pathway studies",
      "Wound healing preclinical models",
    ],
  },
  {
    id: 3,
    slug: "nad-plus",
    name: "NAD+ (Nicotinamide Adenine Dinucleotide)",
    shortName: "NAD+",
    price: "$79.99",
    regularPrice: "$89.99",
    salePrice: "$79.99",
    description:
      "NAD+ is a critical coenzyme found in every living cell, essential to cellular energy metabolism and DNA repair processes. Research in animal models has explored its role in sirtuins activation, mitochondrial biogenesis, and longevity pathways.",
    shortDescription:
      "Essential cellular coenzyme. Studied for metabolic and longevity pathways in preclinical research.",
    category: "Metabolic Peptides",
    tags: ["longevity", "mitochondria", "metabolism"],
    weight: "500mg",
    sku: "OP-NAD-500",
    inStock: true,
    purity: "≥99.5%",
    storage: "Store at 4°C. Keep in airtight container, protect from humidity.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: small amber glass vial labeled NAD+ on dark background with soft golden-opal light gradients, cellular structure bokeh, ultra-premium clinical research aesthetic",
    benefits: [
      "Sirtuin activation research",
      "Mitochondrial biogenesis studies",
      "DNA repair pathway investigation",
    ],
  },
  {
    id: 4,
    slug: "retatrutide",
    name: "Retatrutide",
    shortName: "Retatrutide",
    price: "$149.99",
    regularPrice: "$149.99",
    description:
      "Retatrutide is a triple agonist peptide targeting GLP-1, GIP, and glucagon receptors. It is currently under advanced clinical investigation for metabolic conditions. Research models have been used to study its effects on adipose tissue and glycemic regulation.",
    shortDescription:
      "GLP-1/GIP/Glucagon triple receptor agonist. Under active clinical investigation for metabolic research.",
    category: "GLP-1 Class",
    tags: ["metabolic", "GLP-1", "obesity research"],
    weight: "2mg",
    sku: "OP-RETA-2",
    inStock: true,
    purity: "≥98.0%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: premium glass syringe vial labeled Retatrutide on dark navy surface, molecular structure reflection, high-end pharmaceutical research aesthetic, opal iridescent background glow",
    benefits: [
      "Triple GLP-1/GIP/glucagon receptor agonism research",
      "Adipose tissue regulation studies",
      "Glycemic pathway investigation",
    ],
  },
  {
    id: 5,
    slug: "selank",
    name: "Selank",
    shortName: "Selank",
    price: "$59.99",
    regularPrice: "$59.99",
    description:
      "Selank is a synthetic analogue of the endogenous tetrapeptide tuftsin. It was developed at the Institute of Molecular Genetics of the Russian Academy of Sciences. Preclinical research has investigated its anxiolytic and nootropic properties through GABAergic modulation.",
    shortDescription:
      "Tuftsin analogue. Studied for anxiolytic and cognitive properties in preclinical research models.",
    category: "Nootropic Peptides",
    tags: ["nootropic", "anxiolytic", "cognitive"],
    weight: "5mg",
    sku: "OP-SELANK-5",
    inStock: true,
    purity: "≥98.5%",
    storage: "Store at -20°C. Protect from light and moisture.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: frosted glass vial labeled Selank on clean pearl white surface with deep teal reflections, neuroscience research lab aesthetic, premium peptide branding, soft diffused lighting",
    benefits: [
      "GABAergic modulation research",
      "Cognitive function preclinical studies",
      "Anxiolytic pathway investigation",
    ],
  },
  {
    id: 6,
    slug: "tb-500",
    name: "TB-500 (Thymosin Beta-4)",
    shortName: "TB-500",
    price: "$64.99",
    regularPrice: "$64.99",
    description:
      "TB-500 is a synthetic version of the naturally occurring peptide present in virtually all human and animal cells. It is a potent, naturally occurring wound healing factor. Research has focused on its role in actin regulation, angiogenesis, and tissue repair.",
    shortDescription:
      "Thymosin Beta-4 fragment. Studied for actin regulation and tissue repair in research models.",
    category: "Repair Peptides",
    tags: ["tissue repair", "angiogenesis", "recovery"],
    weight: "5mg",
    sku: "OP-TB500-5",
    inStock: true,
    purity: "≥99.0%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: sleek vial labeled TB-500 with soft gold-opal shimmer on dark navy background, tissue healing and regeneration motif, premium research peptide photography, clinical precision",
    benefits: [
      "Actin regulation preclinical research",
      "Angiogenesis studies",
      "Musculoskeletal tissue repair models",
    ],
  },
  {
    id: 7,
    slug: "semax",
    name: "Semax",
    shortName: "Semax",
    price: "$59.99",
    regularPrice: "$59.99",
    description:
      "Semax is a synthetic peptide based on a fragment of ACTH (adrenocorticotropic hormone). Developed in Russia, it has been investigated for its neuroprotective and nootropic effects in preclinical models, including BDNF and NGF pathway modulation.",
    shortDescription:
      "ACTH-fragment peptide. Studied for neuroprotection and BDNF modulation in preclinical research.",
    category: "Nootropic Peptides",
    tags: ["nootropic", "neuroprotection", "BDNF"],
    weight: "30mg",
    sku: "OP-SEMAX-30",
    inStock: true,
    purity: "≥98.5%",
    storage: "Store at -20°C. Protect from light and moisture.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: nasal spray bottle and vial set labeled Semax on soft pearl surface, neuroscience research aesthetic, deep navy-opal gradient background, ultra-clean clinical premium product photo",
    benefits: [
      "BDNF/NGF upregulation research",
      "Neuroprotection preclinical studies",
      "Cognitive pathway investigation",
    ],
  },
  {
    id: 8,
    slug: "mots-c",
    name: "MOTS-c",
    shortName: "MOTS-c",
    price: "$89.99",
    regularPrice: "$99.99",
    salePrice: "$89.99",
    description:
      "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) is a mitochondria-derived peptide encoded in the mitochondrial genome. Research has explored its role in metabolic regulation, AMPK activation, and insulin sensitivity.",
    shortDescription:
      "Mitochondria-derived peptide. Studied for AMPK activation and metabolic regulation in research models.",
    category: "Metabolic Peptides",
    tags: ["mitochondria", "AMPK", "metabolism", "longevity"],
    weight: "5mg",
    sku: "OP-MOTSC-5",
    inStock: true,
    purity: "≥98.0%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: elegant glass vial labeled MOTS-c with mitochondria-inspired cellular bokeh, dark background with warm amber-opal glow, ultra-premium peptide research product, clinical clean aesthetic",
    benefits: [
      "AMPK activation pathway research",
      "Insulin sensitivity preclinical studies",
      "Mitochondrial bioenergetics investigation",
    ],
  },
  {
    id: 9,
    slug: "epithalon",
    name: "Epithalon",
    shortName: "Epithalon",
    price: "$74.99",
    regularPrice: "$74.99",
    description:
      "Epithalon (Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from the pineal gland extract Epithalamin. Research in aging models has focused on its effects on telomerase activity and telomere elongation.",
    shortDescription:
      "Pineal tetrapeptide. Studied for telomerase activation and telomere dynamics in research models.",
    category: "Longevity Peptides",
    tags: ["longevity", "telomere", "anti-aging"],
    weight: "10mg",
    sku: "OP-EPITH-10",
    inStock: true,
    purity: "≥99.0%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: crystalline vial labeled Epithalon on dark surface with soft starlight-opal bokeh suggesting cosmic longevity, DNA helix light reflections, premium anti-aging research aesthetic",
    benefits: [
      "Telomerase activity research",
      "Telomere elongation studies",
      "Pineal gland pathway investigation",
    ],
  },
  {
    id: 10,
    slug: "cjc-1295",
    name: "CJC-1295 (No DAC)",
    shortName: "CJC-1295",
    price: "$44.99",
    regularPrice: "$44.99",
    description:
      "CJC-1295 (without DAC) is a synthetic analogue of growth hormone releasing hormone (GHRH). Research models have been used to investigate its effects on growth hormone secretion and IGF-1 levels in animal models.",
    shortDescription:
      "GHRH analogue (no DAC). Studied for growth hormone and IGF-1 pathway research in animal models.",
    category: "GH Secretagogues",
    tags: ["GH", "IGF-1", "GHRH"],
    weight: "2mg",
    sku: "OP-CJC-2",
    inStock: true,
    purity: "≥98.5%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: glass vial labeled CJC-1295 on dark navy surface, growth hormone research aesthetic, soft blue-opal gradient reflections, ultra-clean clinical laboratory product photography",
    benefits: [
      "Growth hormone secretion research",
      "IGF-1 pathway studies",
      "GHRH receptor activation investigation",
    ],
  },
  {
    id: 11,
    slug: "ipamorelin",
    name: "Ipamorelin",
    shortName: "Ipamorelin",
    price: "$44.99",
    regularPrice: "$44.99",
    description:
      "Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist. It is distinguished by its high specificity for GH release without concurrent ACTH, cortisol, or prolactin stimulation, making it a valuable tool in growth hormone research.",
    shortDescription:
      "Selective GH secretagogue. Studied for specific growth hormone release pathways in research models.",
    category: "GH Secretagogues",
    tags: ["GH", "ghrelin", "secretagogue"],
    weight: "2mg",
    sku: "OP-IPA-2",
    inStock: true,
    purity: "≥98.5%",
    storage: "Store at -20°C. Protect from light.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: sleek vial labeled Ipamorelin with precision laboratory instruments in background, dark navy opal surface, premium peptide research product, soft clinical lighting",
    benefits: [
      "Selective GH secretion research",
      "Ghrelin receptor pathway studies",
      "ACTH-independent GH axis investigation",
    ],
  },
  {
    id: 12,
    slug: "semaglutide",
    name: "Semaglutide",
    shortName: "Semaglutide",
    price: "$129.99",
    regularPrice: "$139.99",
    salePrice: "$129.99",
    description:
      "Semaglutide is a GLP-1 receptor agonist that has been extensively studied in clinical and preclinical research for metabolic regulation. As a research compound, it serves as an important tool for investigating GLP-1 receptor biology, pancreatic beta-cell function, and energy homeostasis.",
    shortDescription:
      "GLP-1 receptor agonist. Widely studied for metabolic and glycemic research in preclinical models.",
    category: "GLP-1 Class",
    tags: ["GLP-1", "metabolic", "glycemic research"],
    weight: "2mg",
    sku: "OP-SEMA-2",
    inStock: true,
    purity: "≥98.0%",
    storage: "Store at -20°C. Protect from light. Do not shake.",
    dosageInfo: "For research use only. Refer to peer-reviewed literature for experimental protocols.",
    imagePrompt:
      "Minimalist scientific product photography: premium glass vial labeled Semaglutide on dark polished surface with soft opal iridescent light gradients, clinical pharmaceutical research aesthetic, macro precision photography",
    benefits: [
      "GLP-1 receptor biology research",
      "Pancreatic beta-cell studies",
      "Metabolic energy homeostasis investigation",
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Repair Peptides",
  "Regenerative Peptides",
  "Metabolic Peptides",
  "GLP-1 Class",
  "Nootropic Peptides",
  "Longevity Peptides",
  "GH Secretagogues",
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) =>
    ["bpc-157", "ghk-cu", "nad-plus", "retatrutide", "semaglutide", "epithalon"].includes(p.slug)
  );
}
