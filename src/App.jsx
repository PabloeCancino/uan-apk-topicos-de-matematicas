import { useState, useEffect, useContext, createContext } from "react";
import { Formula, InlineFormula } from "./components/Formula";
import { useProgreso } from "./hooks/useProgreso";
import { CATEGORIAS, QUIZZES, META, CREDITOS } from "./data/contenido.js";
import escudoUAN from "./ESCUDO-UAN-Azul.png";
import { DARK, ThemeCtx } from "./ThemeCtx";
import { GraficoConjuntos } from "./components/GraficoConjuntos";
import { GraficoProporciones } from "./components/GraficoProporciones";
import { GraficoProductosNotables } from "./components/GraficoProductosNotables";
import { GraficoPascal } from "./components/GraficoPascal";
import { GraficoEcuaciones } from "./components/GraficoEcuaciones";
import { GraficoDesigualdadesCuadraticas } from "./components/GraficoDesigualdadesCuadraticas";
import { GraficoSistemasInecuaciones } from "./components/GraficoSistemasInecuaciones";
import { GraficoRepresentaciones } from "./components/GraficoRepresentaciones";
import { GraficoClasificacion } from "./components/GraficoClasificacion";

// ── PALETA MODO CLARO ─────────────────────────────────────────────────────────
const LIGHT = {
  bg: "#ffffff", surface: "#f6f8fa", surface2: "#eaeef2",
  border: "#d0d7de", accent: "#0969da", accentSoft: "#0969da15",
  green: "#1a7f37", greenSoft: "#dafbe1", orange: "#bc4c00",
  red: "#cf222e", text: "#1f2328", muted: "#656d76",
  purple: "#8250df", yellow: "#9a6700", teal: "#0f6e31",
  nombre: "claro",
};

// ── CONTEXTO DE TAMAÑO DE FUENTE ──────────────────────────────────────────────
const FONT_SCALES = [0.85, 1, 1.2, 1.45, 1.7, 1.85, 2.0];
const FontSizeCtx = createContext({ scaleIdx: 1, aumentar: () => { }, reducir: () => { } });
const useFontSize = () => useContext(FontSizeCtx);

function FontSizeProvider({ children }) {
  const [scaleIdx, setScaleIdx] = useState(() => {
    try {
      const saved = localStorage.getItem("uan_font_scale");
      return saved !== null ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });
  const aumentar = () => setScaleIdx(i => Math.min(i + 1, FONT_SCALES.length - 1));
  const reducir = () => setScaleIdx(i => Math.max(i - 1, 0));
  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", FONT_SCALES[scaleIdx]);
    try { localStorage.setItem("uan_font_scale", scaleIdx); } catch { }
  }, [scaleIdx]);
  return (
    <FontSizeCtx.Provider value={{ scaleIdx, aumentar, reducir }}>
      {children}
    </FontSizeCtx.Provider>
  );
}

// ── CONTEXTO DE TEMA ───────────────────────────────────────────────────────────
const useTheme = () => useContext(ThemeCtx);

function ThemeProvider({ children }) {
  const [modo, setModo] = useState(() => {
    try { return localStorage.getItem("uan_tema") || "oscuro"; } catch { return "oscuro"; }
  });
  const C = modo === "claro" ? LIGHT : DARK;
  const toggleTema = () => setModo(m => {
    const nuevo = m === "oscuro" ? "claro" : "oscuro";
    try { localStorage.setItem("uan_tema", nuevo); } catch { }
    return nuevo;
  });
  useEffect(() => {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  }, [C.bg, C.text]);
  return (
    <ThemeCtx.Provider value={{ C, toggleTema }}>
      {children}
    </ThemeCtx.Provider>
  );
}

