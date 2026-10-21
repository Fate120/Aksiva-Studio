import { Quote, Star } from "lucide-react";

export default function TestimoniHome() {
  const reviews = [
    {
      institution: "Sekolah PAUD Cita Mulia",
      role: "Mitra Pendidikan Aksiva Studio",
      avatar: "CM",
      rating: 5,
      text: "Kerja sama dengan Aksiva Studio memberikan dampak nyata bagi sekolah kami. Kehadiran website yang profesional dan ramah anak memudahkan orang tua murid mengakses informasi serta pendaftaran secara online. Sebagai mitra, kami sangat terbantu dengan pemeliharaan sistem yang selalu siap dan tanggap.",
    },
    {
      institution: "Sekolah PAUD Harapan Mulia",
      role: "Mitra Pendidikan Aksiva Studio",
      avatar: "HM",
      rating: 5,
      text: "Aksiva Studio mengubah kebutuhan digital kami menjadi solusi kemitraan yang efisien dan berkelanjutan. Website sekolah kami kini tampil modern, cepat, dan aman, sementara tim Aksiva selalu mendampingi setiap pembaruan sistem tanpa membebani biaya operasional tinggi.",
    },
  ];

  return (
    <section className="py-24 bg-[#071930] text-white relative overflow-hidden scroll-mt-24" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FA6800]/20 text-[#FA6800] text-xs font-bold tracking-wider uppercase border border-[#FA6800]/30">
            TESTIMONI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Apa Kata{" "}
            <span className="font-serif-italic text-[#FF9D00]">
              Klien Kami
            </span>
          </h2>
        </div>

        {/* Carousel / Cards Grid (2 Mitra) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white text-slate-800 p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[#FA6800] stroke-[2]" />
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    {[...Array(r.rating)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] font-bold text-amber-700 ml-1">5.0</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FA6800] to-[#01518E] text-white font-extrabold flex items-center justify-center text-sm shrink-0 shadow-md shadow-orange-500/20">
                  {r.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-slate-900">{r.institution}</h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">
                      Mitra
                    </span>
                  </div>
                  <p className="text-xs text-[#FA6800] font-medium mt-0.5">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
