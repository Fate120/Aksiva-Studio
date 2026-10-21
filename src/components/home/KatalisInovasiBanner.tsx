"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  coords: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  haloGradient: string;
  badgeCoords: {
    left: string;
    top: string;
  };
  popOffset: string;
  hotspot: {
    left: string;
    width: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aghis",
    name: "Aghis",
    role: "Motor Penggerak Perubahan",
    image: "/images/team/aghis-cutout.png",
    coords: {
      left: "14.5%",
      top: "22.0%",
      width: "23.35%",
      height: "71.0%",
    },
    haloGradient:
      "radial-gradient(ellipse at 25% 45%, rgba(56, 189, 248, 0.35) 0%, rgba(1, 81, 142, 0.15) 50%, transparent 70%)",
    badgeCoords: {
      left: "26%",
      top: "60%",
    },
    popOffset: "translate-y-6 -translate-x-6",
    hotspot: {
      left: "0%",
      width: "28%",
    },
  },
  {
    id: "khalid",
    name: "Khalid",
    role: "Kreator Ekspresif Visual",
    image: "/images/team/khalid-cutout.png",
    coords: {
      left: "32.5%",
      top: "33.0%",
      width: "18.37%",
      height: "61.0%",
    },
    haloGradient:
      "radial-gradient(ellipse at 41% 52%, rgba(56, 189, 248, 0.35) 0%, rgba(1, 81, 142, 0.15) 50%, transparent 70%)",
    badgeCoords: {
      left: "41.5%",
      top: "66%",
    },
    popOffset: "translate-y-6 -translate-x-3",
    hotspot: {
      left: "28%",
      width: "18%",
    },
  },
  {
    id: "duvan",
    name: "Duvan",
    role: "Eksekutor Presisi Tinggi",
    image: "/images/team/duvan-cutout.png",
    coords: {
      left: "47.5%",
      top: "33.5%",
      width: "18.37%",
      height: "61.0%",
    },
    haloGradient:
      "radial-gradient(ellipse at 56% 52%, rgba(56, 189, 248, 0.35) 0%, rgba(1, 81, 142, 0.15) 50%, transparent 70%)",
    badgeCoords: {
      left: "56.5%",
      top: "66%",
    },
    popOffset: "translate-y-6 translate-x-3",
    hotspot: {
      left: "46%",
      width: "16%",
    },
  },
  {
    id: "tetah",
    name: "Tetah",
    role: "Arsitek Solusi Terbaik",
    image: "/images/team/tetah-cutout.png",
    coords: {
      left: "60.1%",
      top: "19.3%",
      width: "22.59%",
      height: "75.0%",
    },
    haloGradient:
      "radial-gradient(ellipse at 71% 45%, rgba(56, 189, 248, 0.35) 0%, rgba(1, 81, 142, 0.15) 50%, transparent 70%)",
    badgeCoords: {
      left: "72%",
      top: "60%",
    },
    popOffset: "translate-y-6 translate-x-6",
    hotspot: {
      left: "62%",
      width: "38%",
    },
  },
];

