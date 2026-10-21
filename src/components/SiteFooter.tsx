import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram } from "lucide-react";

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

export default function SiteFooter() {
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

  return (
    <footer className="relative bg-[#0A2847] text-white pt-16 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 bg-white shadow-sm border border-slate-100">
                <Image
                  src="/images/logo.png"
                  alt="Aksiva Studio"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full p-2"
                />
              </div>
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg flex items-center uppercase">
                Aksiva<span className="text-orange-400">Studio</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Kami adalah agensi digital asal Semarang yang fokus membangun produk IT fungsional dan estetis untuk membantu bisnis Anda berkembang secara eksponensial.
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/6285111329174?text=Halo%20Aksiva%20Studio,%20saya%20ingin%20konsultasi%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Konsultasi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Mitra (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Mitra
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href="https://paudharapanmulia.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Harapan Mulia
                </a>
              </li>
              <li>
                <a
                  href="https://paudcitamulia.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Cita Mulia
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hubungi Kami (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-xs text-slate-200 border border-white/10 hover:border-white/20 group"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block leading-tight">{item.label}</span>
                    <span className="font-semibold text-white group-hover:text-[#FA6800] transition-colors">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-xs text-slate-400 text-center space-y-1">
          <p>Copyright © 2024–2026 Aksiva Studio.</p>
          <p>Enjoy the rest of your day!</p>
        </div>
      </div>
    </footer>
  );
}
