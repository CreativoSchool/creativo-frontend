import SectionAccent from "@/components/ui/SectionAccent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | Creativo School",
  description:
    "Hubungi Creativo School untuk konsultasi program pembelajaran kreatif. Informasi lokasi, WhatsApp, dan jam operasional tersedia di halaman ini.",
  keywords: [
    "kontak creativo school",
    "alamat creativo school",
    "kursus desain surabaya kontak",
    "konsultasi kursus kreatif",
  ],
  openGraph: {
    title: "Kontak Creativo School",
    description:
      "Informasi kontak dan lokasi Creativo School untuk konsultasi dan pendaftaran.",
    url: "https://event.creativo-school.com/contact",
    siteName: "Creativo School",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-800">

      {/* PAGE HEADER */}
     <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
      <div className="max-w-3xl space-y-6">

        <h1 className="text-3xl md:text-4xl font-semibold">
          Kontak Creativo School
        </h1>

        <SectionAccent />

        <p className="text-neutral-600 leading-relaxed max-w-3xl">
          Hubungi Creativo School untuk mendapatkan informasi lebih lanjut mengenai program
          pembelajaran, jadwal kelas, serta sesi konsultasi awal. Tim kami siap membantu
          menjawab pertanyaan Anda.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-12">
          Informasi Kontak dan Lokasi
        </h2>

        {/* MAP */}
        <div className="mt-4 mb-4 w-full rounded-xl overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.817648312848!2d112.74783691126046!3d-7.261583271315137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb897836a651%3A0xc56643b79027b642!2sCreativo%20School!5e0!3m2!1sen!2sid!4v1768035971551!5m2!1sen!2sid"
            className="w-full h-[260px] md:h-[300px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>


      {/* CONTACT INFO / LOKASI */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Lokasi Kelas</h3>

              <div className="text-neutral-600">
                <span className="font-medium">Creativo School — Headquarter</span><br />
                Grand City Mall Lt. 2<br />
                Central Alley Unit 41–42, Surabaya
              </div>

              <div className="text-neutral-600">
                <span className="font-medium">Creativo School — Satellite Class</span><br />
                Jl. Mojopahit No. 9 Lt. UG<br />
                Surabaya
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-neutral-600">
                +62 85 1 0497 1118
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-semibold">Jam Operasional</h3>
              <p className="text-neutral-600">
                Senin – Sabtu<br />
                10.00 – 17.00<br />
                (Minggu by appointment)
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Catatan</h3>
              <p className="text-neutral-600">
                Disarankan untuk menghubungi kami terlebih dahulu
                sebelum berkunjung.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
