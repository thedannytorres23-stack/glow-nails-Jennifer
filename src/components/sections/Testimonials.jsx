import reviews from "../../data/reviews";
import ReviewCard from "../cards/ReviewCard";


<section
  id="resenas"
  className="bg-gradient-to-b from-white to-pink-50 px-6 py-24"
></section>



export default function Testimonials() {
  const reviewsActivas = reviews.filter(
    (review) => review.activa
  );

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
            💖 Experiencias reales
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Lo que dicen nuestras clientas
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Cada diseño cuenta una historia. Estas son algunas de las
            experiencias de quienes ya confiaron en Glow Nails Jennifer.
          </p>
        </header>

        <div
          className="
            flex snap-x snap-mandatory gap-6 overflow-x-auto
            pb-8 pt-2
            md:grid md:grid-cols-2 md:overflow-visible
            lg:grid-cols-3
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

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-pink-100 bg-white px-6 py-3 shadow-sm">
            <span className="text-lg text-yellow-400">
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