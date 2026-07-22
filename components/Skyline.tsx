/**
 * Skyline + connectivity motif (CLAUDE.md §9), recolored for the warm
 * "Golden Hour" system. Deterministic (no randomness) so SSR is stable.
 *
 * variant "light": tan watermark for cream sections.
 * variant "dark":  espresso footer, windows aglow.
 */
const PALETTES = {
  light: {
    tower: "#ecdec7",
    line: "#dcc9a9",
    node: "#c75e12",
    pulse: "#e07425",
    winA: "#d99a2b",
    winB: "#1f7fcb",
  },
  dark: {
    tower: "#3a2a19",
    line: "#5a4530",
    node: "#d99a2b",
    pulse: "#f0b95c",
    winA: "#d99a2b",
    winB: "#4f9fd8",
  },
} as const;

export default function Skyline({
  className = "",
  animate = true,
  variant = "light",
}: {
  className?: string;
  animate?: boolean;
  variant?: keyof typeof PALETTES;
}) {
  const c = PALETTES[variant];

  // Deterministic pseudo-values so server and client render identically.
  const towers: { x: number; w: number; h: number }[] = [];
  let x = -10;
  let seed = 21;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return (seed >>> 8) / 0x7fffff;
  };
  while (x < 1200) {
    const w = 26 + Math.floor(rnd() * 30);
    const h = 34 + Math.floor(rnd() * 95);
    towers.push({ x, w, h });
    x += w + 4 + Math.floor(rnd() * 10);
  }

  const nodes = Array.from({ length: 11 }, (_, i) => ({
    x: 40 + (i * (1120 - 80)) / 10,
    y: 26 + Math.floor(rnd() * 22),
  }));
  const path = nodes
    .map((n, i) => `${i === 0 ? "M" : "L"}${n.x} ${n.y}`)
    .join(" ");

  return (
    <svg
      className={`skyline ${className}`}
      viewBox="0 0 1200 190"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* connectivity network */}
      <path d={path} fill="none" stroke={c.line} strokeWidth={1} />
      {animate && (
        <path
          d={path}
          fill="none"
          stroke={c.pulse}
          strokeWidth={1.5}
          strokeLinecap="round"
          className="net-pulse"
        />
      )}
      {nodes.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.x}
          cy={n.y}
          r={3}
          fill={c.node}
          className={animate ? "node-pulse" : undefined}
          style={animate ? { animationDelay: `${i * 0.33}s` } : undefined}
        />
      ))}

      {/* towers */}
      {towers.map((t, i) => {
        const top = 190 - t.h;
        const wins = [];
        for (let wy = top + 10; wy < 182; wy += 16) {
          for (let wx = t.x + 6; wx < t.x + t.w - 6; wx += 12) {
            const r = ((wx * 7 + wy * 13 + i) % 100) / 100;
            if (r < 0.28) {
              const d = ((wx * 13 + wy * 7) % 40) / 10;
              wins.push(
                <rect
                  key={`${wx}-${wy}`}
                  x={wx}
                  y={wy}
                  width={4}
                  height={5}
                  fill={r < 0.14 ? c.winA : c.winB}
                  className={animate ? "win-on" : "win"}
                  style={{ animationDelay: `${(animate ? 0.8 : 0) + d}s` }}
                  opacity={animate ? undefined : 0.7}
                />,
              );
            }
          }
        }
        return (
          <g key={`t${i}`}>
            <rect x={t.x} y={top} width={t.w} height={t.h} fill={c.tower} />
            {wins}
          </g>
        );
      })}
    </svg>
  );
}
