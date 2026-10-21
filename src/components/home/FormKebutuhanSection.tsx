"use client";

import { useState } from "react";
import { Mail, Check, Send, Instagram, ChevronDown } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

export default function FormKebutuhanSection() {
  const categories = ["Website", "Social Media", "Lainnya"];
  const [category, setCategory] = useState("Website");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [websiteType, setWebsiteType] = useState("Web Company Profile");
  const [socialType, setSocialType] = useState("Instagram");
  const [idea, setIdea] = useState("");

  const contactLinks = [
    {
      label: "WhatsApp",
      value: "085111329174",
      href: "https://wa.me/6285111329174",
      icon: <WhatsAppIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />,
    },
    {
      label: "Instagram",
      value: "aksiva.studio",
      href: "https://www.instagram.com/aksiva.studio?psln=MWJ5cGcxcDBzN2ViaQ==",
      icon: <Instagram className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />,
    },
    {
      label: "TikTok",
      value: "aksiva.studio",
      href: "https://www.tiktok.com/@aksiva.studio?_r=1&_t=ZS-9Ak0xIT0LYr",
      icon: <TikTokIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />,
    },
    {
      label: "Email",
      value: "cs@aksivastudio.id",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=cs@aksivastudio.id",
      icon: <Mail className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />,
    },
  ];

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Halo Aksiva Studio!%0A%0A*Kategori Layanan:* ${encodeURIComponent(category)}`;
    if (category === "Website") {
      text += `%0A*Jenis Website:* ${encodeURIComponent(websiteType)}`;
    } else if (category === "Social Media") {
      text += `%0A*Jenis Social Media:* ${encodeURIComponent(socialType)}`;
    }
    text += `%0A*Nama:* ${encodeURIComponent(name)}`;
    text += `%0A*Nomor WA / Email:* ${encodeURIComponent(contact)}`;
    text += `%0A*Ide yang Ingin Diimplementasikan:*%0A${encodeURIComponent(idea)}`;
    window.open(`https://wa.me/6285111329174?text=${text}`, "_blank");
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Dark Consultation Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#091B31] text-white p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold tracking-wider uppercase border border-white/10">
                BINGUNG MEMULAI ?
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Jika Bingung Bisa
                <br />
                <span className="font-serif-italic text-[#FA6800]">
                  Tanya Kami!
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ceritakan kebutuhan bisnis Anda. Tim ahli kami siap mendengarkan, menganalisis, dan memberikan solusi terbaik untuk pertumbuhan digital Anda.
              </p>

              {/* Contact Pills */}
              <div className="space-y-2.5 pt-2">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs text-slate-200 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block leading-tight">{item.label}</span>
                      <span className="font-semibold text-white group-hover:text-[#FA6800] transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom highlight box */}
            <div className="mt-8 p-4 rounded-2xl bg-white text-slate-900 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FA6800] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    SESI KONSULTASI GRATIS
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ngobrol santai seputar ide Anda. Kami bantu buatkan strategi dasar tanpa biaya atau komitmen apapun di awal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl flex flex-col justify-between">
            <form onSubmit={handleSendWhatsapp} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Ceritakan Kebutuhan Kalian
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Isi form di bawah ini dan kami akan segera menghubungi Anda via WhatsApp.
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  LAYANAN YANG DIBUTUHKAN
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                        category === cat
                          ? "bg-[#091B31] text-white border-[#091B31]"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    NAMA LENGKAP
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="cth : Budi Santoso"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none focus:border-[#01518E] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    NOMOR WA / EMAIL
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="cth : 085111329174 atau nama@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none focus:border-[#01518E] transition-colors"
                  />
                </div>
              </div>

              {category === "Website" && (
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    JENIS WEBSITE
                  </label>
                  <div className="relative">
                    <select
                      value={websiteType}
                      onChange={(e) => setWebsiteType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none focus:border-[#01518E] transition-colors appearance-none cursor-pointer pr-10"
                    >
                      <option value="Web Company Profile">Web Company Profile</option>
                      <option value="Web Sekolah">Web Sekolah</option>
                      <option value="Web Apps">Web Apps</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}

              {category === "Social Media" && (
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    JENIS SOCIAL MEDIA
                  </label>
                  <div className="relative">
                    <select
                      value={socialType}
                      onChange={(e) => setSocialType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none focus:border-[#01518E] transition-colors appearance-none cursor-pointer pr-10"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Instagram & TikTok">Instagram & TikTok</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  IDE YANG INGIN DIIMPLEMENTASIKAN
                </label>
                <textarea
                  required
                  rows={4}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder={
                    category === "Website"
                      ? "Tuliskan fitur, referensi website, atau ide yang ingin diimplementasikan..."
                      : category === "Social Media"
                      ? "Tuliskan konsep konten, target audience, atau ide yang ingin diimplementasikan..."
                      : "Tuliskan detail kebutuhan atau ide yang ingin diimplementasikan..."
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none focus:border-[#01518E] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#0A53A8] hover:bg-[#074084] shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Via Whatsapp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
