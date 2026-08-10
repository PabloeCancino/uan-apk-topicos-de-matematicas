import { useContext, useState } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function ActividadRegleta() {
  const { C } = useContext(ThemeCtx);
  const [curvaId, setCurvaId] = useState("parabola"); // "lineal", "parabola", "cubica", "circulo"
  const [xVal, setXVal] = useState(1.5);

  // Definición de las curvas y sus comportamientos con la regleta vertical
  const curvas = {
    lineal: {
      nombre: "Línea recta: f(x) = 2x - 1",
      esFuncion: true,
      minX: -3, maxX: 3, step: 0.1,
      evaluar: (x) => [{ y: 2 * x - 1, label: `( ${x.toFixed(1)}, ${(2 * x - 1).toFixed(1)} )` }],
      path: () => {
        // M (-3, -7) L (3, 5) en coords SVG (Center 180, 140, Scale X: 35, Scale Y: 18)
        const x1 = 180 + (-3) * 35;
        const y1 = 140 - (-7) * 18;
        const x2 = 180 + (3) * 35;
        const y2 = 140 - (5) * 18;
        return `M ${x1} ${y1} L ${x2} ${y2}`;
      }
    },
    parabola: {
      nombre: "Parábola: f(x) = x² - 2",
      esFuncion: true,
      minX: -3, maxX: 3, step: 0.1,
      evaluar: (x) => [{ y: x * x - 2, label: `( ${x.toFixed(1)}, ${(x * x - 2).toFixed(2)} )` }],
      path: () => {
        const pts = [];
        for (let x = -3.2; x <= 3.2; x += 0.1) {
          const px = 180 + x * 35;
          const py = 140 - (x * x - 2) * 18;
          pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
        }
        return `M ${pts.join(" L ")}`;
      }
    },
    cubica: {
      nombre: "Polinomio cúbico: f(x) = x³ - 3x",
      esFuncion: true,
      minX: -2.5, maxX: 2.5, step: 0.1,
      evaluar: (x) => [{ y: Math.pow(x, 3) - 3 * x, label: `( ${x.toFixed(1)}, ${(Math.pow(x, 3) - 3 * x).toFixed(2)} )` }],
      path: () => {
        const pts = [];
        for (let x = -2.5; x <= 2.5; x += 0.05) {
          const px = 180 + x * 35;
          const py = 140 - (Math.pow(x, 3) - 3 * x) * 18;
          pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
        }
        return `M ${pts.join(" L ")}`;
      }
    },
    circulo: {
      nombre: "Relación no funcional: x² + y² = 9 (Circunferencia)",
      esFuncion: false,
      minX: -2.9, maxX: 2.9, step: 0.1,
      evaluar: (x) => {
        if (Math.abs(x) > 3) return [];
        const yVal = Math.sqrt(9 - x * x);
        return [
          { y: yVal, label: `P₁ ( ${x.toFixed(1)}, ${yVal.toFixed(2)} )` },
          { y: -yVal, label: `P₂ ( ${x.toFixed(1)}, ${(-yVal).toFixed(2)} )` }
        ];
      },
      path: () => {
        // Circunferencia de radio R=3. R_x = 3 * 35 = 105, R_y = 3 * 18 = 54
        return `M 75 140 A 105 54 0 1 0 285 140 A 105 54 0 1 0 75 140`;
      }
    }
  };

  const curva = curvas[curvaId];
  const intersecciones = curva.evaluar(xVal);
  const regletaX = 180 + xVal * 35;

  return (
    <div style={{
      width: "100%",
      maxWidth: 580,
      margin: "24px auto 16px",
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      padding: 18,
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
      {/* Encabezado */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${C.border}`, paddingBottom: 10 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
            Actividad de la Regleta (Prueba de la Recta Vertical)
          </div>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
            Desliza la regleta vertical <InlineFormula latex="x = x_0" /> para comprobar el criterio de función.
          </div>
        </div>
        <span style={{
          fontSize: 10,
          fontWeight: "bold",
          padding: "4px 10px",
          borderRadius: 20,
          background: curva.esFuncion ? `${C.green}22` : `${C.red}22`,
          color: curva.esFuncion ? C.green : C.red,
          border: `1px solid ${curva.esFuncion ? C.green : C.red}44`
        }}>
          {curva.esFuncion ? "✓ Es Función (1 intersección)" : "✕ NO es Función (>1 intersecciones)"}
        </span>
      </div>

      {/* Selectores de Curva */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
        {Object.keys(curvas).map(key => (
          <button
            key={key}
            onClick={() => { setCurvaId(key); setXVal(0.5); }}
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              border: `1px solid ${curvaId === key ? C.accent : C.border}`,
              background: curvaId === key ? `${C.accent}15` : "transparent",
              color: curvaId === key ? C.accent : C.text,
              fontSize: 11,
              fontWeight: curvaId === key ? 700 : 500,
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s ease"
            }}
          >
            {curvas[key].nombre}
          </button>
        ))}
      </div>

      {/* Control Deslizante de la Regleta */}
      <div style={{ background: C.bg, padding: "10px 14px", borderRadius: 10, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 11, fontWeight: "bold", color: C.orange, minWidth: 90 }}>
          Regleta <InlineFormula latex={`x_0 = ${xVal.toFixed(1)}`} />
        </span>
        <input
          type="range"
          min={curva.minX}
          max={curva.maxX}
          step={curva.step}
          value={xVal}
          onChange={(e) => setXVal(parseFloat(e.target.value))}
          style={{ flex: 1, accentColor: C.orange, cursor: "pointer" }}
        />
      </div>

      {/* Gráfico SVG interactivo */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg viewBox="0 0 360 280" width="100%" height="240px" style={{ background: C.bg, borderRadius: 12, border: `1px solid ${C.border}` }}>
          {/* Cuadrícula */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map(val => (
            <line key={`v-${val}`} x1={180 + val * 35} y1="15" x2={180 + val * 35} y2="265" stroke={C.border} strokeWidth="0.5" strokeDasharray="2 2" />
          ))}
          {[-6, -4, -2, 0, 2, 4, 6].map(val => (
            <line key={`h-${val}`} x1="15" y1={140 - val * 18} x2={345} y2={140 - val * 18} stroke={C.border} strokeWidth="0.5" strokeDasharray="2 2" />
          ))}

          {/* Ejes principales */}
          <line x1="15" y1="140" x2="345" y2="140" stroke={C.muted} strokeWidth="1.2" />
          <line x1="180" y1="15" x2="180" y2="265" stroke={C.muted} strokeWidth="1.2" />

          {/* Etiquetas Ejes */}
          <text x="340" y="132" fill={C.muted} fontSize="10" fontWeight="bold">x</text>
          <text x="186" y="25" fill={C.muted} fontSize="10" fontWeight="bold">y</text>

          {/* Ticks X */}
          {[-3, -2, -1, 1, 2, 3].map(val => (
            <text key={`tx-${val}`} x={180 + val * 35} y="154" fill={C.muted} fontSize="9" textAnchor="middle">{val}</text>
          ))}
          {/* Ticks Y */}
          {[-4, -2, 2, 4, 6].map(val => (
            <text key={`ty-${val}`} x="174" y={140 - val * 18 + 3} fill={C.muted} fontSize="8" textAnchor="end">{val}</text>
          ))}

          {/* Trazado de la curva */}
          <path d={curva.path()} fill="none" stroke={C.accent} strokeWidth="2.5" />

          {/* REGLETA VERTICAL (Línea naranja deslizable) */}
          <line
            x1={regletaX}
            y1="15"
            x2={regletaX}
            y2="265"
            stroke={C.orange}
            strokeWidth="2.5"
            strokeDasharray="5 3"
          />

          {/* Indicador superior de la regleta */}
          <rect x={regletaX - 20} y="15" width="40" height="16" rx="4" fill={C.orange} />
          <text x={regletaX} y="26" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
            x={xVal.toFixed(1)}
          </text>

          {/* Puntos de intersección entre la regleta y la curva */}
          {intersecciones.map((pt, idx) => {
            const py = 140 - pt.y * 18;
            if (py < 10 || py > 270) return null;
            return (
              <g key={idx}>
                <circle cx={regletaX} cy={py} r="5" fill={curva.esFuncion ? C.green : C.red} stroke={C.bg} strokeWidth="2" />
                <rect x={regletaX + (regletaX > 240 ? -95 : 10)} y={py - 10} width="85" height="18" rx="4" fill={C.surface} stroke={C.border} />
                <text x={regletaX + (regletaX > 240 ? -52 : 52)} y={py + 2} fill={C.text} fontSize="9" fontWeight="bold" textAnchor="middle">
                  {pt.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Explicación Pedagógica del Estado */}
      <div style={{ fontSize: 11, lineHeight: 1.5, color: C.muted, background: `${C.accent}0a`, padding: 12, borderRadius: 10, border: `1px solid ${C.accent}22` }}>
        {curva.esFuncion ? (
          <div>
            <strong style={{ color: C.accent }}>Prueba de la Recta Vertical Superada:</strong> Para cualquier posición de la regleta <InlineFormula latex={`x = ${xVal.toFixed(1)}`} />, existe <em>exactamente una</em> intersección en el gráfico. Por lo tanto, la asignación es única y la relación representa una <strong>función bien definida</strong>.
          </div>
        ) : (
          <div>
            <strong style={{ color: C.red }}>Fallo en la Prueba de la Recta Vertical:</strong> Al colocar la regleta en <InlineFormula latex={`x = ${xVal.toFixed(1)}`} />, se producen <strong>{intersecciones.length} puntos de intersección</strong> simultáneos. Asignar múltiples valores de salida a una sola entrada viola la definición formal de función.
          </div>
        )}
      </div>
    </div>
  );
}
