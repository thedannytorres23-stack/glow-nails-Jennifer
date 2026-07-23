export default function ReviewCard({
  nombre,
  texto,
  estrellas,
  fecha,
  iniciales,
}) {
  const estrellasValidas = Math.min(
    5,
    Math.max(0, Number(estrellas) || 0)
  );

  return (
    <article
      className="
        glow-touch group
        flex h-full
        min-w-[85%]
        snap-center flex-col
        rounded-[1.75rem]
        border border-pink-100
        bg-white
        p-6
        shadow-[0_12px_35px_rgba(115,65,85,0.08)]
        transition-all duration-300

        sm:min-w-[320px] sm:max-w-[370px] sm:p-7

        md:min-w-0 md:max-w-none md:snap-none

        lg:hover:-translate-y-2
        lg:hover:border-pink-200
        lg:hover:shadow-[0_20px_50px_rgba(115,65,85,0.14)]
      "
    >
      <div className="flex items-center justify-between gap-4">
        <div
          className="
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded-full
            bg-gradient-to-br from-pink-500 to-rose-400
            font-bold text-white
            shadow-md
          "
          aria-hidden="true"
        >
          {iniciales}
        </div>

        <span className="text-right text-xs text-gray-400 sm:text-sm">
          {fecha}
        </span>
      </div>

      <div
        className="mt-6 flex gap-1"
        aria-label={`${estrellasValidas} de 5 estrellas`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={
              index < estrellasValidas
                ? "text-xl text-yellow-400"
                : "text-xl text-gray-200"
            }
          >
            ★
          </span>
        ))}
      </div>

      <blockquote className="mt-5 flex-1">
        <p className="text-base leading-7 text-gray-600">
          “{texto}”
        </p>
      </blockquote>

      <footer className="mt-7 border-t border-pink-100 pt-5">
        <h3 className="font-bold text-gray-900">
          {nombre}
        </h3>

        <p className="mt-1 text-sm font-medium text-pink-500">
          Clienta de Glow Nails
        </p>
      </footer>
    </article>
  );
}