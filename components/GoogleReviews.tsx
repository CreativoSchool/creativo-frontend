export default function GoogleReviews() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Creativo+School/@-7.2615833,112.7478369,17z/data=!3m1!5s0x2dd7f9639a784157:0xb862692ec0705327!4m8!3m7!1s0x2dd7fb897836a651:0xc56643b79027b642!8m2!3d-7.2615886!4d112.7504172!9m1!1b1!16s%2Fg%2F1hc337tjj?entry=ttu";

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ulasan dari Google Review
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Pengalaman nyata dari siswa dan orang tua yang telah belajar di
            Creativo School.
          </p>
        </div>

        {/* REVIEW GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* REVIEW 1 */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border p-6 shadow-sm hover:shadow-md transition hover:border-pink-300"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 0 0-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.287-3.97z" />
                </svg>
              ))}
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              “Best place to learn art and design in Surabaya. Cool and helpful
              teachers, modern facilities, and affordable pricing. Not only a
              place to learn, but also a great environment to build connections.”
            </p>

            <p className="text-sm font-medium text-neutral-800">
              — Yohanna Cecilia
            </p>

            <p className="text-xs text-neutral-400 mt-1">
              Google Review · 7 years ago
            </p>
          </a>

          {/* REVIEW 2 */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border p-6 shadow-sm hover:shadow-md transition hover:border-pink-300"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 0 0-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.287-3.97z" />
                </svg>
              ))}
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              “The best place to learn art and design in Surabaya. The teachers
              analyze mistakes and guide how to improve. Tasks are also given
              for effective practice at home. Friendly staff and great learning
              atmosphere.”
            </p>

            <p className="text-sm font-medium text-neutral-800">
              — Robert Anggono
            </p>

            <p className="text-xs text-neutral-400 mt-1">
              Google Review · 5 years ago
            </p>
          </a>

          {/* REVIEW 3 */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border p-6 shadow-sm hover:shadow-md transition hover:border-pink-300"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 0 0-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.287-3.97z" />
                </svg>
              ))}
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              “A great creative school with innovative learning methods and very
              helpful teachers. Highly recommended for learning art.”
            </p>

            <p className="text-sm font-medium text-neutral-800">
              — Anna Ardiana
            </p>

            <p className="text-xs text-neutral-400 mt-1">
              Google Review · 8 months ago
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:underline"
          >
            Lihat semua ulasan di Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
