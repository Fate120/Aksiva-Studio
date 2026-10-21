"use client";

import { useState, useMemo } from "react";
import { Calculator, Check, ArrowRight, Sparkles } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePriceUSD: number;
  basePriceIDR: number;
  description: string;
}

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState<string>("webapp");
  const [scale, setScale] = useState<number>(2); // 1 = Small, 2 = Medium, 3 = Large
  const [speed, setSpeed] = useState<string>("standard");
  const [addons, setAddons] = useState<string[]>(["seo"]);
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");

  const projectTypes: ServiceOption[] = [
    {
      id: "landing",
      name: "High-Converting Landing Page",
      basePriceUSD: 500,
      basePriceIDR: 7500000,
      description: "Focused single-page experience tailored for lead generation and product launch.",
    },
    {
      id: "corporate",
      name: "Full Brand & Corporate Website",
      basePriceUSD: 1200,
      basePriceIDR: 18000000,
      description: "Multi-page dynamic corporate presence with CMS and responsive brand showcase.",
    },
    {
      id: "webapp",
      name: "Custom Web Application / SaaS",
      basePriceUSD: 2400,
      basePriceIDR: 36000000,
      description: "Full-stack Next.js app with auth, database dashboards, APIs, and interactive UI.",
    },
    {
      id: "branding",
      name: "Brand Identity & Design System",
      basePriceUSD: 800,
      basePriceIDR: 12000000,
      description: "Comprehensive logo, vector iconography, color tokens, and Figma guidelines.",
    },
  ];

  const addonOptions = [
    { id: "seo", name: "Core Web Vitals & Technical SEO Engine", usd: 250, idr: 3500000 },
    { id: "cms", name: "Headless CMS Content Management", usd: 350, idr: 5000000 },
    { id: "motion", name: "Bespoke Micro-Interactions & Motion", usd: 300, idr: 4500000 },
    { id: "i18n", name: "Multi-Language (Indonesian & English)", usd: 200, idr: 3000000 },
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const selectedService = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
    
    // Scale multiplier
    const scaleMultiplier = scale === 1 ? 0.75 : scale === 2 ? 1 : 1.45;
    
    // Speed multiplier
    const speedMultiplier = speed === "express" ? 1.25 : speed === "flexible" ? 0.95 : 1;

    // Addons cost
    const addonsCostUSD = addons.reduce((sum, addId) => {
      const opt = addonOptions.find((o) => o.id === addId);
      return sum + (opt ? opt.usd : 0);
    }, 0);

    const addonsCostIDR = addons.reduce((sum, addId) => {
      const opt = addonOptions.find((o) => o.id === addId);
      return sum + (opt ? opt.idr : 0);
    }, 0);

    const totalUSD = Math.round(selectedService.basePriceUSD * scaleMultiplier * speedMultiplier + addonsCostUSD);
    const totalIDR = Math.round(selectedService.basePriceIDR * scaleMultiplier * speedMultiplier + addonsCostIDR);

    return { totalUSD, totalIDR, selectedServiceName: selectedService.name };
  }, [projectType, scale, speed, addons]);

  const formatPrice = (num: number, cur: "IDR" | "USD") => {
    if (cur === "USD") {
      return `$${num.toLocaleString("en-US")}`;
    }
    return `Rp ${num.toLocaleString("id-ID")}`;
  };

  return (
    <section id="estimator" className="py-24 relative bg-aksiva-navy-dark/95 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-aksiva-orange font-bold font-mono">
            // INTERACTIVE ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Plan Your Project Budget
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Tailor your requirements below to get an instant, transparent ballpark scope estimate from Aksiva Studio.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-2 p-1 rounded-full glass-panel border border-white/10 mt-4">
            <button
              onClick={() => setCurrency("IDR")}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all ${
                currency === "IDR"
                  ? "bg-aksiva-orange text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              IDR (Rupiah)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all ${
                currency === "USD"
                  ? "bg-aksiva-orange text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Type */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                1. Select Deliverable Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl text-left transition-all border ${
                      projectType === type.id
                        ? "glass-panel-glow border-aksiva-orange bg-aksiva-orange/10"
                        : "glass-panel border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-white">{type.name}</span>
                      {projectType === type.id && (
                        <div className="w-5 h-5 rounded-full bg-aksiva-orange flex items-center justify-center text-white shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Scope */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                2. Project Scale &amp; Complexity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: 1, label: "Starter", desc: "1-3 Key Views" },
                  { val: 2, label: "Medium", desc: "4-8 Key Views" },
                  { val: 3, label: "Extensive", desc: "9+ Views / Complex" },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setScale(item.val)}
                    className={`p-3 rounded-xl text-center transition-all border ${
                      scale === item.val
                        ? "glass-panel-glow border-aksiva-orange bg-aksiva-orange/10"
                        : "glass-panel border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span className="font-semibold text-sm text-white block">{item.label}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Timeline Speed */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                3. Desired Turnaround
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "flexible", label: "Flexible", sub: "Standard pacing" },
                  { id: "standard", label: "Standard", sub: "2-4 Weeks" },
                  { id: "express", label: "Express", sub: "Priority Sprint" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSpeed(item.id)}
                    className={`p-3 rounded-xl text-center transition-all border ${
                      speed === item.id
                        ? "glass-panel-glow border-aksiva-orange bg-aksiva-orange/10"
                        : "glass-panel border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span className="font-semibold text-sm text-white block">{item.label}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Addon features */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                4. Specialized Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl text-left transition-all border flex items-center justify-between ${
                        isChecked
                          ? "glass-panel-glow border-aksiva-orange/60 bg-aksiva-orange/5"
                          : "glass-panel border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-xs font-medium text-slate-200">{addon.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? "bg-aksiva-orange border-aksiva-orange text-white"
                            : "border-white/20"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Realtime Estimate Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl glass-panel-glow p-6 sm:p-8 border border-aksiva-orange/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-aksiva-orange">
                  <Calculator className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold tracking-widest font-mono">
                    Estimated Scope
                  </span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-aksiva-orange/20 text-aksiva-orange font-semibold">
                  Aksiva Studio Rate
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Estimated Investment Range:</span>
                <div className="text-3xl sm:text-4xl font-black text-white font-display text-gradient-orange">
                  {formatPrice(
                    currency === "USD" ? calculation.totalUSD : calculation.totalIDR,
                    currency
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  * Ballpark estimate subject to detailed technical specifications during discovery.
                </p>
              </div>

              {/* Selected Scope Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Selected Category:</span>
                  <strong className="text-white">{calculation.selectedServiceName}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Scope Level:</span>
                  <strong className="text-white">
                    {scale === 1 ? "Starter" : scale === 2 ? "Medium" : "Extensive"}
                  </strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Turnaround Pacing:</span>
                  <strong className="text-white capitalize">{speed}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Active Add-ons:</span>
                  <strong className="text-white">{addons.length} selected</strong>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-aksiva-orange hover:bg-aksiva-orange-hover shadow-lg shadow-aksiva-orange/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock In This Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
