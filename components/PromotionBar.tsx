"use client";

import { useState, useEffect } from "react";

export default function PromotionBar() {
  const [visible, setVisible] = useState(true);

  // Optional: Auto hide after Ramadhan (bisa kamu hapus nanti)
  // const isActive = true;

  if (!visible) return null;

  return (
    <div className="w-full bg-pink-600 text-white text-sm">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between gap-4">

        <p className="flex-1 text-center md:text-left">
          🌙 <span className="font-medium">Program Ramadhan Creativo</span> — 
          Potongan registrasi hingga Rp250.000 untuk kelas Foundation.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/registration"
            className="bg-white text-pink-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-neutral-100 transition"
          >
            Daftar Sekarang
          </a>

          <button
            onClick={() => setVisible(false)}
            className="text-white/80 hover:text-white transition"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
}