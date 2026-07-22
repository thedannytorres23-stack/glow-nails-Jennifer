import ServiceCard from "../cards/ServiceCard";

<section id="servicios"></section>

export default function Services() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Nuestros Servicios
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Diseñados para resaltar tu estilo y personalidad.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

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