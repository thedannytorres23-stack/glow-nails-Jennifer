export default function ReviewCard({
  nombre,
  texto,
  estrellas,
  fecha,
  iniciales,
}) {
  return (
    <article className=" glow-touch group flex h-full min-w-[300px] max-w-[360px] snap-start flex-col rounded-[2rem] border border-pink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-w-0">
      <div className="flex items-center justify-between">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-gradient-to-br from-pink-500 to-rose-400
            font-bold text-white shadow-md
          "
        >
          {iniciales}
        </div>

        <span className="text-sm text-gray-400">
          {fecha}
        </span>
      </div>

      <div
        className="mt-6 flex gap-1"
        aria-label={`${estrellas} de 5 estrellas`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={
              index < estrellas
                ? "text-xl text-yellow-400"
                : "text-xl text-gray-200"
            }
          >
            ★
          </span>
        ))}
      </div>

      <p className="mt-5 flex-1 text-base leading-relaxed text-gray-600">
        “{texto}”
      </p>

      <div className="mt-7 border-t border-pink-50 pt-5">
        <h3 className="font-bold text-gray-900">
          {nombre}
        </h3>

        <p className="mt-1 text-sm font-medium text-pink-500">
          Clienta de Glow Nails
        </p>
      </div>
    </article>
  );
}