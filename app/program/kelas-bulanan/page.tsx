"use client";

import { useEffect, useState } from "react";
import SectionAccent from "@/components/ui/SectionAccent";

/* =====================
   TYPES
===================== */

type GalleryItem = {
  id: number;
  media: { url: string };
  caption?: string | null;
};

type Program = {
  id: number;
  program_name: string;
  short_description?: string;
  description?: string;
  program_gallery_item?: GalleryItem[];
};

type SectionConfig = {
  id: string;
  label: string;
  slug: string;
  bg: string;
};

/* =====================
   PAGE
===================== */

export default function KelasBulananPage() {
  const [data, setData] = useState<Record<string, Program | null>>({});
  const [active, setActive] = useState<string>("traditional");

  const sections: SectionConfig[] = [
    {
      id: "traditional",
      label: "Traditional Drawing",
      slug: "monthly-traditional",
      bg: "bg-white",
    },
    {
      id: "digital",
      label: "Digital Drawing",
      slug: "monthly-digital",
      bg: "bg-neutral-50",
    },
    {
      id: "basic",
      label: "Basic Drawing",
      slug: "monthly-basic",
      bg: "bg-white",
    },
    {
      id: "threed",
      label: "3D",
      slug: "monthly-3d",
      bg: "bg-neutral-50",
    },
    {
      id: "grafis",
      label: "Komputer Grafis",
      slug: "monthly-grafis",
      bg: "bg-white",
    },
    {
      id: "motion",
      label: "Motion Graphic & Animation",
      slug: "monthly-motion",
      bg: "bg-neutral-50",
    },
  ];

  /* =====================
     FETCH DATA
  ===================== */
  useEffect(() => {
    sections.forEach(async (section) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/programs?filters[slug][$eq]=${section.slug}&populate=program_gallery_item.media`
        );
        const json = await res.json();

        setData((prev) => ({
          ...prev,
          [section.id]: json.data?.[0] || null,
        }));
      } catch {
        setData((prev) => ({
          ...prev,
          [section.id]: null,
        }));
      }
    });
  }, []);

  /* =====================
     SCROLL SPY (FINAL)
  ===================== */
  useEffect(() => {
    const sectionEls = document.querySelectorAll<HTMLElement>(
      '[data-section="program"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const menuClass = (id: string) => {
    const isActive = active === id;

    return `
      px-4 py-2 rounded-full border text-sm transition
      ${isActive ? "bg-pink-600 text-white border-pink-600 font-semibold uppercase" : "border-neutral-300 hover:bg-neutral-100"}
    `;
  };

  return (
    <main className="bg-white text-neutral-800">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl space-y-3">
          <a
            href="/program"
            className="text-sm text-neutral-500 hover:text-pink-600"
          >
            ← Kembali ke Semua Program
          </a>

          <h1 className="text-3xl md:text-4xl font-semibold">
            Kelas Bulanan
          </h1>

          <SectionAccent />

          <p className="text-neutral-600">
            Program belajar rutin bulanan untuk pengembangan skill bertahap dan terstruktur.
          </p>
        </div>
      </section>

      {/* SUB MENU */}
      <section className="sticky top-[72px] z-30 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActive(section.id)}
              className={menuClass(section.id)}
            >
              {section.label}
            </a>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      {sections.map((section) => (
        <ProgramSection
          key={section.id}
          id={section.id}
          bg={section.bg}
          program={data[section.id]}
        />
      ))}

    </main>
  );
}

/* =====================
   PROGRAM SECTION
===================== */

function ProgramSection({
  id,
  bg,
  program,
}: {
  id: string;
  bg: string;
  program: Program | null;
}) {
  if (!program) return null;

  const safeText =
    typeof program.description === "string"
      ? program.description
          .replace(/Drag\s*_+/gi, "")
          .replace(/Drag/gi, "")
      : "";

  const paragraphs = safeText
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className={`${bg} py-16`}>
      <div
        id={id}
        data-section="program"
        className="scroll-mt-40 max-w-6xl mx-auto px-6 max-w-3xl space-y-4"
      >
        <h2 className="text-xl font-semibold">
          {program.program_name}
        </h2>

        {program.short_description && (
          <p className="text-neutral-600">
            {program.short_description}
          </p>
        )}

        <div className="space-y-3 text-neutral-700">
          {paragraphs.map((text, i) =>
            text.endsWith(":") ? (
              <h3
                key={i}
                className="pt-4 font-semibold text-neutral-800"
              >
                {text.replace(":", "")}
              </h3>
            ) : (
              <p key={i}>{text}</p>
            )
          )}
        </div>

        <a
          href="/registration"
          className="inline-block pt-2 text-pink-600 font-medium hover:underline"
        >
          Daftar Kelas →
        </a>

        {program.program_gallery_item &&
          program.program_gallery_item.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {program.program_gallery_item.slice(0, 3).map((img) => (
                <img
                  key={img.id}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.media.url}`}
                  alt={img.caption || program.program_name}
                  className="aspect-square object-cover rounded-md"
                />
              ))}
            </div>
          )}
      </div>
    </section>
  );
}
