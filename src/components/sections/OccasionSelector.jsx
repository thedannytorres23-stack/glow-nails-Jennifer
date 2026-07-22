export default function OccasionSelector({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  const ocasiones = [
    {
      icono: "🌟",
      titulo: "Todas",
      descripcion: "Explora todos los diseños disponibles.",
    },
    {
      icono: "💍",
      titulo: "Boda",
      descripcion: "Elegancia delicada para un día inolvidable.",
    },
    {
      icono: "🥂",
      titulo: "Cita",
      descripcion: "Un estilo especial para una noche diferente.",
    },
    {
      icono: "🌸",
      titulo: "Consentirme",
      descripcion: "Porque también mereces arreglarte para ti.",
    },
    {
      icono: "💼",
      titulo: "Trabajo",
      descripcion: "Diseños sutiles, limpios y profesionales.",
    },
    {
      icono: "🌴",
      titulo: "Vacaciones",
      descripcion: "Colores frescos para salir de la rutina.",
    },
  ];

  const seleccionarOcasion = (titulo) => {
    setCategoriaSeleccionada(titulo);
  };

  return (
    <section
      id="ocasiones"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-white via-pink-50/60 to-white
        px-4 py-20
        sm:px-6 sm:py-24
        lg:px-8 lg:py-28
      "
    >
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 top-20
          h-72 w-72 rounded-full
          bg-pink-200/30 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 bottom-10
          h-80 w-80 rounded-full
          bg-rose-200/30 blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div
          className="
            mx-auto max-w-3xl
            text-center
          "
        >
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-pink-100
              bg-white/85
              px-4 py-2
              text-xs font-bold
              text-pink-600
              shadow-sm
              backdrop-blur-md
              sm:text-sm
            "
          >
            <span aria-hidden="true">✨</span>
            Encuentra inspiración
          </span>

          <h2
            className="
              mt-5 font-serif
              text-4xl font-semibold
              leading-tight
              tracking-[-0.03em]
              text-gray-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            ¿Para qué ocasión buscas{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-500 to-rose-500
                bg-clip-text text-transparent
              "
            >
              tu próximo diseño?
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-7
              text-gray-600
              sm:text-lg sm:leading-8
            "
          >
            Elige el momento que mejor representa lo que deseas
            y te mostraremos diseños pensados especialmente para ti.
          </p>
        </div>

        {/* Categorías */}
        <div className="mt-10 sm:mt-14">
          {/* Indicador móvil */}
          <div
            className="
              mb-4 flex items-center
              justify-between px-1
              md:hidden
            "
          >
            <p className="text-xs font-semibold text-gray-500">
              Desliza para ver más opciones
            </p>

            <span
              aria-hidden="true"
              className="
                animate-pulse text-sm
                text-pink-400
              "
            >
              →
            </span>
          </div>

          <div
            className="
              -mx-4 flex gap-4
              overflow-x-auto
              px-4 pb-5
              snap-x snap-mandatory
              scroll-smooth

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:-mx-6 sm:px-6

              md:mx-0
              md:grid
              md:grid-cols-2
              md:gap-5
              md:overflow-visible
              md:px-0
              md:pb-0

              lg:grid-cols-3
            "
          >
            {ocasiones.map((ocasion) => {
              const activa =
                categoriaSeleccionada === ocasion.titulo;

              return (
                <button
                  key={ocasion.titulo}
                  type="button"
                  onClick={() =>
                    seleccionarOcasion(ocasion.titulo)
                  }
                  aria-pressed={activa}
                  className={`
                    group relative
                    min-h-[190px]
                    w-[82vw]
                    max-w-[320px]
                    shrink-0
                    snap-center
                    overflow-hidden
                    rounded-[28px]
                    border p-5
                    text-left
                    transition-all
                    duration-300

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-pink-400
                    focus-visible:ring-offset-2

                    active:scale-[0.98]

                    sm:w-[300px]

                    md:min-h-[210px]
                    md:w-full
                    md:max-w-none

                    ${
                      activa
                        ? `
                          border-pink-300
                          bg-gradient-to-br
                          from-pink-500 to-rose-500
                          text-white
                          shadow-[0_20px_45px_rgba(236,72,153,0.28)]
                          md:-translate-y-1
                        `
                        : `
                          border-pink-100
                          bg-white/90
                          text-gray-900
                          shadow-[0_14px_40px_rgba(115,65,85,0.08)]
                          backdrop-blur-md
                          hover:-translate-y-1
                          hover:border-pink-200
                          hover:shadow-[0_20px_45px_rgba(115,65,85,0.13)]
                        `
                    }
                  `}
                >
                  {/* Luz decorativa */}
                  <span
                    aria-hidden="true"
                    className={`
                      pointer-events-none absolute
                      -right-14 -top-14
                      h-40 w-40 rounded-full
                      blur-2xl
                      transition-all duration-500

                      ${
                        activa
                          ? "bg-white/20"
                          : "bg-pink-100/70 group-hover:bg-pink-200/70"
                      }
                    `}
                  />

                  {/* Encabezado tarjeta */}
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        text-2xl
                        shadow-sm
                        transition-all duration-300

                        ${
                          activa
                            ? "bg-white/20"
                            : "bg-pink-50 group-hover:scale-105 group-hover:bg-pink-100"
                        }
                      `}
                    >
                      {ocasion.icono}
                    </span>

                    <span
                      className={`
                        flex h-9 w-9
                        items-center justify-center
                        rounded-full
                        border
                        text-sm
                        transition-all duration-300

                        ${
                          activa
                            ? `
                              border-white/30
                              bg-white text-pink-500
                              shadow-md
                            `
                            : `
                              border-pink-100
                              bg-white
                              text-pink-400
                              group-hover:translate-x-1
                              group-hover:border-pink-200
                              group-hover:bg-pink-50
                            `
                        }
                      `}
                      aria-hidden="true"
                    >
                      {activa ? "✓" : "→"}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="relative mt-6">
                    <p
                      className={`
                        text-xs font-bold
                        uppercase tracking-[0.16em]

                        ${
                          activa
                            ? "text-white/75"
                            : "text-pink-500"
                        }
                      `}
                    >
                      Ocasión
                    </p>

                    <h3
                      className="
                        mt-2 font-serif
                        text-2xl font-semibold
                      "
                    >
                      {ocasion.titulo}
                    </h3>

                    <p
                      className={`
                        mt-2 text-sm
                        leading-6

                        ${
                          activa
                            ? "text-white/85"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {ocasion.descripcion}
                    </p>
                  </div>

                  {/* Indicador seleccionado */}
                  {activa && (
                    <div
                      className="
                        absolute bottom-0
                        left-0 right-0
                        h-1
                        bg-white/80
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Estado de la selección */}
        <div
          className="
            mx-auto mt-8
            flex max-w-2xl
            items-center gap-3
            rounded-2xl
            border border-pink-100
            bg-white/80
            px-4 py-3
            shadow-sm
            backdrop-blur-md
            sm:px-5 sm:py-4
          "
        >
          <span
            aria-hidden="true"
            className="
              flex h-10 w-10
              shrink-0 items-center
              justify-center
              rounded-full
              bg-pink-100
              text-lg
            "
          >
            {
              ocasiones.find(
                (ocasion) =>
                  ocasion.titulo === categoriaSeleccionada
              )?.icono || "🌟"
            }
          </span>

          <div className="min-w-0 flex-1">
            <p
              className="
                text-[10px] font-bold
                uppercase tracking-[0.15em]
                text-pink-500
              "
            >
              Selección actual
            </p>

            <p
              className="
                mt-0.5 truncate
                text-sm font-semibold
                text-gray-800
                sm:text-base
              "
            >
              {categoriaSeleccionada || "Todas"}
            </p>
          </div>

          <span
            className="
              hidden text-xs
              font-medium text-gray-400
              sm:block
            "
          >
            Mostrando diseños relacionados
          </span>
        </div>
      </div>
    </section>
  );
}