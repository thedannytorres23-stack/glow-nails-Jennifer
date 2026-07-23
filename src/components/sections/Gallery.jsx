import NailCard from "../cards/NailCard";
import nailsData from "../../data/nailsData";

export default function Gallery({ categoriaSeleccionada }) {
  const categoriaActual = categoriaSeleccionada || "Todas";

  const diseñosFiltrados =
    categoriaActual === "Todas"
      ? nailsData
      : nailsData.filter(
          (nail) => nail.categoria === categoriaActual
        );

  const totalDiseños = diseñosFiltrados.length;

  return (
    <section
      id="coleccion"
      className="
        relative scroll-mt-20 overflow-hidden
        bg-white px-4 py-20
        sm:px-6 sm:py-24
        lg:px-8 lg:py-28
      "
    >
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-36 top-1/3
          h-80 w-80 rounded-full
          bg-pink-100/60 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 bottom-20
          h-96 w-96 rounded-full
          bg-rose-100/50 blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-pink-100
              bg-pink-50/80 px-4 py-2
              text-xs font-bold text-pink-600
              shadow-sm backdrop-blur-sm
              sm:text-sm
            "
          >
            <span aria-hidden="true">✦</span>
            Nuestra colección
          </span>

          <h2
            className="
              mt-5 font-serif
              text-4xl font-semibold
              leading-tight tracking-[-0.03em]
              text-gray-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Explora diseños que{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-500 to-rose-500
                bg-clip-text text-transparent
              "
            >
              hablan de ti
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-7 text-gray-600
              sm:text-lg sm:leading-8
            "
          >
            Descubre estilos creados para diferentes momentos,
            personalidades y ocasiones. Guarda la inspiración que
            más se parezca a ti.
          </p>
        </div>

        {/* Información del filtro */}
        <div
          className="
            mt-10 flex flex-col gap-3
            rounded-[24px]
            border border-pink-100
            bg-gradient-to-r
            from-pink-50/80 via-white to-rose-50/80
            px-4 py-4
            shadow-[0_12px_35px_rgba(115,65,85,0.06)]
            sm:flex-row sm:items-center
            sm:justify-between sm:px-5
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-full bg-white
                text-lg shadow-sm
              "
            >
              {obtenerIconoCategoria(categoriaActual)}
            </span>

            <div className="min-w-0">
              <p
                className="
                  text-[10px] font-bold uppercase
                  tracking-[0.16em] text-pink-500
                "
              >
                Mostrando categoría
              </p>

              <p
                className="
                  mt-1 truncate
                  font-serif text-lg font-semibold
                  text-gray-900
                "
              >
                {categoriaActual}
              </p>
            </div>
          </div>

          <div
            className="
              flex items-center justify-between
              border-t border-pink-100 pt-3
              sm:border-l sm:border-t-0
              sm:pl-5 sm:pt-0
            "
          >
            <p className="text-sm text-gray-500">
              {totalDiseños === 1
                ? "1 diseño disponible"
                : `${totalDiseños} diseños disponibles`}
            </p>

            <span
              aria-hidden="true"
              className="
                ml-3 flex h-8 w-8
                items-center justify-center
                rounded-full bg-white
                text-pink-400 shadow-sm
                sm:hidden
              "
            >
              ↓
            </span>
          </div>
        </div>

        {/* Galería */}
        {totalDiseños > 0 ? (
          <div
            className="
              mt-8 grid grid-cols-1
              gap-6
              sm:mt-10
              sm:grid-cols-2
              sm:gap-7
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {diseñosFiltrados.map((nail) => (
              <NailCard
                key={nail.id}
                imagen={nail.imagen}
                nombre={nail.nombre}
                categoria={nail.categoria}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              mx-auto mt-10
              max-w-xl rounded-[28px]
              border border-dashed border-pink-200
              bg-pink-50/60
              px-5 py-12
              text-center
            "
          >
            <span
              aria-hidden="true"
              className="
                mx-auto flex h-16 w-16
                items-center justify-center
                rounded-full bg-white
                text-3xl shadow-sm
              "
            >
              💅
            </span>

            <h3
              className="
                mt-5 font-serif
                text-2xl font-semibold
                text-gray-900
              "
            >
              Aún no hay diseños en esta categoría
            </h3>

            <p
              className="
                mx-auto mt-3 max-w-md
                text-sm leading-6 text-gray-500
                sm:text-base
              "
            >
              Próximamente Jennifer agregará nuevas ideas para esta
              ocasión. Mientras tanto, puedes explorar las demás
              categorías.
            </p>
          </div>
        )}
      </div>
    </section>
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