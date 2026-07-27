import { useState } from "react";

export default function ReservationSection({
  design,
  respuestas = {},
  isVisible,
}) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    comentarios: "",
  });

  const actualizarCampo = (event) => {
    const { name, value } = event.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }));
  };

  const obtenerCodigoDiseno = () => {
    if (design?.codigo) return design.codigo;
    if (design?.code) return design.code;

    if (design?.id) {
      return `GN-${String(design.id).padStart(3, "0")}`;
    }

    return "Diseño personalizado";
  };

  const confirmarReserva = (event) => {
    event.preventDefault();

    const nombre = formulario.nombre.trim();
    const telefono = formulario.telefono.trim();
    const comentarios = formulario.comentarios.trim();

    if (
      !nombre ||
      !telefono ||
      !formulario.fecha ||
      !formulario.hora
    ) {
      alert("Completa tu nombre, teléfono, fecha y hora.");
      return;
    }

    const telefonoLimpio = telefono.replace(/\D/g, "");

    if (telefonoLimpio.length < 10) {
      alert("Introduce un número de teléfono válido.");
      return;
    }

    const whatsappNumber = "18295091481";

    const mensaje = encodeURIComponent(
      `Hola Jennifer 😊

Me gustaría solicitar una cita en Glow Nails Jennifer.

👤 DATOS DE LA CLIENTA

Nombre: ${nombre}
Teléfono: ${telefono}

💅 DISEÑO SELECCIONADO

Diseño: ${design.nombre}
Código: ${obtenerCodigoDiseno()}
Precio aproximado: RD$${design.precio.toLocaleString()}
Duración aproximada: ${design.duracion}

✨ PREFERENCIAS

Ocasión: ${respuestas.ocasion || "No especificada"}
Estilo: ${respuestas.estilo || "No especificado"}
Color: ${respuestas.color || "No especificado"}

📅 CITA SOLICITADA

Fecha: ${formulario.fecha}
Hora: ${formulario.hora}

📝 COMENTARIOS

${comentarios || "Sin comentarios adicionales."}

¿Está disponible este horario?`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensaje}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isVisible || !design) {
    return null;
  }

  const fechaMinima = new Date().toLocaleDateString("en-CA");

  const preferenciasSeleccionadas = [
    respuestas.ocasion,
    respuestas.estilo,
    respuestas.color,
  ].filter(Boolean);

  return (
    <section
      id="reservar-cita"
      className="
        scroll-mt-24
        bg-gradient-to-b
        from-white via-pink-50/40 to-white
        px-4 py-20
        sm:px-6 sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex rounded-full border border-pink-100 bg-pink-100 px-4 py-2 text-xs font-semibold text-pink-600 shadow-sm sm:text-sm">
            📅 Reserva personalizada
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Tu diseño ya está listo para ti
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Ya conocemos el diseño y las preferencias que elegiste.
            Solo faltan algunos datos para solicitar tu cita con
            Jennifer.
          </p>
        </header>

        <div
          className="
            grid overflow-hidden
            rounded-[1.75rem]
            border border-pink-100
            bg-white
            shadow-xl
            sm:rounded-[2rem]
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-5 sm:p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-500 sm:text-sm">
              Tu elección
            </p>

            <div className="mt-5 overflow-hidden rounded-3xl shadow-lg">
              <img
                src={design.imagen}
                alt={design.nombre}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              {design.nombre}
            </h3>

            <p className="mt-2 text-sm font-medium text-pink-600">
              Código: {obtenerCodigoDiseno()}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2">
              <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                <p className="text-sm text-gray-500">
                  Precio aproximado
                </p>

                <p className="mt-1 font-bold text-gray-900">
                  RD${design.precio.toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                <p className="text-sm text-gray-500">
                  Duración
                </p>

                <p className="mt-1 font-bold text-gray-900">
                  {design.duracion}
                </p>
              </div>
            </div>

            {preferenciasSeleccionadas.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {preferenciasSeleccionadas.map(
                  (preferencia) => (
                    <span
                      key={preferencia}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {preferencia}
                    </span>
                  )
                )}
              </div>
            )}

            <div className="mt-7 rounded-2xl border border-white/70 bg-white/60 p-4">
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                Jennifer confirmará personalmente la disponibilidad,
                el precio final y cualquier ajuste que quieras
                realizar.
              </p>
            </div>
          </div>

          <form
            onSubmit={confirmarReserva}
            className="p-5 sm:p-7 md:p-10 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Completa tu solicitud
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              Los campos marcados con un asterisco son necesarios
              para coordinar la cita.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
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
                  autoComplete="name"
                  required
                  className="
                    w-full rounded-2xl
                    border border-pink-200
                    bg-white
                    px-4 py-3.5
                    text-base
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-pink-500
                    focus:ring-4
                    focus:ring-pink-100
                  "
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
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  className="
                    w-full rounded-2xl
                    border border-pink-200
                    bg-white
                    px-4 py-3.5
                    text-base
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-pink-500
                    focus:ring-4
                    focus:ring-pink-100
                  "
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
                  min={fechaMinima}
                  required
                  className="
                    w-full rounded-2xl
                    border border-pink-200
                    bg-white
                    px-4 py-3.5
                    text-base
                    text-gray-900
                    outline-none
                    transition
                    focus:border-pink-500
                    focus:ring-4
                    focus:ring-pink-100
                  "
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
                  required
                  className="
                    w-full rounded-2xl
                    border border-pink-200
                    bg-white
                    px-4 py-3.5
                    text-base
                    text-gray-900
                    outline-none
                    transition
                    focus:border-pink-500
                    focus:ring-4
                    focus:ring-pink-100
                  "
                >
                  <option value="">
                    Selecciona una hora
                  </option>

                  <option value="9:00 a. m.">
                    9:00 a. m.
                  </option>

                  <option value="10:30 a. m.">
                    10:30 a. m.
                  </option>

                  <option value="12:00 p. m.">
                    12:00 p. m.
                  </option>

                  <option value="2:00 p. m.">
                    2:00 p. m.
                  </option>

                  <option value="3:30 p. m.">
                    3:30 p. m.
                  </option>

                  <option value="5:00 p. m.">
                    5:00 p. m.
                  </option>
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
                maxLength="500"
                placeholder="Ejemplo: Me gustaría agregar un poco más de brillo..."
                className="
                  w-full resize-none
                  rounded-2xl
                  border border-pink-200
                  bg-white
                  px-4 py-3.5
                  text-base
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-pink-500
                  focus:ring-4
                  focus:ring-pink-100
                "
              />

              <p className="mt-2 text-right text-xs text-gray-400">
                {formulario.comentarios.length}/500
              </p>
            </label>

            <div className="mt-7 rounded-2xl border border-pink-100 bg-pink-50 p-4">
              <p className="text-sm leading-relaxed text-gray-600">
                Al pulsar el botón se abrirá WhatsApp con toda tu
                información lista para enviársela a Jennifer.
              </p>
            </div>

            <button
              type="submit"
              className="
                glow-touch
                mt-6 w-full
                rounded-full
                bg-gradient-to-r
                from-pink-500 to-rose-500
                px-6 py-4
                text-base font-semibold
                text-white
                shadow-lg
                transition duration-300
                hover:-translate-y-1
                hover:shadow-xl
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200
                sm:px-7
                sm:text-lg
              "
            >
              💖 Solicitar cita por WhatsApp
            </button>

            <div className="mt-4 space-y-2 text-center">
              <p className="text-sm leading-relaxed text-gray-500">
                La cita quedará pendiente hasta que Jennifer
                confirme la fecha y la hora por WhatsApp.
              </p>

              <p className="text-xs leading-relaxed text-gray-400">
                🔒 Tus datos solo serán utilizados para coordinar
                tu cita.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}