interface InstagramGalleryProps {
  limit?: number;
}
export default function InstagramGallery({ limit = 6 }: InstagramGalleryProps) {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Aktivitas Belajar di Creativo School
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Kegiatan belajar, proses kreatif siswa, dan suasana kelas di Creativo
            School yang kami bagikan melalui Instagram.
          </p>
        </div>

        {/* GRID FOTO */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/instagram/ig-1.jpg",
            "/instagram/ig-2.jpg",
            "/instagram/ig-3.jpg",
            "/instagram/ig-4.jpg",
            "/instagram/ig-5.jpg",
            "/instagram/ig-6.jpg",
          ].map((src, index) => (
            <a
              key={index}
              href="https://www.instagram.com/creativoschool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka Instagram Creativo School"
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <img
                src={src}
                alt={`Aktivitas belajar di Creativo School ${index + 1}`}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                {/* IG ICON */}
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2Zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0Z" />
                </svg>
              </div>
            </a>
          ))}
        </div>


        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.instagram.com/creativoschool/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:underline"
          >
            Lihat aktivitas lainnya di Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
