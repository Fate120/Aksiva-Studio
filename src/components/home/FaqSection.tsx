"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama waktu pengerjaan proyek website?",
      a: "Umumnya membutuhkan waktu 1–3 minggu tergantung skala dan kompleksitas fitur. Timeline pasti akan disepakati bersama saat tahap Konsultasi & Arsitektur Ide.",
    },
    {
      q: "Apakah ada garansi untuk layanan yang diberikan?",
      a: "Ya, setiap website yang kami kembangkan dilengkapi garansi bug fix gratis selama 30 hingga 90 hari setelah rilis, serta panduan pengelolaan lengkap.",
    },
    {
      q: "Aset apa saja yang perlu saya siapkan?",
      a: "Cukup siapkan profil bisnis, materi konten teks, foto/logo bila sudah ada. Jika belum lengkap, tim Aksiva Studio siap membantu menyusun dan memproduksi aset visualnya.",
    },
    {
      q: "Bagaimana proses pembayaran untuk proyek?",
      a: "Sistem pembayaran kami transparan dan terbagi menjadi termin: Down Payment (DP) 50% di awal kontrak, dan pelunasan 50% setelah website tuntas dan siap online.",
    },
    {
      q: "Apakah menyediakan layanan maintenance setelah proyek selesai?",
      a: "Tentu! Kami menyediakan skema kemitraan maintenance tahunan untuk update sistem, backup berkala, dan optimasi performa berkelanjutan.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft circular blur */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block px-4 py-1 rounded-full bg-[#E6F0F8] text-[#01518E] text-xs font-bold tracking-wider uppercase border border-[#01518E]/15">
              FAQ
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ada yang Ingin
              <br />
              <span className="font-serif-italic text-[#01518E]">
                Ditanyakan?
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
              Punya pertanyaan seputar layanan, estimasi pengerjaan, atau alur kerja kami? Temukan jawaban lengkapnya di bawah ini atau hubungi tim kami langsung untuk diskusi lebih lanjut.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-md shadow-orange-500/30 transition-all hover:scale-105"
              >
                <span>Hubungi Kami</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? "bg-[#FA6800] text-white rotate-180"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
