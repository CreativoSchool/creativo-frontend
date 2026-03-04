import SectionAccent from "@/components/ui/SectionAccent";
import Button from "@/components/ui/Button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pendaftaran | Creativo School",
  description:
    "Informasi pendaftaran program pembelajaran di Creativo School. Proses pendaftaran mudah dengan sesi konsultasi awal untuk menentukan kebutuhan belajar.",
  keywords: [
    "pendaftaran creativo school",
    "daftar kursus desain",
    "kursus kreatif surabaya",
    "pendaftaran kelas desain",
  ],
  openGraph: {
    title: "Pendaftaran Creativo School",
    description:
      "Proses pendaftaran program pembelajaran Creativo School dengan pendampingan awal.",
    url: "https://event.creativo-school.com/registration",
    siteName: "Creativo School",
    type: "website",
  },
};

export default function RegistrationPage() {
  return (
    <main className="bg-white text-neutral-800">

      {/* PAGE HEADER */}
      <section className="max-w-6xl mx-auto px-6 pt-5 pb-5">
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <h1 className="text-3xl md:text-4xl font-semibold">
            Pendaftaran Creativo School
          </h1>

          <SectionAccent />

          <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Proses pendaftaran di Creativo School dirancang agar mudah dan jelas bagi orang
            tua maupun calon siswa. Setiap pendaftaran diawali dengan sesi konsultasi awal
            sebelum program dimulai.
          </p>

          {/* REGISTRATION HERO VISUAL */}
          <section className="max-w-6xl mx-auto px-6 pt-10 pb-14">
            <div className="flex justify-center">
              <img
                src="/images/registration-visual.jpg"
                alt="Proses belajar digital di Creativo School"
                className="w-full max-w-4xl rounded-xl shadow-sm"
              />
            </div>
          </section>

          <h2 className="text-xl md:text-2xl font-semibold mt-12">
            Alur Pendaftaran
          </h2>

          <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto mt-4">
            Proses pendaftaran dimulai dari sesi konsultasi awal, dilanjutkan dengan pengisian
            formulir dan penyesuaian program sebelum pembelajaran dimulai.
          </p>

        </div>
      </section>

      {/* REGISTRATION FLOW */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* STEP 1 */}
          <div className="relative border border-creativo-border rounded-lg p-6 pt-10 space-y-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-creativo-magenta">
            <span className="absolute top-3 right-4 text-3xl font-bold text-creativo-magenta/30">
              1
            </span>
            <h3 className="font-semibold">Konsultasi Awal</h3>
            <p className="text-sm text-neutral-600">
              Konsultasi kepada kami, tim akan menghubungi untuk memahami kebutuhan belajar.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="relative border border-creativo-border rounded-lg p-6 pt-10 space-y-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-creativo-magenta">
            <span className="absolute top-3 right-4 text-3xl font-bold text-creativo-magenta/30">
              2
            </span>
            <h3 className="font-semibold">Isi Formulir</h3>
            <p className="text-sm text-neutral-600">
              Lengkapi data pendaftaran melalui formulir online yang tersedia.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="relative border border-creativo-border rounded-lg p-6 pt-10 space-y-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-creativo-magenta">
            <span className="absolute top-3 right-4 text-3xl font-bold text-creativo-magenta/30">
              3
            </span>
            <h3 className="font-semibold">Melakukan Pembayaran</h3>
            <p className="text-sm text-neutral-600">
              Melakukan pembayaran sesuai informasi yang telah diberikan.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="relative border border-creativo-border rounded-lg p-6 pt-10 space-y-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-creativo-magenta">
            <span className="absolute top-3 right-4 text-3xl font-bold text-creativo-magenta/30">
              4
            </span>
            <h3 className="font-semibold">Mulai Belajar</h3>
            <p className="text-sm text-neutral-600">
              Program disesuaikan dan pembelajaran dapat segera dimulai.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Siap Memulai Proses Belajar?
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Klik tombol di bawah ini untuk melanjutkan ke formulir pendaftaran.
            Formulir akan terbuka di tab baru.
          </p>

          <Button
            href="https://forms.gle/rb7QGw96c7VzdiSG9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lanjut ke Formulir Pendaftaran
          </Button>
        </div>
      </section>


    </main>
  );
}
