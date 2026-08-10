import { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";
import { InlineFormula } from "./Formula";

export function GraficoProductosNotables() {
  const { C } = useContext(ThemeCtx);

  return (
    <div style={{
      width: "100%",
      maxWidth: 580,
      margin: "24px auto 16px",
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }}>
      {/* Título de la sección */}
      <div style={{ fontSize: 13, fontWeight: 700, color: C.text, borderBottom: `1px solid ${C.border}`, paddingBottom: 8 }}>
        Demostraciones Geométricas de Productos Notables
      </div>

      {/* 1. BINOMIO AL CUADRADO (2D) */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.accent, marginBottom: 12 }}>
          1. Binomio al cuadrado: <InlineFormula latex="(a + b)^2 = a^2 + 2ab + b^2" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <svg viewBox="0 0 300 240" width="220px" height="176px" style={{ display: "block" }}>
            <defs>
              <marker id="geom-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill={C.text} />
              </marker>
            </defs>

            {/* Cuadrado a^2 (Azul) */}
            <rect x="70" y="70" width="120" height="120" stroke={C.text} strokeWidth="1.5" fill={`${C.accent}22`} />
            <text x="130" y="135" fill={C.accent} fontSize="14" fontWeight="bold" textAnchor="middle">
              a<tspan baselineShift="super" fontSize="9">2</tspan>
            </text>

            {/* Rectángulo ab (Naranja inferior-derecha) */}
            <rect x="190" y="70" width="60" height="120" stroke={C.text} strokeWidth="1.5" fill={`${C.orange}22`} />
            <text x="220" y="135" fill={C.orange} fontSize="14" fontWeight="bold" textAnchor="middle">ab</text>

            {/* Rectángulo ab (Naranja superior-izquierda) */}
            <rect x="70" y="10" width="120" height="60" stroke={C.text} strokeWidth="1.5" fill={`${C.orange}22`} />
            <text x="130" y="45" fill={C.orange} fontSize="14" fontWeight="bold" textAnchor="middle">ab</text>

            {/* Cuadrado b^2 (Verde superior-derecha) */}
            <rect x="190" y="10" width="60" height="60" stroke={C.text} strokeWidth="1.5" fill={`${C.green}22`} />
            <text x="220" y="45" fill={C.green} fontSize="14" fontWeight="bold" textAnchor="middle">
              b<tspan baselineShift="super" fontSize="9">2</tspan>
            </text>

            {/* Cotas */}
            <line x1="45" y1="70" x2="45" y2="190" stroke={C.text} strokeWidth="1" markerStart="url(#geom-arrow)" markerEnd="url(#geom-arrow)" />
            <text x="35" y="135" fill={C.text} fontSize="12" fontStyle="italic" textAnchor="middle">a</text>
            <line x1="45" y1="10" x2="45" y2="70" stroke={C.text} strokeWidth="1" markerStart="url(#geom-arrow)" markerEnd="url(#geom-arrow)" />
            <text x="35" y="45" fill={C.text} fontSize="12" fontStyle="italic" textAnchor="middle">b</text>

            <line x1="70" y1="205" x2="190" y2="205" stroke={C.text} strokeWidth="1" markerStart="url(#geom-arrow)" markerEnd="url(#geom-arrow)" />
            <text x="130" y="222" fill={C.text} fontSize="12" fontStyle="italic" textAnchor="middle">a</text>
            <line x1="190" y1="205" x2="250" y2="205" stroke={C.text} strokeWidth="1" markerStart="url(#geom-arrow)" markerEnd="url(#geom-arrow)" />
            <text x="220" y="222" fill={C.text} fontSize="12" fontStyle="italic" textAnchor="middle">b</text>
          </svg>
        </div>

        <div style={{ fontSize: 11, lineHeight: 1.5, color: C.muted }}>
          Un cuadrado de lado <InlineFormula latex="(a + b)" /> se divide en 4 áreas: <InlineFormula latex="a^2 + ab + ab + b^2 = a^2 + 2ab + b^2" />.
        </div>
      </div>

      <div style={{ height: 1, background: `${C.border}66` }} />

      {/* 2. BINOMIO AL CUBO (3D ISOMÉTRICO) */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.purple, marginBottom: 10 }}>
          2. Demostración Geométrica del Binomio al Cubo: <InlineFormula latex="(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />
        </div>

        {/* Diagrama SVG Isométrico 3D de los 8 sub-bloques del Cubo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <svg viewBox="0 0 340 220" width="100%" height="200px" style={{ background: C.bg, borderRadius: 12, border: `1px solid ${C.border}` }}>
            {/* Cubo A^3 (Gran bloque frontal inferior izquierdo) */}
            {/* Cara Superior a^3 */}
            <polygon points="60,110 140,70 200,100 120,140" fill={`${C.accent}44`} stroke={C.accent} strokeWidth="1.5" />
            {/* Cara Frontal Izquierda a^3 */}
            <polygon points="60,110 120,140 120,200 60,170" fill={`${C.accent}66`} stroke={C.accent} strokeWidth="1.5" />
            {/* Cara Frontal Derecha a^3 */}
            <polygon points="120,140 200,100 200,160 120,200" fill={`${C.accent}33`} stroke={C.accent} strokeWidth="1.5" />
            <text x="120" y="155" fill={C.accent} fontSize="14" fontWeight="bold" textAnchor="middle">
              a<tspan baselineShift="super" fontSize="9">3</tspan>
            </text>

            {/* Prisma a^2 b (1 de 3: bloque adjunto superior) */}
            <polygon points="60,80 140,40 200,70 120,110" fill={`${C.orange}33`} stroke={C.orange} strokeWidth="1.2" />
            <polygon points="60,80 120,110 120,140 60,110" fill={`${C.orange}55`} stroke={C.orange} strokeWidth="1.2" />
            <polygon points="120,110 200,70 200,100 120,140" fill={`${C.orange}22`} stroke={C.orange} strokeWidth="1.2" />
            <text x="120" y="98" fill={C.orange} fontSize="11" fontWeight="bold" textAnchor="middle">a²b</text>

            {/* Prisma a^2 b (2 de 3: bloque lateral derecho) */}
            <polygon points="200,100 240,80 280,100 240,120" fill={`${C.orange}33`} stroke={C.orange} strokeWidth="1.2" />
            <polygon points="200,100 240,120 240,180 200,160" fill={`${C.orange}55`} stroke={C.orange} strokeWidth="1.2" />
            <polygon points="240,120 280,100 280,160 240,180" fill={`${C.orange}22`} stroke={C.orange} strokeWidth="1.2" />
            <text x="240" y="145" fill={C.orange} fontSize="11" fontWeight="bold" textAnchor="middle">a²b</text>

            {/* Prisma ab^2 (1 de 3: bloque esquina superior derecha) */}
            <polygon points="200,70 240,50 280,70 240,90" fill={`${C.yellow}44`} stroke={C.yellow} strokeWidth="1.2" />
            <polygon points="200,70 240,90 240,120 200,100" fill={`${C.yellow}66`} stroke={C.yellow} strokeWidth="1.2" />
            <polygon points="240,90 280,70 280,100 240,120" fill={`${C.yellow}33`} stroke={C.yellow} strokeWidth="1.2" />
            <text x="240" y="90" fill={C.yellow} fontSize="10" fontWeight="bold" textAnchor="middle">ab²</text>

            {/* Cubo b^3 (Pequeño bloque en la cima de la esquina) */}
            <polygon points="240,50 260,40 280,50 260,60" fill={`${C.green}66`} stroke={C.green} strokeWidth="1.5" />
            <polygon points="240,50 260,60 260,80 240,70" fill={`${C.green}88`} stroke={C.green} strokeWidth="1.5" />
            <polygon points="260,60 280,50 280,70 260,80" fill={`${C.green}44`} stroke={C.green} strokeWidth="1.5" />
            <text x="260" y="62" fill={C.green} fontSize="9" fontWeight="bold" textAnchor="middle">b³</text>
          </svg>
        </div>

        {/* Leyenda y desglose de los 8 sub-bloques del Cubo */}
        <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, padding: 12, display: "flex", flexDirection: "column", gap: 6, fontSize: 11 }}>
          <div style={{ fontWeight: "bold", color: C.text, marginBottom: 2 }}>
            Descomposición del Volumen Total <InlineFormula latex="V = (a + b)^3" />:
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 12, height: 12, background: C.accent, borderRadius: 3, display: "inline-block" }}></span>
            <span><strong>1 Cubo principal de volumen <InlineFormula latex="a^3" /></strong></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 12, height: 12, background: C.orange, borderRadius: 3, display: "inline-block" }}></span>
            <span><strong>3 Prismas rectangulares de volumen <InlineFormula latex="a^2 b" /></strong></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 12, height: 12, background: C.yellow, borderRadius: 3, display: "inline-block" }}></span>
            <span><strong>3 Prismas rectangulares de volumen <InlineFormula latex="a b^2" /></strong></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 12, height: 12, background: C.green, borderRadius: 3, display: "inline-block" }}></span>
            <span><strong>1 Cubo menor de volumen <InlineFormula latex="b^3" /></strong></span>
          </div>
          <div style={{ marginTop: 4, fontWeight: "bold", color: C.purple }}>
            Suma total de 8 bloques: <InlineFormula latex="(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />.
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: `${C.border}66` }} />

      {/* 3. DIFERENCIA DE CUADRADOS */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.accent, marginBottom: 6 }}>
          3. Diferencia de cuadrados: <InlineFormula latex="a^2 - b^2 = (a + b)(a - b)" />
        </div>
        <div style={{ fontSize: 11, lineHeight: 1.5, color: C.muted }}>
          Al remover un cuadrado de área <InlineFormula latex="b^2" /> de la esquina de un cuadrado de área <InlineFormula latex="a^2" /> y reacomodar la sección sobrante, se obtiene un rectángulo de base <InlineFormula latex="(a + b)" /> y altura <InlineFormula latex="(a - b)" />.
        </div>
      </div>
    </div>
  );
}
