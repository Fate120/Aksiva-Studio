import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-aksiva-navy-deep border-t border-white/10 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand Info (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Aksiva Studio"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  AKSIVA <span className="text-aksiva-orange">STUDIO</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                  Digital Experience Agency
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We design and engineer bespoke digital platforms, intuitive user interfaces, and brand systems that define tomorrow&apos;s digital standards.
            </p>

            <div className="pt-2">
              <a
                href="https://instagram.com/aksivastudio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-white/10 text-xs text-slate-300 hover:text-white hover:border-aksiva-orange/50 transition-all"
              >
                <Instagram className="w-4 h-4 text-aksiva-orange" />
                <span>Follow @aksivastudio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#services" className="hover:text-aksiva-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-aksiva-orange transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-aksiva-orange transition-colors">
                  Studio Process
                </Link>
              </li>
              <li>
                <Link href="#estimator" className="hover:text-aksiva-orange transition-colors">
                  Cost Estimator
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-aksiva-orange transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Expertise
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Next.js Web Applications</li>
              <li>UI/UX Design Systems</li>
              <li>Interactive Figma Prototypes</li>
              <li>Brand Identity &amp; Guidelines</li>
              <li>Core Web Vitals Optimization</li>
              <li>Headless E-commerce</li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Studio Notice */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>Email: contact@aksivastudio.com</p>
              <p>WhatsApp: +62 856-2872-671</p>
              <p>Surabaya, East Java, Indonesia</p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aksiva-orange/10 text-aksiva-orange text-[11px] font-medium border border-aksiva-orange/20">
                <Sparkles className="w-3.5 h-3.5" />
                Available for Q3/Q4 Projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aksiva Studio. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with precision in</span>
            <span className="text-aksiva-orange font-semibold">Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
