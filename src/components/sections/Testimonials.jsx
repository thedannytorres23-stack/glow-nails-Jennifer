import reviews from "../../data/reviews";
import ReviewCard from "../cards/ReviewCard";

export default function Testimonials() {
  const reviewsActivas = reviews.filter(
    (review) => review.activa
  );

  return (
    <section
      id="resenas"
      className="bg-gradient-to-b from-white to-pink-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-14 sm:px-6">
          <span className="inline-flex rounded-full border border-pink-100 bg-white px-4 py-2 text-xs font-semibold text-pink-600 shadow-sm sm:text-sm">
            💖 Experiencias reales
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Lo que dicen nuestras clientas
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Cada diseño cuenta una historia. Estas son algunas de las
            experiencias de quienes ya confiaron en Glow Nails Jennifer.
          </p>
        </header>

        {reviewsActivas.length > 0 ? (
          <div
            className="
              flex snap-x snap-mandatory gap-5 overflow-x-auto
              px-4 pb-8 pt-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:px-6
              md:grid md:grid-cols-2 md:overflow-visible
              lg:grid-cols-3 lg:gap-8
            "
          >
            {reviewsActivas.map((review) => (
              <ReviewCard
                key={review.id}
                nombre={review.nombre}
                texto={review.texto}
                estrellas={review.estrellas}
                fecha={review.fecha}
                iniciales={review.iniciales}
              />
            ))}
          </div>
        ) : (
          <div className="mx-4 rounded-3xl border border-pink-100 bg-white px-6 py-10 text-center shadow-sm sm:mx-6">
            <p className="font-semibold text-gray-700">
              Próximamente compartiremos nuevas experiencias.
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-center px-4 sm:mt-10 sm:px-6">
          <div className="inline-flex flex-col items-center gap-1 rounded-3xl border border-pink-100 bg-white px-5 py-3 text-center shadow-sm min-[380px]:flex-row min-[380px]:gap-3 min-[380px]:rounded-full sm:px-6">
            <span
              className="text-lg tracking-wide text-yellow-400"
              aria-hidden="true"
            >
              ★★★★★
            </span>

            <span className="text-sm font-semibold text-gray-700">
              Atención cuidada en cada detalle
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}