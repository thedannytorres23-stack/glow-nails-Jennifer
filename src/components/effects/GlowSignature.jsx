export default function GlowSignature() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {/* Aura rosada móvil */}
      <div className="glow-signature-aura" />

      {/* Reflejo principal */}
      <div className="glow-signature-line" />

      {/* Línea fina dentro del reflejo */}
      <div className="glow-signature-core" />

      {/* Destellos */}
      <span className="glow-spark glow-spark-one">✦</span>
      <span className="glow-spark glow-spark-two">✧</span>
      <span className="glow-spark glow-spark-three">✦</span>
      <span className="glow-spark glow-spark-four">✧</span>
      <span className="glow-spark glow-spark-five">✦</span>
    </div>
  );
}