import ServiceCard from "../cards/ServiceCard";

export default function Services() {
  return (
    <section
      id="servicios"
      className="
        bg-white
        px-4 py-20
        sm:px-6 sm:py-24
        lg:px-8 lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-pink-100
              bg-pink-50
              px-4 py-2
              text-xs font-bold
              text-pink-600
              shadow-sm
              sm:text-sm
            "
          >
            ✨ Nuestros servicios
          </span>

          <h2
            className="
              mt-5
              font-serif
              text-4xl font-semibold
              leading-tight
              tracking-[-0.03em]
              text-gray-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Todo lo que necesitas para
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              {" "}lucir increíble
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-2xl
              text-base leading-7
              text-gray-600
              sm:text-lg
            "
          >
            Cada servicio está pensado para resaltar tu estilo,
            cuidar tus uñas y ofrecerte una experiencia relajante
            desde el primer momento.
          </p>
        </div>

        <div
          className="
            mt-12
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-8
          "
        >
          <ServiceCard
            icono="💅"
            titulo="Manicure"
            descripcion="Acabados elegantes y duraderos para cualquier ocasión."
          />

          <ServiceCard
            icono="🎨"
            titulo="Nail Art"
            descripcion="Diseños personalizados que reflejan tu esencia."
          />

          <ServiceCard
            icono="👣"
            titulo="Pedicure"
            descripcion="Cuidado completo para lucir impecable."
          />
        </div>
      </div>
    </section>
  );
}