// ── COMPONENTE: TABLA ─────────────────────────────────────────────────────────
function TablaBasica({ tabla, color }) {
  const { C } = useTheme();
  if (!tabla || !tabla.filas) return null;

  return (
    <div style={{ marginTop: 16, overflowX: "auto" }}>
      {tabla.titulo && (
        <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 8, paddingLeft: 4 }}>
          {tabla.titulo}
        </div>
      )}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, textAlign: "left" }}>
        <thead>
          <tr>
            {tabla.encabezados.map((enc, i) => (
              <th key={i} style={{
                padding: "8px 12px", borderBottom: `2px solid ${C.border}`,
                color: C.muted, fontWeight: 600, background: C.surface
              }}>
                {enc}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabla.filas.map((fila, i) => {
            const esResaltada = tabla.resaltadas?.includes(i);
            return (
              <tr key={i} style={{ background: esResaltada ? `${color}11` : "transparent" }}>
                {fila.map((celda, j) => (
                  <td key={j} style={{
                    padding: "8px 12px", borderBottom: `1px solid ${C.border}`,
                    color: esResaltada && j === 0 ? color : C.text,
                    fontWeight: esResaltada && j === 0 ? 600 : "normal",
                  }}>
                    {renderTextWithMath(celda)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── DATOS: TODOS LOS TEMAS ────────────────────────────────────────────────────
const TODOS_TEMAS = CATEGORIAS.flatMap(c => c.temas.map(t => ({ ...t, categoria: c.id, catNombre: c.nombre, catColor: c.color })));

// ── COMPONENTE: SIDEBAR ───────────────────────────────────────────────────────
function Sidebar({ catActiva, setCatActiva, temaActivo, setTemaActivo, busqueda, setBusqueda, progreso, abierto, onCerrar }) {
  const { C } = useTheme();
  return (
    <div className={`sidebar-panel${abierto ? " abierto" : ""}`} style={{ width: 260, minWidth: 260, background: C.surface, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0, overflow: "hidden" }}>
      <div style={{ padding: "16px 14px 10px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: C.text, letterSpacing: -0.5 }}>{META.materia.replace(/_/g, " ").toUpperCase()} <span style={{ color: C.accent }}>APK-UAN</span></div>
        <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{META.nombreCompleto}<br />{META.programa}<br />{META.unidad}</div>
      </div>
      <div style={{ padding: "10px 14px 8px" }}>
        <input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="🔍 Buscar tema..."
          style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 10px", color: C.text, fontSize: 12, boxSizing: "border-box" }} />
      </div>
      <div style={{ overflowY: "auto", flex: 1, paddingBottom: 20 }}>
        {CATEGORIAS.map(cat => {
          const temasFilt = busqueda ? cat.temas.filter(t => t.titulo.toLowerCase().includes(busqueda.toLowerCase()) || t.definicion.toLowerCase().includes(busqueda.toLowerCase())) : cat.temas;
          if (busqueda && temasFilt.length === 0) return null;
          const visitadosDeCat = cat.temas.filter(t => progreso.temasVisitados.includes(t.id)).length;
          return (
            <div key={cat.id}>
              <button onClick={() => setCatActiva(catActiva === cat.id ? null : cat.id)}
                style={{ width: "100%", padding: "8px 14px", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13 }}>{cat.icon}</span>
                <span style={{ color: C.text, fontSize: 12, fontWeight: 600, flex: 1, textAlign: "left" }}>{cat.nombre}</span>
                <span style={{ fontSize: 9, color: C.muted, marginLeft: "auto" }}>{visitadosDeCat}/{cat.temas.length}</span>
                <span style={{ color: C.muted, fontSize: 10 }}>{catActiva === cat.id ? "▼" : "▶"}</span>
              </button>
              {(catActiva === cat.id || busqueda) && temasFilt.map(t => {
                const visitado = progreso.temasVisitados.includes(t.id);
                return (
                  <button key={t.id} onClick={() => { setTemaActivo(t.id, cat.id); onCerrar && onCerrar(); }}
                    style={{ width: "100%", padding: "6px 14px 6px 30px", background: temaActivo === t.id ? `${cat.color}22` : "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", borderLeft: temaActivo === t.id ? `2px solid ${cat.color}` : "2px solid transparent" }}>
                    <span style={{ fontSize: 11, color: temaActivo === t.id ? cat.color : C.muted }}>{t.titulo}</span>
                    {visitado && <span style={{ fontSize: 10, color: C.green, marginLeft: "auto" }}>✓</span>}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── UTILIDAD PARA PARSEAR INLINE MATH ─────────────────────────────────────────
function renderTextWithMath(text) {
  if (!text) return null;
  const parts = text.split(/\\\((.*?)\\\)/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) return <InlineFormula key={i} latex={part} />;
    return <span key={i}>{part}</span>;
  });
}

// ── COMPONENTE: VISTA DE TEMA ─────────────────────────────────────────────────
function VistaTema({ tema }) {
  const { C } = useTheme();
  const cat = CATEGORIAS.find(c => c.id === tema.categoria);

  return (
    <div key={tema.id} className="fade-slide-in contenido-vista">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span className="tema-categoria-chip" style={{
          padding: "2px 10px", borderRadius: 20,
          background: `${cat.color}22`, color: cat.color,
          fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5
        }}>
          {cat.icon} {cat.nombre}
        </span>
      </div>

      <h2 className="tema-titulo" style={{ color: C.text, fontWeight: 700, margin: "8px 0 16px", letterSpacing: -0.5 }}>
        {tema.titulo}
      </h2>

      <div style={{ marginBottom: "var(--sp-md)" }}>
        <p className="tema-definicion" style={{ color: C.text, marginTop: 0, lineHeight: 1.7, fontSize: 14, whiteSpace: "pre-wrap" }}>
          {renderTextWithMath(tema.definicion)}
        </p>

        {tema.formula && (
          <div style={{ margin: "20px 0" }}>
            <Formula latex={tema.formula} color={cat.color} />
          </div>
        )}

        {tema.tabla && <TablaBasica tabla={tema.tabla} color={cat.color} />}
        {tema.graficoId === "conjuntos_numericos" && <GraficoConjuntos />}
        {tema.graficoId === "razones_proporciones" && <GraficoProporciones />}
        {tema.graficoId === "productos_notables" && <GraficoProductosNotables />}
        {tema.graficoId === "binomio_newton" && <GraficoPascal />}
        {tema.graficoId === "ecuaciones_lineales_cuadraticas" && <GraficoEcuaciones />}
        {tema.graficoId === "desigualdades_cuadraticas" && <GraficoDesigualdadesCuadraticas />}
        {tema.graficoId === "sistemas_inecuaciones" && <GraficoSistemasInecuaciones />}
        {tema.graficoId === "representacion_funciones" && <GraficoRepresentaciones />}
        {tema.graficoId === "clasificacion_funciones" && <GraficoClasificacion />}
        {tema.graficoId === "logaritmos_plotter" && <GraficoClasificacion onlyExpLog={true} />}
        {tema.graficoId === "trigonometricas_plotter" && <GraficoClasificacion onlyTrig={true} />}
        {tema.graficoId === "hiperbolicas_plotter" && <GraficoClasificacion onlyHyperbolic={true} />}
      </div>

      {tema.notas && (
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "var(--sp-sm) var(--sp-md)" }}>
          <div className="tema-nota-label" style={{ color: C.muted, marginBottom: "var(--sp-xs)", textTransform: "uppercase", letterSpacing: 1.5 }}>
            Observaciones clave
          </div>
          {tema.notas.map((n, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
              <span style={{ color: cat.color, fontSize: "var(--fs-md)", marginTop: 1, minWidth: 16 }}>›</span>
              <span className="tema-nota-texto" style={{ color: C.muted }}>{renderTextWithMath(n)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── COMPONENTE: QUIZ ──────────────────────────────────────────────────────────
function Quiz({ guardarQuiz }) {
  const { C } = useTheme();
  const [fase, setFase] = useState("inicio");
  const [qIdx, setQIdx] = useState(0);
  const [resp, setResp] = useState({});
  const [sel, setSel] = useState(null);
  const [exp, setExp] = useState(false);

  // Quizzes activos
  const [quizzesAleatorios, setQuizzesAleatorios] = useState([]);

  const iniciarQuiz = (catId = null) => {
    let preguntas = [...QUIZZES];
    if (catId) {
      preguntas = preguntas.filter(q => q.nivel === catId);
    }
    const seleccion = preguntas.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuizzesAleatorios(seleccion);
    setQIdx(0);
    setResp({});
    setSel(null);
    setExp(false);
    setFase("quiz");
  };

  const q = quizzesAleatorios[qIdx];
  const aciertos = quizzesAleatorios.filter((qz, i) => resp[i] === qz.correcta).length;

  if (fase === "inicio") return (
    <div className="fade-slide-in" style={{ maxWidth: 820, padding: "28px 32px" }}>
      <h2 style={{ color: C.text, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>🎯 Evaluación</h2>
      <p style={{ color: C.muted, fontSize: 13, marginBottom: 24 }}>Puedes realizar una evaluación general de todos los temas o elegir una unidad específica.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginBottom: 28 }}>
        {CATEGORIAS.map(cat => (
          <div
            key={cat.id}
            onClick={() => iniciarQuiz(cat.id)}
            style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 10px", textAlign: "center", cursor: "pointer", transition: "transform 0.2s, borderColor 0.2s" }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = C.accent; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = C.border; }}
          >
            <div style={{ fontSize: 11, color: C.muted }}>{QUIZZES.filter(q => q.nivel === cat.id).length} preguntas disp.</div>
            <div style={{ fontSize: 12, color: C.text, fontWeight: 600, marginTop: 4 }}>{cat.icon} {cat.nombre}</div>
          </div>
        ))}
      </div>
      <button onClick={() => iniciarQuiz()} style={{ padding: "12px 32px", borderRadius: 10, background: C.accent, border: "none", color: C.bg, fontSize: 14, fontWeight: "bold", cursor: "pointer", width: "100%" }}>
        Comenzar evaluación general
      </button>
    </div>
  );

  if (fase === "resultado") return (
    <div className="fade-slide-in" style={{ maxWidth: 820, padding: "28px 32px" }}>
      <h2 style={{ color: C.text, marginBottom: 16 }}>Resultado: {aciertos}/{quizzesAleatorios.length}</h2>
      <div style={{ width: "100%", height: 8, background: C.border, borderRadius: 4, marginBottom: 24 }}>
        <div style={{ width: `${(aciertos / quizzesAleatorios.length) * 100}%`, height: "100%", background: aciertos >= quizzesAleatorios.length * 0.7 ? C.green : C.orange, borderRadius: 4, transition: "width 1s" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {quizzesAleatorios.map((quiz, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", borderRadius: 8, background: C.surface, border: `1px solid ${resp[i] === quiz.correcta ? C.greenSoft : C.border}` }}>
            <span style={{ color: resp[i] === quiz.correcta ? C.green : C.red, fontSize: 16, minWidth: 20 }}>{resp[i] === quiz.correcta ? "✓" : "✗"}</span>
            <div>
              <div style={{ color: C.text, fontSize: 12, marginBottom: 4 }}>{renderTextWithMath(quiz.pregunta)}</div>
              {resp[i] !== quiz.correcta && <div style={{ color: C.muted, fontSize: 11 }}>Correcto: {renderTextWithMath(quiz.opciones[quiz.correcta])}</div>}
            </div>
            <span style={{ marginLeft: "auto", fontSize: 10, color: C.muted, padding: "2px 8px", borderRadius: 10, background: `${C.border}44` }}>{quiz.nivel}</span>
          </div>
        ))}
      </div>
      <button onClick={() => {
        setFase("inicio");
        setQIdx(0);
        setResp({});
        setSel(null);
        setExp(false);
        setQuizzesAleatorios([...QUIZZES].sort(() => 0.5 - Math.random()).slice(0, 10));
      }}
        style={{ padding: "10px 28px", borderRadius: 10, border: `1px solid ${C.accent}`, background: "transparent", color: C.accent, fontSize: 13, cursor: "pointer" }}>
        Repetir evaluación
      </button>
    </div>
  );

  return (
    <div className="fade-slide-in" style={{ maxWidth: 640, padding: "28px 32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ color: C.muted, fontSize: 12 }}>Pregunta {qIdx + 1} de {quizzesAleatorios.length}</span>
        <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 20, background: `${C.orange}22`, color: C.orange }}>{q.nivel}</span>
      </div>
      <div style={{ height: 3, background: C.border, borderRadius: 2, marginBottom: 20 }}>
        <div style={{ width: `${((qIdx + 1) / quizzesAleatorios.length) * 100}%`, height: "100%", background: C.accent, borderRadius: 2, transition: "width .4s" }} />
      </div>
      <p style={{ color: C.text, fontSize: 14, lineHeight: 1.75, marginBottom: 20, fontWeight: 500 }}>{renderTextWithMath(q.pregunta)}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {q.opciones.map((op, i) => {
          const esCor = i === q.correcta, esSel = sel === i, show = exp;
          return (
            <button key={i} onClick={() => !show && setSel(i)}
              style={{
                padding: "12px 16px", borderRadius: 10, border: "1px solid", textAlign: "left",
                borderColor: show && esCor ? C.green : show && esSel && !esCor ? C.red : esSel ? C.accent : C.border,
                background: show && esCor ? `${C.green}22` : show && esSel && !esCor ? `${C.red}22` : esSel ? C.accentSoft : "transparent",
                color: C.text, fontSize: 13, cursor: show ? "default" : "pointer", transition: "all .2s"
              }}>
              <span style={{ fontFamily: "monospace", color: C.muted, marginRight: 10 }}>{String.fromCharCode(65 + i)}.</span>{renderTextWithMath(op)}
            </button>
          );
        })}
      </div>
      {sel !== null && !exp && <button onClick={() => setExp(true)} style={{ padding: "8px 18px", borderRadius: 8, border: `1px solid ${C.border}`, background: "transparent", color: C.muted, fontSize: 12, cursor: "pointer", marginRight: 10 }}>Ver explicación</button>}
      {exp && <div style={{ padding: "12px 16px", borderRadius: 10, background: `${C.yellow}11`, border: `1px solid ${C.yellow}33`, color: C.muted, fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}><strong style={{ color: C.yellow }}>Explicación: </strong>{renderTextWithMath(q.explicacion)}</div>}
      <button onClick={() => {
        setResp({ ...resp, [qIdx]: sel });
        if (qIdx < quizzesAleatorios.length - 1) {
          setQIdx(qIdx + 1); setSel(null); setExp(false);
        } else {
          guardarQuiz(aciertos + (sel === q.correcta ? 1 : 0), quizzesAleatorios.length);
          setFase("resultado");
        }
      }}
        disabled={sel === null}
        style={{ width: "100%", padding: "12px", borderRadius: 10, background: sel !== null ? C.accent : C.border, border: "none", color: sel !== null ? C.bg : C.muted, fontSize: 14, fontWeight: "bold", cursor: sel !== null ? "pointer" : "default", marginTop: 6 }}>
        {qIdx < quizzesAleatorios.length - 1 ? "Siguiente →" : "Ver resultado"}
      </button>
    </div>
  );
}

// ── COMPONENTE: CRÉDITOS ────────────────────────────────────────────────────────
function Creditos() {
  const { C } = useTheme();

  return (
    <div className="fade-slide-in contenido-vista" style={{ maxWidth: 680 }}>
      {/* Logo institucional */}
      <div style={{
        textAlign: "center", marginBottom: "var(--sp-lg)",
        padding: "var(--sp-lg) var(--sp-md)",
        background: `linear-gradient(135deg, ${C.surface} 0%, ${C.bg} 100%)`,
        border: `1px solid ${C.border}`, borderRadius: 20,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
          <img
            src={escudoUAN}
            alt="Escudo Universidad Autónoma de Nayarit"
            style={{ width: "clamp(80px, 18vw, 120px)", height: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))" }}
          />
        </div>
        <div style={{ fontSize: "var(--fs-xs)", color: C.accent, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          Universidad Autónoma de Nayarit
        </div>
        <h2 style={{ fontSize: "var(--fs-lg)", fontWeight: 700, color: C.text, margin: "0 0 6px", letterSpacing: -0.5 }}>
          {META.nombreCompleto}
        </h2>
        <div style={{ fontSize: "var(--fs-sm)", color: C.muted, lineHeight: 1.6 }}>
          {META.unidad}<br />
          {META.programa}
        </div>
      </div>

      {/* Tarjetas de colaboradores dinámicas */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-sm)" }}>
        {CREDITOS.map((grupo, gi) => (
          <div key={gi} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "var(--sp-xs) var(--sp-md)", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10, background: `${C.accent}0d` }}>
              <span style={{ fontSize: "var(--fs-md)" }}>{grupo.icono}</span>
              <span style={{ fontSize: "var(--fs-xs)", fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 1.5 }}>
                {grupo.rol}
              </span>
            </div>
            {grupo.personas.map((p, pi) => (
              <div key={pi} style={{ padding: "var(--sp-sm) var(--sp-md)", borderBottom: pi < grupo.personas.length - 1 ? `1px solid ${C.border}44` : "none", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg, ${C.accent}44, ${C.accent}11)`, border: `1px solid ${C.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: C.accent }}>
                  {p.nombre.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: "var(--fs-sm)", fontWeight: 600, color: C.text }}>{p.nombre}</div>
                  <div style={{ fontSize: "var(--fs-xs)", color: C.muted, marginTop: 2 }}>{p.detalle}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pie de créditos */}
      <div style={{ textAlign: "center", marginTop: "var(--sp-lg)", padding: "var(--sp-md)", border: `1px solid ${C.border}44`, borderRadius: 12 }}>
        <div style={{ fontSize: "var(--fs-xs)", color: C.muted, lineHeight: 2 }}>
          <span style={{ color: C.accent, fontWeight: 600 }}>Tepic, Nayarit</span>
          {` — ${META.anio}`}<br />
          Versión {META.version} · {META.norma}<br />
          <span style={{ fontSize: "var(--fs-xs)", opacity: 0.5 }}>
            Recurso educativo de uso académico · UAN © {META.anio}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── APP PRINCIPAL ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <FontSizeProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </FontSizeProvider>
  );
}

function AppInner() {
  const { C, toggleTema } = useTheme();
  const { scaleIdx, aumentar, reducir } = useFontSize();
  const { progreso, marcarVisitado, guardarQuiz } = useProgreso();

  const [catActiva, setCatActiva] = useState(progreso.ultimaCategoria || CATEGORIAS[0]?.id);
  const [temaActivo, setTemaActivo] = useState(progreso.ultimoTema || CATEGORIAS[0]?.temas[0]?.id);
  const [vista, setVista] = useState("teoria");
  const [busqueda, setBusqueda] = useState("");
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const tema = TODOS_TEMAS.find(t => t.id === temaActivo);

  const handleSetTema = (id, catId) => {
    setTemaActivo(id);
    setVista("teoria");
    marcarVisitado(id, catId);
    setSidebarAbierto(false);
  };

  useEffect(() => {
    if (tema) marcarVisitado(tema.id, tema.categoria);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BtnTema = () => (
    <button onClick={toggleTema} title="Cambiar tema"
      style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 16, width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {C.nombre === "oscuro" ? "🌙" : "☀️"}
    </button>
  );

  const BtnFuente = () => (
    <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
      <button onClick={reducir} disabled={scaleIdx === 0} title="Reducir letra"
        style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: scaleIdx === 0 ? C.border : C.muted, fontSize: 12, fontWeight: 700, width: 32, height: 36, cursor: scaleIdx === 0 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>A-</button>
      <button onClick={aumentar} disabled={scaleIdx === FONT_SCALES.length - 1} title="Aumentar letra"
        style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: scaleIdx === FONT_SCALES.length - 1 ? C.border : C.muted, fontSize: 14, fontWeight: 700, width: 32, height: 36, cursor: scaleIdx === FONT_SCALES.length - 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>A+</button>
    </div>
  );

  const navItems = [["teoria", "🎓 Teoría"], ["quiz", "✍️ Evaluación"], ["creditos", "©️ Créditos"]];

  return (
    <div style={{ display: "flex", height: "100vh", background: C.bg, fontFamily: "'IBM Plex Sans','Helvetica Neue',sans-serif", color: C.text, position: "relative", transition: "background .3s, color .3s" }}>
      <div className="sidebar-overlay" onClick={() => setSidebarAbierto(false)}
        style={{ display: "none", position: "fixed", inset: 0, background: "#00000077", zIndex: 199, opacity: sidebarAbierto ? 1 : 0, pointerEvents: sidebarAbierto ? "auto" : "none", transition: "opacity 0.28s" }} />

      <Sidebar catActiva={catActiva} setCatActiva={setCatActiva} temaActivo={temaActivo}
        setTemaActivo={handleSetTema} busqueda={busqueda} setBusqueda={setBusqueda}
        progreso={progreso} abierto={sidebarAbierto} onCerrar={() => setSidebarAbierto(false)} />

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="topbar-desktop" style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 20px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          {navItems.map(([k, v]) => (
            <button key={k} onClick={() => setVista(k)}
              style={{ padding: "6px 16px", borderRadius: 8, border: `1px solid ${vista === k ? C.accent : C.border}`, background: vista === k ? C.accentSoft : "transparent", color: vista === k ? C.accent : C.muted, fontSize: 12, cursor: "pointer", flex: 1, minWidth: 90 }}>
              {v}
            </button>
          ))}
          <BtnFuente /><BtnTema />
        </div>

        <div className="topbar-mobile" style={{ display: "none", background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 14px", alignItems: "center", gap: 8 }}>
          <button onClick={() => setSidebarAbierto(v => !v)}
            style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 18, width: 38, height: 38, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {sidebarAbierto ? "✕" : "☰"}
          </button>
          <span style={{ color: C.text, fontSize: 13, fontWeight: 600, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {tema ? tema.titulo : META.nombreCompleto}
          </span>
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            {[["teoria", "🎓"], ["quiz", "✍️"], ["creditos", "©️"]].map(([k, icon]) => (
              <button key={k} onClick={() => setVista(k)}
                style={{ padding: "5px 8px", borderRadius: 8, border: `1px solid ${vista === k ? C.accent : C.border}`, background: vista === k ? C.accentSoft : "transparent", color: vista === k ? C.accent : C.muted, fontSize: 14, cursor: "pointer" }}>
                {icon}
              </button>
            ))}
            <BtnFuente /><BtnTema />
          </div>
        </div>

        <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          {vista === "teoria" && tema && <VistaTema tema={tema} />}
          {vista === "teoria" && !tema && (
            <div style={{ padding: "40px 32px" }}>
              <h2 style={{ color: C.text, marginBottom: 8 }}>Bienvenido</h2>
              <p style={{ color: C.muted }}>Selecciona un tema en el panel lateral.</p>
            </div>
          )}
          {vista === "quiz" && <Quiz guardarQuiz={guardarQuiz} />}
          {vista === "creditos" && <Creditos />}
        </div>
      </div>
    </div>
  );
}
