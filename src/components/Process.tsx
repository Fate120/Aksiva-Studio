import { Compass, PenTool, Terminal, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy Blueprint",
      description:
        "We dissect your project objectives, target audience demographics, competitive landscape, and architectural constraints into a rock-solid roadmap.",
      icon: Compass,
      highlights: ["Requirements Workshop", "Tech Stack Architecture", "Scope & Milestone Definition"],
    },
    {
      step: "02",
      title: "UI/UX Concept & Visual Systems",
      description:
        "Translating brand identity into interactive Figma prototypes. We design every interface state, micro-animation, and mobile viewport before writing code.",
      icon: PenTool,
      highlights: ["Interactive Wireframes", "Design System & Tokens", "Client Review & Feedback Iteration"],
    },
    {
      step: "03",
      title: "High-Performance Engineering",
      description:
        "We craft pixel-perfect, scalable web apps utilizing modern Next.js App Router, TypeScript, and Tailwind CSS with strict semantic code standards.",
      icon: Terminal,
      highlights: ["Modular React Architecture", "Core Web Vitals Tuning", "API & Database Integrations"],
    },
    {
      step: "04",
      title: "Audit, Launch & Handover",
      description:
        "Rigorous cross-browser testing, automated accessibility audits, SEO indexing, and production deployment with dedicated post-launch support.",
      icon: CheckCircle,
      highlights: ["Lighthouse Performance Audit", "Custom Domain & SSL Setup", "Documentation & Handover"],
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-aksiva-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest text-aksiva-orange font-bold font-mono">
            // HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            The Aksiva Engineering Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A battle-tested 4-stage process designed to eliminate guesswork and ship world-class digital products on schedule.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between hover:border-aksiva-orange/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-white/20 font-mono group-hover:text-aksiva-orange/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-aksiva-orange/10 border border-aksiva-orange/30 flex items-center justify-center text-aksiva-orange group-hover:bg-aksiva-orange group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-aksiva-orange-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-aksiva-orange" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
