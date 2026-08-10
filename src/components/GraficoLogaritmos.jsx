import { useContext, useState } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoLogaritmos() {
  const { C } = useContext(ThemeCtx);
  const [tab, setTab] = useState("cambio_base"); // "cambio_base" o "ecuaciones_distinta_base"

  // Estado Calculadora Cambio de Base
  const [baseB, setBaseB] = useState(7);
  const [valM, setValM] = useState(50);

  // Estado Ecuaciones Distinta Base
  const [baseExpA, setBaseExpA] = useState(3);
  const [baseExpB, setBaseExpB] = useState(2);

  // Cálculos Cambio de Base: log_b(M) = ln(M) / ln(b)
  const lnM = Math.log(valM);
  const lnB = Math.log(baseB);
  const resLog = lnM / lnB;

  // Cálculo Ecuación a^x = b^(x+1) => x = ln(b) / (ln(a) - ln(b))
  const solExpX = baseExpA !== baseExpB ? Math.log(baseExpB) / (Math.log(baseExpA) - Math.log(baseExpB)) : null;

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
      <div style={{ fontSize: 13, fontWeight: 700, color: C.text, borderBottom: `1px solid ${C.border}`, paddingBottom: 8 }}>
        Herramienta Interactiva de Logaritmos
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => setTab("cambio_base")}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: 8,
            border: `1px solid ${C.accent}`,
            background: tab === "cambio_base" ? C.accent : "transparent",
            color: tab === "cambio_base" ? C.bg : C.accent,
            fontWeight: "bold",
            fontSize: 11,
            cursor: "pointer"
          }}
        >
          1. Fórmula Cambio de Base
        </button>
        <button
          onClick={() => setTab("ecuaciones_distinta_base")}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: 8,
            border: `1px solid ${C.accent}`,
            background: tab === "ecuaciones_distinta_base" ? C.accent : "transparent",
            color: tab === "ecuaciones_distinta_base" ? C.bg : C.accent,
            fontWeight: "bold",
            fontSize: 11,
            cursor: "pointer"
          }}
        >
          2. Ecuaciones con Distinta Base
        </button>
      </div>

      {tab === "cambio_base" ? (
        /* ==================== TAB 1: CAMBIO DE BASE ==================== */
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: C.text }}>
            La <strong>Fórmula de Cambio de Base</strong> permite evaluar logaritmos en cualquier base <InlineFormula latex="b > 0" /> (<InlineFormula latex="b \neq 1" />) utilizando el logaritmo natural (<InlineFormula latex="\ln" />) o el logaritmo decimal (<InlineFormula latex="\log_{10}" />) de una calculadora:
          </div>

          <div style={{ background: C.bg, border: `1px solid ${C.accent}44`, borderRadius: 10, padding: 14, textAlign: "center" }}>
            <InlineFormula latex="\log_b(M) = \frac{\ln(M)}{\ln(b)} = \frac{\log_{10}(M)}{\log_{10}(b)}" />
          </div>

          {/* Calculadora Dinámica */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 11, fontWeight: "bold", color: C.accent, textTransform: "uppercase" }}>
              Calculadora interactiva de cambio de base
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 10, color: C.muted, display: "block", marginBottom: 4 }}>Base \(b\):</label>
                <input
                  type="number"
                  min="2"
                  max="100"
                  value={baseB}
                  onChange={(e) => setBaseB(Math.max(2, parseFloat(e.target.value) || 2))}
                  style={{ width: "100%", padding: "6px 10px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.bg, color: C.text, fontSize: 12, boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 10, color: C.muted, display: "block", marginBottom: 4 }}>Argumento \(M\):</label>
                <input
                  type="number"
                  min="1"
                  max="10000"
                  value={valM}
                  onChange={(e) => setValM(Math.max(1, parseFloat(e.target.value) || 1))}
                  style={{ width: "100%", padding: "6px 10px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.bg, color: C.text, fontSize: 12, boxSizing: "border-box" }}
                />
              </div>
            </div>

            {/* Resultado Paso a Paso */}
            <div style={{ background: `${C.orange}11`, border: `1px solid ${C.orange}33`, borderRadius: 8, padding: 12, fontSize: 12, color: C.text, display: "flex", flexDirection: "column", gap: 6 }}>
              <div>
                <strong>Expresión original: </strong> <InlineFormula latex={`\\log_{${baseB}}(${valM})`} />
              </div>
              <div>
                <strong>Paso 1 (Cambio a base \(e\)): </strong> <InlineFormula latex={`\\frac{\\ln(${valM})}{\\ln(${baseB})}`} />
              </div>
              <div>
                <strong>Paso 2 (Evaluación de LN): </strong> <InlineFormula latex={`\\frac{${lnM.toFixed(4)}}{${lnB.toFixed(4)}}`} />
              </div>
              <div style={{ fontSize: 13, fontWeight: "bold", color: C.orange, marginTop: 4 }}>
                Resultado: <InlineFormula latex={`\\log_{${baseB}}(${valM}) \\approx ${resLog.toFixed(4)}`} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ==================== TAB 2: ECUACIONES DISTINTA BASE ==================== */
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: C.text }}>
            Cuando se presentan ecuaciones con <strong>distintas bases exponenciales o logarítmicas</strong>, se aplican logaritmos en ambos lados o se reducen los argumentos a una base común mediante cambio de base.
          </div>

          {/* Caso 1: Exponenciales a^x = b^(x+1) */}
          <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 11, fontWeight: "bold", color: C.accent, textTransform: "uppercase" }}>
              Caso A: Ecuación Exponencial <InlineFormula latex="a^x = b^{x+1}" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <label style={{ fontSize: 10, color: C.muted, display: "block", marginBottom: 4 }}>Base \(a\):</label>
                <input
                  type="number"
                  min="2"
                  max="20"
                  value={baseExpA}
                  onChange={(e) => setBaseExpA(Math.max(2, parseInt(e.target.value) || 2))}
                  style={{ width: "100%", padding: "5px 8px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.surface, color: C.text, fontSize: 12, boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 10, color: C.muted, display: "block", marginBottom: 4 }}>Base \(b\):</label>
                <input
                  type="number"
                  min="2"
                  max="20"
                  value={baseExpB}
                  onChange={(e) => setBaseExpB(Math.max(2, parseInt(e.target.value) || 2))}
                  style={{ width: "100%", padding: "5px 8px", borderRadius: 6, border: `1px solid ${C.border}`, background: C.surface, color: C.text, fontSize: 12, boxSizing: "border-box" }}
                />
              </div>
            </div>

            <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5 }}>
              1. Aplicar <InlineFormula latex="\ln" /> en ambos lados: <InlineFormula latex={`x \\ln(${baseExpA}) = (x+1)\\ln(${baseExpB})`} /><br />
              2. Agrupar términos con \(x\): <InlineFormula latex={`x(\\ln(${baseExpA}) - \\ln(${baseExpB})) = \\ln(${baseExpB})`} /><br />
              3. Despejar: <InlineFormula latex={`x = \\frac{\\ln(${baseExpB})}{\\ln(${baseExpA}) - \\ln(${baseExpB})}`} />
            </div>

            {solExpX !== null && (
              <div style={{ background: `${C.green}15`, border: `1px solid ${C.green}44`, padding: 8, borderRadius: 6, fontSize: 12, fontWeight: "bold", color: C.green }}>
                Solución exacta: <InlineFormula latex={`x \\approx ${solExpX.toFixed(4)}`} />
              </div>
            )}
          </div>

          {/* Caso 2: Logaritmos log_4(x) = log_2(9) */}
          <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 11, fontWeight: "bold", color: C.purple, textTransform: "uppercase" }}>
              Caso B: Ecuación Logarítmica <InlineFormula latex="\log_4(x) = \log_2(9)" />
            </div>
            <div style={{ fontSize: 11, color: C.text, lineHeight: 1.6 }}>
              Convertimos la base 4 a base 2 usando cambio de base:<br />
              <InlineFormula latex="\log_4(x) = \frac{\log_2(x)}{\log_2(4)} = \frac{\log_2(x)}{2}" /><br />
              Sustituyendo en la ecuación original:<br />
              <InlineFormula latex="\frac{\log_2(x)}{2} = \log_2(9) \implies \log_2(x) = 2\log_2(9) = \log_2(9^2)" /><br />
              Por inyectividad: <InlineFormula latex="x = 81" />.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
