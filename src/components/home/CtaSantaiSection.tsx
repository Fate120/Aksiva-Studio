import { ArrowUpRight } from "lucide-react";

export default function CtaSantaiSection() {
  return (
    <section className="py-20 bg-[#06182D] text-white relative overflow-hidden">
      {/* Subtle sparkling dots */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white shadow-glow" />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 rounded-full bg-orange-500" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-orange-400/80" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Ngobrol Santai 30 Menit.
          <br />
          <span className="font-serif-italic text-[#FA6800]">
            Gratis &amp; Tanpa Perlu di lanjut.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ceritakan kebutuhan bisnis Anda kami bantu petakan solusi teknis terbaik beserta estimasi anggarannya. Jika merasa belum cocok, sama sekali tidak masalah dan tidak harus lanjut.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20ingin%20jadwalkan%20sesi%20ngobrol%20santai%2030%20menit."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            <span>Jadwalkan Sesi Gratis</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20ingin%20tanya%20via%20WhatsApp"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <span>Tanya Via Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
