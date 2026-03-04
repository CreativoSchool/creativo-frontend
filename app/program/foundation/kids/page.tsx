import Link from "next/link";
import SectionAccent from "@/components/ui/SectionAccent";

export default function FoundationKidsPage() {

  const materials = [
    {
      title: "Level 1 – Line Control & Fundamental Drawing",
      desc: "Melatih koordinasi tangan melalui latihan garis, pola, bentuk dasar, arsir, dan still life sebagai fondasi visual.",
    },
    {
      title: "Level 2 – Perspective & Visual Logic",
      desc: "Pengenalan perspektif hingga dua titik untuk membangun pemahaman ruang, dimensi, dan struktur objek.",
    },
    {
      title: "Level 3 – Character Development",
      desc: "Membangun karakter dari ekspresi, gesture, pose dasar, hingga detail kostum dan kepribadian visual.",
    },
    {
      title: "Level 4 – Storyline & Sequential Thinking",
      desc: "Menyusun alur cerita sederhana dan mengembangkan komik 1–4 halaman secara terstruktur.",
    },
    {
      title: "Level 5 – Storybook & Visual Creation",
      desc: "Memvisualisasikan cerita menjadi ilustrasi berwarna dan buku cerita sederhana.",
    },
    {
      title: "Level 6 – Visual Development & Creative Showcase",
      desc: "Mengembangkan karya menjadi media kreatif seperti merchandise dan mempersiapkan diri untuk Creative Showcase.",
    },
  ];

  return (
    <main className="bg-white text-neutral-800">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="w-full rounded-2xl border border-emerald-200 p-4 flex justify-center bg-white">
            <img
              src="/images/hero-foundation-kids.png"
              alt="Foundation Kids Creativo"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              6 Level Berjenjang
            </p>

            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Foundation Program
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold">
              Foundation Kids (Junior Class)
            </h1>

            <SectionAccent />

            <p className="text-neutral-600 leading-relaxed">
              Program berjenjang untuk usia 10–15 tahun yang membangun fondasi
              berpikir visual, storytelling, dan pengembangan karya secara terstruktur.
              Dirancang sebagai jalur pembentukan kreator muda yang serius namun tetap menyenangkan.
            </p>
          </div>

        </div>
      </section>

      {/* APA YANG DIPELAJARI */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 relative pl-4">
            <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
            Struktur Pembelajaran
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((item, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl p-6 bg-white"
              >
                <p className="text-4xl font-light text-neutral-300 mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="text-sm font-semibold text-neutral-800">
                  {item.title}
                </p>

                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE PROGRESS PER LEVEL */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-3 relative pl-4">
              <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
              Perkembangan Karya Siswa
            </h2>
            <p className="text-neutral-600 text-sm max-w-2xl">
              Perjalanan pembelajaran dari dasar menggambar hingga tahap Creative Showcase.
              Setiap level menunjukkan peningkatan teknik, logika visual, dan kedalaman karya.
            </p>
          </div>

          {/* LEVEL 1 */}
          <div className="mb-24">
            <h3 className="text-lg font-semibold mb-2">
              Level 1 – Fundamental Drawing
            </h3>
            <p className="text-sm text-neutral-600 mb-8">
              Latihan kontrol garis, arsir, tekstur, dan pemahaman bentuk dasar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "/images/gallery/kids-l1-1.png",
                "/images/gallery/kids-l1-2.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-creativo-magenta transition-all duration-300"
                >
                  <img
                    src={src}
                    alt="Level 1 karya siswa"
                    className="w-full h-80 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LEVEL 2 */}
          <div className="mb-24">
            <h3 className="text-lg font-semibold mb-2">
              Level 2 – Texture & Form Study
            </h3>
            <p className="text-sm text-neutral-600 mb-8">
              Eksplorasi tekstur, shading, dan penguatan volume objek.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "/images/gallery/kids-l2-1.png",
                "/images/gallery/kids-l2-2.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-creativo-magenta transition-all duration-300"
                >
                  <img
                    src={src}
                    alt="Level 2 karya siswa"
                    className="w-full h-80 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LEVEL 3 */}
          <div className="mb-24">
            <h3 className="text-lg font-semibold mb-2">
              Level 3 – Character & Perspective
            </h3>
            <p className="text-sm text-neutral-600 mb-8">
              Pengembangan karakter visual dan pemahaman ruang.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "/images/gallery/kids-l3-1.png",
                "/images/gallery/kids-l3-2.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-creativo-magenta transition-all duration-300"
                >
                  <img
                    src={src}
                    alt="Level 3 karya siswa"
                    className="w-full h-96 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LEVEL 4–6 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Level 4–6 – Storybook, Branding & Creative Showcase
            </h3>

            <p className="text-sm text-neutral-600 mb-8 max-w-3xl">
              Tahap lanjutan di mana siswa mengembangkan cerita menjadi buku ilustrasi,
              membangun identitas visual, serta mengeksekusi karya menjadi merchandise.
              Program ini dirancang menuju Creative Showcase pada event publik
              bagi siswa yang telah memenuhi standar kesiapan karya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* DESKRIPSI BOX */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm">
                <p className="text-neutral-600 leading-relaxed">
                  Pada tahap ini siswa belajar menyusun storyboard,
                  mengembangkan ilustrasi berwarna, membangun identitas visual,
                  serta mempersiapkan karya untuk dipresentasikan secara profesional.
                  Tidak semua siswa otomatis mengikuti showcase —
                  hanya karya yang telah memenuhi standar kesiapan.
                </p>
              </div>

              {/* MERCH IMAGE */}
              <div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-creativo-magenta transition-all duration-300">
                <img
                  src="/images/gallery/kids-merch.jpg"
                  alt="Contoh merchandise siswa"
                  className="w-full h-96 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* COCOK UNTUK SIAPA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 relative pl-4">
          <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
          Cocok untuk Siapa?
        </h2>

        <ul className="space-y-3 text-neutral-700 text-sm list-disc list-inside">
          <li>Siswa usia 10–15 tahun</li>
          <li>Memiliki minat menggambar dan bercerita</li>
          <li>Ingin belajar secara terstruktur dan berjenjang</li>
          <li>Siap berproses menuju Creative Showcase</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-neutral-700 mb-8 text-lg">
            Siap memulai perjalanan sebagai kreator muda?
          </p>

          <Link
            href="/registration"
            className="inline-block rounded-xl bg-neutral-900 text-white px-8 py-3 hover:bg-creativo-magenta transition"
          >
            Daftar Foundation Kids
          </Link>
        </div>
      </section>

      {/* BACK */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <Link
          href="/program"
          className="text-sm text-neutral-500 hover:underline"
        >
          ← Kembali ke Semua Program
        </Link>
      </section>

    </main>
  );
}