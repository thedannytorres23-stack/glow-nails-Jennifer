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
      setHaBajado(window.scrollY > 30);
    };

    const actualizarEstadoNegocio = () => {
      try {
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
          Sun: 0,
          Mon: 1,
          Tue: 2,
          Wed: 3,
          Thu: 4,
          Fri: 5,
          Sat: 6,
        };

        const dia = dias[valores.weekday];

        const minutosActuales =
          Number(valores.hour) * 60 + Number(valores.minute);

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
          texto: abierto ? "Abierto ahora" : "Cerrado ahora",
        });
      } catch (error) {
        console.error(
          "No fue posible consultar el horario:",
          error
        );

        setEstadoNegocio({
          abierto: false,
          texto: "Horario no disponible",
        });
      }
    };

    detectarScroll();
    actualizarEstadoNegocio();

    window.addEventListener("scroll", detectarScroll);

    const intervaloHorario = setInterval(
      actualizarEstadoNegocio,
      60000
    );

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      clearInterval(intervaloHorario);
    };
  }, []);

  useEffect(() => {
    const cerrarConEscape = (evento) => {
      if (evento.key === "Escape") {
        setMenuAbierto(false);
      }
    };

    document.addEventListener("keydown", cerrarConEscape);

    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  const irASeccion = (id) => {
    const seccion = document.getElementById(id);

    if (!seccion) {
      console.error(`No se encontró la sección con id="${id}"`);
      setMenuAbierto(false);
      return;
    }

    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuAbierto(false);
  };

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          border-b transition-all duration-300

          ${
            haBajado
              ? "border-pink-100 bg-white/95 shadow-[0_8px_30px_rgba(125,70,90,0.10)] backdrop-blur-xl"
              : "border-transparent bg-white/80 backdrop-blur-lg"
          }
        `}
      >
        <nav
          className={`
            mx-auto flex max-w-7xl items-center justify-between
            px-4 transition-all duration-300
            sm:px-5 md:px-6

            ${haBajado ? "py-2" : "py-2.5 md:py-3"}
          `}
          aria-label="Navegación principal"
        >
          {/* Marca */}
          <button
            type="button"
            onClick={() => irASeccion("inicio")}
            className="
              group flex min-w-0 items-center gap-2.5
              rounded-2xl text-left
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-pink-400
              focus-visible:ring-offset-2
            "
            aria-label="Ir al inicio"
          >
            <div
              className={`
                relative shrink-0 overflow-hidden rounded-full
                border border-rose-200 bg-[#fff8f6]
                shadow-[0_5px_18px_rgba(190,120,120,0.18)]
                transition-all duration-300

                ${
                  haBajado
                    ? "h-11 w-11 md:h-13 md:w-13"
                    : "h-12 w-12 md:h-15 md:w-15"
                }

                group-hover:scale-[1.03]
                group-hover:border-rose-300
              `}
            >
              <img
                src={logoJennifer}
                alt="Logo de Jennifer Nails"
                className="
                  h-full w-full scale-[1.07] object-cover
                  transition-transform duration-500
                  group-hover:scale-[1.12]
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-x-2 top-1
                  h-3 rounded-full bg-white/30 blur-md
                "
              />
            </div>

            <div className="min-w-0">
              <p
                className={`
                  truncate font-serif font-semibold
                  leading-none text-gray-900
                  transition-all duration-300

                  ${
                    haBajado
                      ? "text-[17px] sm:text-lg"
                      : "text-lg sm:text-xl"
                  }
                `}
              >
                Jennifer Nails
              </p>

              <p
                className={`
                  mt-1 truncate text-[8px] font-semibold
                  uppercase tracking-[0.13em] text-pink-500
                  transition-all duration-300
                  sm:text-[9px]

                  ${
                    haBajado
                      ? "max-h-0 opacity-0"
                      : "max-h-5 opacity-100"
                  }
                `}
              >
                Tu esencia, tu diseño
              </p>
            </div>
          </button>

          {/* Navegación escritorio */}
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
          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {/* Estado escritorio */}
            <EstadoNegocio
              estadoNegocio={estadoNegocio}
              className="hidden xl:inline-flex"
            />

            {/* Reservar escritorio y tablet */}
            <button
              type="button"
              onClick={() => irASeccion("reservas")}
              className="
                glow-touch hidden items-center justify-center
                rounded-full bg-gradient-to-r
                from-pink-500 to-rose-500
                px-5 py-3 text-sm font-bold text-white
                shadow-[0_8px_22px_rgba(236,72,153,0.28)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_28px_rgba(236,72,153,0.4)]
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-pink-400
                focus-visible:ring-offset-2
                md:inline-flex
              "
            >
              Reservar cita
            </button>

            {/* Botón menú móvil */}
            <button
              type="button"
              onClick={() =>
                setMenuAbierto((estadoActual) => !estadoActual)
              }
              className="
                flex h-11 w-11 shrink-0 items-center
                justify-center rounded-full
                border border-pink-100 bg-white
                text-gray-800 shadow-sm
                transition-all duration-300
                hover:border-pink-300 hover:bg-pink-50
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-pink-400
                focus-visible:ring-offset-2
                lg:hidden
              "
              aria-label={
                menuAbierto ? "Cerrar menú" : "Abrir menú"
              }
              aria-expanded={menuAbierto}
              aria-controls="menu-movil"
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`
                    absolute left-0 h-0.5 w-6
                    rounded-full bg-current
                    transition-all duration-300

                    ${
                      menuAbierto
                        ? "top-[9px] rotate-45"
                        : "top-0.5"
                    }
                  `}
                />

                <span
                  className={`
                    absolute left-0 top-[9px]
                    h-0.5 w-6 rounded-full
                    bg-current transition-all duration-300

                    ${
                      menuAbierto
                        ? "scale-x-0 opacity-0"
                        : "scale-x-100 opacity-100"
                    }
                  `}
                />

                <span
                  className={`
                    absolute left-0 h-0.5 w-6
                    rounded-full bg-current
                    transition-all duration-300

                    ${
                      menuAbierto
                        ? "top-[9px] -rotate-45"
                        : "bottom-0.5"
                    }
                  `}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Fondo oscuro detrás del menú */}
      <button
        type="button"
        onClick={() => setMenuAbierto(false)}
        aria-label="Cerrar menú"
        tabIndex={menuAbierto ? 0 : -1}
        className={`
          fixed inset-0 z-40 bg-gray-950/30
          backdrop-blur-[2px]
          transition-opacity duration-300
          lg:hidden

          ${
            menuAbierto
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Panel móvil */}
      <div
        id="menu-movil"
        className={`
          fixed left-3 right-3 top-[74px] z-50
          max-h-[calc(100dvh-90px)]
          overflow-y-auto rounded-[28px]
          border border-pink-100
          bg-white/98 p-3
          shadow-[0_24px_70px_rgba(88,40,60,0.22)]
          backdrop-blur-xl
          transition-all duration-300
          sm:left-auto sm:right-4 sm:w-[380px]
          lg:hidden

          ${
            menuAbierto
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-3 scale-[0.98] opacity-0"
          }
        `}
        aria-hidden={!menuAbierto}
      >
        <div className="rounded-[22px] bg-pink-50/70 p-3">
          <EstadoNegocio
            estadoNegocio={estadoNegocio}
            className="flex w-full"
          />

          <p className="mt-2 px-1 text-xs leading-relaxed text-gray-500">
            Reserva tu cita y encuentra el diseño ideal para tu
            ocasión.
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <MobileNavButton
            numero="01"
            texto="Inicio"
            onClick={() => irASeccion("inicio")}
          />

          <MobileNavButton
            numero="02"
            texto="Diseños"
            onClick={() => irASeccion("coleccion")}
          />

          <MobileNavButton
            numero="03"
            texto="Servicios"
            onClick={() => irASeccion("servicios")}
          />

          <MobileNavButton
            numero="04"
            texto="Reseñas"
            onClick={() => irASeccion("resenas")}
          />
        </div>

        <button
          type="button"
          onClick={() => irASeccion("reservas")}
          className="
            mt-4 flex min-h-14 w-full items-center
            justify-center gap-2 rounded-2xl
            bg-gradient-to-r from-pink-500 to-rose-500
            px-5 py-4 font-bold text-white
            shadow-[0_12px_30px_rgba(236,72,153,0.30)]
            transition-all duration-300
            active:scale-[0.98]
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-pink-400
            focus-visible:ring-offset-2
          "
        >
          <span>Reservar mi cita</span>
          <span aria-hidden="true">→</span>
        </button>

        <p className="px-3 pb-1 pt-3 text-center text-[11px] text-gray-400">
          Belleza, estilo y atención personalizada
        </p>
      </div>
    </>
  );
}

function EstadoNegocio({ estadoNegocio, className = "" }) {
  return (
    <div
      className={`
        items-center gap-2 rounded-full
        border px-3 py-2 text-xs font-semibold
        transition-colors duration-300

        ${
          estadoNegocio.abierto
            ? "border-emerald-100 bg-emerald-50 text-emerald-700"
            : "border-rose-100 bg-rose-50 text-rose-700"
        }

        ${className}
      `}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
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
            relative inline-flex h-2.5 w-2.5 rounded-full

            ${
              estadoNegocio.abierto
                ? "bg-emerald-500"
                : "bg-rose-500"
            }
          `}
        />
      </span>

      <span>{estadoNegocio.texto}</span>

      <span className="ml-auto font-normal opacity-70">
        Rep. Dominicana
      </span>
    </div>
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
        focus:outline-none focus-visible:text-pink-600
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
          group-focus-visible:w-full
        "
      />
    </button>
  );
}

function MobileNavButton({ numero, texto, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group flex min-h-14 w-full items-center
        justify-between rounded-2xl px-4 py-3
        text-left transition-all duration-200
        hover:bg-pink-50
        active:scale-[0.99]
        focus:outline-none focus-visible:bg-pink-50
      "
    >
      <span className="flex items-center gap-3">
        <span
          className="
            text-[10px] font-bold tracking-wider
            text-pink-300 transition
            group-hover:text-pink-500
          "
        >
          {numero}
        </span>

        <span
          className="
            font-semibold text-gray-700
            transition group-hover:text-pink-600
          "
        >
          {texto}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full bg-pink-50 text-pink-500
          transition-all duration-200
          group-hover:translate-x-1
          group-hover:bg-pink-100
        "
      >
        →
      </span>
    </button>
  );
}