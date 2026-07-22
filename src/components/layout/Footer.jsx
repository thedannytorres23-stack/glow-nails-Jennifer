export default function Footer() {
  const añoActual = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="group relative overflow-hidden bg-[#1e1625] px-6 pb-8 pt-20 text-white">
      {/* Línea superior */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500" />

      {/* Marca de agua */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          flex items-center justify-center
          overflow-hidden
        "
      >
        <span
          className="
            select-none whitespace-nowrap
            text-[5.5rem] font-black tracking-[0.08em]
            text-white/[0.035]
            transition-transform duration-1000
            group-hover:scale-[1.03]
            sm:text-[8rem]
            lg:text-[13rem]
          "
        >
          GLOW NAILS
        </span>
      </div>

      {/* Brillos decorativos */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:pr-8">
            <span className="inline-flex rounded-full border border-pink-300/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
              Glow Nails Jennifer
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight">
              Cada diseño
              <span className="block text-pink-400">
                resalta tu esencia.
              </span>
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed text-white/60">
              Diseños de uñas creados con dedicación, estilo y atención
              personalizada para cada ocasión.
            </p>
          </div>

          {/* Explorar */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-pink-300">
              Explorar
            </h3>

            <nav className="mt-6 flex flex-col items-start gap-4">
              <FooterButton
                texto="Inicio"
                onClick={() => scrollToSection("inicio")}
              />

              <FooterButton
                texto="Colección"
                onClick={() => scrollToSection("coleccion")}
              />

              <FooterButton
                texto="Servicios"
                onClick={() => scrollToSection("servicios")}
              />

              <FooterButton
                texto="Reseñas"
                onClick={() => scrollToSection("resenas")}
              />
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-pink-300">
              Contacto
            </h3>

            <div className="mt-6 space-y-5 text-white/65">
              <ContactItem
                icono="📍"
                titulo="Ubicación"
                texto="Santiago, República Dominicana"
              />

              <ContactItem
                icono="🕒"
                titulo="Horario"
                texto="Lunes a sábado"
              />

              <a
                href="https://wa.me/18090000000"
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-start gap-3 transition hover:text-white"
              >
                <span className="mt-0.5 text-lg">📱</span>

                <span>
                  <span className="block text-sm font-semibold text-white">
                    WhatsApp
                  </span>

                  <span className="mt-1 flex items-center gap-2 text-sm">
                    Reservar una cita
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-pink-300">
              Síguenos
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4">
              <SocialLink
                texto="Instagram"
                href="https://instagram.com/"
              />

              <SocialLink
                texto="Facebook"
                href="https://facebook.com/"
              />

              <SocialLink
                texto="TikTok"
                href="https://tiktok.com/"
              />
            </div>

            <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/45">
              Síguenos para descubrir nuevos diseños, ideas y trabajos
              recientes.
            </p>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>
              © {añoActual} Glow Nails Jennifer. Todos los derechos
              reservados.
            </p>

            <div className="text-left md:text-right">
              <p>Creado con pasión por el detalle.</p>

              <p className="mt-1">
                Diseñado y desarrollado por{" "}
                <span className="font-semibold text-pink-300">
                  Danny Torres
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterButton({ texto, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group/link flex items-center gap-2
        text-left text-white/60
        transition duration-300
        hover:text-white
      "
    >
      <span>{texto}</span>

      <span className="opacity-0 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100">
        →
      </span>
    </button>
  );
}

function ContactItem({ icono, titulo, texto }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-lg">{icono}</span>

      <div>
        <p className="text-sm font-semibold text-white">
          {titulo}
        </p>

        <p className="mt-1 text-sm">
          {texto}
        </p>
      </div>
    </div>
  );
}

function SocialLink({ texto, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group/link flex items-center gap-2
        text-white/60
        transition duration-300
        hover:text-white
      "
    >
      <span>{texto}</span>

      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
        →
      </span>
    </a>
  );
}