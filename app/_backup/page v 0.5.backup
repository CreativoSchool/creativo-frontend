import SectionAccent from "@/components/ui/SectionAccent";
import Button from "@/components/ui/Button";
import FunShape from "@/components/ui/FunShape";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creativo School | Kursus Desain & Kreatif di Surabaya",
  description:
    "Creativo School adalah ruang belajar kreatif untuk anak, remaja, dan dewasa muda. Program desain grafis, ilustrasi, dan digital kreatif dengan pendekatan personal.",
  keywords: [
    "kursus desain surabaya",
    "sekolah desain surabaya",
    "kursus ilustrasi",
    "kursus kreatif anak",
    "kelas desain grafis",
    "creativo school",
  ],
  openGraph: {
    title: "Creativo School | Ruang Belajar Kreatif",
    description:
      "Pendampingan belajar kreatif untuk anak dan remaja melalui proses yang personal, fleksibel, dan terarah.",
    url: "https://event.creativo-school.com",
    siteName: "Creativo School",
    type: "website",
  },
};

export default function HomePage() {
  return (  
    <main className="bg-white text-neutral-800">
    {/* HERO SLIDER */}
    <section className="w-full mb-16">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl">
        <div className="flex transition-transform duration-700 ease-in-out">
          <img
            src="/home/slider-1.jpg"
            alt="Aktivitas kelas Creativo"
            className="w-full h-[360px] object-cover flex-shrink-0"
          />
          <img
            src="/home/slider-2.jpg"
            alt="Kegiatan belajar menggambar"
            className="w-full h-[360px] object-cover flex-shrink-0"
          />
          <img
            src="/home/slider-3.jpg"
            alt="Siswa belajar digital art"
            className="w-full h-[360px] object-cover flex-shrink-0"
          />
        </div>
      </div>
    </section>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT */}
          <div className="space-y-8">
           <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Ruang Belajar Kreatif untuk Anak dan Remaja di Surabaya
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Creativo School adalah ruang belajar kreatif untuk anak dan remaja
              yang ingin mengembangkan potensi di bidang desain, ilustrasi,
              dan keterampilan kreatif digital. Proses pembelajaran dirancang
              secara personal, fleksibel, dan terarah agar setiap siswa dapat
              belajar sesuai dengan minat dan ritmenya.
            </p>


            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Button href="/programs">
                Lihat Program Pembelajaran
              </Button>

              <Button href="/contact" variant="secondary">
                Konsultasi Awal
              </Button>
            </div>
          </div>

          {/* RIGHT — IMAGE (FIXED VERSION) */}
          <div className="w-full h-[360px] md:h-[420px] rounded-2xl bg-gradient-to-br from-creativo-magenta/20 to-transparent flex items-center justify-center">
            <svg
              width="180"
              height="180"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <circle cx="100" cy="100" r="80" stroke="#EE2158" strokeWidth="4" />
              <path
                d="M60 120L90 80L120 120L150 70"
                stroke="#EE2158"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>


        </div>
      </section>

      {/* POSITIONING */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-14">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Pendampingan Belajar yang Disesuaikan dengan Setiap Individu
            </h2>

            <SectionAccent />

            <p className="text-neutral-600 leading-relaxed">
              Setiap proses belajar dirancang dengan mempertimbangkan
              kebutuhan, minat, dan ritme masing-masing siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h3 className="font-semibold">Personal</h3>
              <p className="text-sm text-neutral-600">
                Pendekatan individual untuk setiap siswa.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Terarah</h3>
              <p className="text-sm text-neutral-600">
                Tujuan belajar jelas dan terstruktur.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Bertanggung Jawab</h3>
              <p className="text-sm text-neutral-600">
                Proses yang dapat dipertanggungjawabkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHT */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <FunShape position="bottom-right" />

        <div className="text-center max-w-3xl mx-auto space-y-6 relative">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Program Pembelajaran Creativo
          </h2>

          <SectionAccent align="center" />

          <p className="text-neutral-600 leading-relaxed">
            Program disusun berdasarkan usia dan kebutuhan belajar.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button href="/programs">
            Pelajari Semua Program
          </Button>
        </div>
      </section>

    </main>
  );
}
