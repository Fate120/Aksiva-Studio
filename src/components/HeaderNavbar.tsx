"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function HeaderNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Kontak", href: "/contact" },
  ];

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    setIsScrolled(window.scrollY > 50);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300 ${
      isScrolled 
        ? "top-0 py-2" 
        : "top-6"
    }`}>
      <div className={`max-w-5xl mx-auto rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A2847]/95 backdrop-blur-md shadow-lg shadow-black/20 border border-white/10"
          : "bg-transparent backdrop-blur-none shadow-none border-none"
      }`}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 bg-white shadow-sm border border-slate-100">
            <Image
              src="/images/logo.png"
              alt="Aksiva Studio"
              width={48}
              height={48}
              className="object-contain w-full h-full p-2"
              priority
            />
          </div>
          <span className="font-extrabold tracking-tight text-white text-base sm:text-lg flex items-center uppercase">
            Aksiva<span className="text-orange-400">Studio</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20digital."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#FA6800] hover:bg-[#E55D00] shadow-md shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Mulai Konsultasi</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 max-w-5xl mx-auto bg-black rounded-2xl shadow-xl border border-slate-700 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-4 py-2 rounded-xl text-sm font-medium ${
              isHome ? "bg-orange-500 text-white" : "text-slate-300 hover:bg-white/10"
            }`}
          >
            Beranda
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 rounded-xl text-sm font-medium ${
                  isActive ? "bg-orange-500 text-white" : "text-slate-300 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-700">
            <a
              href="https://wa.me/628562872671?text=Halo%20Aksiva%20Studio,%20saya%20tertarik%20untuk%20konsultasi%20layanan%20digital."
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-600"
            >
              <span>Mulai Konsultasi</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
