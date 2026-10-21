"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";

export default function LayananSection() {
  const [activeTab, setActiveTab] = useState<string>("company-profile");

  const tabs = [
    { id: "company-profile", label: "Web Company Profile" },
    { id: "sekolah", label: "Web Sekolah" },
    { id: "mitra", label: "Mitra" },
    { id: "social-media", label: "Social Media" },
  ];

  const serviceFeatures: Record<string, string[]> = {
    "company-profile": [
      "Free Konsultasi",
      "Free Domain .COM (1 Thn)",
      "Hosting 1 Tahun",
      "Free Konsultasi Desain UI",
      "Free Konsultasi Arsitektur",
      "Free Konsultasi SEO Dasar",
    ],
    "sekolah": [
      "Free Konsultasi",
      "Free Domain .COM (1 Thn)",
      "Hosting 1 Tahun",
      "Sistem Profil & Berita Sekolah",
      "Integrasi Kontak & PPDB",
      "Free Konsultasi Maintenance",
    ],
    "mitra": [
      "Free Konsultasi",
      "Free Domain .COM (1 Thn)",
      "Hosting 1 Tahun",
      "Upload Konten Bulanan",
      "Maintenance Bulanan",
      "Dukungan Teknis Prioritas",
    ],
    "social-media": [
      "Konten Social Media",
      "Logo",
      "Profesional Look",
      "Konsisten Design",
      "Copywriting & Caption Riset",
      "Template Feed & Story",
    ],
  };

  const currentFeatures = serviceFeatures[activeTab] || serviceFeatures["company-profile"];
  const activeTabObj = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Refined background orbs - more subtle */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-50/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-[#E6F0F8] text-[#01518E] text-xs font-bold tracking-wider uppercase border border-[#01518E]/15">
            LAYANAN AKSIVA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solusi Digital Terpadu untuk{" "}
            <span className="font-serif-italic text-[#01518E]">
              Mengakselerasi Bisnis Anda
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Mulai dari pembuatan website profesional, pengelolaan media sosial, hingga strategi branding dirancang sistematis untuk meningkatkan online presence bisnis Anda.
          </p>
        </div>

        {/* Two-Column Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Team image with brand overlay */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl min-h-[360px] lg:min-h-[460px] bg-slate-900">
            <Image
              src="/images/team/group-foto-3.webp"
              alt="Lini Layanan Aksiva Studio"
              fill
              className="object-cover object-[center_38%]"
            />
            <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/50 shadow-md">
              <span className="text-sm sm:text-base font-black text-slate-900 block tracking-tight uppercase leading-none">
                LINI LAYANAN
              </span>
              <span className="text-sm sm:text-base font-black text-[#01518E] block tracking-tight uppercase leading-none mt-1">
                AKSIVA STUDIO
              </span>
            </div>
          </div>

          {/* Right: Dark Navy Card */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0A2540]/95 text-white p-6 sm:p-10 flex flex-col justify-between shadow-2xl border border-white/5 backdrop-blur-sm">
            <div>
              {/* Service Tabs */}
              <div className="flex flex-wrap gap-2 pb-6 border-b border-white/10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-white text-[#0A2540] shadow-md scale-105"
                        : "bg-white/10 text-white/85 hover:bg-white/20 hover:text-white border border-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Checklist Grid - Clean balanced 2-column grid */}
              <div className="py-8 border-b border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                      <div className="w-5 h-5 rounded-full bg-[#FA6800] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-sm shadow-orange-500/30">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Logo Badges: React, PHP, Next.js, JavaScript, Node.js, Golang */}
              <div className="pt-6 flex flex-wrap items-center gap-3">
                {[
                  {
                    name: "React",
                    svg: (
                      <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                      </svg>
                    ),
                  },
                  {
                    name: "PHP",
                    svg: (
                      <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="#777BB4">
                        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Next.js",
                    svg: (
                      <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="#FFFFFF">
                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                      </svg>
                    ),
                  },
                  {
                    name: "JavaScript",
                    svg: (
                      <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="#F7DF1E">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Node.js",
                    svg: (
                      <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="#5FA04E">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Golang",
                    svg: (
                      <svg role="img" viewBox="0 0 24 24" className="w-6 h-6" fill="#00ADD8">
                        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" />
                      </svg>
                    ),
                  },
                ].map((tech, i) => (
                  <div
                    key={i}
                    title={tech.name}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#FA6800] hover:bg-white/10 transition-all duration-200 hover:scale-110 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    {tech.svg}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-8">
              <a
                href={`https://wa.me/628562872671?text=${encodeURIComponent(
                  `Halo Aksiva Studio, saya ingin konsultasi layanan ${activeTabObj.label}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-lg shadow-orange-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2540] text-sm sm:text-base"
              >
                <span>Konsultasi Via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
