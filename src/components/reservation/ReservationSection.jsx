import { useState } from "react";

export default function ReservationSection({
  design,
  respuestas,
  isVisible,
}) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    comentarios: "",
  });

  if (!isVisible || !design) {
    return null;
  }

  const actualizarCampo = (event) => {
    const { name, value } = event.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }));
  };

  const confirmarReserva = (event) => {
    event.preventDefault();

    if (
      !formulario.nombre.trim() ||
      !formulario.telefono.trim() ||
      !formulario.fecha ||
      !formulario.hora
    ) {
      alert("Completa tu nombre, teléfono, fecha y hora.");
      return;
    }

    const whatsappNumber = "18295091481";

    const mensaje = encodeURIComponent(
      `Hola Jennifer 😊

Me gustaría solicitar una cita en Glow Nails Jennifer.

👤 DATOS DE LA CLIENTA

Nombre: ${formulario.nombre}
Teléfono: ${formulario.telefono}

💅 DISEÑO SELECCIONADO

Diseño: ${design.nombre}
Código: ${
        design.codigo ||
        design.code ||
        (design.id ? `GN-${String(design.id).padStart(3, "0")}` : "Sin código")
      }
Precio aproximado: RD$${design.precio.toLocaleString()}
Duración aproximada: ${design.duracion}

✨ PREFERENCIAS

Ocasión: ${respuestas.ocasion}
Estilo: ${respuestas.estilo}
Color: ${respuestas.color}

📅 CITA SOLICITADA

Fecha: ${formulario.fecha}
Hora: ${formulario.hora}

📝 COMENTARIOS

${formulario.comentarios.trim() || "Sin comentarios adicionales."}

¿Está disponible este horario?`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensaje}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="reservar-cita"
      className="bg-gradient-to-b from-white via-pink-50/40 to-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            📅 Reserva personalizada
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Tu diseño ya está listo para ti
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Ya conocemos el diseño y las preferencias que elegiste. Solo faltan
            algunos datos para solicitar tu cita con Jennifer.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-7 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500">
              Tu elección
            </p>

            <div className="mt-5 overflow-hidden rounded-3xl shadow-lg">
              <img
                src={design.imagen}
                alt={design.nombre}
                className="h-72 w-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              {design.nombre}
            </h3>

            <p className="mt-2 text-sm font-medium text-pink-600">
              Código:{" "}
              {design.codigo ||
                design.code ||
                (design.id
                  ? `GN-${String(design.id).padStart(3, "0")}`
                  : "Diseño personalizado")}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                <p className="text-sm text-gray-500">Precio aproximado</p>

                <p className="mt-1 font-bold text-gray-900">
                  RD${design.precio.toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                <p className="text-sm text-gray-500">Duración</p>

                <p className="mt-1 font-bold text-gray-900">
                  {design.duracion}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                {respuestas.ocasion}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                {respuestas.estilo}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                {respuestas.color}
              </span>
            </div>

            <p className="mt-7 leading-relaxed text-gray-600">
              Jennifer confirmará personalmente la disponibilidad, el precio
              final y cualquier ajuste que quieras realizar.
            </p>
          </div>

          <form
            onSubmit={confirmarReserva}
            className="p-7 md:p-10 lg:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Completa tu solicitud
            </h3>

            <p className="mt-3 text-gray-600">
              Los campos marcados son necesarios para coordinar la cita.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-semibold text-gray-700">
                  Nombre completo *
                </span>

                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={actualizarCampo}
                  placeholder="Ejemplo: Laura Gómez"
                  className="w-full rounded-2xl border border-pink-200 bg-white px-4 py-3.5 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-gray-700">
                  Teléfono *
                </span>

                <input
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={actualizarCampo}
                  placeholder="809-000-0000"
                  className="w-full rounded-2xl border border-pink-200 bg-white px-4 py-3.5 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-gray-700">
                  Fecha deseada *
                </span>

                <input
                  type="date"
                  name="fecha"
                  value={formulario.fecha}
                  onChange={actualizarCampo}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-2xl border border-pink-200 bg-white px-4 py-3.5 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-semibold text-gray-700">
                  Hora preferida *
                </span>

                <select
                  name="hora"
                  value={formulario.hora}
                  onChange={actualizarCampo}
                  className="w-full rounded-2xl border border-pink-200 bg-white px-4 py-3.5 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                >
                  <option value="">Selecciona una hora</option>
                  <option value="9:00 a. m.">9:00 a. m.</option>
                  <option value="10:30 a. m.">10:30 a. m.</option>
                  <option value="12:00 p. m.">12:00 p. m.</option>
                  <option value="2:00 p. m.">2:00 p. m.</option>
                  <option value="3:30 p. m.">3:30 p. m.</option>
                  <option value="5:00 p. m.">5:00 p. m.</option>
                </select>
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block font-semibold text-gray-700">
                Comentarios adicionales
              </span>

              <textarea
                name="comentarios"
                value={formulario.comentarios}
                onChange={actualizarCampo}
                rows="5"
                placeholder="Ejemplo: Me gustaría agregar un poco más de brillo..."
                className="w-full resize-none rounded-2xl border border-pink-200 bg-white px-4 py-3.5 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />
            </label>

            <button
              type="submit"
              className="glow-touch mt-8 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              💖 Solicitar cita por WhatsApp
            </button>

            <p className="mt-4 text-center text-sm leading-relaxed text-gray-500">
              La cita quedará pendiente hasta que Jennifer confirme la fecha y
              la hora por WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}