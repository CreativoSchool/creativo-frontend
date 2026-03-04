
export default function Footer() {
  return (
    <footer className="bg-creativo-dark text-creativo-text">
      <div
        className="
          max-w-6xl mx-auto px-6 py-12
          grid grid-cols-1 
          md:grid-cols-[1.3fr_1fr_1.3fr_1fr]
          gap-10 items-start
        "
      >
        {/* KOLOM 1 — LOGO */}
        <div className="space-y-4">
          <img
            src="/images/logo/creativo-logo-white.png"
            alt="Creativo School"
            width={160}
            className="h-auto"
          />

          <p className="text-sm leading-relaxed">
            Ruang belajar kreatif untuk proses bertumbuh yang terarah.
          </p>
        </div>

        {/* KOLOM 2 — MENU */}
        <div className="space-y-4">
          <h4 className="font-semibold text-creativo-light">Sitemaps</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-creativo-light">Home</a></li>
            <li><a href="/programs" className="hover:text-creativo-light">Programs</a></li>
            <li><a href="/about" className="hover:text-creativo-light">About</a></li>
            <li><a href="/gallery" className="hover:text-creativo-light">Gallery</a></li>
            <li><a href="/contact" className="hover:text-creativo-light">Contact</a></li>
          </ul>
        </div>

        {/* KOLOM 3 — KONTAK */}
        <div className="space-y-4">
          <h4 className="font-semibold text-creativo-light">Kontak</h4>

          <div className="space-y-3 text-sm leading-relaxed">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6285104971118?text=Hi%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20program%20di%20Creativo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-creativo-light"
              aria-label="WhatsApp Creativo School"
            >
              <img
                src="/icons/social/whatsapp.svg"
                alt="WhatsApp"
                className="w-4 h-4"
              />
              <span>+62 85 1 0497 1118</span>
            </a>

            {/* HOTLINE */}
            <a
              href="tel:+6285104971118"
              className="flex items-center gap-2 hover:text-creativo-light"
              aria-label="Hotline Creativo School"
            >
              <img
                src="/icons/social/hotline.svg"
                alt="Hotline"
                className="w-4 h-4"
              />
              <span>+62 85 1 0497 1118</span>
            </a>


            {/* LOKASI */}
            <div className="space-y-3">
              <div>
                <span className="font-medium">Creativo School — Headquarter</span><br />
                Grand City Mall Lt. 2<br />
                Central Alley Unit 41–42, Surabaya
              </div>

              <div>
                <span className="font-medium">Creativo School — Satellite Class</span><br />
                Jl. Mojopahit No. 9 Lt. UG<br />
                Surabaya
              </div>
            </div>

          </div>
        </div>


        {/* KOLOM 4 — SOCIAL MEDIA */}
        <div className="space-y-4">
          <h4 className="font-semibold text-creativo-light">Social Media</h4>

          <div className="flex items-center gap-4">
            {/* INSTAGRAM */}
            <SocialIcon
              href="https://www.instagram.com/creativoschool"
              icon="/icons/social/instagram.svg"
              activeIcon="/icons/social/instagram-active.svg"
              label="Instagram"
            />

            {/* TIKTOK */}
            <SocialIcon
              href="https://www.tiktok.com/@creativoschool"
              icon="/icons/social/tiktok.svg"
              activeIcon="/icons/social/tiktok-active.svg"
              label="TikTok"
            />

            {/* YOUTUBE */}
            <SocialIcon
              href="https://www.youtube.com/@creativoschool1631"
              icon="/icons/social/youtube.svg"
              activeIcon="/icons/social/youtube-active.svg"
              label="YouTube"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-creativo-border/20 text-center text-xs py-4">
        © {new Date().getFullYear()} Creativo School
      </div>
    </footer>
  );
}

/* =======================
   SOCIAL ICON COMPONENT
======================= */

function SocialIcon({
  href,
  icon,
  activeIcon,
  label,
}: {
  href: string;
  icon: string;
  activeIcon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-block"
    >
      <div className="relative w-6 h-6">
        {/* DEFAULT */}
        <img
          src={icon}
          alt={label}
          className="absolute inset-0 w-6 h-6 opacity-80 transition-opacity duration-200 group-hover:opacity-0"
        />
        {/* ACTIVE */}
        <img
          src={activeIcon}
          alt={`${label} Active`}
          className="absolute inset-0 w-6 h-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </div>
    </a>
  );
}
