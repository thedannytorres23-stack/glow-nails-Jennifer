import { useEffect, useState } from "react";
import logoJennifer from "../../assets/images/logos/logo-jennifer-nails.png";

export default function Navbar() {
  const [haBajado, setHaBajado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const [estadoNegocio, setEstadoNegocio] = useState({
    abierto: false,
    texto: "Consultando horario...",
  });

  useEffect(() => {
    const detectarScroll = () => {
      setHaBajado(window.scrollY > 40);
    };

    const actualizarEstadoNegocio = () => {
      const ahora = new Date();

      const partes = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Santo_Domingo",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).formatToParts(ahora);

      const valores = {};

      partes.forEach(({ type, value }) => {
        valores[type] = value;
      });

      const dias = {
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
        Sun: 0,
      };

      const dia = dias[valores.weekday];

      const minutosActuales =
        Number(valores.hour) * 60 +
        Number(valores.minute);

      let abierto = false;

      // Lunes a viernes: 9:00 a. m. - 7:00 p. m.
      if (dia >= 1 && dia <= 5) {
        abierto =
          minutosActuales >= 540 &&
          minutosActuales < 1140;
      }

      // Sábados: 9:00 a. m. - 6:00 p. m.
      if (dia === 6) {
        abierto =
          minutosActuales >= 540 &&
          minutosActuales < 1080;
      }

      setEstadoNegocio({
        abierto,
        texto: abierto
          ? "Abierto ahora"
          : "Cerrado ahora",
      });
    };

    detectarScroll();
    actualizarEstadoNegocio();

    window.addEventListener("scroll", detectarScroll);

    const intervaloHorario = setInterval(
      actualizarEstadoNegocio,
      60000
    );

    return () => {
      window.removeEventListener(
        "scroll",
        detectarScroll
      );

      clearInterval(intervaloHorario);
    };
  }, []);

  const irASeccion = (id) => {
    const seccion = document.getElementById(id);

    if (!seccion) {
      console.error(
        `No se encontró la sección con id="${id}"`
      );

      return;
    }

    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuAbierto(false);
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        border-b transition-all duration-500

        ${
          haBajado
            ? "border-pink-100/80 bg-white/90 shadow-lg backdrop-blur-xl"
            : "border-transparent bg-white/75 backdrop-blur-md"
        }
      `}
    >
      <nav
        className={`
          mx-auto flex max-w-7xl items-center justify-between
          px-5 transition-all duration-500 md:px-6

          ${haBajado ? "py-2" : "py-3"}
        `}
      >
        {/* Marca */}
        <button
          type="button"
          onClick={() => irASeccion("inicio")}
          className="group flex items-center gap-3 text-left"
          aria-label="Ir al inicio"
        >
          <div
            className={`
              relative shrink-0 overflow-hidden rounded-full
              border border-rose-200 bg-[#fff8f6]
              shadow-[0_6px_22px_rgba(190,120,120,0.2)]
              transition-all duration-500

              ${
                haBajado
                  ? "h-12 w-12 md:h-14 md:w-14"
                  : "h-14 w-14 md:h-16 md:w-16"
              }

              group-hover:scale-[1.03]
              group-hover:border-rose-300
              group-hover:shadow-[0_10px_30px_rgba(190,120,120,0.3)]
            `}
          >
            <img
              src={logoJennifer}
              alt="Logo de Jennifer Nails"
              className="
                h-full w-full scale-[1.07] object-cover
                transition-transform duration-700
                group-hover:scale-[1.12]
              "
            />

            {/* Brillo que cruza el logo */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-y-0 -left-1/2
                w-1/3 rotate-12
                bg-gradient-to-r
                from-transparent via-white/60 to-transparent
                opacity-0 blur-sm
                transition-all duration-700
                group-hover:left-[120%]
                group-hover:opacity-100
              "
            />

            {/* Reflejo superior */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-2 top-1
                h-4 rounded-full bg-white/30 blur-md
              "
            />
          </div>

          <div className="hidden sm:block">
            <p
              className={`
                font-serif font-semibold leading-none text-gray-900
                transition-all duration-500

                ${haBajado ? "text-lg" : "text-xl"}
              `}
            >
              Jennifer Nails
            </p>

            <p
              className={`
                overflow-hidden font-medium text-pink-500
                transition-all duration-500

                ${
                  haBajado
                    ? "mt-0 max-h-0 opacity-0"
                    : "mt-1 max-h-8 text-[10px] uppercase tracking-[0.17em] opacity-100"
                }
              `}
            >
              Cada diseño resalta tu esencia
            </p>
          </div>
        </button>

        {/* Navegación de escritorio */}
        <div className="hidden items-center gap-7 lg:flex">
          <NavButton
            texto="Inicio"
            onClick={() => irASeccion("inicio")}
          />

          <NavButton
            texto="Diseños"
            onClick={() => irASeccion("coleccion")}
          />

          <NavButton
            texto="Servicios"
            onClick={() => irASeccion("servicios")}
          />

          <NavButton
            texto="Reseñas"
            onClick={() => irASeccion("resenas")}
          />
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          {/* Estado del negocio */}
          <span
            className={`
              hidden items-center gap-2 rounded-full
              border px-3 py-2 text-xs font-semibold
              transition-colors duration-300 xl:inline-flex

              ${
                estadoNegocio.abierto
                  ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                  : "border-rose-100 bg-rose-50 text-rose-700"
              }
            `}
          >
            <span className="relative flex h-2 w-2">
              {estadoNegocio.abierto && (
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-400 opacity-50
                  "
                />
              )}

              <span
                className={`
                  relative inline-flex h-2 w-2 rounded-full

                  ${
                    estadoNegocio.abierto
                      ? "bg-emerald-500"
                      : "bg-rose-500"
                  }
                `}
              />
            </span>

            {estadoNegocio.texto}
          </span>

          {/* Reservar cita */}
          <button
            type="button"
            onClick={() => irASeccion("reservas")}
            className="
            glow-touch
              hidden rounded-full
              bg-gradient-to-r from-pink-500 to-rose-500
              px-5 py-3 text-sm font-bold text-white
              shadow-[0_8px_22px_rgba(236,72,153,0.28)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_28px_rgba(236,72,153,0.4)]
              md:inline-flex
            "
          >
            Reservar cita
          </button>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() =>
              setMenuAbierto((estadoActual) => !estadoActual)
            }
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-pink-100
              bg-white text-gray-800 shadow-sm
              transition hover:border-pink-300
              lg:hidden
            "
            aria-label={
              menuAbierto
                ? "Cerrar menú"
                : "Abrir menú"
            }
            aria-expanded={menuAbierto}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`
                  absolute left-0 top-0 h-0.5 w-6
                  rounded-full bg-current
                  transition-all duration-300

                  ${
                    menuAbierto
                      ? "top-2 rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute left-0 top-2 h-0.5 w-6
                  rounded-full bg-current
                  transition-all duration-300

                  ${
                    menuAbierto
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute bottom-0 left-0 h-0.5 w-6
                  rounded-full bg-current
                  transition-all duration-300

                  ${
                    menuAbierto
                      ? "bottom-2 -rotate-45"
                      : ""
                  }
                `}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`
          overflow-hidden border-t border-pink-100/70
          bg-white/95 backdrop-blur-xl
          transition-all duration-500 lg:hidden

          ${
            menuAbierto
              ? "max-h-[520px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <div
          className="
            mx-auto flex max-w-7xl
            flex-col gap-2 px-5 py-5
          "
        >
          {/* Estado móvil */}
          <div
            className={`
              mb-2 flex items-center gap-2 rounded-2xl
              border px-4 py-3 text-sm font-semibold

              ${
                estadoNegocio.abierto
                  ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                  : "border-rose-100 bg-rose-50 text-rose-700"
              }
            `}
          >
            <span
              className={`
                h-2.5 w-2.5 rounded-full

                ${
                  estadoNegocio.abierto
                    ? "bg-emerald-500"
                    : "bg-rose-500"
                }
              `}
            />

            {estadoNegocio.texto}
          </div>

          <MobileNavButton
            texto="Inicio"
            onClick={() => irASeccion("inicio")}
          />

          <MobileNavButton
            texto="Diseños"
            onClick={() => irASeccion("coleccion")}
          />

          <MobileNavButton
            texto="Servicios"
            onClick={() => irASeccion("servicios")}
          />

          <MobileNavButton
            texto="Reseñas"
            onClick={() => irASeccion("resenas")}
          />

          <button
            type="button"
            onClick={() => irASeccion("reservas")}
            className="
              mt-3 rounded-2xl
              bg-gradient-to-r from-pink-500 to-rose-500
              px-5 py-4 font-bold text-white
              shadow-lg transition duration-300
              hover:shadow-xl
            "
          >
            Reservar cita
          </button>
        </div>
      </div>
    </header>
  );
}

function NavButton({ texto, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group relative py-2
        text-sm font-semibold text-gray-700
        transition duration-300
        hover:text-pink-600
      "
    >
      {texto}

      <span
        className="
          absolute bottom-0 left-1/2 h-0.5 w-0
          -translate-x-1/2 rounded-full
          bg-gradient-to-r from-pink-500 to-rose-400
          transition-all duration-300
          group-hover:w-full
        "
      />
    </button>
  );
}

function MobileNavButton({ texto, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex items-center justify-between rounded-2xl
        px-4 py-3 text-left font-semibold text-gray-700
        transition
        hover:bg-pink-50 hover:text-pink-600
      "
    >
      <span>{texto}</span>
      <span className="text-pink-400">→</span>
    </button>
  );
}