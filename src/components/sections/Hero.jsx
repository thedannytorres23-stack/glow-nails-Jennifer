import heroNails from "../../assets/images/hero-nails.png";

export default function Hero() {
  return (

    
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-16">

        {/* Columna izquierda */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight max-w-xl">
            Cada diseño resalta tu esencia.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Explora estilos únicos, conoce los precios y encuentra la
            inspiración perfecta para tu próxima cita.
          </p>

          <button className="mt-8 rounded-full bg-pink-600 px-8 py-4 text-white font-semibold hover:bg-pink-700 transition">
            Explorar diseños
          </button>
        </div>

        {/* Columna derecha */}
        <div className="flex-1 flex justify-center">
          <div className="relative">

            <img
              src={heroNails}
              alt="Diseño de uñas Glow Nails Jennifer"
              className="w-[420px] rounded-3xl object-cover float-animation glow-animation transition-all duration-500 hover:scale-105"
            />

            <span
              className="sparkle"
              style={{
                top: "30px",
                left: "-18px",
                animationDelay: "0s"
              }}
            >
              ✦
            </span>

            <span
              className="sparkle"
              style={{
                top: "140px",
                right: "-20px",
                animationDelay: "1s"
              }}
            >
              ✦
            </span>

            <span
              className="sparkle"
              style={{
                bottom: "50px",
                left: "-30px",
                animationDelay: "2s"
              }}
            >
              ✦
            </span>

            <span
              className="sparkle"
              style={{
                bottom: "5px",
                right: "-15px",
                animationDelay: "3s"
              }}
            >
              ✦
            </span>

            <span
              className="sparkle"
              style={{
                top: "-25px",
                right: "80px",
                fontSize: "40px",
                animationDuration: "5s",
                animationDelay: ".5s"
              }}
            >
              ✦
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}