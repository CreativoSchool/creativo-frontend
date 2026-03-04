/* =====================================================
   FILE  : app/program/[slug]/page.tsx
   TYPE  : CMS DETAIL PAGE (FINAL CLEAN)
   ===================================================== */

import { notFound } from "next/navigation"

/* =====================================================
   STRAPI CONFIG
   ===================================================== */
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

/* =====================================================
   FETCH PROGRAM BY SLUG
   ===================================================== */
async function getProgram(slug: string) {
  if (!STRAPI_URL) return null

  const res = await fetch(
    `${STRAPI_URL}/api/programs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  )

  if (!res.ok) return null

  const json = await res.json()
  return json.data?.[0] || null
}

/* =====================================================
   BADGE SYSTEM (FINAL)
   ===================================================== */
function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?:
    | "foundation"
    | "monthly"
    | "private"
    | "kids"
    | "teen"
    | "adult"
    | "default"
}) {
  const styles: Record<string, string> = {
    foundation: "bg-green-100 text-green-700",
    monthly: "bg-blue-100 text-blue-700",
    private: "bg-purple-100 text-purple-700",
    kids: "bg-yellow-100 text-yellow-700",
    teen: "bg-violet-100 text-violet-700",
    adult: "bg-neutral-200 text-neutral-700",
    default: "bg-neutral-100 text-neutral-700",
  }

  return (
    <span
      className={`inline-block rounded-full px-4 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

/* =====================================================
   RICH TEXT RENDERER (STRAPI)
   ===================================================== */
function renderRichText(blocks: any[]) {
  if (!Array.isArray(blocks)) return null

  return blocks.map((block, index) => {
    if (block.type === "paragraph") {
      const text = block.children
        ?.map((child: any) => child.text)
        .join("")

      if (!text) return null

      return (
        <p key={index} className="mb-5 leading-relaxed">
          {text}
        </p>
      )
    }

    return null
  })
}

/* =====================================================
   PAGE COMPONENT
   ===================================================== */
export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const program = await getProgram(slug)

  if (!program) notFound()

  /* =================================================
     FIELD MAPPING (STRAPI)
     ================================================= */
  const {
    program_name,
    segment,
    description,
    thumbnail,
    age_targets,
  } = program

  /* =================================================
     HERO IMAGE
     ================================================= */
  const heroImageUrl = thumbnail?.url
    ? `${STRAPI_URL}${thumbnail.url}`
    : null

  /* =================================================
     AGE TARGET MAPPING
     ================================================= */
  const ageBadges: JSX.Element[] = []

  if (Array.isArray(age_targets)) {
    age_targets.forEach((age: any, index: number) => {
      if (age.kids) ageBadges.push(<Badge key={`kids-${index}`} variant="kids">Kids</Badge>)
      if (age.teen) ageBadges.push(<Badge key={`teen-${index}`} variant="teen">Teen</Badge>)
      if (age.adult) ageBadges.push(<Badge key={`adult-${index}`} variant="adult">Adult</Badge>)
    })
  }

  return (
    <main>

      {/* =================================================
          HERO SECTION
         ================================================= */}
      <section className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        {heroImageUrl && (
          <img
            src={heroImageUrl}
            alt={program_name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            {program_name}
          </h1>
        </div>
      </section>

      {/* HERO SHADOW */}
      <div className="w-full h-8 bg-gradient-to-b from-black/10 to-transparent" />

      {/* BACK LINK */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <a
          href="/program"
          className="text-sm text-neutral-500 hover:text-neutral-800 transition"
        >
          ← Kembali ke Program
        </a>
      </div>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        {/* SEGMENT & AGE */}
        <div className="flex flex-wrap justify-center gap-2">
          {segment && (
            <Badge
              variant={
                segment === "foundation"
                  ? "foundation"
                  : segment === "monthly"
                  ? "monthly"
                  : segment === "private"
                  ? "private"
                  : "default"
              }
            >
              {segment}
            </Badge>
          )}

          {ageBadges}
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-3xl mx-auto text-neutral-700 leading-relaxed">
          {renderRichText(description)}
        </div>

        {/* =============================================
            MARK:CTA_SECTION_FINAL
          ============================================= */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-14">

          {/* PRIMARY CTA */}
          <a
            href="/program"
            className="inline-flex items-center justify-center
                      rounded-xl bg-pink-600 text-white
                      px-10 py-3 text-sm font-medium
                      hover:bg-pink-700 transition"

          >
            Lihat Program Pembelajaran
          </a>

          {/* SECONDARY CTA */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center
                      rounded-xl border border-pink-600 text-pink-600
                      px-10 py-3 text-sm font-medium
                      hover:bg-pink-50 transition"

          >
            Konsultasi Awal
          </a>

        </div>

      </section>

    </main>
  )
}
