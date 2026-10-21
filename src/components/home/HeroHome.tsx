import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroHome() {
  return (
    <section className="relative pt-[120px] pb-[100px] md:pt-[140px] md:pb-[120px] overflow-hidden bg-[#0A2847] text-white">
      {/* Enhanced decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow-slow" />
        <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bold Headline & Call to action */}
          <div className="lg:col-span-1 space-y-6 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-italic leading-[1.05]">
                <span className="text-[#FA6800] block drop-shadow-[0_2px_8px_rgba(250,104,0,0.3)] animate-fade-in-up-delay-1">Aktif</span>
                <span className="text-[#FA6800] block drop-shadow-[0_2px_8px_rgba(250,104,0,0.3)] animate-fade-in-up-delay-2">Sistematis</span>
                <span className="text-[#FA6800] block drop-shadow-[0_2px_8px_rgba(250,104,0,0.3)] animate-fade-in-up-delay-3">Inovatif</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up-delay-4">
              Kami adalah mitra terpercaya dalam transformasi digital bisnis Anda, menyediakan layanan pembuatan website profesional hingga pengelolaan social media.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up-delay-5">
              <a
                href="https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20ingin%20konsultasi%20layanan%20pembuatan%20website."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2847]"
              >
                <span>Konsultasi Via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Laptop Mockup with Floating Badges */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3] flex items-center justify-center">
              {/* Badge 1: 24/7 SUPPORT AVAILABLE */}
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 z-20 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex flex-col">
                <span className="text-xs sm:text-sm font-black block leading-none font-sans">24/7</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">SUPPORT AVAILABLE</span>
              </div>

              {/* Badge 2: FREE DOMAIN & HOSTING */}
              <div className="absolute top-2 right-1 sm:top-3 sm:right-2 z-20 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex flex-col text-right sm:text-left">
                <span className="text-xs sm:text-sm font-black block leading-none font-sans text-blue-600">FREE</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">DOMAIN &amp; HOSTING</span>
              </div>

              {/* Badge 3: MODERN UI/UX DESIGN */}
              <div className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex flex-col">
                <span className="text-xs sm:text-sm font-black block leading-none font-sans">MODERN</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">UI/UX DESIGN</span>
              </div>

              {/* Badge 4: BEST VALUE FOR MONEY */}
              <div className="absolute bottom-2 left-1 sm:bottom-3 sm:left-2 z-20 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-500 text-white text-[11px] sm:text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                  $
                </span>
                <div>
                  <span className="text-xs sm:text-sm font-black block leading-none font-sans">BEST VALUE</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">FOR MONEY</span>
                </div>
              </div>

              {/* Badge 5: MITRA MAINTENANCE 1 TAHUN */}
              <div className="absolute -bottom-1 right-1 sm:bottom-1 sm:right-2 z-20 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex flex-col text-right sm:text-left">
                <span className="text-xs sm:text-sm font-black block leading-none font-sans text-cyan-600">MITRA</span>
                <span className="text-[8px] sm:text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">MAINTENANCE 1 TAHUN</span>
              </div>

              {/* Mockup Laptop Image */}
              <div className="relative w-full h-full hover:scale-105 transition-transform duration-500 drop-shadow-2xl">
                <Image
                  src="/UI/mockup.png"
                  alt="Aksiva Studio Digital Mockup Showcase"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
