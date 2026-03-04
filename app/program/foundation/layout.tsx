"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SectionAccent from "@/components/ui/SectionAccent";

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="bg-white text-neutral-800">

      <section className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          href="/program"
          className="text-sm text-neutral-500 hover:underline"
        >
          ← Kembali ke Semua Program
        </Link>
      </section>

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Foundation Program
          </h1>

          <SectionAccent />

          <p className="text-neutral-600">
            Program dasar terstruktur untuk membangun fondasi visual dan teknik.
            Pilih jalur sesuai usia dan kebutuhan belajar.
          </p>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-4 flex-wrap pb-6">

            <Link
              href="/program/foundation/illustration"
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                pathname.includes("illustration")
                  ? "bg-creativo-magenta text-white"
                  : "border border-neutral-300 text-neutral-700 hover:border-creativo-magenta"
              }`}
            >
              FOUNDATION ILLUSTRATION
            </Link>

            <Link
              href="/program/foundation/kids"
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                pathname.includes("kids")
                  ? "bg-creativo-magenta text-white"
                  : "border border-neutral-300 text-neutral-700 hover:border-creativo-magenta"
              }`}
            >
              FOUNDATION KIDS
            </Link>

          </div>
        </div>
      </section>

      {/* PAGE CONTENT */}
      {children}

    </main>
  );
}