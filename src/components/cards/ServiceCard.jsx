export default function ServiceCard({
  icono,
  titulo,
  descripcion,
}) {
  return (
    <article
      className="
        group
        rounded-[28px]
        border border-pink-100
        bg-white
        p-6
        shadow-[0_14px_40px_rgba(115,65,85,0.08)]
        transition-all duration-300

        active:scale-[0.99]

        sm:p-8

        lg:hover:-translate-y-2
        lg:hover:border-pink-200
        lg:hover:shadow-[0_22px_50px_rgba(115,65,85,0.15)]
      "
    >
      <div
        className="
          mb-6
          flex h-18 w-18
          items-center justify-center
          rounded-3xl
          bg-gradient-to-br
          from-pink-50
          to-rose-50
          text-5xl
          transition-transform duration-300

          lg:group-hover:scale-110
        "
      >
        {icono}
      </div>

      <h3
        className="
          font-serif
          text-2xl
          font-semibold
          text-gray-900
        "
      >
        {titulo}
      </h3>

      <p
        className="
          mt-4
          text-base
          leading-7
          text-gray-600
        "
      >
        {descripcion}
      </p>
    </article>
  );
}