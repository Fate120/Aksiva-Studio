import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aksivastudio.id"),
  title: "Aksiva Studio | Solusi Digital Terpadu & Pembuatan Website Profesional",
  description:
    "Aksiva Studio adalah mitra terpercaya dalam transformasi digital bisnis Anda, menyediakan layanan pembuatan website profesional hingga pengelolaan social media asal Semarang.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Aksiva Studio | Solusi Digital Terpadu & Pembuatan Website Profesional",
    description:
      "Aksiva Studio adalah mitra terpercaya dalam transformasi digital bisnis Anda, menyediakan layanan pembuatan website profesional hingga pengelolaan social media asal Semarang.",
    url: "https://aksivastudio.id",
    siteName: "Aksiva Studio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aksiva Studio - Solusi Digital & Website Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aksiva Studio | Solusi Digital Terpadu & Pembuatan Website Profesional",
    description:
      "Aksiva Studio adalah mitra terpercaya dalam transformasi digital bisnis Anda, menyediakan layanan pembuatan website profesional hingga pengelolaan social media asal Semarang.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-800 bg-white selection:bg-aksiva-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
