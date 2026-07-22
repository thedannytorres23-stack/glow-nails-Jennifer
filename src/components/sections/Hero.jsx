import heroNails from "../../assets/images/hero-nails.png";

export default function Hero() {
  const irAColeccion = () => {
    const seccionColeccion =
      document.getElementById("coleccion");

    if (!seccionColeccion) {
      console.error(
        'No se encontró la sección con id="coleccion"'
      );

      return;
    }

    seccionColeccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const irAReservas = () => {
    const seccionReservas =
      document.getElementById("reservas");

    if (!seccionReservas) {
      console.error(
        'No se encontró la sección con id="reservas"'
      );

      return;
    }

    seccionReservas.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="inicio"
      className="
        relative flex min-h-[100svh] items-center
        overflow-hidden
        bg-gradient-to-br
        from-pink-50 via-white to-rose-100
        pb-16 pt-24
        sm:pb-20 sm:pt-28
        lg:pb-24 lg:pt-32
      "
    >
      {/* Decoración del fondo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 top-24
          h-64 w-64 rounded-full
          bg-pink-200/30 blur-3xl
          sm:h-80 sm:w-80
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 bottom-10
          h-72 w-72 rounded-full
          bg-rose-200/40 blur-3xl
          sm:h-96 sm:w-96
        "
      />

      <div
        className="
          relative z-10 mx-auto
          flex w-full max-w-7xl
          flex-col items-center
          gap-10 px-4
          sm:px-6
          lg:grid lg:grid-cols-2
          lg:gap-16 lg:px-8
        "
      >
        {/* Imagen principal */}
        <div
          className="
            relative flex w-full
            items-center justify-center
            lg:order-2
          "
        >
          <div
            className="
              relative w-full max-w-[360px]
              sm:max-w-[430px]
              lg:max-w-[500px]
            "
          >
            {/* Aura detrás de la imagen */}
            <div
              aria-hidden="true"
              className="
                absolute inset-5
                rounded-[38px]
                bg-gradient-to-br
                from-pink-300/50 to-rose-300/30
                blur-3xl
              "
            />

            {/* Marco principal */}
            <div
              className="
                relative overflow-hidden
                rounded-[32px]
                border border-white/80
                bg-white/40 p-2
                shadow-[0_25px_70px_rgba(190,90,130,0.22)]
                backdrop-blur-sm
                sm:rounded-[40px] sm:p-3
              "
            >
              <img
                src={heroNails}
                alt="Diseño profesional de uñas de Jennifer Nails"
                className="
                  aspect-[4/5] w-full
                  rounded-[25px]
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                  sm:rounded-[32px]
                "
              />

              {/* Degradado inferior */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  inset-x-3 bottom-3
                  h-1/3 rounded-b-[25px]
                  bg-gradient-to-t
                  from-gray-950/30 to-transparent
                  sm:inset-x-4 sm:bottom-4
                  sm:rounded-b-[32px]
                "
              />

              {/* Etiqueta sobre la imagen */}
              <div
                className="
                  absolute bottom-6 left-6 right-6
                  flex items-center justify-between
                  rounded-2xl
                  border border-white/30
                  bg-white/85
                  px-4 py-3
                  shadow-lg
                  backdrop-blur-xl
                  sm:bottom-8 sm:left-8 sm:right-8
                "
              >
                <div>
                  <p
                    className="
                      text-[10px] font-bold
                      uppercase tracking-[0.18em]
                      text-pink-500
                    "
                  >
                    Jennifer Nails
                  </p>

                  <p
                    className="
                      mt-1 font-serif
                      text-sm font-semibold
                      text-gray-900
                      sm:text-base
                    "
                  >
                    Diseños que reflejan tu estilo
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full bg-pink-100
                    text-lg text-pink-500
                  "
                >
                  ✦
                </span>
              </div>
            </div>

            {/* Brillos decorativos */}
            <span
              aria-hidden="true"
              className="
                sparkle absolute
                -left-2 top-12
                text-2xl text-pink-400
                sm:-left-5 sm:text-3xl
              "
              style={{
                animationDelay: "0s",
              }}
            >
              ✦
            </span>

            <span
              aria-hidden="true"
              className="
                sparkle absolute
                -right-1 top-28
                text-xl text-rose-400
                sm:-right-5 sm:text-3xl
              "
              style={{
                animationDelay: "1s",
              }}
            >
              ✦
            </span>

            <span
              aria-hidden="true"
              className="
                sparkle absolute
                -bottom-3 left-10
                text-xl text-pink-400
                sm:-bottom-5 sm:text-3xl
              "
              style={{
                animationDelay: "2s",
              }}
            >
              ✦
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div
          className="
            flex w-full max-w-xl
            flex-col items-center
            text-center
            lg:order-1
            lg:items-start
            lg:text-left
          "
        >
          {/* Etiqueta superior */}
          <div
            className="
              inline-flex items-center
              gap-2 rounded-full
              border border-pink-200
              bg-white/80
              px-4 py-2
              text-xs font-semibold
              text-pink-600
              shadow-sm
              backdrop-blur-md
              sm:text-sm
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2 w-2 rounded-full
                bg-pink-500
                shadow-[0_0_0_5px_rgba(236,72,153,0.12)]
              "
            />

            Belleza personalizada para ti
          </div>

          <h1
            className="
              mt-6 max-w-[760px]
              font-serif
              text-[42px] font-semibold
              leading-[1.05]
              tracking-[-0.035em]
              text-gray-900
              sm:text-5xl
              md:text-6xl
              lg:text-[68px]
            "
          >
            Cada diseño resalta{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-500 to-rose-500
                bg-clip-text text-transparent
              "
            >
              tu esencia.
            </span>
          </h1>

          <p
            className="
              mt-5 max-w-lg
              text-base leading-7
              text-gray-600
              sm:mt-6 sm:text-lg
              sm:leading-8
            "
          >
            Explora diseños únicos, descubre el estilo que
            combina contigo y reserva tu próxima cita de una
            manera sencilla.
          </p>

          {/* Botones */}
          <div
            className="
              mt-8 flex w-full
              flex-col gap-3
              sm:w-auto sm:flex-row
            "
          >
            <button
              type="button"
              onClick={irAColeccion}
              className="
                glow-touch
                flex min-h-14 w-full
                items-center justify-center
                gap-2 rounded-full
                bg-gradient-to-r
                from-pink-500 to-rose-500
                px-7 py-4
                text-sm font-bold text-white
                shadow-[0_12px_30px_rgba(236,72,153,0.30)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_16px_35px_rgba(236,72,153,0.40)]
                active:scale-[0.98]
                sm:w-auto sm:text-base
              "
            >
              Explorar diseños

              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={irAReservas}
              className="
                flex min-h-14 w-full
                items-center justify-center
                rounded-full
                border border-pink-200
                bg-white/80
                px-7 py-4
                text-sm font-bold
                text-gray-800
                shadow-sm
                backdrop-blur-sm
                transition-all duration-300
                hover:border-pink-300
                hover:bg-pink-50
                active:scale-[0.98]
                sm:w-auto sm:text-base
              "
            >
              Reservar cita
            </button>
          </div>

          {/* Información de confianza */}
          <div
            className="
              mt-8 grid w-full
              grid-cols-3 gap-2
              border-t border-pink-100
              pt-6
              sm:max-w-lg sm:gap-4
            "
          >
            <DatoHero
              valor="100%"
              texto="Personalizado"
            />

            <DatoHero
              valor="Fácil"
              texto="Reservar"
            />

            <DatoHero
              valor="Único"
              texto="Cada diseño"
            />
          </div>
        </div>
      </div>

      {/* Indicador inferior */}
      <button
        type="button"
        onClick={irAColeccion}
        aria-label="Bajar a la colección de diseños"
        className="
          absolute bottom-4 left-1/2
          z-20 hidden
          -translate-x-1/2
          flex-col items-center
          gap-1 text-[10px]
          font-semibold uppercase
          tracking-[0.18em]
          text-gray-400
          transition hover:text-pink-500
          lg:flex
        "
      >
        Descubrir

        <span
          aria-hidden="true"
          className="
            animate-bounce text-lg
            text-pink-400
          "
        >
          ↓
        </span>
      </button>
    </section>
  );
}

function DatoHero({ valor, texto }) {
  return (
    <div className="text-center lg:text-left">
      <p
        className="
          text-sm font-bold
          text-gray-900
          sm:text-base
        "
      >
        {valor}
      </p>

      <p
        className="
          mt-1 text-[10px]
          leading-tight text-gray-500
          sm:text-xs
        "
      >
        {texto}
      </p>
    </div>
  );
}