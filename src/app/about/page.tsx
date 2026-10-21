import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import HeaderNavbar from "@/components/HeaderNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <HeaderNavbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#06182D] text-white overflow-hidden">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/team/group-banner.webp"
            alt="Aksiva Studio Team"
            fill
            priority
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182D] via-[#06182D]/60 to-[#06182D]/40" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
            Tentang{" "}
            <span className="font-serif-italic text-[#FA6800]">
              Aksiva Studio
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Kami adalah mitra terpercaya dalam transformasi digital bisnis Anda, menyediakan layanan pembuatan website profesional hingga pengelolaan social media.
          </p>
        </div>
      </section>

      {/* Section 1: Bermula dari Satu Organisasi, Tumbuh Menjadi Kepercayaan */}
      <section className="w-full bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E6F0F8] text-[#01518E] text-xs font-bold tracking-wider uppercase border border-[#01518E]/15 self-start">
              TENTANG AKSIVA
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bermula dari Satu Organisasi,
              <br />
              <span className="font-serif-italic text-[#01518E]">
                Tumbuh Menjadi Kepercayaan
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Kami menemukan hal yang jauh lebih berharga daripada sekadar struktur: pertemanan dan kepercayaan. Fondasi inilah yang membuat kami saling menguatkan, melewati proses belajar yang panjang, hingga mengasah setiap keterampilan teknis menjadi sebuah jiwa.
            </p>
          </div>

          {/* Right: Half-section Photo (No Card, Edge to Edge) */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[400px] lg:min-h-[550px] bg-slate-900 select-none">
            <Image
              src="/images/team/duo-foto-ad.jpg"
              alt="Duo Aksiva Studio - Aghis & Duvan"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Menatap Jauh ke Depan (Arah & Langkah) */}
      <section className="w-full bg-slate-50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: Half-section Photo (No Card, Edge to Edge) */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[400px] lg:min-h-[550px] bg-slate-900 select-none order-2 lg:order-1">
            <Image
              src="/images/team/duo-foto-kt.jpg"
              alt="Duo Aksiva Studio - Khalid & Tetah"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right: Arah & Langkah Content */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 space-y-8 order-1 lg:order-2">
            <div className="space-y-3 max-w-xl">
              <span className="font-serif-italic font-bold text-2xl text-[#01518E] block">
                Arah :
              </span>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dari sanalah jiwa inovator itu tumbuh, mendorong kami untuk tidak berhenti di zona nyaman. Kini, dengan bekal skill dan semangat perubahan, kami menggerakkan revolusi digitalisasi yang berkelanjutan.
              </p>
            </div>

            <div className="space-y-3 max-w-xl">
              <span className="font-serif-italic font-bold text-2xl text-[#01518E] block">
                Langkah :
              </span>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Kami berkomitmen untuk menggunakan seluruh daya kami sebagai katalis, kami juga membawa perubahan nyata yang terukur dan berdampak luas bagi setiap mitra kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pilar Utama Aksiva (Reference: Toko Kopi Tuku Key Pillars) */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Sisi Kiri: Pilar Utama Aksiva (Background Putih - Strict Rectangular Editorial Blocks) */}
          <div className="lg:col-span-4 xl:col-span-3 bg-white flex items-center justify-center py-12 lg:py-16 px-6 sm:px-8 border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="flex items-stretch gap-3 sm:gap-4 lg:gap-5 shrink-0 h-[420px] sm:h-[460px] lg:h-[480px]">
              {/* Block 1: PILAR */}
              <div className="w-14 sm:w-16 lg:w-20 bg-[#01518E] text-white flex flex-col justify-between items-center py-9 sm:py-11 lg:py-12 border-2 border-black shadow-sm">
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">P</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">I</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">L</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">A</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">R</span>
              </div>

              {/* Block 2: UTAMA */}
              <div className="w-14 sm:w-16 lg:w-20 bg-[#FA6800] text-white flex flex-col justify-between items-center py-9 sm:py-11 lg:py-12 border-2 border-black shadow-sm">
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">U</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">T</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">A</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">M</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">A</span>
              </div>

              {/* Block 3: AKSIVA */}
              <div className="w-14 sm:w-16 lg:w-20 bg-[#01518E] text-white flex flex-col justify-between items-center py-9 sm:py-11 lg:py-12 border-2 border-black shadow-sm">
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">A</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">K</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">S</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">I</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">V</span>
                <span className="font-sans font-black text-base sm:text-lg lg:text-xl leading-none">A</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto Aktif, Sistematis, Inovatif (Background Biru - Top-Left Index Tabs Flush on Photos) */}
          <div className="lg:col-span-8 xl:col-span-9 bg-[#0A2847] flex items-center justify-center py-12 lg:py-16 px-6 sm:px-8 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 w-full max-w-6xl h-auto sm:h-[460px] lg:h-[480px]">
              {/* Card 1: AKTIF */}
              <div className="flex flex-col group h-full">
                <div className="self-start relative z-10 -mb-[2px] bg-[#01518E] text-white px-4 py-1.5 sm:px-5 sm:py-2 border-2 border-black">
                  <span className="font-mono font-bold tracking-widest text-xs sm:text-sm uppercase block">
                    AKTIF
                  </span>
                </div>
                <div className="relative flex-1 min-h-[320px] sm:min-h-0 w-full overflow-hidden border-2 border-black bg-slate-900 group-hover:scale-[1.01] transition-transform duration-300">
                  <Image
                    src="/images/team/salinan-dscf9028.jpg"
                    alt="Pilar Aktif Aksiva"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Card 2: SISTEMATIS */}
              <div className="flex flex-col group h-full">
                <div className="self-start relative z-10 -mb-[2px] bg-[#FA6800] text-white px-4 py-1.5 sm:px-5 sm:py-2 border-2 border-black">
                  <span className="font-mono font-bold tracking-widest text-xs sm:text-sm uppercase block">
                    SISTEMATIS
                  </span>
                </div>
                <div className="relative flex-1 min-h-[320px] sm:min-h-0 w-full overflow-hidden border-2 border-black bg-slate-900 group-hover:scale-[1.01] transition-transform duration-300">
                  <Image
                    src="/images/team/salinan-dscf9071.jpg"
                    alt="Pilar Sistematis Aksiva"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Card 3: INOVATIF */}
              <div className="flex flex-col group h-full">
                <div className="self-start relative z-10 -mb-[2px] bg-[#01518E] text-white px-4 py-1.5 sm:px-5 sm:py-2 border-2 border-black">
                  <span className="font-mono font-bold tracking-widest text-xs sm:text-sm uppercase block">
                    INOVATIF
                  </span>
                </div>
                <div className="relative flex-1 min-h-[320px] sm:min-h-0 w-full overflow-hidden border-2 border-black bg-slate-900 group-hover:scale-[1.01] transition-transform duration-300">
                  <Image
                    src="/images/team/salinan-dscf9089.jpg"
                    alt="Pilar Inovatif Aksiva"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Ingin Bermitra dengan Tim Kami? */}
      <section className="py-24 bg-slate-50 relative overflow-hidden text-center">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-orange-100/70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-orange-100/70 blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ingin Bermitra dengan{" "}
            <span className="font-serif-italic text-[#01518E]">
              Tim Kami?
            </span>
          </h2>

          <div className="pt-2">
            <a
              href="https://wa.me/6285111329174?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20untuk%20bermitra%20dengan%20tim%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#01518E] hover:bg-[#014275] shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
            >
              <span>Hubungi Kami Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
