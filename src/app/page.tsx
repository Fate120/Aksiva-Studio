import HeaderNavbar from "@/components/HeaderNavbar";
import HeroHome from "@/components/home/HeroHome";
import LayananSection from "@/components/home/LayananSection";
import KatalisInovasiBanner from "@/components/home/KatalisInovasiBanner";
import LangkahMemulaiSection from "@/components/home/LangkahMemulaiSection";
import TestimoniHome from "@/components/home/TestimoniHome";
import FaqSection from "@/components/home/FaqSection";
import CtaSantaiSection from "@/components/home/CtaSantaiSection";
import FormKebutuhanSection from "@/components/home/FormKebutuhanSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Floating Header */}
      <HeaderNavbar />

      {/* 1. Hero */}
      <HeroHome />

      {/* 2. Layanan Aksiva */}
      <LayananSection />

      {/* 3. Blue Katalis Inovasi Banner */}
      <KatalisInovasiBanner />

      {/* 4. 5 Langkah Mudah Memulai Proyek Anda */}
      <LangkahMemulaiSection />

      {/* 5. Apa Kata Klien Kami (Testimoni) */}
      <TestimoniHome />

      {/* 6. FAQ (Ada yang Ingin Ditanyakan?) */}
      <FaqSection />

      {/* 7. Ngobrol Santai 30 Menit (CTA) */}
      <CtaSantaiSection />

      {/* 8. Ceritakan Kebutuhan Kalian (Form) */}
      <FormKebutuhanSection />

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
