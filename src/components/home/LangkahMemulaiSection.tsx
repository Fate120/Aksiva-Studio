"use client";

import { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  Handshake,
} from "lucide-react";

export default function LangkahMemulaiSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Konsultasi",
      desc: "Bangun ide branding digital bersama kami",
      color: "#FA6800",
      glow: "rgba(250, 104, 0, 0.4)",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "Design",
      desc: "Menghadirkan desain yang profesional dan estetis",
      color: "#FF7A1A",
      glow: "rgba(255, 122, 26, 0.4)",
      icon: Palette,
    },
    {
      num: "03",
      title: "Develop",
      desc: "Menerjemahkan desain menjadi kode tangguh dengan performa optimal.",
      color: "#6366F1",
      glow: "rgba(99, 102, 241, 0.4)",
      icon: Code2,
    },
    {
      num: "04",
      title: "Launch",
      desc: "Rilis Website premium dengan aksiva studio",
      color: "#1A6EAC",
      glow: "rgba(26, 110, 172, 0.4)",
      icon: Rocket,
    },
    {
      num: "05",
      title: "Mitra",
      desc: "Mengubah beban biaya perawatan tinggi menjadi skema kemitraan strategis yang efisien dan berkelanjutan bersama Aksiva Studio.",
      color: "#01518E",
      glow: "rgba(1, 81, 142, 0.4)",
      icon: Handshake,
    },
  ];

  // Continuous auto loop through steps 1 -> 5 every 1 second (1000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section
      ref={sectionRef}
      className="pt-28 pb-24 bg-white relative overflow-hidden"
      id="proses"
    >
      {/* Background radial gradient glow (Orange to Blue hue, no green) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-100/40 via-indigo-50/30 to-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Embedded CSS for smooth traveling laser/beam animation */}
      <style>{`
        @keyframes laserTravel {
          0% {
            left: 0%;
            opacity: 0;
            transform: translateX(-50%) scaleX(0.5);
          }
          15% {
            opacity: 1;
            transform: translateX(-50%) scaleX(1);
          }
          85% {
            opacity: 1;
            transform: translateX(-50%) scaleX(1);
          }
          100% {
            left: 100%;
            opacity: 0;
            transform: translateX(-50%) scaleX(0.5);
          }
        }
        .animate-traveling-beam {
          animation: laserTravel 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulseBorder {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 0.3; }
        }
        .animate-pulse-ring {
          animation: pulseBorder 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#E6F0F8] text-[#01518E] text-xs font-bold tracking-wider uppercase border border-[#01518E]/15">
              BAGAIMANA KAMI BEKERJA
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight transition-all duration-700 delay-150 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            5 Langkah Mudah Memulai{" "}
            <span className="font-serif-italic text-[#01518E]">
              Proyek Anda
            </span>
          </h2>
        </div>

        {/* 5-Step Visual Timeline with Continual Animation */}
        <div
          className={`pt-6 pb-2 transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 relative">
            {/* Desktop Horizontal Line (Orange to Blue Gradient) */}
            <div
              className={`hidden md:block absolute top-12 left-[10%] right-[10%] h-1.5 bg-slate-100 rounded-full overflow-hidden -z-0 transition-opacity duration-700 delay-200 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Static Background Gradient (Oren ke Biru #01518E, NO green/teal) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FA6800] via-[#FF7A1A] via-[#5B7CBF] via-[#1A6EAC] to-[#01518E] opacity-35" />

              {/* Dynamic filled progress that follows the active step */}
              <div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#FA6800] via-[#FF7A1A] via-[#5B7CBF] via-[#1A6EAC] to-[#01518E] transition-all duration-500 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />

              {/* Continuous Traveling Glowing Laser/Beam that traverses 1 -> 5 */}
              <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent animate-traveling-beam opacity-90 pointer-events-none" />
              <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#FA6800] to-[#01518E] animate-traveling-beam opacity-75 blur-[2px] pointer-events-none" />
            </div>

            {/* Step Nodes & Cards */}
            {steps.map((item, idx) => {
              const isActive = activeStep === idx;
              const StepIcon = item.icon;

              return (
                <div
                  key={idx}
                  className={`transition-all duration-500 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${idx * 100 + 200}ms` : "0ms",
                  }}
                >
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`relative z-10 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 ${
                      isActive ? "-translate-y-1.5" : "hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Circle Node with Glow & Active Pulse */}
                    <div className="relative mb-6">
                      {/* Pulsing ring around active node */}
                      {isActive && (
                        <div
                          className="absolute inset-0 -m-2 rounded-full animate-pulse-ring pointer-events-none"
                          style={{
                            backgroundColor: item.color,
                            filter: "blur(6px)",
                            opacity: 0.35,
                          }}
                        />
                      )}

                      <div
                        className={`w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-300 relative bg-white border-4 shadow-md ${
                          isActive
                            ? "scale-110 shadow-xl"
                            : "scale-100 group-hover:scale-105"
                        }`}
                        style={{
                          borderColor: item.color,
                          boxShadow: isActive
                            ? `0 10px 25px -5px ${item.glow}`
                            : undefined,
                        }}
                      >
                        {/* Number */}
                        <span
                          className="text-2xl font-black font-sans leading-none"
                          style={{ color: item.color }}
                        >
                          {item.num}
                        </span>

                        {/* Mini Icon indicator below number */}
                        <div
                          className="mt-1 flex items-center justify-center w-6 h-6 rounded-full transition-transform"
                          style={{
                            backgroundColor: isActive ? item.color : "transparent",
                            color: isActive ? "#ffffff" : item.color,
                          }}
                        >
                          <StepIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Active State Tag */}
                      {isActive && (
                        <span
                          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold text-white uppercase tracking-wider shadow-sm z-20 whitespace-nowrap"
                          style={{ backgroundColor: item.color }}
                        >
                          Aktif
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div
                      className={`w-full p-4 rounded-2xl transition-all duration-300 border ${
                        isActive
                          ? "bg-slate-50/90 border-slate-300 shadow-md scale-100"
                          : "bg-slate-50/30 border-slate-100 hover:bg-slate-50/70 hover:border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1.5 mb-1.5">
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor: isActive ? `${item.color}15` : "#f1f5f9",
                            color: item.color,
                          }}
                        >
                          Tahap {item.num}
                        </span>
                      </div>

                      <h3
                        className={`text-base font-bold mb-2 font-display transition-colors ${
                          isActive ? "text-slate-950 font-black" : "text-slate-800"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Subtle progress line when active */}
                      {isActive && (
                        <div className="mt-3 w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: item.color,
                              width: "100%",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
