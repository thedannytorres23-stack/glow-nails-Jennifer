export default function NailCard({ imagen, nombre, categoria }) {
  return (
    <div className="glow-touch group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="overflow-hidden">

        <img
          src={imagen}
          alt={nombre}
          className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-6">

        <span className="text-sm font-semibold text-pink-600">
          {categoria}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          {nombre}
        </h3>

      </div>

    </div>
  );
}