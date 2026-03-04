// ==========================================
// PROGRAMS PAGE – Creativo School
// FINAL STRUCTURED VERSION (WITH PROGRAM INTRO)
// ==========================================

import {
  badgeBaseStyle,
  badgeVariants,
  typography,
} from '@/styles'

// ---------- SEO ----------
export const metadata = {
  title: 'Program Pembelajaran | Creativo School',
  description:
    'Pilihan program pembelajaran desain, ilustrasi, dan kreativitas digital di Creativo School.',
}

// ---------- TYPES ----------
type Program = {
  id: number
  program_name?: string
  slug?: string
  short_description?: string
  segment?: 'monthly' | 'foundation' | 'custom private'
  target_usia?: 'kids' | 'junior' | 'teen' | 'adult'
  thumbnail_url?: string
}

// ---------- FETCH ----------
async function getPrograms(): Promise<Program[]> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
  if (!baseUrl) return []

  try {
    const res = await fetch(`${baseUrl}/api/programs`, {
      cache: 'no-store',
    })
    if (!res.ok) return []

    const json = await res.json()
    return json?.data || []
  } catch {
    return []
  }
}

// ---------- BADGE ----------
function getBadgeStyle(bg: string, text: string) {
  return {
    ...badgeBaseStyle,
    backgroundColor: bg,
    color: text,
    fontFamily: typography.badge.fontFamily,
    fontWeight: typography.badge.weight,
    fontSize: typography.badge.size,
  }
}

function formatLabel(text?: string) {
  if (!text) return ''
  return text
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// ==========================================
// PAGE
// ==========================================
export default async function ProgramsPage() {
  const programs = await getPrograms()

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      {/* PAGE TITLE */}
      <h1
        style={{
          fontFamily: typography.heading.fontFamily,
          fontWeight: typography.heading.weight,
          color: typography.heading.color,
        }}
        className="text-3xl mb-6"
      >
        Program Creativo
      </h1>

      {/* PROGRAM INTRO */}
      <section className="mb-12 max-w-3xl">
        <p
          style={{
            fontFamily: typography.body.fontFamily,
            color: typography.body.color,
          }}
          className="text-sm mb-4"
        >
          Program di Creativo School dirancang dalam beberapa jalur pembelajaran
          untuk mengakomodasi tingkat pengalaman, usia, dan tujuan belajar yang
          berbeda. Mulai dari kelas eksplorasi hingga program foundation jangka
          panjang, setiap kelas memiliki peran dan fokus yang jelas.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <strong>Kelas Bulanan</strong>
            <p className="text-neutral-600">
              Cocok untuk siswa yang ingin mencoba, mengeksplorasi, atau belajar
              secara fleksibel. Materi bersifat tematik dan aplikatif, dengan
              jadwal ringan dan tanpa komitmen jangka panjang.
            </p>
          </div>

          <div>
            <strong>Program Foundation</strong>
            <p className="text-neutral-600">
              Ditujukan bagi siswa yang ingin belajar secara serius, terstruktur,
              dan berkelanjutan. Program disusun berjenjang dengan materi yang
              saling berkaitan untuk membangun fondasi teknik, konsep, dan
              karakter visual.
            </p>
          </div>

          <div>
            <strong>Custom Private Class</strong>
            <p className="text-neutral-600">
              Program personal dengan kurikulum yang disesuaikan dengan
              kebutuhan, tujuan, dan ritme belajar siswa, baik untuk pengembangan
              skill spesifik, portfolio, maupun kebutuhan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* EMPTY STATE */}
      {programs.length === 0 && (
        <p className="text-neutral-500">
          Program sedang dipersiapkan. Silakan cek kembali dalam waktu dekat.
        </p>
      )}

      {/* PROGRAM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => {
          if (!program || !program.slug) return null

          const programType =
            program.segment === 'foundation'
              ? 'foundation'
              : program.segment === 'custom private'
              ? 'customPrivate'
              : 'monthly'

          const audience = program.target_usia || 'teen'

          const imageUrl = program.thumbnail_url
            ? `/images/programs/${program.thumbnail_url}`
            : null

          return (
            <div
              key={program.id}
              data-program-type={programType}
              className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition flex flex-col"
            >
              {/* IMAGE */}
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={program.program_name || 'Program Creativo'}
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div className="w-full h-44 bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
                  No Image
                </div>
              )}

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex gap-2 flex-wrap mb-2">
                  <span
                    style={getBadgeStyle(
                      badgeVariants.programType[programType].bg,
                      badgeVariants.programType[programType].text
                    )}
                  >
                    {formatLabel(program.segment)}
                  </span>

                  <span
                    style={getBadgeStyle(
                      badgeVariants.audience[audience].bg,
                      badgeVariants.audience[audience].text
                    )}
                  >
                    {formatLabel(audience)}
                  </span>
                </div>

                <a
                  href={`/programs/${program.slug}`}
                  style={{
                    fontFamily: typography.heading.fontFamily,
                    fontWeight: typography.heading.weight,
                    color: typography.heading.color,
                  }}
                  className="block text-lg hover:underline"
                >
                  {program.program_name}
                </a>

                {program.short_description && (
                  <p
                    style={{
                      fontFamily: typography.body.fontFamily,
                      color: typography.body.color,
                    }}
                    className="text-sm mt-2 flex-1"
                  >
                    {program.short_description}
                  </p>
                )}

                <a
                  href={`/programs/${program.slug}`}
                  className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Lihat Detail Program →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
