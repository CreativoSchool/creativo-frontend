import SectionAccent from "@/components/ui/SectionAccent";
import Link from "next/link";

export default function ProgramPage() {
  return (
    <main className="bg-white text-neutral-800">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Program Pembelajaran Creativo
          </h1>

          <SectionAccent />

          <p className="text-neutral-600">
            Program belajar kreatif yang dirancang sesuai usia, minat, dan tujuan pembelajaran.
          </p>
        </div>
      </section>

      {/* PROGRAM CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* KELAS BULANAN */}
        <Link
          href="/program/kelas-bulanan"
          className="border rounded-xl p-6 hover:shadow-md transition bg-white block"
        >
          <img
            src="/icons/programs/categories/icon-monthly.png"
            className="w-16 h-16 mb-4"
            alt="Kelas Bulanan"
          />
          <h2 className="text-lg font-semibold mb-2">Kelas Bulanan</h2>
          <p className="text-sm text-neutral-600">
            Program rutin mingguan untuk pengembangan skill bertahap.
          </p>
        </Link>

        {/* FOUNDATION PROGRAM — ACTIVE */}
        <Link
          href="/program/foundation"
          className="border rounded-xl p-6 hover:shadow-md transition bg-white block"
        >
          <img
            src="/icons/programs/categories/icon-foundation.png"
            className="w-16 h-16 mb-4"
            alt="Foundation Program"
          />
          <h2 className="text-lg font-semibold mb-2">Foundation Program</h2>
          <p className="text-sm text-neutral-600">
            Program dasar terstruktur untuk membangun fondasi visual & teknik.
          </p>
        </Link>

        {/* CUSTOM PRIVATE — ACTIVE */}
        <Link
          href="/program/custom-private"
          className="border rounded-xl p-6 hover:shadow-md transition bg-white block"
        >
          <img
            src="/icons/programs/categories/icon-custom.png"
            className="w-16 h-16 mb-4"
            alt="Custom Private"
          />
          <h2 className="text-lg font-semibold mb-2">Custom Private</h2>
          <p className="text-sm text-neutral-600">
            Program privat fleksibel sesuai kebutuhan dan tujuan siswa.
          </p>
        </Link>
        
      </section>
    </main>
  );
}
