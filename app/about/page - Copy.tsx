export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-800">
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Apa itu Creativo</h2>
          <p className="leading-relaxed">
            <strong>Creativo School</strong> adalah ruang belajar kreatif yang membantu
            anak, remaja, dan dewasa muda mengembangkan potensi mereka di bidang desain,
            ilustrasi, dan seni digital.
          </p>
          <p className="leading-relaxed">
            Creativo dirancang bukan sebagai tempat kursus semata, tetapi sebagai
            <strong> ruang belajar yang bertumbuh</strong>—di mana proses disesuaikan
            dengan karakter, minat, dan tujuan setiap individu.
          </p>
        </section>

        {/* Tentang Creativo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tentang Creativo</h2>
          <p className="leading-relaxed">
            <strong>Creativo School</strong> adalah ruang belajar dan eksplorasi kreatif
            yang membantu anak, remaja, dan dewasa muda menemukan serta mengembangkan
            potensi mereka di bidang desain, ilustrasi, dan seni digital.
          </p>
          <p className="leading-relaxed">
            Creativo tidak dibangun sebagai tempat kursus semata, tetapi sebagai
            <strong> ruang bertumbuh</strong> — di mana proses belajar disesuaikan
            dengan karakter, minat, dan tujuan setiap individu.
          </p>
        </section>

        {/* Siapa yang Kami Dampingi */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Siapa yang Kami Dampingi</h2>
          <p className="leading-relaxed">
            Creativo mendampingi dua peran penting dalam proses belajar:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Orangtua</strong>, yang menginginkan anaknya berkembang secara
              kreatif, percaya diri, dan memiliki fondasi yang sehat untuk masa depan.
            </li>
            <li>
              <strong>Siswa dan remaja</strong>, yang ingin belajar desain dan seni
              digital dengan pendekatan yang menyenangkan, relevan, dan aplikatif.
            </li>
          </ul>
          <p className="leading-relaxed">
            Setiap siswa datang dengan latar belakang dan ritme belajar yang berbeda.
            Karena itu, Creativo hadir untuk <strong>mendampingi</strong>, bukan
            membandingkan.
          </p>
        </section>

        {/* Pendekatan Pembelajaran */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Pendekatan Pembelajaran</h2>
          <p className="leading-relaxed">
            Pendekatan belajar di Creativo dirancang agar proses belajar terasa
            menyenangkan, terarah, dan bermakna bagi setiap siswa.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fleksibel terhadap waktu dan kebutuhan siswa</li>
            <li>Disesuaikan dengan tujuan belajar masing-masing</li>
            <li>Menggabungkan pendekatan kognitif dan behavior</li>
            <li>Menggunakan perangkat dan software yang sudah familiar</li>
          </ul>
          <p className="leading-relaxed">
            Siswa tidak hanya belajar membuat karya, tetapi juga membangun cara
            berpikir kreatif dan kepercayaan diri melalui proses.
          </p>
        </section>

        {/* Posisi Creativo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Posisi Creativo</h2>
          <p className="leading-relaxed">
            Creativo berada di persimpangan antara ruang eksplorasi kreatif,
            jembatan menuju dunia industri, dan pendukung akademik.
          </p>
          <p className="leading-relaxed">
            Dengan posisi ini, Creativo berupaya menghubungkan potensi siswa
            dengan proses belajar yang relevan dan arah masa depan yang lebih jelas.
          </p>
        </section>

        {/* Nilai */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Nilai yang Kami Pegang</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <strong>Personal</strong><br />
              Setiap siswa diperlakukan sebagai individu, bukan angka.
            </li>
            <li>
              <strong>Fun</strong><br />
              Proses belajar yang menyenangkan menciptakan keberlanjutan.
            </li>
            <li>
              <strong>Profesional</strong><br />
              Pendekatan berbasis standar dan tanggung jawab.
            </li>
            <li>
              <strong>Fleksibel</strong><br />
              Sistem menyesuaikan kebutuhan siswa, bukan sebaliknya.
            </li>
          </ul>
        </section>

        {/* Keyakinan */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Keyakinan Kami</h2>
            <p className="leading-relaxed">
              Creativo berangkat dari pemahaman bahwa setiap individu memiliki
              potensi dasar. Namun, potensi tersebut tidak selalu berkembang dengan
              sendirinya tanpa niat, pendampingan, dan lingkungan belajar yang tepat.
            </p>
            <p className="leading-relaxed">
              Sama seperti tidak semua orang yang bisa berlari akan menjadi atlet,
              perkembangan membutuhkan proses, arahan, dan konsistensi. Karena itu,
              Creativo memandang pendidikan sebagai perjalanan bertumbuh—bukan
              perlombaan kecepatan, melainkan proses yang dijalani dengan sadar
              dan berkelanjutan.
            </p>
        </section>

        {/* Penutup */}
        <footer className="pt-8 border-t text-neutral-600">
          Creativo School terus berkembang sebagai ruang belajar yang aman,
          relevan, dan bermakna bagi setiap proses kreatif.
        </footer>

      </section>
    </main>
  );
}
