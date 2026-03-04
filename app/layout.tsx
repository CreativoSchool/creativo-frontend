import "./globals.css";
import PromotionBar from "@/components/PromotionBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";


import type { Metadata } from "next";

export const metadata = {
  title: {
    default: "Creativo School | Kursus Desain & Kreatif di Surabaya",
    template: "%s | Creativo School",
  },
  description:
    "Creativo School adalah ruang belajar kreatif untuk anak dan remaja di Surabaya.",

  openGraph: {
    title: "Creativo School | Ruang Belajar Kreatif di Surabaya",
    description:
      "Creativo School adalah ruang belajar kreatif untuk anak dan remaja dengan program desain, ilustrasi, dan kreativitas digital di Surabaya.",
    url: "https://creativo-school.com",
    siteName: "Creativo School",
    locale: "id_ID",
    type: "website",
  },

  metadataBase: new URL("https://creativo-school.com"),

  alternates: {
    canonical: "/",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-white text-black">
        {/*PROMOBAR*/}
        <PromotionBar />

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
