export default function ServiceCard({ icono, titulo, descripcion }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="text-5xl mb-4">
        {icono}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {titulo}
      </h3>

      <p className="text-gray-600">
        {descripcion}
      </p>

    </div>
  );
}