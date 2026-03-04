"use client";

import { useEffect, useState } from "react";

/* =====================
   TYPES (MATCH STRAPI)
===================== */

type RichTextNode = {
  type: string;
  children?: { type: string; text: string }[];
};

type Program = {
  id: number;
  program_name: string;
  slug: string;
  short_description: string;
  description: RichTextNode[];
  segment: string;
  is_active: boolean;
};

/* =====================
   PAGE
===================== */

export default function MonthlyProgramPage() {
  const [program, setProgram] = useState<Program | null>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/programs?filters[slug][$eq]=monthly-traditional`
      );
      const json = await res.json();

      // STRAPI RESPONSE IS FLAT (NO attributes)
      setProgram(json.data?.[0] || null);
    };

    fetchProgram();
  }, []);

  if (!program) {
    return <div className="p-10">Loading program…</div>;
  }

  return (
    <main className="bg-white text-neutral-800">

      {/* ===== TRADITIONAL DRAWING ===== */}
      <section className="py-16">
        <div
          id="traditional"
          className="scroll-mt-40 max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row gap-6">

            {/* ICON */}
            <img
              src="/icons/programs/monthly/icon-traditional.png"
              alt={program.program_name}
              className="w-20 h-20 flex-shrink-0"
            />

            <div className="space-y-4 max-w-3xl">

              {/* TITLE */}
              <h2 className="text-xl font-semibold">
                {program.program_name}
              </h2>

              {/* SHORT DESCRIPTION */}
              <p className="text-neutral-600">
                <strong>Kelas menggambar berbasis kelompok</strong> dengan minimal
                <strong> 3 siswa</strong>, yang dirancang untuk mengembangkan kemampuan
                <strong> menggambar dan mewarnai secara manual</strong> pada anak-anak
                hingga remaja.
              </p>

              {/* DESCRIPTION (RICH TEXT) */}
              <div className="space-y-3 text-neutral-600">
                {program.description.map((block, index) => {
                  if (block.type === "paragraph") {
                    const text =
                      block.children?.map((c) => c.text).join("") || "";

                    if (!text.trim()) return null;

                    return <p key={index}>{text}</p>;
                  }

                  return null;
                })}
              </div>

              {/* CTA */}
              <a
                href="/registration"
                className="inline-block pt-2 text-pink-600 font-medium hover:underline"
              >
                Daftar Kelas Traditional Drawing →
              </a>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