export default function KatalisInovasiBanner() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const activeMemberId = hoveredMember || selectedMember;
  const activeMember = TEAM_MEMBERS.find((m) => m.id === activeMemberId);

  return (
    <>
      <section className="w-full bg-[#01518E] text-white relative overflow-hidden min-h-[85vh] sm:min-h-screen flex flex-col justify-between">
        {/* Top text & link */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Bermula dari Satu Organisasi,
            <br />
            <span className="font-serif-italic font-normal">
              Berakhir Menjadi Katalis Inovasi
            </span>
          </h2>

          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-slate-900 text-sm sm:text-base font-bold shadow-xl hover:bg-slate-100 transition-all hover:scale-105 shrink-0 self-start md:self-auto group"
          >
            <span>Selengkapnya</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Team Banner Image with Interactive Spotlight - Full-width, Flush at Bottom */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[1.8/1] md:aspect-[2/1] lg:aspect-[2.1/1] overflow-hidden select-none mt-auto">
          {/* Inner 3:2 Canvas that keeps base image and cutouts locked 1:1 */}
          <div
            className={`relative w-full aspect-[3/2] -translate-y-[11%] transition-transform duration-700 ease-out origin-center ${
              activeMemberId ? "scale-[1.02]" : "scale-100"
            }`}
          >
            {/* Base Team Photo */}
            <Image
              src="/images/team/group-banner.webp"
              alt="Tim Katalis Inovasi Aksiva Studio"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className={`object-cover object-center transition-all duration-700 ease-out ${
                activeMemberId
                  ? "grayscale brightness-[0.72] contrast-[1.05]"
                  : "grayscale-0 brightness-100"
              }`}
            />

            {/* Dynamic Radial Spotlight Beam Background */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out ${
                activeMember ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: activeMember?.haloGradient || "transparent",
              }}
            />

            {/* Cutout Spotlight Layers for All 4 Members */}
            {TEAM_MEMBERS.map((m) => {
              const isCurrent = activeMemberId === m.id;
              return (
                <div
                  key={m.id}
                  className={`absolute pointer-events-none transition-all duration-500 ease-out origin-bottom ${
                    isCurrent
                      ? "opacity-100 scale-[1.06] -translate-y-1.5 z-20"
                      : "opacity-0 scale-[0.98] translate-y-0 z-10"
                  }`}
                  style={{
                    left: m.coords.left,
                    top: m.coords.top,
                    width: m.coords.width,
                    height: m.coords.height,
                    filter:
                      "drop-shadow(0 0 25px rgba(56, 189, 248, 0.60)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75))",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={m.image}
                      alt={`${m.name} - Aksiva Studio`}
                      fill
                      sizes="(max-width: 768px) 35vw, 400px"
                      className="object-fill"
                    />
                  </div>
                </div>
              );
            })}

            {/* Editorial Label Badges for Each Member (Reference: Cuplikan layar 2026-10-21 231743.png / Toko Kopi Tuku) */}
            {TEAM_MEMBERS.map((m) => {
              const isCurrent = activeMemberId === m.id;
              return (
                <div
                  key={m.id}
                  className="absolute pointer-events-none z-30"
                  style={{
                    left: m.badgeCoords.left,
                    top: m.badgeCoords.top,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`transition-all duration-300 ${
                      isCurrent
                        ? "opacity-100 translate-x-0 translate-y-0 scale-100 ease-[cubic-bezier(0.34,1.45,0.64,1)]"
                        : `opacity-0 scale-90 ${m.popOffset} ease-in`
                    }`}
                  >
                    <div className="bg-[#FAF7EE] border-2 border-black px-3 py-1 sm:px-4 sm:py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                      <span className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-black">
                        {m.name}
                      </span>
                      <span className="text-black/40 font-bold">•</span>
                      <span className="font-sans font-semibold text-[11px] sm:text-xs md:text-sm text-black">
                        {m.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Transparent Interactive Hover Hotspots across the photo */}
            <div className="absolute inset-0 z-20">
              {TEAM_MEMBERS.map((m) => (
                <div
                  key={m.id}
                  className="h-full cursor-pointer absolute top-0"
                  style={{
                    left: m.hotspot.left,
                    width: m.hotspot.width,
                  }}
                  onMouseEnter={() => setHoveredMember(m.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                  onClick={() =>
                    setSelectedMember(selectedMember === m.id ? null : m.id)
                  }
                  title={`${m.name}: ${m.role}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote beneath the banner as in the design */}
      <div className="w-full bg-white text-center py-12 sm:py-16 px-4">
        <p className="text-base sm:text-2xl font-medium text-slate-800 font-serif-italic max-w-3xl mx-auto leading-relaxed">
          &ldquo;Karena langkah kami tak{" "}
          <span className="text-[#01518E] font-semibold">
            pernah berhenti di garis awal.
          </span>
          &rdquo;
        </p>
      </div>
    </>
  );
}
