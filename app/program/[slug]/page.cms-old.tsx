// app/programs/[slug]/page.tsx

import ProgramDetailTemplate from "@/components/program/ProgramDetailTemplate";

async function getProgramBySlug(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_STRAPI_API_URL is not defined");
  }

  const res = await fetch(
    `${baseUrl}/api/programs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch program detail");
  }

  const json = await res.json();
  const item = json.data?.[0];

  if (!item) return null;

  // ⬇️ KIRIM RAW DATA (template yang handle)
  return item;
}

export default async function ProgramDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const program = await getProgramBySlug(slug);

  if (!program) {
    return (
      <div style={{ padding: "120px", textAlign: "center" }}>
        <h1>Program tidak ditemukan</h1>
      </div>
    );
  }

  return <ProgramDetailTemplate program={program} />;
}
