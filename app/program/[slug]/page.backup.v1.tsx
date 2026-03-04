// app/programs/[slug]/page.tsx

type Program = {
  id: number;
  program_name: string;
  short_description: string;
  description: any[];
  slug: string;

  thumbnail?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };

  age_targets?: {
    kids?: boolean;
    junior?: boolean;
    teen?: boolean;
    adult?: boolean;
  }[];

  gallery?: {
    media?: {
      data?: {
        attributes?: {
          url: string;
          mime: string;
        };
      };
    };
    caption?: string;
  }[];
};

async function getProgram(slug: string): Promise<Program | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/programs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch program");
  }

  const json = await res.json();

  // ⬇️ STRAPI KAMU PAKAI FLAT RESPONSE
  return json?.data?.[0] ?? null;
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ⚠️ Next.js 15+ params WAJIB await
  const { slug } = await params;

  const program = await getProgram(slug);

  if (!program) {
    return <div className="p-10">Program tidak ditemukan</div>;
  }

  const thumbnailUrl = program.thumbnail?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${program.thumbnail.data.attributes.url}`
    : null;

  const ageTarget = program.age_targets?.[0];

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">
          {program.program_name}
        </h1>

        <p className="text-gray-600">
          {program.short_description}
        </p>

        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={program.program_name}
            className="w-full rounded-2xl"
          />
        )}
      </section>

      {/* USIA */}
      {ageTarget && (
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Usia Peserta
          </h2>

          <div className="flex flex-wrap gap-3">
            {ageTarget.kids && (
              <span className="px-4 py-1 rounded-full bg-gray-100">
                Kids
              </span>
            )}
            {ageTarget.junior && (
              <span className="px-4 py-1 rounded-full bg-gray-100">
                Junior
              </span>
            )}
            {ageTarget.teen && (
              <span className="px-4 py-1 rounded-full bg-gray-100">
                Teen
              </span>
            )}
            {ageTarget.adult && (
              <span className="px-4 py-1 rounded-full bg-gray-100">
                Adult
              </span>
            )}
          </div>
        </section>
      )}

      {/* DESKRIPSI */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Deskripsi Program
        </h2>

        <div className="prose max-w-none">
          {program.description?.map((block: any, i: number) => (
            <p key={i}>
              {block.children?.[0]?.text}
            </p>
          ))}
        </div>
      </section>

      {/* GALERI */}
      {program.gallery && program.gallery.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-6">
            Galeri Kegiatan & Karya Siswa
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {program.gallery.map((item, i) => {
              const mediaAttr =
                item.media?.data?.attributes;

              if (!mediaAttr?.url) return null;

              const mediaUrl =
                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${mediaAttr.url}`;

              const isVideo =
                mediaAttr.mime?.startsWith("video");

              return (
                <figure key={i} className="space-y-2">
                  {isVideo ? (
                    <video
                      src={mediaUrl}
                      controls
                      className="rounded-xl w-full"
                    />
                  ) : (
                    <img
                      src={mediaUrl}
                      alt={item.caption || ""}
                      className="rounded-xl w-full object-cover"
                    />
                  )}

                  {item.caption && (
                    <figcaption className="text-sm text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
