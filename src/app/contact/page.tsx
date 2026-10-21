"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import HeaderNavbar from "@/components/HeaderNavbar";
import SiteFooter from "@/components/SiteFooter";
import CtaSantaiSection from "@/components/home/CtaSantaiSection";
import FormKebutuhanSection from "@/components/home/FormKebutuhanSection";

export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleFaq = (idx: number) => {
    setFaqOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const contactFaqs = [
    {
      q: "Apakah ada garansi untuk layanan yang diberikan?",
      a: "Tentu saja! Kami memberikan garansi bug fix gratis hingga 30–90 hari setelah peluncuran untuk memastikan performa website tetap prima.",
    },
    {
      q: "Bagaimana proses pembayaran untuk proyek?",
      a: "Pembayaran dilakukan bertahap secara aman via transfer bank: DP 50% saat kesepakatan kontrak, dan pelunasan 50% setelah website tuntas diuji dan siap tayang.",
    },
    {
      q: "Aset apa saja yang perlu saya siapkan?",
      a: "Cukup siapkan teks profil perusahaan, logo, dan foto pendukung jika ada. Tim desain kami juga siap membantu pembuatan aset visual jika belum tersedia.",
    },
    {
      q: "Apakah menyediakan layanan maintenance setelah proyek selesai?",
      a: "Ya, kami memiliki program pemeliharaan berkala untuk pembaruan fitur, backup database berkala, serta audit performa dan keamanan server.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <HeaderNavbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-28 bg-[#0A2847] text-white overflow-hidden text-center">
        {/* Decorative background glow spots matching Home */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase border border-white/15 backdrop-blur-sm">
            HUBUNGI KAMI
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
            Hubungi{" "}
            <span className="font-serif-italic text-[#FA6800]">
              Kami
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Punya ide proyek, pertanyaan seputar layanan, atau ingin mendiskusikan kebutuhan sistem Anda? Tim Aksiva Studio siap membantu memetakan solusi digital terbaik untuk bisnis Anda.
          </p>
        </div>
      </section>

      {/* 3 Quick Contact Cards */}
      <section className="relative -mt-10 sm:-mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Email */}
          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FA6800] shrink-0 border border-orange-100">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Kirim Email</span>
              <h4 className="text-sm font-bold text-slate-900">cs@aksivastudio.id</h4>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cs@aksivastudio.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#FA6800] font-semibold mt-1 hover:underline"
              >
                <span>Tulis Email</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Mulai WhatsApp</span>
              <h4 className="text-sm font-bold text-slate-900">+62 856-2872-671</h4>
              <a
                href="https://wa.me/628562872671?text=Halo%20Aksiva%20Studio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#FA6800] font-semibold mt-1 hover:underline"
              >
                <span>Kirim Pesan</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0A2847] shrink-0 border border-blue-100">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Kunjungi Lokasi</span>
              <h4 className="text-sm font-bold text-slate-900">Semarang, Jawa Tengah</h4>
              <a
                href="#lokasi-studio"
                className="inline-flex items-center gap-1 text-[11px] text-[#FA6800] font-semibold mt-1 hover:underline"
              >
                <span>Lihat Peta</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Kebutuhan (Identik dengan Home Page) */}
      <FormKebutuhanSection />

      {/* Section: Kunjungi Studio Kami */}
      <section id="lokasi-studio" className="py-24 bg-[#0A2847] text-white relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Map Illustration */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/10 bg-slate-100">
                <Image
                  src="/images/assets/map-semarang.png"
                  alt="Peta Lokasi Aksiva Studio Semarang"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Location Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-[#E6F0F8] text-[#0A2847] text-xs font-bold tracking-wider uppercase border border-[#0A2847]/15">
                LOKASI STUDIO
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Kunjungi Studio{" "}
                <span className="font-serif-italic text-[#FA6800]">
                  Kami
                </span>
              </h2>

              <div className="inline-block px-5 py-2 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-bold shadow-md">
                Semarang, Jawa Tengah, Indonesia
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Kami selalu terbuka untuk diskusi tatap muka secara langsung. Pintu studio kami terbuka lebar untuk sekadar ngopi santai sambil memetakan ide dan solusi digital terbaik bagi bisnis Anda.
              </p>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Semarang,Indonesia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
                >
                  <span>Buka Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pertanyaan Seputar Proses Kerja */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Soft blur orbs */}
        <div className="absolute top-1/4 -left-10 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-10 w-64 h-64 rounded-full bg-orange-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#E6F0F8] text-[#0A2847] text-xs font-bold tracking-wider uppercase border border-[#0A2847]/15">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Pertanyaan Seputar{" "}
              <span className="font-serif-italic text-[#0A2847]">
                Proses Kerja
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Berikut rincian hal-hal mendasar yang sering ditanyakan oleh klien sebelum bekerja sama dengan kami.
            </p>
          </div>

          {/* 2x2 FAQ Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactFaqs.map((faq, idx) => {
              const isOpen = !!faqOpen[idx];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between transition-all hover:border-[#0A2847]/30"
                >
                  <div
                    onClick={() => toggleFaq(idx)}
                    className="flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      {faq.q}
                    </h3>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "rotate-180 bg-[#FA6800] text-white" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {isOpen && (
                    <p className="text-xs text-slate-500 leading-relaxed mt-4 pt-3 border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 30-Minute Chat CTA (Unified across Home, Services, Contact) */}
      <CtaSantaiSection />

      <SiteFooter />
    </main>
  );
}
