import { useState } from "react";

const servicios = [
  "Manicura",
  "Pedicura",
  "Uñas acrílicas",
  "Uñas en gel",
  "Diseño personalizado",
];

function obtenerFechaActual() {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santo_Domingo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const valores = {};

  partes.forEach(({ type, value }) => {
    valores[type] = value;
  });

  return `${valores.year}-${valores.month}-${valores.day}`;
}

export default function Booking() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    servicio: "",
    fecha: "",
    hora: "",
    notas: "",
  });

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }));
  };

  const enviarReserva = (evento) => {
    evento.preventDefault();

    const mensaje = `
Hola Jennifer 👋🏽💅

Me gustaría solicitar una cita.

👤 Nombre: ${formulario.nombre}
✨ Servicio: ${formulario.servicio}
📅 Fecha deseada: ${formulario.fecha}
🕐 Hora aproximada: ${formulario.hora}
📝 Detalles adicionales: ${
      formulario.notas.trim() || "Ninguno"
    }

Quedo pendiente de tu confirmación. ¡Gracias!
    `.trim();

    const numeroWhatsApp = "18295091481";

    const enlaceWhatsApp =
      `https://wa.me/${numeroWhatsApp}` +
      `?text=${encodeURIComponent(mensaje)}`;

    window.open(
      enlaceWhatsApp,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="reservas"
      className="
        relative scroll-mt-28 overflow-hidden
        bg-gradient-to-br
        from-white via-pink-50/70 to-rose-100/60
        px-5 py-24
      "
    >
      {/* Decoraciones */}
      <div
        aria-hidden="true"
        className="
          absolute -left-24 top-20
          h-72 w-72 rounded-full
          bg-pink-200/30 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-24 bottom-10
          h-80 w-80 rounded-full
          bg-rose-200/40 blur-3xl
        "
      />

      <div
        className="
          relative mx-auto grid max-w-6xl
          items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]
        "
      >
        {/* Información */}
        <div>
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border border-pink-200 bg-white/80
              px-4 py-2 text-xs font-bold
              uppercase tracking-[0.18em] text-pink-600
              shadow-sm backdrop-blur
            "
          >
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            Reserva personalizada
          </span>

          <h2
            className="
              mt-6 font-serif text-4xl font-semibold
              leading-tight text-gray-900
              sm:text-5xl
            "
          >
            Tu próxima experiencia
            <span className="block text-pink-500">
              comienza aquí.
            </span>
          </h2>

          <p
            className="
              mt-6 max-w-xl text-base leading-8
              text-gray-600
            "
          >
            Elige el servicio, la fecha y la hora que
            prefieres. La solicitud llegará directamente
            al WhatsApp de Jennifer para confirmar la
            disponibilidad contigo.
          </p>

          <div className="mt-9 space-y-4">
            <InfoItem
              numero="01"
              titulo="Completa tus datos"
              texto="Cuéntanos qué servicio deseas."
            />

            <InfoItem
              numero="02"
              titulo="Envía la solicitud"
              texto="Se abrirá WhatsApp con el mensaje preparado."
            />

            <InfoItem
              numero="03"
              titulo="Jennifer confirma"
              texto="La cita queda reservada después de confirmar disponibilidad."
            />
          </div>

          <div
            className="
              mt-9 rounded-2xl border border-amber-200
              bg-amber-50/80 p-4 text-sm leading-6
              text-amber-800
            "
          >
            La fecha y hora seleccionadas representan una
            solicitud. Jennifer confirmará personalmente
            la disponibilidad por WhatsApp.
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={enviarReserva}
          className="
            rounded-[2rem] border border-white/80
            bg-white/90 p-6
            shadow-[0_25px_70px_rgba(190,100,130,0.16)]
            backdrop-blur-xl sm:p-9
          "
        >
          <div className="mb-8">
            <p
              className="
                text-sm font-bold uppercase
                tracking-[0.15em] text-pink-500
              "
            >
              Solicitar una cita
            </p>

            <h3
              className="
                mt-2 font-serif text-3xl
                font-semibold text-gray-900
              "
            >
              Cuéntanos qué deseas
            </h3>
          </div>

          <div className="space-y-5">
            <CampoFormulario
              etiqueta="Nombre completo"
              nombre="nombre"
              tipo="text"
              valor={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Escribe tu nombre"
            />

            <div>
              <label
                htmlFor="servicio"
                className="
                  mb-2 block text-sm
                  font-semibold text-gray-700
                "
              >
                Servicio de interés
              </label>

              <select
                id="servicio"
                name="servicio"
                value={formulario.servicio}
                onChange={manejarCambio}
                required
                className="
                  w-full rounded-2xl border border-pink-100
                  bg-pink-50/40 px-4 py-3.5
                  text-gray-700 outline-none
                  transition
                  focus:border-pink-400
                  focus:bg-white
                  focus:ring-4 focus:ring-pink-100
                "
              >
                <option value="">
                  Selecciona un servicio
                </option>

                {servicios.map((servicio) => (
                  <option
                    key={servicio}
                    value={servicio}
                  >
                    {servicio}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <CampoFormulario
                etiqueta="Fecha deseada"
                nombre="fecha"
                tipo="date"
                valor={formulario.fecha}
                onChange={manejarCambio}
                min={obtenerFechaActual()}
              />

              <CampoFormulario
                etiqueta="Hora aproximada"
                nombre="hora"
                tipo="time"
                valor={formulario.hora}
                onChange={manejarCambio}
              />
            </div>

            <div>
              <label
                htmlFor="notas"
                className="
                  mb-2 block text-sm
                  font-semibold text-gray-700
                "
              >
                Detalles adicionales
                <span className="font-normal text-gray-400">
                  {" "} (opcional)
                </span>
              </label>

              <textarea
                id="notas"
                name="notas"
                value={formulario.notas}
                onChange={manejarCambio}
                rows="4"
                maxLength="300"
                placeholder="Color, estilo, ocasión o cualquier detalle importante..."
                className="
                  w-full resize-none rounded-2xl
                  border border-pink-100 bg-pink-50/40
                  px-4 py-3.5 text-gray-700
                  outline-none transition
                  placeholder:text-gray-400
                  focus:border-pink-400
                  focus:bg-white
                  focus:ring-4 focus:ring-pink-100
                "
              />

              <p className="mt-1 text-right text-xs text-gray-400">
                {formulario.notas.length}/300
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="
              group mt-7 flex w-full
              items-center justify-center gap-3
              rounded-2xl
              bg-gradient-to-r from-pink-500 to-rose-500
              px-6 py-4 font-bold text-white
              shadow-[0_12px_30px_rgba(236,72,153,0.3)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_38px_rgba(236,72,153,0.42)]
              active:translate-y-0
            "
          >
            Enviar solicitud por WhatsApp

            <span
              className="
                text-xl transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

          <p
            className="
              mt-4 text-center text-xs
              leading-5 text-gray-400
            "
          >
            No se realizará ningún pago desde este formulario.
          </p>
        </form>
      </div>
    </section>
  );
}

function CampoFormulario({
  etiqueta,
  nombre,
  tipo,
  valor,
  onChange,
  placeholder,
  min,
}) {
  return (
    <div>
      <label
        htmlFor={nombre}
        className="
          mb-2 block text-sm
          font-semibold text-gray-700
        "
      >
        {etiqueta}
      </label>

      <input
        id={nombre}
        name={nombre}
        type={tipo}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        required
        className="
          w-full rounded-2xl border border-pink-100
          bg-pink-50/40 px-4 py-3.5
          text-gray-700 outline-none
          transition
          placeholder:text-gray-400
          focus:border-pink-400
          focus:bg-white
          focus:ring-4 focus:ring-pink-100
        "
      />
    </div>
  );
}

function InfoItem({ numero, titulo, texto }) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center rounded-2xl
          bg-white text-sm font-bold text-pink-500
          shadow-[0_7px_20px_rgba(190,100,130,0.12)]
        "
      >
        {numero}
      </span>

      <div>
        <h3 className="font-bold text-gray-900">
          {titulo}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">
          {texto}
        </p>
      </div>
    </div>
  );
}