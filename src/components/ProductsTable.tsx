import { useState } from "react";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

import slitLampImg from "@/assets/products/slit-lamp.jpg";
import autorefractorImg from "@/assets/products/autorefractor.jpg";
import tonometerImg from "@/assets/products/tonometer.jpg";
import phoropterImg from "@/assets/products/phoropter.jpg";
import operatingTableImg from "@/assets/products/operating-table.jpg";
import operatingMicroscopeImg from "@/assets/products/operating-microscope.jpg";
import trialLensImg from "@/assets/products/trial-lens.jpg";
import chairStandImg from "@/assets/products/chair-stand.jpg";

const products = [
  {
    name: "Slit Lamp Biomicroscope",
    model: "SL‑500",
    category: "Diagnostic",
    price: 1450000,
    image: slitLampImg,
    description: "See what others miss. The SL‑500 delivers crystal-clear, high-magnification views of the cornea, iris, and lens — so you can catch early pathology before it progresses. 5-step magnification with premium LED illumination means fewer repeat exams and faster, more confident diagnoses.",
  },
  {
    name: "Autorefractor",
    model: "AR‑800",
    category: "Diagnostic",
    price: 2100000,
    image: autorefractorImg,
    description: "Cut refraction time in half. The AR‑800 delivers accurate objective measurements in seconds — no patient coaching required. Seamless EMR integration means prescriptions flow straight into your system. Perfect for busy clinics that can't afford to slow down.",
  },
  {
    name: "Non‑contact Tonometer",
    model: "NT‑300",
    category: "Diagnostic",
    price: 1250000,
    image: tonometerImg,
    description: "Glaucoma screening your patients won't dread. The NT‑300 measures intraocular pressure with a gentle air puff — no anaesthetic drops, no corneal contact. Auto-alignment and rapid readings let you screen more patients per hour with zero discomfort.",
  },
  {
    name: "Phoropter",
    model: "PH‑700",
    category: "Diagnostic",
    price: 1650000,
    image: phoropterImg,
    description: "The backbone of every great refraction. Silky-smooth lens switching and precision cross-cylinder controls make subjective refraction faster and more repeatable. Ergonomic counterbalance design means your optometrist stays sharp through a full day of exams.",
  },
  {
    name: "Surgical Operating Table",
    model: "OP‑T Pro",
    category: "Surgical",
    price: 3500000,
    image: operatingTableImg,
    description: "Rock-solid stability where it matters most. Hydraulic height, tilt, and headrest adjustment give your surgeon the exact positioning they need for microsurgery. Built-in side rails and anti-static surfaces meet international theatre standards.",
  },
  {
    name: "Operating Microscope",
    model: "OM‑X",
    category: "Surgical",
    price: 5200000,
    image: operatingMicroscopeImg,
    description: "See every layer, every time. Coaxial illumination and motorized zoom deliver the depth of field and clarity that cataract, vitreoretinal, and corneal procedures demand. Fine-focus control and ergonomic eyepieces reduce surgeon fatigue.",
  },
  {
    name: "Trial Lens Set",
    model: "TL‑200",
    category: "Consumables",
    price: 185000,
    image: trialLensImg,
    description: "Everything you need in one case. 200 precision-ground lenses — full sphere, cylinder, prism, and accessory range — organized in a durable aluminium case. The industry-standard choice for new or established practices.",
  },
  {
    name: "Chair & Stand Unit",
    model: "CS‑400",
    category: "Accessories",
    price: 950000,
    image: chairStandImg,
    description: "Transform your exam lane in one upgrade. Electric recline, adjustable arm rests, and an integrated instrument stand with built-in power strip — everything in a single, space-saving footprint.",
  },
];

const categories = ["All", "Diagnostic", "Surgical", "Consumables", "Accessories"];

const formatPrice = (n: number) => "₦" + n.toLocaleString("en-NG");

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={600}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg font-display">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] font-mono text-muted-foreground tracking-wider mb-1">{product.model}</p>
        <h3 className="font-display text-sm font-bold text-foreground leading-snug mb-2">
          {product.name}
        </h3>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary-dark transition-colors mb-3 self-start font-display"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          {open ? "Hide details" : "Why this product?"}
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100 mb-3" : "max-h-0 opacity-0"}`}>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-border/60 flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] text-muted-foreground font-medium">From</p>
            <p className="text-base font-extrabold text-foreground font-display">{formatPrice(product.price)}</p>
          </div>
          <a
            href={`https://wa.me/2349034584484?text=${encodeURIComponent(`Hi Yorlad, I'm interested in the ${product.name} (${product.model}). Please send me a quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-gold text-accent-foreground px-3.5 py-2 rounded-lg text-[11px] font-bold hover:bg-gold-light transition-colors shrink-0"
          >
            Quote <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Shop Equipment
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3 leading-tight">
            Instruments Built for <span className="text-primary">Precision</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Every instrument is certified, calibrated, and backed by our 12-month warranty. Prices are indicative — your quote includes delivery & installation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 font-display ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.model} product={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            All equipment ships from Lagos · Expert on-site installation · 12‑month parts & labour warranty
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
