export default function OccasionCard({
  icono,
  titulo,
  descripcion,
  activa,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        glow-touch
        group
        min-w-[280px]
        max-w-[280px]
        snap-start
        rounded-[2rem]
        border-2
        p-7
        text-left
        transition-all
        duration-300

        ${
          activa
            ? "border-pink-600 bg-pink-600 text-white shadow-xl -translate-y-2"
            : "border-pink-100 bg-white text-gray-900 shadow-sm hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl"
        }
      `}
    >
      <div
        className={`
          flex h-14 w-14 items-center justify-center rounded-2xl text-3xl
          transition duration-300

          ${
            activa
              ? "bg-white/20"
              : "bg-pink-50 group-hover:bg-pink-100"
          }
        `}
      >
        {icono}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {titulo}
      </h3>

      <p
        className={`
          mt-3 leading-relaxed

          ${
            activa
              ? "text-pink-100"
              : "text-gray-600"
          }
        `}
      >
        {descripcion}
      </p>

      <div
        className={`
          mt-6 flex items-center gap-2 text-sm font-semibold

          ${
            activa
              ? "text-white"
              : "text-pink-600"
          }
        `}
      >
        <span>
          {activa ? "Seleccionado" : "Ver diseños"}
        </span>

        <span
          className={`
            transition-transform duration-300

            ${
              activa
                ? "translate-x-1"
                : "group-hover:translate-x-1"
            }
          `}
        >
          →
        </span>
      </div>
    </button>
  );
}