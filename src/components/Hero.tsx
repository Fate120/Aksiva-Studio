"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Palette, Zap, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden grid-bg">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-aksiva-orange/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-blue-600/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-aksiva-orange/30 text-xs sm:text-sm font-medium text-aksiva-orange-300 shadow-sm animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-aksiva-orange" />
            <span>Digital Product Agency &amp; Web Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
            Transforming Visionary Ideas Into{" "}
            <span className="text-gradient-orange">High-Impact</span> Digital Realities
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            At <strong className="text-white font-semibold">Aksiva Studio</strong>, we design and build bespoke web applications, immersive UI/UX systems, and digital brand identities engineered for conversion and speed.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-aksiva-orange hover:bg-aksiva-orange-hover shadow-xl shadow-aksiva-orange/30 hover:shadow-aksiva-orange/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-200 glass-panel hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300"
            >
              <span>Explore Works</span>
            </Link>
          </div>

          {/* Highlights pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-aksiva-orange" />
              <span>Tailored Next.js Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-aksiva-orange" />
              <span>Pixel-Perfect UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-aksiva-orange" />
              <span>99+ Performance &amp; SEO Score</span>
            </div>
          </div>
        </div>

        {/* Interactive Hero Showcase / Agency Dashboard Widget */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl glass-panel-glow p-4 sm:p-6 shadow-2xl overflow-hidden border border-aksiva-orange/20">
            {/* Top Bar with mock browser controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                  aksiva-studio.app/overview
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Systems Operational
                </span>
              </div>
            </div>

            {/* Dashboard metrics inside hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {/* Metric 1 */}
              <div className="p-4 rounded-xl bg-aksiva-navy-800/80 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Performance Score</span>
                  <Zap className="w-4 h-4 text-aksiva-orange" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">100 / 100</div>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Core Web Vitals optimized
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-xl bg-aksiva-navy-800/80 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Average Load Time</span>
                  <Code2 className="w-4 h-4 text-aksiva-orange" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">0.42s</div>
                <p className="text-xs text-slate-400">Edge server rendering &amp; assets caching</p>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-xl bg-aksiva-navy-800/80 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Client Satisfaction</span>
                  <ShieldCheck className="w-4 h-4 text-aksiva-orange" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">4.9 / 5.0</div>
                <p className="text-xs text-aksiva-orange flex items-center gap-1">
                  ★ 100% On-time delivery guarantee
                </p>
              </div>
            </div>

            {/* Agency Feature Highlights Banner */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-aksiva-orange/10 via-white/5 to-transparent border border-aksiva-orange/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-aksiva-orange/20 border border-aksiva-orange/40 flex items-center justify-center text-aksiva-orange font-bold">
                  AS
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Digital Agency Solutions</h4>
                  <p className="text-xs text-slate-400">From brand identity &amp; Figma UI to production Next.js apps</p>
                </div>
              </div>
              <Link
                href="#estimator"
                className="text-xs font-semibold text-aksiva-orange hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>Calculate Project Budget</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
