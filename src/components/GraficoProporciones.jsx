import { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoProporciones() {
  const { C } = useContext(ThemeCtx);

  // Generar puntos para la proporción directa: y = 2x
  const directPoints = [];
  for (let x = 0; x <= 5; x += 0.1) {
    const px = 60 + x * 35; // 60 a 235
    const py = 220 - (2 * x) * 16; // 220 a 60
    directPoints.push(`${px},${py}`);
  }
  const directPathD = `M ${directPoints.join(" L ")}`;

  // Generar puntos para la proporción inversa: y = 6/x
  const inversePoints = [];
  for (let x = 0.6; x <= 6; x += 0.1) {
    const px = 360 + x * 30; // 360 a 540
    const py = 220 - (6 / x) * 26; // 220 a 64
    inversePoints.push(`${px},${py}`);
  }
  const inversePathD = `M ${inversePoints.join(" L ")}`;

  return (
    <div style={{
      width: "100%",
      maxWidth: 580,
      margin: "24px auto 16px",
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
      {/* Título de la sección */}
      <div style={{ fontSize: 13, fontWeight: 700, color: C.text, borderBottom: `1px solid ${C.border}`, paddingBottom: 8 }}>
        Visualización Gráfica y Tabla de Datos en Proporciones
      </div>

      <svg viewBox="0 0 580 250" width="100%" height="100%" style={{ display: "block" }}>
        <defs>
          <marker id="axis-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 2 L 8 5 L 0 8 z" fill={C.muted} />
          </marker>
        </defs>

        {/* ════════════════ GRÁFICA 1: PROPORCIÓN DIRECTA ════════════════ */}
        <g>
          <text x="140" y="22" fill={C.text} fontSize="11" fontWeight="bold" textAnchor="middle">
            Proporción Directa: y = 2x
          </text>

          {/* Cuadrícula */}
          {[1, 2, 3, 4, 5].map(val => (
            <line key={val} x1={60 + val * 35} y1="210" x2={60 + val * 35} y2="50" stroke={C.border} strokeWidth="0.5" strokeDasharray="3 3" />
          ))}
          {[2, 4, 6, 8, 10].map(val => (
            <line key={val} x1="60" y1={210 - (val) * 15} x2="235" y2={210 - (val) * 15} stroke={C.border} strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          {/* Ejes */}
          <line x1="60" y1="210" x2="250" y2="210" stroke={C.muted} strokeWidth="1.2" markerEnd="url(#axis-arrow)" />
          <line x1="60" y1="210" x2="60" y2="35" stroke={C.muted} strokeWidth="1.2" markerEnd="url(#axis-arrow)" />

          <text x="255" y="214" fill={C.muted} fontSize="10" fontWeight="bold">x</text>
          <text x="56" y="28" fill={C.muted} fontSize="10" fontWeight="bold">y</text>

          {/* Ticks X */}
          {[1, 2, 3, 4, 5].map(val => (
            <g key={val}>
              <line x1={60 + val * 35} y1="210" x2={60 + val * 35} y2="214" stroke={C.muted} strokeWidth="1" />
              <text x={60 + val * 35} y="225" fill={C.muted} fontSize="9" textAnchor="middle">{val}</text>
            </g>
          ))}

          {/* Ticks Y */}
          {[2, 4, 6, 8, 10].map(val => (
            <g key={val}>
              <line x1="56" y1={210 - val * 15} x2="60" y2={210 - val * 15} stroke={C.muted} strokeWidth="1" />
              <text x="50" y={210 - val * 15 + 3} fill={C.muted} fontSize="9" textAnchor="end">{val}</text>
            </g>
          ))}

          <path d={directPathD} fill="none" stroke={C.accent} strokeWidth="2.5" />

          {/* Puntos destacados */}
          <circle cx={60 + 2 * 35} cy={210 - 4 * 15} r="3.5" fill={C.accent} />
          <circle cx={60 + 4 * 35} cy={210 - 8 * 15} r="3.5" fill={C.accent} />
          <text x={60 + 2 * 35 + 5} y={210 - 4 * 15 - 5} fill={C.text} fontSize="8" fontWeight="600">(2, 4)</text>
          <text x={60 + 4 * 35 - 5} y={210 - 8 * 15 - 8} fill={C.text} fontSize="8" fontWeight="600">(4, 8)</text>
        </g>

        {/* ════════════════ GRÁFICA 2: PROPORCIÓN INVERSA ════════════════ */}
        <g>
          <text x="440" y="22" fill={C.text} fontSize="11" fontWeight="bold" textAnchor="middle">
            Proporción Inversa: y = 6/x
          </text>

          {/* Cuadrícula */}
          {[1, 2, 3, 4, 5, 6].map(val => (
            <line key={val} x1={360 + val * 30} y1="210" x2={360 + val * 30} y2="50" stroke={C.border} strokeWidth="0.5" strokeDasharray="3 3" />
          ))}
          {[1, 2, 3, 4, 5, 6].map(val => (
            <line key={val} x1="360" y1={210 - val * 24} x2="540" y2={210 - val * 24} stroke={C.border} strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          {/* Ejes */}
          <line x1="360" y1="210" x2="555" y2="210" stroke={C.muted} strokeWidth="1.2" markerEnd="url(#axis-arrow)" />
          <line x1="360" y1="210" x2="360" y2="35" stroke={C.muted} strokeWidth="1.2" markerEnd="url(#axis-arrow)" />

          <text x="560" y="214" fill={C.muted} fontSize="10" fontWeight="bold">x</text>
          <text x="356" y="28" fill={C.muted} fontSize="10" fontWeight="bold">y</text>

          {/* Ticks X */}
          {[1, 2, 3, 4, 5, 6].map(val => (
            <g key={val}>
              <line x1={360 + val * 30} y1="210" x2={360 + val * 30} y2="214" stroke={C.muted} strokeWidth="1" />
              <text x={360 + val * 30} y="225" fill={C.muted} fontSize="9" textAnchor="middle">{val}</text>
            </g>
          ))}

          {/* Ticks Y */}
          {[1, 2, 3, 4, 5, 6].map(val => (
            <g key={val}>
              <line x1="356" y1={210 - val * 24} x2="360" y2={210 - val * 24} stroke={C.muted} strokeWidth="1" />
              <text x="350" y={210 - val * 24 + 3} fill={C.muted} fontSize="9" textAnchor="end">{val}</text>
            </g>
          ))}

          <path d={inversePathD} fill="none" stroke={C.orange} strokeWidth="2.5" />

          {/* Puntos destacados */}
          <circle cx={360 + 2 * 30} cy={210 - 3 * 24} r="3.5" fill={C.orange} />
          <circle cx={360 + 3 * 30} cy={210 - 2 * 24} r="3.5" fill={C.orange} />
          <text x={360 + 2 * 30 + 5} y={210 - 3 * 24 - 5} fill={C.text} fontSize="8" fontWeight="600">(2, 3)</text>
          <text x={360 + 3 * 30 + 5} y={210 - 2 * 24 - 5} fill={C.text} fontSize="8" fontWeight="600">(3, 2)</text>
        </g>
      </svg>

      {/* ════════ TABLAS DE DATOS DEL PROBLEMA VS PUNTOS EN LA GRÁFICA ════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {/* Tabla Proporción Directa */}
        <div style={{ background: C.bg, border: `1px solid ${C.accent}33`, borderRadius: 10, padding: 10 }}>
          <div style={{ fontSize: 11, fontWeight: "bold", color: C.accent, marginBottom: 6 }}>
            Datos del Problema vs. Puntos Directos <InlineFormula latex="y = 2x" />
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, textAlign: "center" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                <th style={{ padding: 3, color: C.muted }}>x (litros)</th>
                <th style={{ padding: 3, color: C.muted }}>y (costo $)</th>
                <th style={{ padding: 3, color: C.accent }}>Punto (x, y)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { x: 1, y: 2, pt: "(1, 2)" },
                { x: 2, y: 4, pt: "(2, 4)" },
                { x: 3, y: 6, pt: "(3, 6)" },
                { x: 4, y: 8, pt: "(4, 8)" },
                { x: 5, y: 10, pt: "(5, 10)" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}33` }}>
                  <td style={{ padding: 3 }}>{row.x}</td>
                  <td style={{ padding: 3 }}>{row.y}</td>
                  <td style={{ padding: 3, fontWeight: "bold", color: C.accent }}>{row.pt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabla Proporción Inversa */}
        <div style={{ background: C.bg, border: `1px solid ${C.orange}33`, borderRadius: 10, padding: 10 }}>
          <div style={{ fontSize: 11, fontWeight: "bold", color: C.orange, marginBottom: 6 }}>
            Datos del Problema vs. Puntos Inversos <InlineFormula latex="y = 6/x" />
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, textAlign: "center" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                <th style={{ padding: 3, color: C.muted }}>x (obreros)</th>
                <th style={{ padding: 3, color: C.muted }}>y (días)</th>
                <th style={{ padding: 3, color: C.orange }}>Punto (x, y)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { x: 1, y: 6, pt: "(1, 6)" },
                { x: 2, y: 3, pt: "(2, 3)" },
                { x: 3, y: 2, pt: "(3, 2)" },
                { x: 6, y: 1, pt: "(6, 1)" },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}33` }}>
                  <td style={{ padding: 3 }}>{row.x}</td>
                  <td style={{ padding: 3 }}>{row.y}</td>
                  <td style={{ padding: 3, fontWeight: "bold", color: C.orange }}>{row.pt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
