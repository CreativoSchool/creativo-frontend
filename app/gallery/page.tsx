"use client";

import { useEffect, useState } from "react";
import SectionAccent from "@/components/ui/SectionAccent";
import Image from "next/image";

type GalleryItem = {
  id: number;
  category: string | null;
  image: {
    url: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
    };
  };
};

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [active, setActive] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    { key: "all", label: "Semua" },
    { key: "basic", label: "Basic Drawing" },
    { key: "grafis", label: "Komp. Grafis" },
    { key: "modeling", label: "3D" },
    { key: "motion", label: "Motion Grafis" },
    { key: "traditional", label: "Tradi. Drawing" },
    { key: "digital", label: "Digital Drawing" },
    { key: "junior", label: "Junior Class" },
    { key: "foundation", label: "Foundation Class" },
  ];

  useEffect(() => {
    setVisibleCount(12);
  }, [active]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/galleries?populate=image&pagination[limit]=50&sort=createdAt:desc`
    )
      .then((res) => res.json())
      .then((json) => setItems(json.data || []));
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const filtered =
    active === "all"
      ? items
      : items.filter((i) => i.category === active);

  return (
    <main className="bg-white text-neutral-800">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Gallery karya siswa
          </h1>
          <SectionAccent />
          <p className="text-neutral-600">
            Kumpulan hasil karya siswa dari berbagai program pembelajaran di Creativo.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-[72px] z-20 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300
                ${
                  active === c.key
                    ? "bg-pink-600 text-white border-pink-600 font-medium"
                    : "border-neutral-300 hover:bg-neutral-100"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <p className="text-neutral-500">
            Belum ada karya untuk kategori ini.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filtered.slice(0, visibleCount).map((item) => {
                const img =
                  item.image.formats?.medium?.url ||
                  item.image.formats?.small?.url ||
                  item.image.url;

                const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${img}`;

                return (
                  <div
                    key={item.id}
                    className="group cursor-pointer transition-transform duration-300"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow duration-300">

                      <Image
                        src={imageUrl}
                        alt="Karya siswa creativo"
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-contain transition duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Soft Pink Overlay */}
                      <div className="absolute inset-0 bg-transparent 
                        group-hover:bg-gradient-to-t 
                        group-hover:from-pink-500/15 
                        group-hover:via-pink-500/5 
                        group-hover:to-transparent 
                        transition-all duration-300 
                        flex items-end p-4">
                        <span className="text-white text-sm font-medium tracking-wide capitalize opacity-0 group-hover:opacity-100 transition duration-300">
                          {item.category}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* LOAD MORE BUTTON */}
            {visibleCount < filtered.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="px-6 py-2 rounded-full border border-pink-600 text-pink-600 text-sm font-medium hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  load more
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-2xl shadow-xl"
          />
        </div>
      )}

    </main>
  );
}