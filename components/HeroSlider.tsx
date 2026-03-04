"use client";

import { useEffect, useState } from "react";

export default function HeroSlider() {
  const images = [
    "/home/slider-1.jpg",
    "/home/slider-2.jpg",
    "/home/slider-3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mb-10 md:mb-12">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]">
        {/* SLIDE TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Aktivitas kelas Creativo ${index + 1}`}
              className="w-full h-[360px] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* GRADIENT AKSEN BAWAH */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

        {/* DOT INDICATOR */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
