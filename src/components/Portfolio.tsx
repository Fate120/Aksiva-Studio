"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Tag, Eye, X, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Web Engineering" | "UI/UX Design" | "Branding & Identity";
  summary: string;
  deliverables: string[];
  techStack: string[];
  client: string;
  year: string;
  gradient: string;
  imageAlt: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "aksiva-design-system",
      title: "Aksiva Studio Core Brand & Identity",
      category: "Branding & Identity",
      summary:
        "Complete visual identity, logo iconography, and digital design system developed for Aksiva Studio's digital presence.",
      deliverables: ["Brandmark Iconography", "Color Systems", "Typography Hierarchy", "Vector Master Assets"],
      techStack: ["Figma", "Illustrator", "Tailwind Design Tokens"],
      client: "Aksiva Studio",
      year: "2026",
      gradient: "from-aksiva-orange/30 via-slate-900 to-aksiva-navy-800",
      imageAlt: "Aksiva Studio Visual Identity System",
    },
    {
      id: "zenith-saas-platform",
      title: "Zenith Cloud SaaS Dashboard & Web App",
      category: "Web Engineering",
      summary:
        "High-performance cloud intelligence dashboard with realtime metrics, micro-frontend architecture, and sub-second rendering.",
      deliverables: ["Next.js App Router", "Server Components", "Tailwind UI", "Data Visualization"],
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Chart.js"],
      client: "Zenith Systems Ltd.",
      year: "2025",
      gradient: "from-blue-600/30 via-slate-900 to-aksiva-navy-800",
      imageAlt: "Zenith Cloud SaaS Dashboard",
    },
    {
      id: "aurora-fintech-mobile-ui",
      title: "Aurora Capital - FinTech Experience",
      category: "UI/UX Design",
      summary:
        "Next-generation digital banking and wealth investment mobile interface crafted with accessible glassmorphism and tactile interactions.",
      deliverables: ["User Research", "Wireframing", "High-Fi Figma Prototypes", "Interactive Design Specs"],
      techStack: ["Figma", "Design Tokens", "Protopie"],
      client: "Aurora Global Wealth",
      year: "2025",
      gradient: "from-emerald-500/20 via-slate-900 to-aksiva-navy-800",
      imageAlt: "Aurora Capital FinTech Mobile UI",
    },
    {
      id: "lumina-ecommerce-experience",
      title: "Lumina Contemporary Commerce Storefront",
      category: "Web Engineering",
      summary:
        "Headless e-commerce storefront delivering 99+ Lighthouse performance scores, instant page transitions, and streamlined checkout.",
      deliverables: ["Full E-commerce Next.js Frontend", "Stripe Checkout Integration", "Dynamic Inventory Cache"],
      techStack: ["Next.js", "React", "Tailwind", "REST API"],
      client: "Lumina Modern Living",
      year: "2025",
      gradient: "from-purple-600/20 via-slate-900 to-aksiva-navy-800",
      imageAlt: "Lumina Contemporary E-commerce",
    },
    {
      id: "kura-culinary-branding",
      title: "Kura Artisan Hospitality Visual Identity",
      category: "Branding & Identity",
      summary:
        "Minimalist brand identity, custom typography suite, packaging, and digital menu portal for a Michelin-recognized culinary brand.",
      deliverables: ["Logomark & Typographic Suite", "Physical Packaging Specs", "Digital Web Presence"],
      techStack: ["Adobe Suite", "Vector Arts", "Next.js"],
      client: "Kura Dining Group",
      year: "2024",
      gradient: "from-amber-600/20 via-slate-900 to-aksiva-navy-800",
      imageAlt: "Kura Artisan Hospitality Branding",
    },
    {
      id: "pulse-healthtech-platform",
      title: "Pulse Telehealth Patient Portal & App",
      category: "UI/UX Design",
      summary:
        "Comprehensive healthtech application design facilitating teleconsultations, electronic health records, and prescription dispatch.",
      deliverables: ["HIPAA-compliant UX System", "Medical Dashboard UI", "Mobile Application Flows"],
      techStack: ["Figma", "Tailwind CSS", "React Components"],
      client: "Pulse Medical Tech",
      year: "2024",
      gradient: "from-cyan-500/20 via-slate-900 to-aksiva-navy-800",
      imageAlt: "Pulse Telehealth Platform",
    },
  ];

  const categories = ["All", "Web Engineering", "UI/UX Design", "Branding & Identity"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-aksiva-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-aksiva-orange font-bold font-mono">
              // SELECTED PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mt-2">
              Featured Studio Projects
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
              A curated collection of web applications, interfaces, and digital brand identities delivered with precision.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-aksiva-orange text-white shadow-md shadow-aksiva-orange/30"
                    : "glass-panel text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl glass-panel border border-white/10 overflow-hidden hover:border-aksiva-orange/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Graphic Banner */}
              <div
                className={`h-52 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6 overflow-hidden border-b border-white/5`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5 blur-xl pointer-events-none" />
                
                <div className="text-center space-y-2 z-10">
                  <div className="w-12 h-12 mx-auto rounded-full bg-aksiva-orange/20 border border-aksiva-orange/40 flex items-center justify-center text-aksiva-orange group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-widest block">
                    {project.client}
                  </span>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 text-slate-200 backdrop-blur-md border border-white/10">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-aksiva-orange mb-2">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-aksiva-orange-300 transition-colors font-display mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        +{project.techStack.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-aksiva-orange flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Case</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Case Study Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-2xl rounded-2xl glass-panel-glow p-6 sm:p-8 border border-aksiva-orange/40 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-aksiva-orange font-semibold">
                    {selectedProject.category} // {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Client: <strong className="text-slate-200">{selectedProject.client}</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-aksiva-navy-800/80 border border-white/10">
                  <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-3">Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-aksiva-orange shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-3">Technologies &amp; Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Interested in similar architecture for your brand?
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-aksiva-orange hover:bg-aksiva-orange-hover transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
