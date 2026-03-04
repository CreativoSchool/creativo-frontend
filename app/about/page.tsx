import SectionAccent from "@/components/ui/SectionAccent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Creativo School | Ruang Belajar Kreatif di Surabaya",
  description:
    "Creativo School adalah ruang belajar kreatif yang mendampingi anak dan remaja mengembangkan potensi desain dan kreativitas melalui proses belajar yang personal dan terarah.",
  keywords: [
    "tentang creativo school",
    "sekolah kreatif surabaya",
    "kursus desain anak",
    "pendidikan kreatif",
    "belajar desain surabaya",
  ],
  openGraph: {
    title: "Tentang Creativo School",
    description:
      "Mengenal visi, pendekatan belajar, dan nilai Creativo School sebagai ruang belajar kreatif.",
    url: "https://event.creativo-school.com/about",
    siteName: "Creativo School",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-800">

      {/* PAGE HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-19">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Tentang Creativo School
          </h1>

          <SectionAccent />

          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            Creativo School merupakan ruang belajar kreatif yang berfokus pada pengembangan
            potensi anak dan remaja melalui pendidikan desain dan keterampilan kreatif
            digital. Kami percaya bahwa setiap siswa memiliki cara belajar dan tujuan yang
            berbeda, sehingga proses pembelajaran perlu disesuaikan secara personal.
          </p>
        </div>
      </section>

      {/* ABOUT VISUAL (MASKED / CROPPED) */}
      <section className="max-w-6xl mx-auto px-6 pt-6 pb-6">
        <div className="overflow-hidden rounded-lg shadow-sm
                        h-[220px] sm:h-[260px] md:h-[350px]">
          <img
            src="/images/about-visual.png"
            alt="Suasana belajar kreatif digital di Creativo School"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-7 space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold mt-7">
            Visi dan Pendekatan Pembelajaran
          </h2>

          <p className="text-neutral-600 leading-relaxed max-w-3xl mt-4">
            Creativo School mengedepankan proses belajar yang terarah, fleksibel, dan
            bertanggung jawab. Pendekatan pembelajaran disesuaikan dengan usia, minat,
            serta kebutuhan setiap siswa agar proses belajar berjalan efektif dan
            menyenangkan.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Lingkungan Belajar
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Lingkungan belajar dirancang agar siswa merasa aman,
            nyaman, dan terdorong untuk berkembang.
          </p>
        </div>
      </section>

    </main>
  );
}
