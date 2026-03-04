import Link from "next/link";
import SectionAccent from "@/components/ui/SectionAccent";

export default function FoundationKidsPage() {

  const levels = [
    {
      label: "LEVEL 1",
      title: "Fundamental Drawing",
      desc: "Latihan kontrol garis, arsir, tekstur, dan pemahaman bentuk dasar.",
      images: [
        "/images/gallery/kids-l1-1.png",
        "/images/gallery/kids-l1-2.png",
      ],
      height: "h-80",
    },
    {
      label: "LEVEL 2",
      title: "Texture & Form Study",
      desc: "Eksplorasi tekstur, shading, dan penguatan volume objek.",
      images: [
        "/images/gallery/kids-l2-1.png",
        "/images/gallery/kids-l2-2.png",
      ],
      height: "h-80",
    },
    {
      label: "LEVEL 3",
      title: "Character & Perspective",
      desc: "Pengembangan karakter visual dan pemahaman ruang.",
      images: [
        "/images/gallery/kids-l3-1.png",
        "/images/gallery/kids-l3-2.png",
      ],
      height: "h-96",
    },
  ];

  return (
    <main className="bg-white text-neutral-800">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="w-full rounded-2xl border border-emerald-200 p-6 bg-white shadow-sm">
            <img
              src="/images/hero-foundation-kids.png"
              alt="Foundation Kids Creativo"
              className="w-full object-contain max-h-[450px]"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Creative Studio Track
            </p>

            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Foundation Program
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              Foundation Kids <br />
              <span className="text-neutral-500 text-xl font-medium">
                (Usia 10–15 Tahun)
              </span>
            </h1>

            <SectionAccent />

            <p className="text-neutral-600 leading-relaxed">
              Jalur pembentukan kreator muda yang serius namun tetap menyenangkan.
              Dirancang untuk membangun fondasi visual, storytelling,
              serta keberanian menampilkan karya di ruang publik.
            </p>
          </div>

        </div>
      </section>

      {/* STRUKTUR PEMBELAJARAN */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 relative pl-4">
            <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
            Struktur Pembelajaran
          </h2>

          <p className="text-neutral-600 max-w-3xl leading-relaxed">
            Program terdiri dari 6 level berjenjang yang membawa siswa dari
            fundamental drawing hingga tahap pengembangan karya,
            branding, dan Creative Showcase.
          </p>
        </div>
      </section>

      {/* SHOWCASE PROGRESSION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-3 relative pl-4">
              <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
              Perkembangan Karya Siswa
            </h2>
            <p className="text-neutral-600 text-sm max-w-2xl">
              Setiap level menunjukkan peningkatan teknik,
              logika visual, dan kedalaman cerita.
            </p>
          </div>

          {levels.map((level, i) => (
            <div key={i} className="mb-24">

              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">
                  {level.label}
                </span>
                {level.title}
              </h3>

              <p className="text-sm text-neutral-600 mb-8">
                {level.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {level.images.map((src, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-creativo-magenta transition-all duration-300"
                  >
                    <img
                      src={src}
                      alt={level.title}
                      className={`w-full ${level.height} object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]`}
                    />
                  </div>
                ))}
              </div>

              {i !== levels.length - 1 && (
                <div className="mt-20 border-t border-neutral-200"></div>
              )}

            </div>
          ))}

          {/* LEVEL 4–6 */}
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">
                LEVEL 4–6
              </span>
              Storybook, Branding & Creative Showcase
            </h3>

            <p className="text-sm text-neutral-600 mb-8 max-w-3xl">
              Tahap lanjutan di mana siswa mengembangkan cerita menjadi buku ilustrasi,
              membangun identitas visual, serta mengeksekusi karya menjadi merchandise.
              Program ini dirancang menuju Creative Showcase bagi siswa
              yang telah memenuhi standar kesiapan karya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              <div className="rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm">
                <p className="text-neutral-600 leading-relaxed">
                  Tidak semua siswa otomatis mengikuti showcase.
                  Hanya karya yang telah matang secara konsep,
                  visual, dan eksekusi yang akan dipresentasikan
                  dalam ruang publik atau event kreatif.
                </p>
              </div>

              <div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-creativo-magenta transition-all duration-300">
                <img
                  src="/images/gallery/kids-merch.png"
                  alt="Creative Showcase"
                  className="w-full h-96 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-neutral-800 mb-6 text-lg">
            Foundation Kids dirancang untuk membentuk kreator muda
            dengan dasar kuat, identitas visual, dan keberanian menampilkan karyanya.
          </p>

          <p className="text-neutral-600 mb-10">
            Pendaftaran dibuka untuk siswa usia 10–15 tahun.
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