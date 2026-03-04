import InstagramGallery from "@/components/InstagramGallery";
import GoogleReviews from "@/components/GoogleReviews";
import SectionAccent from "@/components/ui/SectionAccent";
import Button from "@/components/ui/Button";
import FunShape from "@/components/ui/FunShape";
import type { Metadata } from "next";

// ==========================================
// SEO METADATA
// ==========================================
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

      {/* ==========================================
          HERO UTAMA
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Ruang Belajar Kreatif <br className="hidden sm:block" />
              yang Terarah & Berkualitas
            </h1>

            <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
              Creativo School mendampingi siswa mengembangkan kemampuan desain,
              ilustrasi, dan keterampilan kreatif secara terstruktur sesuai
              usia, minat, dan tujuan pembelajarannya.
            </p>

            <div className="flex gap-4">
              <Button href="/program">
                Lihat Program Pembelajaran
              </Button>
              <Button href="/contact" variant="outline">
                Konsultasi Awal
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/home-hero.jpg"
              alt="Kegiatan belajar kreatif di Creativo School"
              className="w-full max-w-lg rounded-xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* ==========================================
          POSITIONING
      ========================================== */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-14">

          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Pendampingan Belajar yang Disesuaikan dengan Setiap Siswa
            </h2>

            <SectionAccent />

            <p className="text-neutral-600 leading-relaxed">
              Setiap proses pembelajaran dirancang dengan mempertimbangkan
              karakter, ritme belajar, dan tujuan masing-masing siswa agar
              perkembangan keterampilan berlangsung optimal dan berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h3 className="font-semibold">Personal</h3>
              <p className="text-sm text-neutral-600">
                Pendekatan belajar yang menyesuaikan kebutuhan dan karakter siswa.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Terstruktur</h3>
              <p className="text-sm text-neutral-600">
                Materi dan target pembelajaran disusun secara sistematis.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Berorientasi Hasil</h3>
              <p className="text-sm text-neutral-600">
                Setiap perkembangan dipantau dan dievaluasi secara berkala.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          PROGRAM HIGHLIGHT
      ========================================== */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <FunShape position="bottom-right" />

        <div className="text-center max-w-3xl mx-auto space-y-6 relative">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Program Pembelajaran Creativo
          </h2>

          <SectionAccent align="center" />

          <p className="text-neutral-600 leading-relaxed">
            Beragam program kreatif yang dirancang berdasarkan usia,
            minat, dan kebutuhan belajar siswa dengan pendekatan yang
            fun namun tetap terstruktur.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button href="/program">
            Pelajari Semua Program
          </Button>
        </div>
      </section>

      {/* ==========================================
          KEGIATAN BELAJAR (Refined Layout)
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-3xl mb-10 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Kegiatan Belajar di Creativo
          </h2>
          <SectionAccent />
          <p className="text-neutral-600">
            Pendampingan personal dan kelas terarah dalam suasana belajar yang fokus dan profesional.
          </p>
        </div>

        {/* 🔹 INNER CONTAINER (KUNCI UTAMA) */}
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-3 gap-4">

            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src="/images/kegiatan-1.png" className="w-full h-full object-cover" />
            </div>

            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src="/images/kegiatan-2.png" className="w-full h-full object-cover" />
            </div>

            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src="/images/kegiatan-3.png" className="w-full h-full object-cover" />
            </div>

            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src="/images/kegiatan-4.png" className="w-full h-full object-cover" />
            </div>

            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img src="/images/kegiatan-5.png" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center justify-center rounded-lg border border-neutral-200 hover:border-[#E6007E] hover:bg-[#E6007E]/5 transition group">

              <a
                href="https://www.instagram.com/creativoschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium text-neutral-700 group-hover:text-[#E6007E] transition"
              >
                Jelajahi aktivitas lainnya →
              </a>

            </div>
          </div>

        </div>

      </section>

      {/* ==========================================
          INSTAGRAM (3 POST ONLY)
      ========================================== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Update Terbaru
          </h2>
          <SectionAccent align="center" />

          <div className="max-w-3xl mx-auto">
            <InstagramGallery limit={3} />
          </div>

        </div>
      </section>

      {/* ==========================================
          GOOGLE REVIEWS
      ========================================== */}
      <GoogleReviews />

    </main>
  );
}