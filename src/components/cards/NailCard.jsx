export default function NailCard({
  imagen,
  nombre,
  categoria,
}) {
  return (
    <article
      className="
        glow-touch group relative
        overflow-hidden rounded-[28px]
        border border-pink-100/80
        bg-white
        shadow-[0_16px_45px_rgba(105,60,80,0.10)]
        transition-all duration-300

        active:scale-[0.99]

        sm:rounded-[30px]

        lg:hover:-translate-y-2
        lg:hover:border-pink-200
        lg:hover:shadow-[0_24px_60px_rgba(105,60,80,0.18)]
      "
    >
      {/* Imagen */}
      <div
        className="
          relative overflow-hidden
          bg-pink-50
        "
      >
        <img
          src={imagen}
          alt={`Diseño de uñas ${nombre}`}
          loading="lazy"
          className="
            aspect-[4/5] w-full
            object-cover object-center
            transition-transform duration-700

            lg:group-hover:scale-[1.06]
          "
        />

        {/* Degradado inferior */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-x-0 bottom-0
            h-2/5
            bg-gradient-to-t
            from-gray-950/35
            via-gray-950/10
            to-transparent
          "
        />

        {/* Categoría sobre la imagen */}
        <span
          className="
            absolute left-4 top-4
            inline-flex items-center gap-1.5
            rounded-full
            border border-white/40
            bg-white/90
            px-3 py-1.5
            text-[11px] font-bold
            uppercase tracking-[0.12em]
            text-pink-600
            shadow-sm
            backdrop-blur-md

            sm:left-5 sm:top-5
          "
        >
          <span aria-hidden="true">
            {obtenerIconoCategoria(categoria)}
          </span>

          {categoria}
        </span>

        {/* Indicador visual */}
        <span
          aria-hidden="true"
          className="
            absolute bottom-4 right-4
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/40
            bg-white/90
            text-lg text-pink-500
            shadow-md
            backdrop-blur-md
            transition-all duration-300

            sm:bottom-5 sm:right-5

            lg:group-hover:translate-x-1
            lg:group-hover:bg-pink-500
            lg:group-hover:text-white
          "
        >
          →
        </span>
      </div>

      {/* Contenido */}
      <div
        className="
          flex min-h-[112px]
          items-center justify-between
          gap-4 px-5 py-5

          sm:min-h-[122px]
          sm:px-6 sm:py-6
        "
      >
        <div className="min-w-0">
          <p
            className="
              text-[10px] font-bold
              uppercase tracking-[0.16em]
              text-pink-500
            "
          >
            Diseño Jennifer Nails
          </p>

          <h3
            className="
              mt-2 line-clamp-2
              font-serif text-xl
              font-semibold leading-tight
              text-gray-900

              sm:text-2xl
            "
          >
            {nombre}
          </h3>
        </div>

        <span
          aria-hidden="true"
          className="
            hidden h-10 w-10 shrink-0
            items-center justify-center
            rounded-full bg-pink-50
            text-pink-400
            transition-all duration-300

            sm:flex

            lg:group-hover:rotate-12
            lg:group-hover:bg-pink-100
          "
        >
          ✦
        </span>
      </div>

      {/* Línea decorativa */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0
          h-1 w-full
          origin-left scale-x-0
          bg-gradient-to-r
          from-pink-500 to-rose-400
          transition-transform duration-500

          lg:group-hover:scale-x-100
        "
      />
    </article>
  );
}

function obtenerIconoCategoria(categoria) {
  const iconos = {
    Todas: "🌟",
    Boda: "💍",
    Cita: "🥂",
    Consentirme: "🌸",
    Trabajo: "💼",
    Vacaciones: "🌴",
  };

  return iconos[categoria] || "💅";
}