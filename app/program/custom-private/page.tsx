import React from "react";
import SectionAccent from "@/components/ui/SectionAccent";
import Link from "next/link";

export default function CustomPrivatePage() {
  const whatsappLink =
    "https://wa.me/6285104971118?text=Halo%20Creativo,%20saya%20ingin%20mengajukan%20konsultasi%20Custom%20Private.%0A%0ANama:%0AUsia:%0ADomisili:%0A";

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="mb-10">
          <Link
            href="/program"
            className="text-sm text-gray-500 hover:text-[#D6006D] transition"
          >
            ← Kembali ke Semua Program
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Custom Private
            </h1>

            <SectionAccent />

            <p className="text-lg text-gray-600 mt-6 mb-6">
              Program eksklusif untuk siswa dengan kebutuhan spesifik dan target terarah.
              <span className="font-medium text-gray-900">
                {" "}Slot terbatas setiap bulan untuk menjaga kualitas pembelajaran.
              </span>
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Ajukan Konsultasi via WhatsApp
            </a>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/images/custom-private-hero.png"
              alt="Creative Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SIAPA YANG COCOK */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center">
            Siapa yang Cocok?
          </h2>

          <div className="flex justify-center my-6">
            <SectionAccent />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              "Siswa yang membutuhkan perhatian lebih.",
              "Mahasiswa yang ingin memperkuat skill tertentu.",
              "Calon mahasiswa luar negeri yang membutuhkan portfolio khusus.",
              "Siswa dengan target spesifik dalam waktu terbatas."
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-lg hover:border-[#D6006D] hover:shadow-sm transition-all duration-300"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12">
            Program ini dirancang untuk siswa dengan komitmen dan tujuan yang jelas.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center">
            Bagaimana Program Ini Bekerja
          </h2>

          <div className="flex justify-center my-6">
            <SectionAccent />
          </div>

          <div className="space-y-20 mt-12">
            {[
              {
                title: "Konsultasi & Evaluasi Awal",
                desc: "Siswa mengirimkan 3–5 karya terbaik serta menjelaskan goal pembelajaran."
              },
              {
                title: "Penyusunan Kurikulum Personal",
                desc: "Materi dirancang berdasarkan gap skill dan target akhir."
              },
              {
                title: "Pelaksanaan Terarah",
                desc: "Sesi 1-on-1 secara onsite, online, atau kombinasi sesuai kebutuhan."
              },
              {
                title: "Evaluasi Target",
                desc: "Review hasil pembelajaran sesuai tujuan awal."
              }
            ].map((step, index) => (
              <div key={index} className="relative pl-20">

                <div className="absolute left-0 top-0 text-6xl font-bold text-gray-200 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-16">
            Tidak semua pengajuan akan diterima. Kami memastikan target yang diajukan realistis dan sesuai standar pembelajaran.
          </p>
        </div>
      </section>

      {/* SISTEM PEMBELAJARAN */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Sistem Pembelajaran
          </h2>

          <div className="flex justify-center my-6">
            <SectionAccent />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Onsite di Studio",
              "Online",
              "Kombinasi (Hybrid)"
            ].map((mode, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-lg"
              >
                <p className="font-medium">{mode}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTASI */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-semibold">
          Investasi Program
        </h2>

        <div className="flex justify-center my-6">
          <SectionAccent />
        </div>

        <p className="text-gray-600 mb-4">
          Investasi disesuaikan dengan jumlah jam dan kompleksitas target pembelajaran.
        </p>

        <p className="text-gray-600">
          Rekomendasi paket diberikan setelah sesi konsultasi dan evaluasi awal.
        </p>
      </section>

      {/* KOMITMEN */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Komitmen & Timeline
          </h2>

          <div className="flex justify-center my-6">
            <SectionAccent />
          </div>

          <p className="text-gray-600">
            Program memiliki batas durasi maksimal sesuai paket untuk menjaga efektivitas pembelajaran.
            Perubahan jadwal mengikuti kebijakan internal.
          </p>

          <div className="mt-10">
            <a
              href="/custom-private-policy"
              className="underline text-gray-700 hover:text-[#D6006D] transition"
            >
              Lihat Kebijakan & FAQ Lengkap
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Siap Memulai?
        </h2>

        <a
          href={whatsappLink}
          target="_blank"
          className="inline-block bg-black text-white px-8 py-4 rounded-md hover:opacity-90 transition"
        >
          Ajukan Konsultasi
        </a>
      </section>

    </div>
  );
}