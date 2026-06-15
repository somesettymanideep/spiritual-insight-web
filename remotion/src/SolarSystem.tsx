import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const stars = Array.from({ length: 130 }, (_, index) => ({
  x: (index * 83 + 17) % 1280,
  y: (index * 47 + 29) % 360,
  size: 0.7 + ((index * 13) % 17) / 10,
  phase: (index * 19) % 120,
}));

const planets = [
  { radiusX: 118, radiusY: 38, size: 8, color: "#cbd2da", start: 0.12, speed: 1.9 },
  { radiusX: 174, radiusY: 56, size: 13, color: "#d99d55", start: 0.52, speed: 1.5 },
  { radiusX: 235, radiusY: 75, size: 15, color: "#4f9bd9", start: 0.82, speed: 1.15 },
  { radiusX: 300, radiusY: 94, size: 12, color: "#c44d35", start: 0.3, speed: 0.9 },
  { radiusX: 385, radiusY: 118, size: 30, color: "#d8b083", start: 0.68, speed: 0.64, bands: true },
  { radiusX: 478, radiusY: 143, size: 25, color: "#d3bd7b", start: 0.05, speed: 0.48, ring: true },
  { radiusX: 560, radiusY: 162, size: 19, color: "#79c8d2", start: 0.43, speed: 0.36 },
];

export const SolarSystem = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = frame / durationInFrames;
  const centerX = 640;
  const centerY = 182;

  return (
    <AbsoluteFill style={{ overflow: "hidden", background: "radial-gradient(ellipse at 50% 50%, #291153 0%, #12082f 43%, #08051d 100%)" }}>
      <AbsoluteFill style={{ opacity: 0.58 }}>
        {stars.map((star, index) => {
          const shimmer = 0.28 + 0.72 * Math.abs(Math.sin((frame + star.phase) / 26));
          return <div key={index} style={{ position: "absolute", left: star.x, top: star.y, width: star.size, height: star.size, borderRadius: "50%", background: index % 9 === 0 ? "#f4c96f" : "#ffffff", opacity: shimmer, boxShadow: star.size > 1.7 ? "0 0 7px currentColor" : undefined }} />;
        })}
      </AbsoluteFill>

      <div style={{ position: "absolute", left: centerX - 600, top: centerY - 170, width: 1200, height: 340, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(122,65,201,.16), transparent 67%)" }} />

      {planets.slice().reverse().map((planet, reverseIndex) => (
        <div key={`orbit-${reverseIndex}`} style={{ position: "absolute", left: centerX - planet.radiusX, top: centerY - planet.radiusY, width: planet.radiusX * 2, height: planet.radiusY * 2, borderRadius: "50%", border: "1px solid rgba(226,208,255,.19)", transform: "rotate(-3deg)" }} />
      ))}

      <div style={{ position: "absolute", left: centerX - 58, top: centerY - 58, width: 116, height: 116, borderRadius: "50%", background: "radial-gradient(circle at 38% 35%, #fff7bd 0%, #ffd05a 25%, #f58b23 63%, #d44616 100%)", boxShadow: "0 0 28px #ffca4f, 0 0 72px rgba(255,145,30,.8), 0 0 145px rgba(244,94,30,.35)", transform: `scale(${interpolate(Math.sin(progress * Math.PI * 2), [-1, 1], [0.98, 1.03])})` }}>
        <div style={{ position: "absolute", inset: 9, borderRadius: "50%", border: "2px solid rgba(255,255,255,.18)" }} />
      </div>

      {planets.map((planet, index) => {
        const angle = (planet.start + progress * planet.speed) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * planet.radiusX;
        const y = centerY + Math.sin(angle) * planet.radiusY;
        const front = Math.sin(angle) > 0;
        const scale = front ? 1.08 : 0.9;
        return (
          <div key={index} style={{ position: "absolute", left: x - planet.size / 2, top: y - planet.size / 2, width: planet.size, height: planet.size, zIndex: front ? 3 : 0, borderRadius: "50%", background: `radial-gradient(circle at 32% 28%, #ffffff, ${planet.color} 26%, ${planet.color} 66%, #21102c 120%)`, boxShadow: `0 0 ${planet.size * 0.7}px rgba(255,255,255,.24)`, transform: `scale(${scale})` }}>
            {planet.bands && <div style={{ position: "absolute", left: 2, right: 2, top: "47%", height: 4, borderTop: "2px solid rgba(98,45,34,.5)", borderBottom: "1px solid rgba(255,240,210,.45)", transform: "rotate(8deg)" }} />}
            {planet.ring && <div style={{ position: "absolute", left: "-50%", top: "39%", width: "200%", height: "23%", border: "2px solid rgba(232,206,136,.75)", borderRadius: "50%", transform: "rotate(-12deg)" }} />}
          </div>
        );
      })}

      <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(8,5,29,.38), transparent 25%, transparent 75%, rgba(8,5,29,.38))" }} />
    </AbsoluteFill>
  );
};