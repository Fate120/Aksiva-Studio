import { Layout, Smartphone, Globe, Sparkles, Rocket, Cpu, Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Next.js & Web Development",
      description:
        "High-performance, lightning-fast web applications built on Next.js App Router, React, and Tailwind CSS with optimal SEO and Core Web Vitals.",
      icon: Globe,
      features: ["Server-Side Rendering (SSR)", "API & Backend Integrations", "Database & Auth Systems", "Clean & Scalable Codebase"],
      featured: true,
      tag: "Flagship Service",
    },
    {
      title: "UI/UX & Product Design",
      description:
        "Human-centric interface design and intuitive user experiences engineered to captivate audiences and maximize user conversion rates.",
      icon: Layout,
      features: ["Figma Design Systems", "High-Fidelity Interactive Prototypes", "Responsive Mobile-First UI", "Accessibility (a11y) Compliant"],
      featured: false,
      tag: "Design",
    },
    {
      title: "Brand Identity & Visuals",
      description:
        "Distinctive visual branding that elevates your business. Crafting logos, color palettes, visual guidelines, and digital graphic assets.",
      icon: Sparkles,
      features: ["Logo Design & Symbolics", "Brand Guidelines & Typography", "Vector & Iconography Assets", "Social Media & Marketing Kits"],
      featured: false,
      tag: "Branding",
    },
    {
      title: "Performance & SEO Engine",
      description:
        "Zero-compromise speed optimization. We tune every millisecond so your digital platform ranks top on search engines.",
      icon: Rocket,
      features: ["100/100 Lighthouse Performance", "Technical On-Page SEO", "Microdata & Schema Markup", "Image & Asset Compression"],
      featured: false,
      tag: "Optimization",
    },
    {
      title: "Custom Dashboards & SaaS",
      description:
        "Tailor-made software platforms, internal business tools, and customer portals equipped with real-time analytics and controls.",
      icon: Cpu,
      features: ["Interactive Analytics & Charts", "Role-Based Access Control", "Automated Workflows", "Secure Cloud Deployment"],
      featured: false,
      tag: "Enterprise",
    },
    {
      title: "Design System Architecture",
      description:
        "Standardized component libraries and tokens enabling rapid development, consistent branding, and effortless scaling.",
      icon: Layers,
      features: ["Reusable UI Components", "Tailwind Theme Tokens", "Comprehensive Documentation", "Cross-Platform Consistency"],
      featured: false,
      tag: "Systems",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-aksiva-navy-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-aksiva-orange font-bold font-mono">
            // OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Comprehensive Digital Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From inception to deployment, Aksiva Studio delivers end-to-end digital solutions that merge aesthetic elegance with high-tier engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  service.featured
                    ? "glass-panel-glow border-aksiva-orange/40 md:col-span-2 lg:col-span-1"
                    : "glass-panel hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-aksiva-orange/10 border border-aksiva-orange/30 flex items-center justify-center text-aksiva-orange group-hover:bg-aksiva-orange group-hover:text-white transition-all duration-300 shadow-md shadow-aksiva-orange/10">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-aksiva-orange-300 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-aksiva-orange" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link */}
                <div className="pt-2 border-t border-white/5">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-aksiva-orange transition-colors"
                  >
                    <span>Request this service</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
