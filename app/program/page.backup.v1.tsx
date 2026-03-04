import SectionAccent from "@/components/ui/SectionAccent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Pembelajaran | Creativo School",
  description:
    "Program pembelajaran kreatif di Creativo School untuk anak dan remaja, disusun berdasarkan usia, minat, dan kebutuhan belajar secara personal.",
  keywords: [
    "program kreatif anak",
    "kursus desain anak",
    "kelas ilustrasi",
    "kursus desain grafis surabaya",
    "program belajar kreatif",
    "creativo school program",
  ],
  openGraph: {
    title: "Program Pembelajaran Creativo School",
    description:
      "Beragam program pembelajaran kreatif untuk anak dan remaja dengan pendekatan personal dan terarah.",
    url: "https://event.creativo-school.com/programs",
    siteName: "Creativo School",
    type: "website",
  },
};


export default function ProgramsPage() {
  return (
    <main className="bg-white text-neutral-800">

      {/* PAGE HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Program Pembelajaran Kreatif untuk Anak dan Remaja
          </h1>

          <SectionAccent align="center" />

          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            Program pembelajaran di Creativo School dirancang untuk membantu anak dan
            remaja mengembangkan potensi kreatif melalui proses belajar yang terarah dan
            fleksibel. Setiap program disusun berdasarkan usia, minat, dan kebutuhan
            belajar agar siswa dapat berkembang secara optimal.
          </p>

        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-lg p-6 space-y-3">
            <h2 className="font-semibold">Program Anak</h2>
            <p className="text-sm text-neutral-600">
              Eksplorasi kreativitas dan pembentukan rasa percaya diri
              untuk anak usia 6–12 tahun.
            </p>
          </div>

          <div className="border rounded-lg p-6 space-y-3">
            <h2 className="font-semibold">Program Remaja</h2>
            <p className="text-sm text-neutral-600">
              Pendalaman skill kreatif dan kesiapan akademik maupun industri
              untuk remaja.
            </p>
          </div>

          <div className="border rounded-lg p-6 space-y-3">
            <h2 className="font-semibold">Program Custom & Privat</h2>
            <p className="text-sm text-neutral-600">
              Pendampingan belajar dengan tujuan khusus dan
              penyesuaian jadwal.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
