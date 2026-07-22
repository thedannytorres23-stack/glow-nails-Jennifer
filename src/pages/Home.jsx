import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import OccasionSelector from "../components/sections/OccasionSelector";
import Gallery from "../components/sections/Gallery";
import StyleAssistant from "../components/sections/StyleAssistant";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Booking from "../components/sections/Booking";
import Footer from "../components/layout/Footer";

export default function Home({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  return (
    <>
      <Navbar />

      <main>
        <div id="inicio" className="scroll-mt-28">
          <Hero />
        </div>

        <div id="coleccion" className="scroll-mt-28">
          <OccasionSelector
            categoriaSeleccionada={categoriaSeleccionada}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
          />

          <Gallery
            categoriaSeleccionada={categoriaSeleccionada}
          />
        </div>

        <StyleAssistant />

        <div id="servicios" className="scroll-mt-28">
          <Services />
        </div>

        <div id="resenas" className="scroll-mt-28">
          <Testimonials />
        </div>

        <Booking />
      </main>

      <Footer />
    </>
  );
}