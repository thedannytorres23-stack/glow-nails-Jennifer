import OccasionCard from "../cards/OccasionCard";

export default function OccasionSelector({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  const ocasiones = [
    {
      icono: "🌟",
      titulo: "Todas",
      descripcion: "Explora la colección completa.",
    },
    {
      icono: "💍",
      titulo: "Boda",
      descripcion: "Diseños delicados para un día inolvidable.",
    },
    {
      icono: "🥂",
      titulo: "Cita",
      descripcion: "Un toque especial para una noche diferente.",
    },
    {
      icono: "🌸",
      titulo: "Consentirme",
      descripcion: "Porque también puedes arreglarte solo para ti.",
    },
    {
      icono: "💼",
      titulo: "Trabajo",
      descripcion: "Elegancia limpia, sutil y profesional.",
    },
    {
      icono: "🌴",
      titulo: "Vacaciones",
      descripcion: "Colores frescos para salir de la rutina.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
            ✨ Encuentra inspiración
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Elige la ocasión
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Selecciona el momento para el que buscas inspiración y descubre los
            diseños que mejor encajan contigo.
          </p>
        </div>

        <div className="relative">

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent" />

          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory">
            {ocasiones.map((ocasion) => (
              <OccasionCard
                key={ocasion.titulo}
                icono={ocasion.icono}
                titulo={ocasion.titulo}
                descripcion={ocasion.descripcion}
                activa={categoriaSeleccionada === ocasion.titulo}
                onClick={() =>
                  setCategoriaSeleccionada(ocasion.titulo)
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}