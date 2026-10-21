"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import HeaderNavbar from "@/components/HeaderNavbar";
import SiteFooter from "@/components/SiteFooter";
import CtaSantaiSection from "@/components/home/CtaSantaiSection";

interface ServiceDetail {
  title: string;
  description: string;
  price: string;
  priceLabel: string;
  detailLink: string;
  buttonText: string;
  waText: string;
}

const categoryData: Record<string, ServiceDetail> = {
  "Website Landing Page": {
    title: "Website Landing Page & Company Profile",
    description:
      "Solusi perancangan website responsif dan elegan mulai dari landing page berkonversi tinggi hingga company profile korporat, dioptimalkan untuk kecepatan loading, SEO-friendly, dan kredibilitas merek bisnis Anda.",
    price: "Rp. 499.000",
    priceLabel: "Investasi Mulai dari",
    detailLink: "https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20untuk%20diskusi%20proyek%20Website%20Landing%20Page",
    buttonText: "Mulai Diskusi Proyek",
    waText: "Halo Aksiva Studio, saya tertarik untuk diskusi proyek Website Landing Page",
  },
  "Web Apps": {
    title: "Pengembangan Web Apps & Sistem Kustom",
    description:
      "Arsitektur aplikasi web dinamis berskala bisnis dengan dashboard analitik interaktif, sistem manajemen database aman, otentikasi peran pengguna, integrasi API, dan sistem pembayaran otomatis.",
    price: "Rp. 2.499.000",
    priceLabel: "Investasi Mulai dari",
    detailLink: "https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20untuk%20diskusi%20proyek%20Web%20Apps%20dan%20Sistem%20Kustom",
    buttonText: "Konsultasi Arsitektur Web App",
    waText: "Halo Aksiva Studio, saya tertarik untuk diskusi proyek Web Apps dan Sistem Kustom",
  },
  "Mitra": {
    title: "Program Kemitraan Digital & IT Maintenance",
    description:
      "Layanan kemitraan teknologi jangka panjang untuk pemeliharaan server berkala, audit keamanan, backup database terjadwal, pembaruan fitur berkala, dan prioritas dukungan teknis 24/7 tanpa perlu tim in-house.",
    price: "Rp. 750.000",
    priceLabel: "Mulai dari / bulan",
    detailLink: "https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20dengan%20Program%20Kemitraan%20Digital",
    buttonText: "Gabung Kemitraan Aksiva",
    waText: "Halo Aksiva Studio, saya tertarik untuk bergabung dalam Program Kemitraan IT Aksiva",
  },
  "Social Media": {
    title: "Social Media Management & Visual Branding",
    description:
      "Pengelolaan akun media sosial menyeluruh mulai dari riset audiens, penyusunan kalender konten bulanan, desain visual feeds & reels profesional, copywriting interaktif, hingga evaluasi performa engagement rutin.",
    price: "Rp. 599.000",
    priceLabel: "Mulai dari / bulan",
    detailLink: "https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20dengan%20layanan%20Social%20Media%20Management",
    buttonText: "Tingkatkan Social Media",
    waText: "Halo Aksiva Studio, saya tertarik untuk layanan Social Media Management dan Branding",
  },
};

const categories = [
  "Website Landing Page",
  "Web Apps",
  "Mitra",
  "Social Media",
] as const;

type CategoryType = (typeof categories)[number];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Website Landing Page");

  const currentService = categoryData[activeCategory] || categoryData["Website Landing Page"];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <HeaderNavbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-[#0A2847] text-white overflow-hidden text-center">
        {/* Subtle decorative particles */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-orange-500 opacity-60" />
        <div className="absolute bottom-20 right-28 w-2 h-2 rounded-full bg-orange-400 opacity-60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
            Layanan &amp;{" "}
            <span className="font-serif-italic text-[#FA6800]">
              Ekosistem
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dari landing page, company profile, hingga web sekolah, kami siap menjadi mitra strategis dalam merancang produk digital terintegrasi dan pengelolaan social media.
          </p>
        </div>
      </section>

      {/* Section 1: Pembuatan Website & Sistem Digital */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Soft background orbs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-orange-50/60 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-10 w-72 h-72 rounded-full bg-orange-50/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Pembuatan Website &amp;{" "}
              <span className="font-serif-italic text-[#0A2847]">
                Sistem Digital
              </span>
            </h2>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#0A2847] text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Service Card (Dark Navy) */}
          <div className="rounded-3xl bg-[#0A2847] text-white p-6 sm:p-12 shadow-2xl overflow-hidden mt-8 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-6 rounded-full bg-[#FA6800]" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                    {currentService.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  {currentService.description}
                </p>

                {/* Investment Badge Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-md">
                  <div>
                    <span className="text-[11px] text-slate-400 block">{currentService.priceLabel}</span>
                    <span className="text-xl sm:text-2xl font-black text-white font-mono">
                      {currentService.price}
                    </span>
                  </div>

                  <a
                    href={currentService.detailLink}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#FA6800] transition-colors"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/628562872671?text=${encodeURIComponent(currentService.waText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
                  >
                    <span>{currentService.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden drop-shadow-2xl">
                  <Image
                    src="/images/assets/laptop-hero.png"
                    alt="Pengembangan Website Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Portofolio & Hasil Karya */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#0A2847] text-white p-6 sm:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Portofolio &amp;{" "}
                <span className="font-serif-italic font-normal">
                  Hasil Karya
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                Jelajahi rekam jejak proyek digital yang telah kami eksekusi mulai dari website interaktif hingga sistem kustom yang dirancang untuk mendukung pertumbuhan bisnis mitra.
              </p>
            </div>

            <Link
              href="/services#portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold shadow-md transition-all shrink-0 self-start md:self-auto"
            >
              <span>Selengkapnya</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white text-slate-900 overflow-hidden shadow-lg flex flex-col hover:-translate-y-1 transition-transform"
              >
                {/* Image preview */}
                <div className="relative aspect-[16/10] bg-slate-900">
                  <Image
                    src="/images/assets/laptop-hero.png"
                    alt="DreamHome Italian Furniture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#0A2847]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Company Profile
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                      DreamHome — Italian Furniture &amp; Living
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-4">
                      Perancangan website company profile dan katalog digital eksklusif untuk merek furnitur premium. Dikonsep dengan pendekatan estetika editorial, layout responsif, serta optimasi loading cepat untuk memberikan pengalaman eksplorasi produk yang mewah dan intuitif bagi calon pembeli.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Minute Chat CTA */}
      <CtaSantaiSection />

      <SiteFooter />
    </main>
  );
}
