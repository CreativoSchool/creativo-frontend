import Link from "next/link";
import SectionAccent from "@/components/ui/SectionAccent";

export default function FoundationIllustrationPage() {
  const materials = [
    {
      title: "Basic Drawing",
      desc: "Still life, shading, perspective, dan penguatan kontrol visual.",
    },
    {
      title: "Body Structure",
      desc: "Anatomy, gesture, pose, dan pemahaman action line.",
    },
    {
      title: "Character Profiling",
      desc: "Eksplorasi usia, ekspresi, interaksi, dan konsistensi karakter.",
    },
    {
      title: "Scene Development",
      desc: "Background, prinsip desain, dan pengembangan visual.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="w-full rounded-2xl border border-neutral-300 p-4 flex justify-center bg-white">
            <img
              src="/images/hero-foundation.png"
              alt="Foundation Illustration Creativo"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Foundation Program
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold">
              Foundation Illustration
            </h1>

            <SectionAccent />

            <p className="text-neutral-600">
              Program pendalaman ilustrasi untuk remaja dan dewasa yang ingin
              membangun kemampuan menggambar secara terstruktur, konsisten,
              dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* APA YANG DIPELAJARI */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 relative pl-4">
            <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
            Apa yang Dipelajari
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* HASIL PEMBELAJARAN */}
      <section className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 relative pl-4">
              <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
              Contoh Hasil Pembelajaran
            </h2>
            <p className="text-neutral-600 text-sm">
              Beberapa contoh perkembangan karya siswa dalam program Foundation Illustration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "/images/gallery/illus-1.png",
              "/images/gallery/illus-2.png",
              "/images/gallery/illus-3.png",
              "/images/gallery/illus-4.png",
            ].map((src, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-neutral-200 hover:border-creativo-magenta hover:shadow-md transition-all duration-300"
              >
                <img
                  src={src}
                  alt="Karya siswa Foundation Illustration"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="text-sm text-neutral-700 hover:text-creativo-magenta transition"
            >
              Lihat Gallery Lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* COCOK UNTUK SIAPA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 relative pl-4">
          <span className="absolute left-0 top-1 h-5 w-[3px] bg-creativo-magenta rounded-full"></span>
          Cocok untuk Siapa?
        </h2>

        <ul className="space-y-3 text-neutral-700 text-sm list-disc list-inside">
          <li>Remaja dan dewasa (13+)</li>
          <li>Sudah memiliki dasar menggambar</li>
          <li>Ingin mengembangkan ilustrasi secara lebih serius</li>
          <li>Mempersiapkan portfolio atau jalur kreatif profesional</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-neutral-600 mb-8">
            Siap melanjutkan perjalanan belajar ilustrasi secara terarah?
          </p>

          <Link
            href="/registration"
            className="inline-block rounded-xl bg-neutral-900 text-white px-8 py-3 hover:bg-creativo-magenta transition"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}