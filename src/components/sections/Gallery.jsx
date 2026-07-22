import NailCard from "../cards/NailCard";
import nailsData from "../../data/nailsData";

<section id="coleccion"></section>

export default function Gallery({ categoriaSeleccionada }) {
  const diseñosFiltrados =
    categoriaSeleccionada === "Todas"
      ? nailsData
      : nailsData.filter(
          (nail) => nail.categoria === categoriaSeleccionada
        );

  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Nuestra colección
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Explora a tu manera
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            ¿Ya sabes lo que buscas? Descubre todos nuestros diseños y filtra la
            colección según tu ocasión.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {diseñosFiltrados.map((nail) => (
            <NailCard
              key={nail.id}
              imagen={nail.imagen}
              nombre={nail.nombre}
              categoria={nail.categoria}
            />
          ))}
        </div>

      </div>
    </section>
  );
}