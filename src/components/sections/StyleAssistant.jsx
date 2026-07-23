import { useState } from "react";
import nailsData from "../../data/nailsData";
import DesignChoiceModal from "../modals/DesignChoiceModal";
import ReservationSection from "../reservation/ReservationSection";

const preguntas = [
    {
        id: "ocasion",
        titulo: "¿Para qué ocasión buscas tu diseño?",
        opciones: [
            { valor: "Boda", icono: "💍" },
            { valor: "Cita", icono: "🥂" },
            { valor: "Trabajo", icono: "💼" },
            { valor: "Vacaciones", icono: "🌴" },
            { valor: "Consentirme", icono: "🌸" },
        ],
    },
    {
        id: "estilo",
        titulo: "¿Qué estilo representa mejor lo que buscas?",
        opciones: [
            { valor: "Elegante", icono: "✨" },
            { valor: "Delicado", icono: "🌷" },
            { valor: "Minimalista", icono: "🤍" },
            { valor: "Llamativo", icono: "🔥" },
        ],
    },
    {
        id: "color",
        titulo: "¿Qué gama de colores prefieres?",
        opciones: [
            { valor: "Blanco", icono: "🤍" },
            { valor: "Rosa", icono: "🩷" },
            { valor: "Rojo", icono: "❤️" },
            { valor: "Nude", icono: "🤎" },
        ],
    },
];

