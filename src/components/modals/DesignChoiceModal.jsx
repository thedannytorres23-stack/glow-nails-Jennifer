import { useEffect } from "react";

export default function DesignChoiceModal({
  isOpen,
  onClose,
  design,
  onReserve,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !design) return null;

  const designName =
    design.nombre ||
    design.name ||
    design.titulo ||
    design.title ||
    "el diseño recomendado";

  const designCode =
    design.codigo ||
    design.code ||
    (design.id ? `GN-${String(design.id).padStart(3, "0")}` : "");

 const whatsappNumber = "18295091481"; // Número de WhatsApp de Jennifer

  const whatsappMessage = encodeURIComponent(
    `Hola Jennifer 😊

Encontré un diseño en tu página que me encantó:

✨ ${designName}${designCode ? `\nCódigo: ${designCode}` : ""}

Me gustaría saber si puedes realizarlo o adaptarlo a mi estilo.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4 backdrop-blur-md"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <section
        className="design-choice-modal relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-pink-200/70 bg-white p-6 shadow-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="design-choice-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-xl text-pink-700 transition hover:scale-105 hover:bg-pink-100"
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="mb-5 flex justify-center">
          <div className="design-choice-reward flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-200 text-3xl text-pink-600 shadow-lg">
            ✦
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-pink-500">
            El toque de Jennifer
          </p>

          <h2
            id="design-choice-title"
            className="font-serif text-3xl text-neutral-800"
          >
            ¡Excelente elección!
          </h2>

          <p className="mx-auto mt-3 max-w-sm leading-7 text-neutral-600">
            Jennifer puede recrear este diseño o adaptarlo para que combine con
            tu estilo, ocasión y personalidad.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-3xl bg-pink-50/80 p-4">
          {design.imagen || design.image ? (
            <img
              src={design.imagen || design.image}
              alt={designName}
              className="h-24 w-24 rounded-2xl object-cover shadow-md"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
              💅
            </div>
          )}

          <div>
            <p className="text-sm font-medium text-pink-500">
              Diseño seleccionado
            </p>

            <h3 className="mt-1 text-lg font-semibold text-neutral-800">
              {designName}
            </h3>

            {designCode && (
              <p className="mt-1 text-sm text-neutral-500">
                Código: {designCode}
              </p>
            )}
          </div>
        </div>

        <div className="mt-7 space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="glow-touch flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span>💬</span>
            Hablar con Jennifer
          </a>

          <button
            type="button"
            onClick={onReserve}
            className="glow-touch flex w-full items-center justify-center gap-2 rounded-full border border-pink-300 bg-white px-6 py-4 font-semibold text-pink-700 transition hover:bg-pink-50"
          >
            <span>📅</span>
            Reservar cita
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 text-sm font-medium text-neutral-500 transition hover:text-pink-600"
          >
            Seguir explorando
          </button>
        </div>
      </section>
    </div>
  );
}