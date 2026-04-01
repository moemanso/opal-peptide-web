"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  ChevronRight,
  Microscope,
  FlaskConical,
  Star,
  TrendingUp,
  Lock,
  Truck,
  Brain,
  Dna,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, type Product } from "@/lib/products";

// ─── Floating particles background ──────────────────────────
const Particle: React.FC<{ x: number; y: number; delay: number; duration: number }> = ({
  x, y, delay, duration,
}) => (
  <motion.div
    className="absolute w-1 h-1 bg-[#1B8A9A] rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ y: [0, -40, 0], x: [0, (x % 20) - 10, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.6, 1] }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

// Stable particles — generated once, not on every render
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 53 + 7) % 100,
  delay: (i * 0.31) % 5,
  duration: 10 + (i * 0.7) % 20,
}));

const MoleculeBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {PARTICLES.map((p) => (
      <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} duration={p.duration} />
    ))}
    <motion.div
      className="absolute top-1/4 left-1/4 w-40 h-40 border border-[#1B8A9A]/15 rounded-full"
      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-28 h-28 border border-[#1B8A9A]/15 rounded-full"
      animate={{ scale: [1, 1.3, 1], rotate: [360, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-20 h-20 border border-[#C9A96E]/10 rounded-full"
      animate={{ scale: [1, 1.4, 1], rotate: [0, -360] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// ─── Shimmer CTA button ──────────────────────────────────────
const ShimmerButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}> = ({ children, className = "", href, onClick }) => {
  const inner = (
    <Button
      onClick={onClick}
      className={`relative overflow-hidden bg-[#1B8A9A] hover:bg-[#166F7D] text-white font-semibold min-h-[52px] px-8 text-base ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Button>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
};

// ─── Product card with real AI image ────────────────────────
const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasDiscount = product.salePrice && product.salePrice !== product.regularPrice;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/product/${product.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B8A9A] rounded-2xl">
        <Card
          className="group relative overflow-hidden bg-slate-900/60 border-slate-700/60 hover:border-[#1B8A9A]/60 transition-all duration-300 cursor-pointer gap-0 py-0"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-slate-800">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#1B8A9A]/25 to-transparent z-10"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            {!imgError ? (
              <motion.div
                className="w-full h-full"
                animate={{ scale: hovered ? 1.07 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={`/products/${product.slug}.jpg`}
                  alt={`${product.name} research peptide`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={() => setImgError(true)}
                />
              </motion.div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FlaskConical className="w-16 h-16 text-[#1B8A9A]/40" />
              </div>
            )}

            {/* Badges */}
            {hasDiscount && (
              <span className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#C9A96E] text-slate-950 text-xs font-bold rounded-full uppercase tracking-wide">
                Sale
              </span>
            )}
            <span className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-slate-900/80 text-[#1B8A9A] text-xs font-semibold rounded-full border border-[#1B8A9A]/30">
              {product.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Purity badge */}
            <div className="flex items-center gap-1.5 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1B8A9A]" />
              <span className="text-xs text-[#1B8A9A] font-semibold">Purity {product.purity}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-100 mb-1.5 font-serif leading-tight group-hover:text-[#4AAFBE] transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#1B8A9A]">
                  {hasDiscount ? product.salePrice : product.price}
                </span>
                {hasDiscount && (
                  <span className="text-sm text-slate-500 line-through">{product.regularPrice}</span>
                )}
              </div>
              <motion.div animate={{ x: hovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronRight className="w-5 h-5 text-[#1B8A9A]" />
              </motion.div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

// ─── Animated trust badge ────────────────────────────────────
const TrustBadgeCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-[#1B8A9A]/50 transition-all duration-300"
    >
      <motion.div
        className="mb-4 p-4 rounded-2xl bg-[#1B8A9A]/10 border border-[#1B8A9A]/20"
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-base font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

// ─── Category mapping ────────────────────────────────────────
const CATEGORY_META: Record<string, { icon: React.ReactNode; id: string }> = {
  "All": { icon: <Sparkles className="w-4 h-4" />, id: "All" },
  "Repair Peptides": { icon: <ShieldCheck className="w-4 h-4" />, id: "Repair Peptides" },
  "GLP-1 Class": { icon: <TrendingUp className="w-4 h-4" />, id: "GLP-1 Class" },
  "Nootropic Peptides": { icon: <Brain className="w-4 h-4" />, id: "Nootropic Peptides" },
  "Longevity Peptides": { icon: <Star className="w-4 h-4" />, id: "Longevity Peptides" },
  "Metabolic Peptides": { icon: <Zap className="w-4 h-4" />, id: "Metabolic Peptides" },
  "GH Secretagogues": { icon: <Dna className="w-4 h-4" />, id: "GH Secretagogues" },
  "Regenerative Peptides": { icon: <FlaskConical className="w-4 h-4" />, id: "Regenerative Peptides" },
};

const TAB_CATEGORIES = ["All", "Repair Peptides", "GLP-1 Class", "Nootropic Peptides", "Longevity Peptides"];

// ─── Main homepage ───────────────────────────────────────────
export default function InteractiveHomepage() {
  const [activeTab, setActiveTab] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale  = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);

  const visibleProducts = activeTab === "All"
    ? PRODUCTS.slice(0, 9)
    : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      {/* ── Hero ───────────────────────────────────────────── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0A1628] to-slate-950" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(27,138,154,0.12),transparent_60%)]" aria-hidden="true" />
        <MoleculeBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-[#1B8A9A]/15 text-[#4AAFBE] border border-[#1B8A9A]/30 px-4 py-1.5 text-sm">
              <Sparkles className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Premium Research Peptides
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-serif leading-[1.02]"
          >
            <span className="bg-gradient-to-r from-slate-200 via-[#4AAFBE] to-slate-200 bg-clip-text text-transparent">
              Opal Peptide
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 mb-3 max-w-2xl mx-auto leading-relaxed"
          >
            Precision-synthesized compounds for advanced scientific research.
            Every batch independently verified. CoA on every order.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm text-slate-600 mb-10"
          >
            For research use only — not for human consumption.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ShimmerButton href="/shop">
              Browse Full Catalog
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </ShimmerButton>
            <Button
              variant="outline"
              className="min-h-[52px] px-8 text-base border-slate-600 bg-slate-800/50 hover:border-[#1B8A9A] hover:bg-[#1B8A9A]/15 text-slate-100"
              asChild
            >
              <Link href="/about">
                <Microscope className="w-5 h-5 mr-2" aria-hidden="true" />
                Our Standards
              </Link>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
          >
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#1B8A9A]" />, text: "≥98% Purity" },
              { icon: <Award className="w-5 h-5 text-[#1B8A9A]" />, text: "CoA Every Order" },
              { icon: <Zap className="w-5 h-5 text-[#1B8A9A]" />, text: "24h Processing" },
              { icon: <Lock className="w-5 h-5 text-[#1B8A9A]" />, text: "Cold-Chain Shipping" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                {icon}
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <ChevronRight className="w-8 h-8 text-[#1B8A9A]/60 rotate-90" />
        </motion.div>
      </motion.section>

      {/* ── Trust badges ───────────────────────────────────── */}
      <section className="py-20 bg-slate-950/80" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            id="trust-heading"
            className="sr-only"
          >
            Why researchers choose Opal Peptide
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-[#1B8A9A]" />, title: "≥98% Purity Verified", desc: "Independent HPLC & mass spec on every batch. No exceptions.", delay: 0 },
              { icon: <Lock className="w-8 h-8 text-[#1B8A9A]" />, title: "Secure & Discreet", desc: "256-bit SSL. Neutral packaging. No brand markings on exterior.", delay: 0.1 },
              { icon: <Truck className="w-8 h-8 text-[#1B8A9A]" />, title: "Cold-Chain Shipping", desc: "Temperature-controlled from our facility to your lab.", delay: 0.2 },
              { icon: <Award className="w-8 h-8 text-[#1B8A9A]" />, title: "CoA on Every Order", desc: "Batch-specific Certificate of Analysis. Downloadable anytime.", delay: 0.3 },
            ].map(({ icon, title, desc, delay }) => (
              <TrustBadgeCard key={title} icon={icon} title={title} description={desc} delay={delay} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Products with tab filter ────────────────────────── */}
      <section className="py-20 bg-slate-950" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold text-[#1B8A9A] uppercase tracking-widest mb-3">Featured Compounds</p>
            <h2 id="products-heading" className="text-5xl md:text-6xl font-bold mb-4 font-serif text-slate-100">
              Premium Collection
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              {PRODUCTS.length} research-grade compounds. All independently verified.
            </p>
          </motion.div>

          <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center h-auto gap-1 w-full max-w-3xl mx-auto mb-12 bg-slate-800/60 border border-slate-700/60 p-1.5 rounded-2xl">
              {TAB_CATEGORIES.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm">
                  {CATEGORY_META[cat]?.icon}
                  <span>{cat}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {TAB_CATEGORIES.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {(cat === "All" ? PRODUCTS.slice(0, 9) : PRODUCTS.filter((p) => p.category === cat)).map(
                    (product, i) => (
                      <ProductCard key={product.slug} product={product} index={i} />
                    )
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <ShimmerButton href="/shop">
              View All {PRODUCTS.length} Compounds
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* ── CTA band ───────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden bg-slate-950" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B8A9A]/8 via-transparent to-[#1B8A9A]/8" aria-hidden="true" />
        <MoleculeBackground />
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FlaskConical className="w-14 h-14 text-[#1B8A9A] mx-auto mb-6" aria-hidden="true" />
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-5 font-serif text-slate-100">
              Ready to Start Your Research?
            </h2>
            <p className="text-lg text-slate-400 mb-3 max-w-xl mx-auto">
              Join researchers worldwide who trust Opal Peptide for verified,
              documented, research-grade compounds.
            </p>
            <p className="text-xs text-slate-600 mb-8">
              For research use only — not for human consumption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton href="/shop">
                Browse Catalog
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </ShimmerButton>
              <Button
                variant="outline"
                className="min-h-[52px] px-8 text-base border-slate-600 bg-slate-800/50 hover:border-[#1B8A9A] hover:bg-[#1B8A9A]/15 text-slate-100"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