export default function StyleAssistant() {
    const [iniciado, setIniciado] = useState(false);
    const [paso, setPaso] = useState(0);
    const [respuestas, setRespuestas] = useState({});
    const [terminado, setTerminado] = useState(false);
    const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
    const [mostrarReserva, setMostrarReserva] = useState(false);

    const preguntaActual = preguntas[paso];

    const elegirOpcion = (valor) => {
        const nuevasRespuestas = {
            ...respuestas,
            [preguntaActual.id]: valor,
        };

        setRespuestas(nuevasRespuestas);

        if (paso === preguntas.length - 1) {
            setTerminado(true);
            return;
        }

        setPaso((pasoActual) => pasoActual + 1);
    };

    const reiniciar = () => {
        setIniciado(false);
        setPaso(0);
        setRespuestas({});
        setTerminado(false);
        setIsChoiceModalOpen(false);
        setMostrarReserva(false);
    };

    const calcularPuntuacion = (nail) => {
        let puntuacion = 0;

        if (nail.categoria === respuestas.ocasion) {
            puntuacion += 3;
        }

        if (nail.estilo?.includes(respuestas.estilo)) {
            puntuacion += 2;
        }

        if (nail.color?.includes(respuestas.color)) {
            puntuacion += 2;
        }

        return puntuacion;
    };

    const recomendacion = [...nailsData].sort(
        (a, b) => calcularPuntuacion(b) - calcularPuntuacion(a)
    )[0];

    const irAReserva = () => {
        setIsChoiceModalOpen(false);
        setMostrarReserva(true);

        setTimeout(() => {
            document.getElementById("reservar-cita")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    return (
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-pink-100 shadow-xl sm:rounded-[2rem]">
                {!iniciado && (
                    <div className="px-5 py-12 text-center sm:px-8 sm:py-16 md:px-16">
                        <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-pink-600 shadow-sm sm:text-sm">
                            ✨ Recomendación personalizada
                        </span>

                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                            ¿Aún no encontraste el diseño perfecto?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                            No te preocupes. Responde tres preguntas sencillas y
                            te ayudaremos a encontrar una opción que combine con
                            tu ocasión, tu personalidad y tus colores favoritos.
                        </p>

                        <button
                            type="button"
                            onClick={() => setIniciado(true)}
                            className="glow-touch mt-8 w-full rounded-full bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-xl sm:w-auto"
                        >
                            Ayúdame a encontrarlo
                        </button>
                    </div>
                )}

                {iniciado && !terminado && (
                    <div className="px-5 py-10 sm:px-8 sm:py-12 md:px-16 md:py-16">
                        <div className="mb-8 sm:mb-10">
                            <div className="mb-3 flex items-center justify-between text-sm font-semibold">
                                <span className="text-pink-600">
                                    Paso {paso + 1} de {preguntas.length}
                                </span>

                                <span className="text-gray-400">
                                    {Math.round(
                                        ((paso + 1) / preguntas.length) * 100
                                    )}
                                    %
                                </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-pink-100">
                                <div
                                    className="h-full rounded-full bg-pink-600 transition-all duration-500"
                                    style={{
                                        width: `${
                                            ((paso + 1) / preguntas.length) *
                                            100
                                        }%`,
                                    }}
                                />
                            </div>
                        </div>

                        <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
                            {preguntaActual.titulo}
                        </h2>

                        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                            {preguntaActual.opciones.map((opcion) => (
                                <button
                                    type="button"
                                    key={opcion.valor}
                                    onClick={() =>
                                        elegirOpcion(opcion.valor)
                                    }
                                    className="glow-touch group min-h-[130px] rounded-3xl border-2 border-pink-100 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-400 hover:shadow-xl sm:min-h-[150px] sm:p-7"
                                >
                                    <span className="text-3xl transition duration-300 group-hover:scale-110 sm:text-4xl">
                                        {opcion.icono}
                                    </span>

                                    <span className="mt-4 block text-lg font-bold text-gray-900 sm:mt-5 sm:text-xl">
                                        {opcion.valor}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {paso > 0 && (
                            <button
                                type="button"
                                onClick={() =>
                                    setPaso(
                                        (pasoActual) => pasoActual - 1
                                    )
                                }
                                className="mt-8 font-semibold text-gray-500 transition hover:text-pink-600"
                            >
                                ← Volver a la pregunta anterior
                            </button>
                        )}
                    </div>
                )}

                {terminado && recomendacion && (
                    <div className="grid items-center gap-8 p-5 sm:p-8 md:grid-cols-2 md:gap-10 md:p-14">
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src={recomendacion.imagen}
                                alt={recomendacion.nombre}
                                className="aspect-[4/5] w-full object-cover"
                            />
                        </div>

                        <div>
                            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-xs font-semibold text-pink-600 sm:text-sm">
                                ✨ Encontramos algo para ti
                            </span>

                            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                                {recomendacion.nombre}
                            </h2>

                            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                                Según tus respuestas, este diseño es el que mejor
                                combina con tu ocasión, el estilo que deseas
                                proyectar y tus colores favoritos.
                            </p>

                            <p className="mt-3 font-medium text-pink-600">
                                Recomendación personalizada por Glow Nails
                                Jennifer
                            </p>

                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-sm text-gray-500">
                                        Precio aproximado
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        RD$
                                        {recomendacion.precio.toLocaleString()}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-sm text-gray-500">
                                        Duración aproximada
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        {recomendacion.duracion}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-3">
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

                            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsChoiceModalOpen(true)
                                    }
                                    className="glow-touch w-full rounded-full bg-pink-600 px-7 py-3 font-semibold text-white transition hover:bg-pink-700 sm:w-auto"
                                >
                                    ✨ Quiero este diseño
                                </button>

                                <button
                                    type="button"
                                    onClick={reiniciar}
                                    className="w-full rounded-full border-2 border-pink-200 px-7 py-3 font-semibold text-pink-600 transition hover:border-pink-500 hover:bg-pink-50 sm:w-auto"
                                >
                                    Intentar de nuevo
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DesignChoiceModal
                isOpen={isChoiceModalOpen}
                onClose={() => setIsChoiceModalOpen(false)}
                design={recomendacion}
                onReserve={irAReserva}
            />

            <ReservationSection
                design={recomendacion}
                respuestas={respuestas}
                isVisible={mostrarReserva}
            />
        </section>
    );
}