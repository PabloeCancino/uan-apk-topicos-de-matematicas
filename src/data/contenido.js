// NTE-UAN-APK-001 v1.3 — Tópicos de Matemáticas
// Dr. Pablo Eduardo Cancino Marentes — UAN 2026

export const META = {
  materia: "topicos_matematicas",
  nombreCompleto: "Tópicos de Matemáticas UAN",
  version: "1.0.0",
  autor: "Dr. Pablo Eduardo Cancino Marentes",
  anio: "2026",
  descripcion: "Aplicación educativa de Tópicos de Matemáticas — Universidad Autónoma de Nayarit",
  unidad: "Unidad Académica de Ciencias Básicas e Ingenierías",
  programa: "Licenciatura en Matemáticas",
  norma: "NTE-UAN-APK-001 v1.3",
};

export const CREDITOS = [
  {
    rol: "Docentes Investigadores",
    icono: "🎓",
    personas: [
      { nombre: "Dra. Dalia Imelda Castillo Márquez", detail: "Investigadora responsable / Diseño Teórico" },
      { nombre: "Dr. Pablo Eduardo Cancino Marentes", detail: "Investigador colaborador / Desarrollo APK" },
    ],
  },
  {
    rol: "Colaboradores en el Desarrollo",
    icono: "💻",
    personas: [
      { nombre: "Por definir", detail: "Estudiantes — Licenciatura en Matemáticas" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// CATEGORÍAS Y TEMAS
// ════════════════════════════════════════════════════════════════════════════
export const CATEGORIAS = [
  {
    id: "aritmetica",
    nombre: "Aritmética elemental",
    icon: "🔢",
    color: "#58a6ff",
    temas: [
      {
        id: "conjuntos_numericos",
        titulo: "Los conjuntos numéricos",
        definicion: "Antes de operar con números es indispensable conocer los conjuntos a los que pertenecen. Los números complejos \\(\\C\\) se organizan en una jerarquía y se dividen en reales e imaginarios. A su vez, los reales \\(\\R\\) se dividen en racionales e irracionales. Los racionales contienen una cadena de conjuntos anidados: los Naturales \\(\\N\\) están contenidos en los Enteros \\(\\Z\\), y éstos en los Racionales \\(\\Q\\).\n\nRelación lineal de contención:\n\\(\\N \\subset \\Z \\subset \\Q \\subset \\R \\subset \\C\\)\n\nParticiones fundamentales:\n• Reales: \\(\\R = \\Q \\cup \\I\\) (donde \\(\\I\\) son los Irracionales)\n• Complejos: \\(\\C = \\R \\cup \\i\\) (donde \\(\\i\\) son los imaginarios)",
        graficoId: "conjuntos_numericos",
        notas: [
          "Los números naturales (\\(\\N\\): \\(1\\), \\(2\\), \\(3\\), \\(\\dots\\)) son enteros positivos que sirven para contar.",
          "Los números enteros (\\(\\Z\\): \\(\\dots, -2, -1, 0, 1, 2, \\dots\\)) incluyen a los naturales, sus negativos y el cero.",
          "Los números racionales (\\(\\Q\\): \\(1/2\\), \\(3/4\\), \\(-7/5\\), \\(0.33\\)) son fracciones de enteros con denominador no nulo.",
          "Los números irracionales (\\(\\I\\): \\(\\sqrt{2}\\), \\(\\pi\\), \\(e\\), \\(\\sqrt{3}\\), \\(\\varphi\\)) no se pueden escribir como una fracción de enteros.",
          "Los números imaginarios (\\(\\i\\): \\(i\\), \\(2+3i\\), \\(-i\\), \\(\\sqrt{-5}\\), \\(3i\\)) contienen la unidad imaginaria \\(i = \\sqrt{-1}\\).",
          "Más allá de los complejos, existen sistemas numéricos de mayor dimensión conocidos como números hipercomplejos (como los cuaterniones \\(\\mathbb{H}\\), octoniones \\(\\mathbb{O}\\), etc.)."
        ]
      },
      {
        id: "operaciones_basicas",
        titulo: "Operaciones Elementales",
        definicion: "Sean \\(a, b \\in \\R\\). Las cuatro operaciones aritméticas fundamentales son la suma, diferencia, producto y cociente.\n\nEstas operaciones cumplen con propiedades algebraicas estructuradas que garantizan la consistencia del sistema de los números reales.",
        formula: "a \\cdot (b + c) = a \\cdot b + a \\cdot c",
        tabla: {
          titulo: "Propiedades de los Números Reales",
          encabezados: ["Propiedad", "Suma", "Multiplicación"],
          filas: [
            ["Conmutativa", "\\(a + b = b + a\\)", "\\(a \\cdot b = b \\cdot a\\)"],
            ["Asociativa", "\\((a + b) + c = a + (b + c)\\)", "\\((a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)\\)"],
            ["Distributiva", "\\(a \\cdot (b + c) = a \\cdot b + a \\cdot c\\)", "—"],
            ["Neutros", "\\(a + 0 = a\\) (Neutro aditivo)", "\\(a \\cdot 1 = a\\) (Neutro multiplicativo)"],
            ["Inversos", "\\(a + (-a) = 0\\) (Opuesto aditivo)", "\\(a \\cdot \\frac{1}{a} = 1\\) (\\(a \\neq 0\\), Recíproco)"],
          ],
          resaltadas: [],
          colorAuto: false
        },
        notas: [
          "La jerarquía de operaciones determina el orden de evaluación: (1) Paréntesis y signos de agrupación, (2) Potencias y raíces, (3) Multiplicación y división (izquierda a derecha), (4) Adición y sustracción (izquierda a derecha).",
          "Ejemplo clásico de jerarquía: \\(8 + 3 \\times 2 - (4 + 1) = 8 + 6 - 5 = 9\\).",
          "La división entre cero no está definida en los números reales."
        ]
      },
      {
        id: "valor_absoluto",
        titulo: "Valor absoluto",
        definicion: "El valor absoluto de un número real \\(a\\), denotado por \\(|a|\\), se define por casos. Geométricamente, representa la distancia no negativa de \\(a\\) al origen en la recta real.",
        formula: "|a| = \\begin{cases} a & \\text{si } a \\geq 0 \\\\ -a & \\text{si } a < 0 \\end{cases}",
        notas: [
          "Propiedades clave: \\(|a| \\geq 0\\); \\(|a| = 0 \\iff a = 0\\); \\(|a \\cdot b| = |a| \\cdot |b|\\); \\(|\\frac{a}{b}| = \\frac{|a|}{|b|}\\) (\\(b \\neq 0\\)); y \\(|-a| = |a|\\).",
          "Desigualdad triangular: establece que \\(|a + b| \\leq |a| + |b|\\) para todos los números reales \\(a\\) y \\(b\\).",
          "La distancia entre dos puntos \\(a\\) y \\(b\\) en la recta real está dada por la expresión \\(|a - b|\\)."
        ]
      },
      {
        id: "exponentes",
        titulo: "Exponentes",
        definicion: "Para una base \\(a \\neq 0\\) y un exponente entero \\(n\\), la potencia representa la multiplicación repetida. Esto se extiende a exponentes negativos (recíprocos) y racionales (exponente fraccionario), donde el denominador actúa como el índice de la raíz.",
        formula: "a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m",
        tabla: {
          titulo: "Leyes de los Exponentes",
          encabezados: ["Ley", "Fórmula", "Ejemplo"],
          filas: [
            ["Producto", "\\(a^m \\cdot a^n = a^{m+n}\\)", "\\(2^3 \\cdot 2^4 = 2^7 = 128\\)"],
            ["Cociente", "\\(\\frac{a^m}{a^n} = a^{m-n}\\)", "\\(\\frac{3^5}{3^2} = 3^3 = 27\\)"],
            ["Potencia de potencia", "\\((a^m)^n = a^{m \\cdot n}\\)", "\\((5^2)^3 = 5^6\\)"],
            ["Potencia de producto", "\\((a \\cdot b)^n = a^n b^n\\)", "\\((2x)^3 = 8x^3\\)"],
            ["Potencia de cociente", "\\((\\frac{a}{b})^n = \\frac{a^n}{b^n}\\)", "\\((\\frac{x}{3})^2 = \\frac{x^2}{9}\\)"],
            ["Exponente negativo", "\\(a^{-n} = \\frac{1}{a^n}\\)", "\\(5^{-2} = \\frac{1}{25}\\)"],
          ],
          resaltadas: [],
          colorAuto: false
        }
      },
      {
        id: "radicales",
        titulo: "Radicales y Racionalización",
        definicion: "La raíz \\(n\\)-ésima de \\(a\\) se denota como \\(\\sqrt[n]{a} = a^{1/n}\\) y equivale al número \\(b \\geq 0\\) tal que \\(b^n = a\\). Un radical está simplificado si el radicando no tiene factores con potencias de orden mayor o igual a \\(n\\). La racionalización elimina radicales del denominador multiplicando por una expresión adecuada (como el conjugado binomial).",
        formula: "\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{a \\cdot b}",
        notas: [
          "Propiedades de radicales: \\(\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}\\) y \\(\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m \\cdot n]{a}\\).",
          "Simplificación: \\(\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}\\).",
          "Conjugado binomial: multiplicando un binomio por su conjugado se obtiene una diferencia de cuadrados: \\((\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a - b\\)."
        ]
      },
      {
        id: "razones_proporciones",
        titulo: "Razones y proporciones",
        graficoId: "razones_proporciones",
        definicion: "La razón de \\(a\\) a \\(b\\) (\\(b \\neq 0\\)) es \\(a/b\\). Cuatro números forman una proporción si la primera razón es igual a la segunda. En proporción directa, \\(y=kx\\) (con \\(k>0\\)). En proporción inversa, \\(y=k/x\\) (con \\(k>0\\)).",
        formula: "\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c",
        tabla: {
          titulo: "Propiedades de las Proporciones",
          encabezados: ["Propiedad", "Fórmula", "Ejemplo práctico"],
          filas: [
            ["Productos cruzados", "\\(\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc\\)", "\\(\\frac{x}{12} = \\frac{5}{8} \\implies 8x = 60\\)"],
            ["Alternando", "\\(\\frac{a}{c} = \\frac{b}{d}\\)", "\\(\\frac{x}{5} = \\frac{12}{8}\\)"],
            ["Componendo", "\\(\\frac{a+b}{b} = \\frac{c+d}{d}\\)", "\\(\\frac{x+12}{12} = \\frac{13}{8}\\)"],
            ["Dividendo", "\\(\\frac{a-b}{b} = \\frac{c-d}{d}\\)", "\\(\\frac{x-12}{12} = \\frac{-3}{8}\\)"],
          ],
          resaltadas: [0],
          colorAuto: false
        },
        notas: [
          "Proporción directa: El costo de gasolina es directamente proporcional a los litros comprados. Si 10 L cuestan \\(\\$230\\), entonces \\(k=23\\) y 35 L cuestan \\(C = 23 \\cdot 35 = \\$805\\).",
          "Proporción inversa: Un automóvil tarda 3 h a 80 km/h (constante de distancia \\(k=240\\)); si aumenta su velocidad a 120 km/h, tardará \\(240/120 = 2\\) h.",
          "Regla de tres compuesta: 6 obreros pintan un muro en 4 días trabajando 8 h/día. Si se tienen 4 obreros trabajando 6 h/día, tardarán \\(d = \\frac{6 \\cdot 4 \\cdot 8}{4 \\cdot 6} = 8\\) días.",
          "Problema de mezcla de ácidos: mezclar una solución al 30% con otra al 60% para obtener 10 L al 45% requiere plantear \\(0.30x + 0.60(10-x) = 0.45(10)\\), de donde resulta \\(x = 5\\) L de cada una.",
          "Problema de escalas en planos: con una escala de \\(1:150\\), si una habitación mide 3.2 cm en el plano, su longitud real es \\(3.2 \\times 150 = 480\\) cm (4.8 m)."
        ]
      },
      {
        id: "ejercicios_propuestos_aritmetica",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Aritmética Elemental en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Aritmética Elemental}",
        notas: [
          "1. Evalúa: \\(5+3\\times(8-2)\\div9 = 7\\).",
          "2. Simplifica: \\(2[4+3(5-2)]-10 = 16\\).",
          "3. Calcula: \\(\\frac{4^2-2\\times3}{(3+1)^2-5} = \\frac{10}{11}\\).",
          "4. Evalúa: \\(|-9|-|4-7|+|0| = 6\\).",
          "5. Resuelve: \\(|3x+1|=10 \\implies 3x+1=10 \\lor 3x+1=-10 \\implies x=3 \\lor x=-11/3\\).",
          "6. Simplifica: \\(x^5\\cdot x^{-3}\\cdot x^0 = x^2\\).",
          "7. Calcula: \\(\\left(\\frac{2^3\\cdot2^{-1}}{2^4}\\right)^2 = \\frac{1}{16}\\).",
          "8. Radical simple: \\(a^{3/4} = \\sqrt[4]{a^3}\\).",
          "9. Simplifica radicales: \\(\\frac{a^{2/3}\\cdot a^{1/2}}{a^{1/6}} = a^{2/3 + 1/2 - 1/6} = a^1 = a\\).",
          "10. Simplifica radical numérico: \\(\\sqrt{200} = 10\\sqrt{2}\\).",
          "11. Opera radicales: \\(2\\sqrt8+3\\sqrt{18}-\\sqrt{50} = 4\\sqrt{2}+9\\sqrt{2}-5\\sqrt{2} = 8\\sqrt{2}\\).",
          "12. Racionaliza: \\(\\frac{6}{\\sqrt7-1} = \\sqrt{7}+1\\).",
          "13. Racionaliza índice 3: \\(\\frac{3}{\\sqrt[3]9} = \\sqrt[3]{3}\\).",
          "14. Resuelve proporción: \\(\\frac{x+1}{5}=\\frac{x-2}{3} \\implies 3x+3=5x-10 \\implies x=6.5\\).",
          "15. Triángulo en razón 3:4:5 y perímetro 72 cm: Los lados miden 18 cm, 24 cm y 30 cm.",
          "16. Regla de tres inversa: Si 4 obreros tardan 15 días, 6 obreros tardarán \\(4 \\cdot 15 / 6 = 10\\) días.",
          "17. Proporción directa: Si 3 kg cuestan \\(\\$120\\), entonces 7.5 kg cuestan \\(\\frac{120 \\cdot 7.5}{3} = \\$300\\)."
        ]
      }
    ]
  },
  {
    id: "algebra",
    nombre: "Elementos de Álgebra",
    icon: "🧮",
    color: "#3fb950",
    temas: [
      {
        id: "lenguaje_algebraico",
        titulo: "Lenguaje y Operaciones",
        definicion: "El lenguaje algebraico introduce variables (letras) para representar números desconocidos o generalizar relaciones. Una expresión algebraica combina variables, coeficientes y operaciones. Sumar polinomios consiste en agrupar términos semejantes, mientras que multiplicarlos requiere aplicar la propiedad distributiva término a término.",
        formula: "3x^2 - 5xy + 7",
        notas: [
          "Elementos de un término: signo, coeficiente, variable y exponente.",
          "Ejemplo de suma: \\((2x^3 - 3x + 4) + (-x^3 + 5x - 1) = x^3 + 2x + 3\\).",
          "Ejemplo de multiplicación: \\((2x - 1)(x^2 + 3x - 2) = 2x^3 + 5x^2 - 7x + 2\\)."
        ]
      },
      {
        id: "productos_notables",
        titulo: "Productos Notables",
        graficoId: "productos_notables",
        definicion: "Son multiplicaciones algebraicas de polinomios cuyo resultado se puede escribir por simple inspección, sin necesidad de efectuar la multiplicación distributiva término por término. Tienen demostraciones geométricas basadas en la subdivisión de áreas.",
        formula: "(a \\pm b)^2 = a^2 \\pm 2ab + b^2",
        tabla: {
          titulo: "Productos notables fundamentales",
          encabezados: ["Nombre", "Fórmula de desarrollo"],
          filas: [
            ["Binomio al cuadrado (suma)", "\\((a + b)^2 = a^2 + 2ab + b^2\\)"],
            ["Binomio al cuadrado (resta)", "\\((a - b)^2 = a^2 - 2ab + b^2\\)"],
            ["Binomios conjugados", "\\((a + b)(a - b) = a^2 - b^2\\)"],
            ["Binomio al cubo (suma)", "\\((a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\\)"],
            ["Binomio al cubo (resta)", "\\((a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3\\)"],
          ],
          resaltadas: [],
          colorAuto: false
        },
        notas: [
          "Ejemplo de Cuadrado de binomio: \\((3x - 2)^2 = 9x^2 - 12x + 4\\).",
          "Ejemplo de Diferencia de cuadrados: \\((5x + 3)(5x - 3) = 25x^2 - 9\\).",
          "Ejemplo de Cubo de binomio: \\((x + 2)^3 = x^3 + 6x^2 + 12x + 8\\).",
          "Problema mental: Calcular \\(98^2 = (100 - 2)^2 = 10000 - 400 + 4 = 9604\\).",
          "Problema mental: Calcular \\(61 \\times 59 = (60 + 1)(60 - 1) = 3600 - 1 = 3599\\).",
          "Problema de terreno cuadrado: El área de un terreno de lado \\(x+5\\) es \\((x+5)^2 = x^2 + 10x + 25\\) m\\(^2\\); si \\(x=12\\) m, el área es \\(144 + 120 + 25 = 289\\) m\\(^2\\).",
          "Problema de tallado de cubo: El volumen restante de un cubo de arista \\(a-3\\) cm es \\((a-3)^3 = a^3 - 9a^2 + 27a - 27\\) cm\\(^3\\); si \\(a=10\\), el volumen es \\(1000 - 900 + 270 - 27 = 343\\) cm\\(^3\\).",
          "Problema de simplificación algebraica: \\(\\frac{(x+3)^2 - (x-3)^2}{4x} = \\frac{[(x+3)+(x-3)][(x+3)-(x-3)]}{4x} = \\frac{2x \\cdot 6}{4x} = \\frac{12x}{4x} = 3\\)."
        ]
      },
      {
        id: "binomio_newton",
        titulo: "Triángulo de Pascal y Binomio de Newton",
        graficoId: "binomio_newton",
        definicion: "El Teorema del Binomio de Newton describe el desarrollo algebraico de la potencia de un binomio. Para exponentes enteros positivos, la expansión es finita y sus coeficientes coinciden con las filas del Triángulo de Pascal.",
        formula: "(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k, \\quad \\text{donde } \\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
        notas: [
          "Ejemplo (Desarrollo del Binomio): \\((a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4\\).",
          "Ejemplo (Término general): Para encontrar el 4.° término de \\((2x-3)^6\\), tomamos \\(k=3\\): \\(\\binom{6}{3}(2x)^3(-3)^3 = 20 \\cdot 8x^3 \\cdot (-27) = -4320x^3\\).",
          "Ejemplo (Expansión con el Triángulo de Pascal): Expandir \\((x+2)^5\\) usando el Triángulo de Pascal (coeficientes \\(1,5,10,10,5,1\\)) da: \\(x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32\\).",
          "Nota de Serie Binomial: Para exponente negativo o no entero \\(r \\in \\R\\), Newton generalizó la fórmula como una serie infinita: \\((1+x)^r = \\sum_{k=0}^{\\infty} \\binom{r}{k} x^k\\) con \\(\\binom{r}{k} = \\frac{r(r-1)\\dots(r-k+1)}{k!}\\), convergente si \\(|x| < 1\\).",
          "Ejemplo (Serie binomial para exponente negativo): \\((1+x)^{-1} = 1 - x + x^2 - x^3 + \\dots\\) para \\(|x| < 1\\) (coincide con la serie geométrica).",
          "Ejemplo (Serie binomial con exponente -2): \\((1-x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \\dots\\)."
        ]
      },
      {
        id: "factorizacion",
        titulo: "Factorización",
        definicion: "La factorización es el proceso inverso al desarrollo de productos notables; consiste en reescribir un polinomio como el producto de polinomios más simples (factores) de menor grado.",
        formula: "a^2 - b^2 = (a + b)(a - b)",
        tabla: {
          titulo: "Casos de Factorización Comunes",
          encabezados: ["Caso", "Expresión desarrollada", "Factorización"],
          filas: [
            ["Factor común", "\\(ab + ac\\)", "\\(a(b + c)\\)"],
            ["Diferencia de cuadrados", "\\(a^2 - b^2\\)", "\\((a + b)(a - b)\\)"],
            ["Trinomio cuadrado perfecto", "\\(a^2 \\pm 2ab + b^2\\)", "\\((a \\pm b)^2\\)"],
            ["Trinomio de la forma \\(x^2+bx+c\\)", "\\(x^2 + (p+q)x + pq\\)", "\\((x + p)(x + q)\\)"],
            ["Suma y diferencia de cubos", "\\(a^3 \\pm b^3\\)", "\\((a \\pm b)(a^2 \\mp ab + b^2)\\)"],
            ["Agrupación de términos", "\\(ac + ad + bc + bd\\)", "\\((a + b)(c + d)\\)"],
          ],
          resaltadas: [],
          colorAuto: false
        },
        notas: [
          "Ejemplo (Factor común): \\(6x^3 - 9x^2 + 3x = 3x(2x^2 - 3x + 1) = 3x(2x - 1)(x - 1)\\).",
          "Ejemplo (Diferencia de cuadrados): \\(16x^2 - 25 = (4x + 5)(4x - 5)\\).",
          "Ejemplo (Trinomio general): \\(x^2 - 7x + 12 = (x - 3)(x - 4)\\).",
          "Ejemplo (Diferencia de cubos): \\(8x^3 - 27 = (2x - 3)(4x^2 + 6x + 9)\\)."
        ]
      },
      {
        id: "fracciones_algebraicas_complejas",
        titulo: "Fracciones Algebraicas",
        definicion: "Una fracción algebraica es el cociente de dos polinomios. Se simplifica factorizando numerador y denominador y cancelando sus factores comunes. Las operaciones básicas como la adición y la sustracción de fracciones algebraicas requieren la determinación previa del mínimo común denominador.",
        formula: "\\frac{P(x)}{Q(x)} \\quad \\text{con } Q(x) \\neq 0",
        notas: [
          "Ejemplo (Simplificación): \\(\\frac{x^2 - 4}{x^2 - x - 2} = \\frac{(x+2)(x-2)}{(x-2)(x+1)} = \\frac{x+2}{x+1}\\) (para \\(x \\neq 2\\)).",
          "Ejemplo (Suma de fracciones): \\(\\frac{2}{x-1} + \\frac{3}{x+2} = \\frac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \\frac{5x+1}{(x-1)(x+2)}\\)."
        ]
      },
      {
        id: "ecuaciones_lineales_cuadraticas",
        titulo: "Ecuaciones Lineales y Cuadráticas",
        graficoId: "ecuaciones_lineales_cuadraticas",
        definicion: "Una ecuación es una igualdad condicionada entre expresiones matemáticas.\n\n• Ecuación lineal: de primer grado \\(ax + b = 0\\) (con \\(a \\neq 0\\)), se resuelve por despeje directo.\n• Ecuación cuadrática: de segundo grado \\(ax^2 + bx + c = 0\\) (con \\(a \\neq 0\\)), se resuelve por factorización o mediante la fórmula general.\n\nDefinición (Fórmula general): Las raíces reales de una ecuación cuadrática se obtienen mediante \\(x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\), donde el valor \\(\\Delta = b^2 - 4ac\\) representa el discriminante.",
        formula: "ax^2 + bx + c = 0 \\implies x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        notas: [
          "Discriminante (\\(\\Delta\\)): determina el tipo de soluciones. Si \\(\\Delta > 0\\): dos raíces reales distintas; si \\(\\Delta = 0\\): una raíz real doble; si \\(\\Delta < 0\\): sin raíces reales (soluciones complejas).",
          "Ejemplo (Ecuación lineal): Para resolver \\(3(x-2)+5 = 2x-1\\), expandimos y agrupamos: \\(3x-6+5 = 2x-1 \\implies 3x-1 = 2x-1 \\implies x=0\\).",
          "Ejemplo (Cuadrática por factorización): Para \\(x^2 - 5x + 6 = 0\\), factorizamos como \\((x-2)(x-3)=0\\), obteniendo las raíces \\(x=2\\) y \\(x=3\\) (donde la parábola interseca al eje X).",
          "Ejemplo (Cuadrática por fórmula general): Para \\(2x^2 - 3x - 2 = 0\\), con \\(\\Delta = (-3)^2 - 4(2)(-2) = 25\\), obtenemos las soluciones \\(x = \\frac{3 \\pm \\sqrt{25}}{4}\\), resultando \\(x_1 = 2\\) y \\(x_2 = -1/2\\)."
        ]
      },
      {
        id: "racionalizacion_algebraica",
        titulo: "Racionalización Algebraica",
        definicion: "La racionalización algebraica consiste en transformar una expresión con raíces en su denominador en otra equivalente que carezca de ellas. En expresiones complejas (como límites algebraicos), esto permite simplificar factores que provocan indeterminaciones de la forma \\(0/0\\), multiplicando el numerador y denominador por el conjugado binomial.",
        formula: "\\frac{x-4}{\\sqrt{x}-2} = \\sqrt{x}+2 \\quad \\text{si } x \\neq 4",
        notas: [
          "Conjugado binomial: consiste en cambiar el signo del segundo término. El producto de dos binomios conjugados da una diferencia de cuadrados: \\((\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b}) = a-b\\).",
          "Ejemplo (Simplificación con radical): Para simplificar \\(\\frac{x-4}{\\sqrt{x}-2}\\), multiplicamos numerador y denominador por la unidad (construida a partir del conjugado del denominador entre si mismo)     \\(\\sqrt{x}+2\\): \\(\\frac{(x-4)(\\sqrt{x}+2)}{(\\sqrt{x}-2)(\\sqrt{x}+2)} = \\frac{(x-4)(\\sqrt{x}+2)}{x-4} = \\sqrt{x}+2\\) (para \\(x \\neq 4\\))."
        ]
      },
      {
        id: "ejercicios_propuestos_algebra",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Elementos de Álgebra en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Elementos de Álgebra}",
        notas: [
          "1. Suma polinomios: \\((4x^2-3x+2)+(-2x^2+x-5) = 2x^2-2x-3\\).",
          "2. Expande: \\((3x-2)(2x^2-x+1) = 6x^3-7x^2+5x-2\\).",
          "3. Aplica binomio al cuadrado: \\((4x-3y)^2 = 16x^2-24xy+9y^2\\).",
          "4. Factoriza: \\(12x^3-18x^2+6x = 6x(2x-1)(x-1)\\).",
          "5. Factoriza: \\(x^2+2x-15 = (x+5)(x-3)\\).",
          "6. Factoriza cubos: \\(27x^3+8 = (3x+2)(9x^2-6x+4)\\).",
          "7. Simplifica fracción: \\(\\frac{x^2-1}{x^2+x} = \\frac{(x-1)(x+1)}{x(x+1)} = \\frac{x-1}{x}\\).",
          "8. Suma fracciones: \\(\\frac{3}{x-2}+\\frac{1}{x+3} = \\frac{4x+7}{(x-2)(x+3)}\\).",
          "9. Resuelve lineal: \\(5(x-1)-3(2x+1)=0 \\implies 5x-5-6x-3=0 \\implies x=-8\\).",
          "10. Resuelve cuadrática: \\(3x^2-5x-2=0 \\implies (3x+1)(x-2)=0 \\implies x=2 \\lor x=-1/3\\).",
          "11. Pascal: \\((a+b)^5 = a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5\\).",
          "12. Término independiente: de \\((x+1/x)^6\\) es \\(\\binom{6}{3} = 20\\).",
          "13. Factoriza completamente: \\(x^4-16 = (x^2+4)(x+2)(x-2)\\).",
          "14. Resuelve racional: \\(\\frac{2}{x-1}=\\frac{3}{x+2} \\implies 2x+4=3x-3 \\implies x=7\\).",
          "15. Factoriza por agrupación: \\(x^3+2x^2-9x-18 = (x+2)(x^2-9) = (x+2)(x+3)(x-3)\\).",
          "16. Aplicación jardín rectangular: Área \\(x^2+7x+12 = (x+3)(x+4)\\). Dimensiones posibles: \\(x+3\\) m de ancho por \\(x+4\\) m de largo."
        ]
      }
    ]
  },
  {
    id: "desigualdades",
    nombre: "Desigualdades",
    icon: "⚖️",
    color: "#f0883e",
    temas: [
      {
        id: "orden_intervalos",
        titulo: "Orden e Intervalos",
        definicion: "Los números reales están ordenados geométricamente en la recta real. Una desigualdad describe una relación de orden (\\(>\\), \\(<\\), \\(\\geq\\), \\(\\leq\\)) entre dos expresiones. Sus soluciones se expresan en notación de intervalos.",
        formula: "a < x < b \\iff x \\in (a, b)",
        tabla: {
          titulo: "Notación de Intervalos",
          encabezados: ["Notación", "Inecuación correspondiente", "Tipo de intervalo"],
          filas: [
            ["\\((a,b)\\)", "\\(a < x < b\\)", "Intervalo abierto"],
            ["\\([a,b]\\)", "\\(a \\leq x \\leq b\\)", "Intervalo cerrado"],
            ["\\([a,b)\\)", "\\(a \\leq x < b\\)", "Intervalo semiabierto"],
            ["\\((a,\\infty)\\)", "\\(x > a\\)", "Semirrecta abierta"],
            ["\\((-\\infty,b]\\)", "\\(x \\leq b\\)", "Semirrecta cerrada"],
          ],
          resaltadas: [],
          colorAuto: false
        },
        notas: [
          "Propiedades de la desigualdad (Multiplicación por constante): Si \\(a < b\\) y \\(c > 0\\), entonces \\(ac < bc\\). Si \\(c < 0\\), entonces \\(ac > bc\\) (se invierte la dirección de la desigualdad).",
          "Propiedad de adición: Si \\(a < b\\), entonces \\(a + c < b + c\\) para cualquier número real \\(c\\).",
          "Propiedad transitiva: Si \\(a < b\\) y \\(b < c\\), entonces \\(a < c\\)."
        ]
      },
      {
        id: "desigualdades_lineales",
        titulo: "Desigualdades Lineales",
        definicion: "Una desigualdad lineal involucra expresiones de primer grado. Para resolverlas se aplican las reglas usuales del despeje, con una propiedad crítica: si se multiplica o divide toda la desigualdad por un número negativo, el sentido de la desigualdad cambia de dirección.",
        formula: "a < b \\quad \\text{y} \\quad c < 0 \\implies ac > bc",
        notas: [
          "Ejemplo simple: \\(3x - 7 > 2 \\implies 3x > 9 \\implies x > 3\\). Solución: \\((3, +\\infty)\\).",
          "Ejemplo doble: \\(-1 \\leq 2x + 3 < 7 \\implies -4 \\leq 2x < 4 \\implies -2 \\leq x < 2\\). Solución: \\([-2, 2)\\)."
        ]
      },
      {
        id: "desigualdades_cuadraticas",
        titulo: "Desigualdades Cuadráticas",
        graficoId: "desigualdades_cuadraticas",
        definicion: "Son de la forma \\(ax^2 + bx + c > 0\\) (o \\(<, \\leq, \\geq\\)). Se resuelven igualando a cero para encontrar las raíces o 'puntos críticos', que dividen la recta real en intervalos. Posteriormente se determina el signo del trinomio en cada intervalo.",
        formula: "ax^2 + bx + c \\leq 0",
        notas: [
          "Ejemplo: \\(x^2 - 5x + 6 < 0 \\implies (x-2)(x-3) < 0\\). Solución: intervalo abierto \\((2, 3)\\).",
          "Ejemplo: \\(x^2 - 2x - 3 \\geq 0 \\implies (x-3)(x+1) \\geq 0\\). Solución: \\((-\\infty, -1] \\cup [3, +\\infty)\\).",
          "Si el trinomio no posee raíces reales (\\(\\Delta < 0\\)), conserva su signo en toda la recta (ej. \\(x^2 + 2x + 5 > 0\\) tiene solución \\(\\R\\))."
        ]
      },
      {
        id: "desigualdades_absoluto",
        titulo: "Con Valor Absoluto",
        definicion: "Las desigualdades que contienen valor absoluto se resuelven interpretando la distancia al origen o entre puntos de la recta numérica, lo cual da origen a intervalos de intersección ('y') o de unión ('o').",
        formula: "|x| < a \\iff -a < x < a \\quad \\text{y} \\quad |x| > a \\iff x < -a \\text{ ó } x > a",
        notas: [
          "Ejemplo (Tipo |A| < k): \\(|2x - 1| < 5 \\implies -5 < 2x - 1 < 5 \\implies -4 < 2x < 6 \\implies -2 < x < 3\\). Solución: \\((-2, 3)\\).",
          "Ejemplo (Tipo |A| > k): \\(|x + 3| > 2 \\implies x + 3 < -2 \\lor x + 3 > 2 \\implies x < -5 \\lor x > -1\\). Solución: \\((-\\infty, -5) \\cup (-1, +\\infty)\\).",
          "Ejemplo (Compuesta: 1 ≤ |3x - 6| ≤ 9): Equivale a resolver las dos inecuaciones \\(1 \\leq |3x - 6|\\) y \\(|3x - 6| \\leq 9\\) a la vez, obteniendo como solución la unión de intervalos: \\([-1, 5/3] \\cup [7/3, 5]\\)."
        ]
      },
      {
        id: "sistemas_inecuaciones",
        titulo: "Sistemas de inecuaciones y Polígonos de Solución",
        graficoId: "sistemas_inecuaciones",
        definicion: "Un sistema de inecuaciones está compuesto por dos o más desigualdades simultáneas.\n\n• En una variable: la solución es la intersección de los intervalos de cada inecuación.\n• En dos variables (lineal): cada inecuación define un semiplano. La intersección de estos semiplanos determina una región del plano cartesiano llamada región factible o polígono de solución.",
        formula: "\\begin{cases} a_1 x + b_1 y \\leq c_1 \\\\ a_2 x + b_2 y \\leq c_2 \\end{cases}",
        notas: [
          "Región factible o Polígono de solución: Corresponde al conjunto de puntos \\((x,y)\\) que satisfacen simultáneamente todas las restricciones. Si la región está acotada en todas direcciones, forma un polígono geométrico cerrado.",
          "Ejemplo (Una variable): Resolver el sistema \\(x + 1 > 0\\) y \\(x - 4 \\leq 0\\) implica cruzar los intervalos \\((-1, +\\infty)\\) y \\((-\\infty, 4]\\), lo cual da la intersección \\(x \\in (-1, 4]\\) (es decir, \\(-1 < x \\leq 4\\)).",
          "Ejemplo (Dos variables - Triángulo factible): El sistema \\(x \\geq 0\\), \\(y \\geq 0\\) y \\(x + y \\leq 4\\) delimita un triángulo en el primer cuadrante. Sus fronteras son los ejes cartesianos y la recta límite \\(x + y = 4\\), con vértices (puntos de intersección) en \\((0,0)\\), \\((4,0)\\) y \\((0,4)\\).",
          "Optimización (Teorema de los Vértices): En programación lineal, el valor máximo o mínimo de una función objetivo lineal \\(z = ax + by\\) sobre una región factible siempre se localiza en uno de los vértices (esquinas) de la región. Evaluando la función objetivo \\(z = 3x + 2y\\) en los vértices del triángulo: \\(z(0,0) = 0\\), \\(z(0,4) = 8\\) y \\(z(4,0) = 12\\). Por lo tanto, la solución óptima máxima ocurre en el vértice \\((4,0)\\) con un valor de \\(z = 12\\)."
        ]
      },
      {
        id: "ejercicios_propuestos_desigualdades",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Desigualdades en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Desigualdades}",
        notas: [
          "1. Resuelve: \\(4x+3\\leq15 \\implies 4x \\leq 12 \\implies x \\leq 3 \\iff x \\in (-\\infty, 3]\\).",
          "2. Resuelve: \\(-3<2x-1<9 \\implies -2<2x<10 \\implies -1<x<5 \\iff x \\in (-1, 5)\\).",
          "3. Resuelve: \\(\\frac{3x-1}{2}>\\frac{x+3}{4} \\implies 2(3x-1)>(x+3) \\implies 5x > 5 \\implies x > 1 \\iff x \\in (1, +\\infty)\\).",
          "4. Resuelve: \\(|x-2|\\leq4 \\implies -4 \\leq x-2 \\leq 4 \\implies -2 \\leq x \\leq 6 \\iff x \\in [-2, 6]\\).",
          "5. Resuelve: \\(|2x+3|>7 \\implies 2x+3<-7 \\lor 2x+3>7 \\implies x<-5 \\lor x>2 \\iff x \\in (-\\infty, -5) \\cup (2, +\\infty)\\).",
          "6. Resuelve: \\(|x-1|\\leq0 \\implies x-1=0 \\implies x=1\\).",
          "7. Resuelve: \\(x^2-x-12\\leq0 \\implies (x-4)(x+3)\\leq0 \\implies x \\in [-3, 4]\\).",
          "8. Resuelve: \\(2x^2+x-1>0 \\implies (2x-1)(x+1)>0 \\implies x \\in (-\\infty, -1) \\cup (1/2, +\\infty)\\).",
          "9. Resuelve: \\(x^2+6x+9\\geq0 \\implies (x+3)^2\\geq0 \\implies x \\in \\mathbb{R}\\).",
          "10. Resuelve: \\(x^2+1<0 \\implies\\) sin solución real.",
          "11. Resuelve racional: \\(\\frac{x-3}{x+2}\\geq0\\). Puntos críticos: \\(3\\) y \\(-2\\) (abierto). Solución: \\((-\\infty, -2) \\cup [3, +\\infty)\\).",
          "12. Resuelve: \\(|5-2x|\\geq3 \\implies 5-2x \\leq -3 \\lor 5-2x \\geq 3 \\implies x \\geq 4 \\lor x \\leq 1 \\iff x \\in (-\\infty, 1] \\cup [4, +\\infty)\\).",
          "13. Aplicación tolerancia: Diámetro dentro de 0.02 mm del nominal 15 mm: \\(|d-15| \\leq 0.02 \\implies d \\in [14.98, 15.02]\\) mm.",
          "14. Aplicación proyectil: Altura \\(h(t)=-5t^2+20t > 15 \\implies t^2-4t+3 < 0 \\implies (t-1)(t-3)<0 \\implies 1 < t < 3\\) segundos."
        ]
      }
    ]
  },
  {
    id: "funciones",
    nombre: "Funciones",
    icon: "📈",
    color: "#bc8cff",
    temas: [
      {
        id: "concepto_funcion",
        titulo: "Conceptos Generales",
        definicion: "Definición: Una función \\(f\\) de un conjunto \\(A\\) a un conjunto \\(B\\) (\\(f: A \\to B\\)) es una regla que asigna a cada elemento \\(x \\in A\\) exactamente un elemento \\(f(x) \\in B\\). El conjunto \\(A\\) representa el dominio de la función (\\(A = \\text{Dom } f\\)) y el rango de la función (\\(\\text{Ran } f\\)) está dado por todos los valores de salida reales: \\(\\text{Ran } f = \\{f(x) : x \\in A\\}\\).",
        formula: "f: A \\to B \\quad A = \\text{Dom } f \\quad \\text{Ran } f = \\{f(x) : x \\in A\\}",
        notas: [
          "Dominio: conjunto \\(A\\) de todos los valores de entrada para los cuales la función está matemáticamente definida.",
          "Codominio y Rango: El Codominio es el conjunto de llegada \\(B\\). El Rango es el conjunto de todos los valores de salida \\(f(x)\\) que la función realmente toma (siempre es un subconjunto del Codominio).",
          "Inyectividad (Uno a uno): Una función es inyectiva si a elementos distintos del dominio les corresponden imágenes distintas en el codominio. Se cumple que si \\(f(a) = f(b) \\implies a = b\\). Gráficamente se comprueba con la prueba de la recta horizontal.",
          "Sobreyectividad (Sobre): Una función es sobreyectiva si su rango es igual a su codominio, es decir, cada elemento de \\(B\\) es imagen de al menos un elemento de \\(A\\).",
          "Biyectividad: Una función es biyectiva si es inyectiva y sobreyectiva simultáneamente. Esto es indispensable para que la función admita una inversa \\(f^{-1}\\).",
          "Ejemplo (Dominio): para \\(f(x) = \\frac{\\sqrt{x+3}}{x-2}\\), el dominio es \\([-3, 2) \\cup (2, +\\infty)\\) debido a la raíz y a la división entre cero."
        ]
      },
      {
        id: "representacion_funciones",
        titulo: "Cinco Representaciones de Funciones",
        graficoId: "representacion_funciones",
        definicion: "Una función matemática puede representarse y analizarse a través de cinco formas de expresión alternativas:\n\n1. Verbal: Explicación directa con palabras.\n2. Algebraica: Mediante una ecuación o fórmula analítica.\n3. Tabular: Usando una tabla con pares ordenados de valores.\n4. Gráfica: Trazando curvas en el plano cartesiano de coordenadas.\n5. Sagital: Mediante diagramas de conjuntos con flechas dirigidas.",
        formula: "f = \\{(x, y) \\in A \\times B \\mid y = f(x)\\}",
        notas: [
          "Ejemplo Lineal (f(x) = 2x - 1): Verbal: 'el doble de un número menos uno'. Algebraica: \\(f(x) = 2x - 1, x \\in \\{1, 2, 3\\}\\). Tabular: \\(\\{(1, 1), (2, 3), (3, 5)\\}\\). Gráfica: Puntos alineados en una recta. Sagital: Un elemento del dominio se conecta con una única imagen (mapeo uno a uno).",
          "Ejemplo Cuadrático (f(x) = x²): Verbal: 'el cuadrado de un número'. Algebraica: \\(f(x) = x^2, x \\in \\{-2, -1, 0, 1, 2\\}\\). Tabular: \\(\\{(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)\\}\\). Gráfica: Parábola simétrica respecto al eje Y. Sagital: Dos elementos distintos del dominio (como -2 y 2) pueden apuntar al mismo valor del codominio (4), mostrando que no es inyectiva."
        ]
      },
      {
        id: "clasificacion_funciones",
        titulo: "Clasificación",
        graficoId: "clasificacion_funciones",
        definicion: "Las funciones se clasifican según su forma analítica en polinomiales (lineales de grado 1, cuadráticas de grado 2, cúbicas, etc.), racionales, trigonométricas y potenciales.",
        formula: "f(x) = ax^2 + bx + c \\quad \\text{con } V\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)",
        tabla: {
          titulo: "Familias de Funciones",
          encabezados: ["Familia", "Definición analítica", "Geometría"],
          filas: [
            ["Lineal", "\\(f(x) = mx + b\\)", "Línea recta con pendiente \\(m\\)"],
            ["Cuadrática", "\\(f(x) = ax^2 + bx + c\\)", "Parábola con vértice \\(V\\)"],
            ["Racional", "\\(f(x) = \\frac{1}{x-1}\\)", "Hipérbola con asíntota vertical en \\(x=1\\)"],
            ["Potencial", "\\(f(x) = x^n\\)", "Simétrica par (\\(n\\) par) o impar (\\(n\\) impar)"],
          ],
          resaltadas: [],
          colorAuto: false
        }
      },
      {
        id: "funciones_trigonometricas",
        titulo: "Funciones Trigonométricas",
        graficoId: "trigonometricas_plotter",
        definicion: "Las funciones trigonométricas (seno, coseno, tangente, cotangente, secante, cosecante) expresan las razones de los lados de un triángulo rectángulo respecto a un ángulo. Se extienden a toda la recta real usando el círculo unitario y cumplen identidades pitagóricas fundamentales.",
        formula: "\\sen^2(\\theta) + \\cos^2(\\theta) = 1",
        tabla: {
          titulo: "Identidades Pitagóricas fundamentales",
          encabezados: ["Nombre de la identidad", "Ecuación matemática"],
          filas: [
            ["Identidad Fundamental", "\\(\\sen^2(\\theta) + \\cos^2(\\theta) = 1\\)"],
            ["Identidad de la Secante", "\\(1 + \\tg^2(\\theta) = \\sec^2(\\theta)\\)"],
            ["Identidad de la Cosecante", "\\(1 + \\cotg^2(\\theta) = \\csc^2(\\theta)\\)"],
          ],
          resaltadas: [0],
          colorAuto: false
        },
        notas: [
          "Ángulos notables: \\(\\sen(30^\\circ)=1/2\\), \\(\\cos(\\pi/3)=1/2\\), \\(\\tg(45^\\circ)=1\\).",
          "Ejemplo: Si \\(\\cos(\\theta) = -5/13\\) en el segundo cuadrante, entonces \\(\\sen(\\theta) = \\frac{12}{13}\\) y \\(\\tg(\\theta) = -\\frac{12}{5}\\)."
        ]
      },
      {
        id: "funciones_hiperbolicas",
        titulo: "Funciones Hiperbólicas",
        graficoId: "hiperbolicas_plotter",
        definicion: "Las funciones hiperbólicas se definen a partir de combinaciones de las funciones exponenciales \\(e^x\\) y \\(e^{-x}\\). Tienen propiedades análogas a las trigonométricas ordinarias y se relacionan con la geometría de la hipérbola unitaria.",
        formula: "\\cosh^2(x) - \\senh^2(x) = 1",
        tabla: {
          titulo: "Funciones Hiperbólicas y sus Definiciones",
          encabezados: ["Función", "Definición Matemática", "Comportamiento"],
          filas: [
            ["Seno hiperbólico", "\\(\\senh(x) = \\frac{e^x - e^{-x}}{2}\\)", "Impar, creciente en todo \\(\\R\\)"],
            ["Coseno hiperbólico", "\\(\\cosh(x) = \\frac{e^x + e^{-x}}{2}\\)", "Par, siempre mayor o igual a 1"],
            ["Tangente hiperbólica", "\\(\\tgh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\)", "Impar, acotada entre -1 y 1"]
          ],
          resaltadas: [0, 1],
          colorAuto: false
        },
        notas: [
          "Identidad fundamental hiperbólica: A diferencia de la identidad pitagórica circular, en las funciones hiperbólicas se cumple que \\(\\cosh^2(x) - \\senh^2(x) = 1\\).",
          "Las recíprocas se definen de manera análoga: \\(\\coth(x) = 1/\\tgh(x)\\), \\(\\sech(x) = 1/\\cosh(x)\\), y \\(\\csch(x) = 1/\\senh(x)\\).",
          "Aplicación física (Catenaria): Un cable colgante flexible de peso uniforme sujeto por sus extremos adopta la forma de una curva llamada catenaria, cuya ecuación matemática es de la forma \\(y = a \\cosh(x/a)\\)."
        ]
      },
      {
        id: "ejercicios_propuestos_funciones",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Funciones en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Funciones y Trigonometría}",
        notas: [
          "1. Dominio: \\(f(x)=\\sqrt{4-x^2} \\implies 4-x^2 \\geq 0 \\implies x \\in [-2, 2]\\).",
          "2. Dominio: \\(g(x)=\\frac{x+1}{x^2-4} \\implies x^2-4 \\neq 0 \\implies x \\in \\mathbb{R} \\setminus \\{-2, 2\\}\\).",
          "3. Evaluación: Si \\(h(x)=x^2-3x\\): \\(h(0)=0\\), \\(h(2)=-2\\), \\(h(a-1)=a^2-5a+4\\).",
          "4. Interceptos: \\(f(x)=-2x+4\\) tiene intercepto X en \\((2,0)\\) e intercepto Y en \\((0,4)\\).",
          "5. Cuadrática: \\(f(x)=-x^2+4x-3\\) tiene vértice en \\(V(2,1)\\) y raíces en \\(1\\) y \\(3\\).",
          "6. Paridad: \\(f(x)=x^4\\) es par; \\(f(x)=x^3-x\\) es impar (\\(f(-x)=-f(x)\\)).",
          "7. Dominio mixto: \\(f(x)=\\sqrt x/(x^2-x-6)\\) requiere \\(x \\geq 0\\) y \\(x \\neq 3\\), por lo que \\(Dom = [0,2) \\cup (2,3) \\cup (3,+\\infty)\\).",
          "8. Asíntotas: \\(f(x)=\\frac{2x-1}{x+3}\\) tiene asíntota vertical en \\(x=-3\\) y asíntota horizontal en \\(y=2\\).",
          "9. Composición: Si \\(f(x)=2x-3\\) y \\(g(x)=x^2+1\\): \\((f \\circ g)(x) = 2x^2-1\\), \\((g \\circ f)(x) = 4x^2-12x+10\\).",
          "10. Aplicación área máxima: \\(A(x)=x(20-x)\\). Área máxima en el vértice \\(x=10\\) m (área máxima \\(100\\) m\\(^2\\)).",
          "11. Aplicación telefonía: Costo \\(C(m)=150+2m\\); \\(C(120)=\\$390\\).",
          "12. Frenado: \\(d(v)=0.0056v^2+0.14v\\); \\(d(80) = 47.04\\) m."
        ]
      }
    ]
  },
  {
    id: "logaritmos",
    nombre: "Logaritmos",
    icon: "🪵",
    color: "#e3b341",
    temas: [
      {
        id: "definicion_propiedades_log",
        titulo: "Logaritmos",
        graficoId: "logaritmos_plotter",
        definicion: "El logaritmo es la función inversa de la exponencial. El logaritmo en base \\(b\\) de \\(x\\) es el exponente \\(y\\) al cual se debe elevar la base \\(b\\) para obtener \\(x\\). Sus propiedades algebraicas simplifican operaciones complejas reduciendo multiplicaciones a sumas y divisiones a restas.",
        formula: "\\log_b (x) = y \\iff b^y = x",
        tabla: {
          titulo: "Propiedades fundamentales",
          encabezados: ["Propiedad", "Fórmula", "Ejemplo"],
          filas: [
            ["Producto", "\\(\\log_b(MN) = \\log_b M + \\log_b N\\)", "\\(\\log(6) = \\log(2) + \\log(3)\\)"],
            ["Cociente", "\\(\\log_b(\\frac{M}{N}) = \\log_b M - \\log_b N\\)", "\\(\\ln(\\frac{e^2}{3}) = 2 - \\ln(3)\\)"],
            ["Potencia", "\\(\\log_b(M^p) = p \\cdot \\log_b M\\)", "\\(\\log(100^3) = 6\\)"],
            ["Cambio de base", "\\(\\log_b M = \\frac{\\ln M}{\\ln b}\\)", "\\(\\log_7 50 = \\frac{\\ln 50}{\\ln 7} \\approx 2.01\\)"],
            ["Neutros", "\\(\\log_b b = 1\\) y \\(\\log_b 1 = 0\\)", "\\(\\ln e = 1\\) y \\(\\log 1 = 0\\)"],
            ["Identidad inversa", "\\(b^{\\log_b M} = M\\) y \\(\\log_b b^x = x\\)", "\\(10^{\\log 7} = 7\\) y \\(\\ln(e^3) = 3\\)"],
          ],
          resaltadas: [0, 1, 2, 3],
          colorAuto: false
        }
      },
      {
        id: "ecuaciones_exponenciales",
        titulo: "Ecuaciones",
        definicion: "• Ecuaciones exponenciales: la incógnita se encuentra en el exponente. Se resuelven igualando bases o aplicando logaritmos naturales en ambos lados.\n• Ecuaciones logarítmicas: la incógnita está en el argumento de un logaritmo. Se resuelven utilizando inyectividad o la definición para convertir a forma exponencial. Siempre se debe verificar que la solución esté en el dominio.",
        formula: "b^{f(x)} = c \\implies f(x) = \\log_b(c)",
        notas: [
          "Ejemplo misma base: \\(\\log(x+2) + \\log(x-1) = 1 \\implies (x+2)(x-1) = 10 \\implies x^2+x-12=0 \\implies x=3\\) (se descarta \\(x=-4\\)).",
          "Ejemplo bases diferentes: \\(3^x = 2^{x+1} \\implies x\\ln(3) = (x+1)\\ln(2) \\implies x = \\frac{\\ln(2)}{\\ln(3)-\\ln(2)} \\approx 1.71\\).",
          "Ejemplo cuadrática exponencial: \\(e^{2x} - 5e^x + 6 = 0 \\implies (e^x - 2)(e^x - 3) = 0 \\implies x = \\ln(2) \\lor x = \\ln(3)\\)."
        ]
      },
      {
        id: "aplicaciones_logaritmos",
        titulo: "Aplicaciones del Logaritmo",
        definicion: "Los logaritmos son indispensables para construir escalas de medición en fenómenos con un amplísimo rango de valores de amplitud, transformándolos en variaciones lineales manejables.",
        formula: "\\beta = 10 \\cdot \\log_{10}\\left(\\frac{I}{I_0}\\right)",
        notas: [
          "Química (escala de pH): mide acidez mediante la concentración de hidrógeno \\(\\text{pH} = -\\log_{10}[H^+]\\).",
          "Acústica (escala de decibeles): nivel sonoro de intensidad \\(I\\) expresado como \\(\\beta = 10 \\log_{10}(I/I_0)\\) con \\(I_0 = 10^{-12} \\text{ W/m}^2\\).",
          "Sismología (escala de Richter): magnitud de sismos \\(M = \\log_{10}(A/A_0)\\), donde 2 grados de diferencia indican un factor de 100 en amplitud.",
          "Arqueología (vida media de C-14): cantidad restante \\(N(t) = N_0 e^{-kt}\\), con vida media de 5730 años (\\(k = \\frac{\\ln(2)}{5730}\\)).",
          "Finanzas (interés continuo): valor acumulado \\(A = C_0 e^{rt}\\), donde el tiempo de duplicación se calcula como \\(t = \\frac{\\ln 2}{r}\\)."
        ]
      },
      {
        id: "ejercicios_propuestos_logaritmos",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Logaritmos en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Logaritmos y Exponenciales}",
        notas: [
          "1. Convierte: \\(\\log_4 64=3 \\iff 4^3=64\\).",
          "2. Convierte: \\(5^{-2}=1/25 \\iff \\log_5(1/25)=-2\\).",
          "3. Calcula: \\(\\log_{27}9 = 2/3\\), \\(\\log_8 4 = 2/3\\), \\(\\log 0.01 = -2\\).",
          "4. Expande: \\(\\log_2(x^3/\\sqrt y) = 3\\log_2 x - \\frac{1}{2}\\log_2 y\\).",
          "5. Junta: \\(2\\log x-3\\log y+\\log z = \\log(x^2 z / y^3)\\).",
          "6. Resuelve: \\(\\log_4(x+3)=2 \\implies x+3=16 \\implies x=13\\).",
          "7. Resuelve: \\(\\log(x-1)+\\log(x+2)=1 \\implies x^2+x-12=0 \\implies x=3\\) (se descarta \\(x=-4\\)).",
          "8. Resuelve: \\(\\ln(x+1)-\\ln x=\\ln3 \\implies \\frac{x+1}{x}=3 \\implies x=1/2\\).",
          "9. Resuelve: \\(5^{2x+1}=25^{x-1} \\implies 2x+1=2x-2 \\implies\\) sin solución.",
          "10. Resuelve: \\(2^x=13 \\implies x = \\frac{\\ln 13}{\\ln 2} \\approx 3.70\\).",
          "11. Resuelve cuadrática: \\(e^{2x}-7e^x+10=0 \\implies (e^x-2)(e^x-5)=0 \\implies x=\\ln 2 \\lor x=\\ln 5\\).",
          "12. Resuelve misma base: \\(\\log_6(5x-4)=\\log_6(x+8) \\implies 5x-4=x+8 \\implies x=3\\).",
          "13. Resuelve bases diferentes: \\(\\log_4 x = \\log_2 9 \\implies x = 81\\).",
          "14. pH: Para \\([H^+]=3.5\\times10^{-4}\\), \\(pH = -\\log_{10}(3.5\\times10^{-4}) \\approx 3.46\\).",
          "15. Interés continuo: Crece al 8% anual continuo, se duplica en \\(t = \\ln 2 / 0.08 \\approx 8.66\\) años.",
          "16. Duplicación bacterias: Inicia en 500 y se duplica cada 3 h. Llega a 32,000 en \\(t = 3\\log_2(64) = 18\\) horas.",
          "17. Decibeles: Sonido de intensidad \\(10^{-4}\\) W/m\\(^2\\) equivale a \\(\\beta = 10\\log_{10}(10^{-4}/10^{-12}) = 80\\) dB.",
          "18. Triplicar capital al 5%: \\(3 = e^{0.05t} \\implies t = \\ln 3 / 0.05 \\approx 21.97\\) años."
        ]
      }
    ]
  }
];

// ════════════════════════════════════════════════════════════════════════════
// BANCO DE EVALUACIÓN (QUIZZES)
// ════════════════════════════════════════════════════════════════════════════
export const QUIZZES = [
  // ARITMÉTICA (id: aritmetica)
  {
    nivel: "aritmetica",
    pregunta: "Evalúa la siguiente expresión aritmética aplicando la jerarquía de operaciones: \\(8 + 3 \\times 2 - (4 + 1)\\)",
    opciones: ["17", "11", "9", "7"],
    correcta: 2,
    explicacion: "Siguiendo la jerarquía: 1) Paréntesis: \\(4 + 1 = 5\\). 2) Multiplicación: \\(3 \\times 2 = 6\\). 3) Sumas y restas de izquierda a derecha: \\(8 + 6 - 5 = 14 - 5 = 9\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Determina el resultado de evaluar la expresión con valor absoluto: \\(|3 - 8| + |-2 \\cdot 5|\\)",
    opciones: ["15", "5", "-5", "25"],
    correcta: 0,
    explicacion: "Calculamos los valores absolutos por separado: \\(|3 - 8| = |-5| = 5\\), y \\(|-2 \\cdot 5| = |-10| = 10\\). Sumando ambos resultados obtenemos: \\(5 + 10 = 15\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Simplifica la expresión utilizando las leyes de los exponentes: \\(\\left(\\frac{2^3 \\cdot 2^{-1}}{2^4}\\right)^2\\)",
    opciones: ["\\(4\\)", "\\(\\frac{1}{4}\\)", "\\(1\\)", "\\(\\frac{1}{16}\\)"],
    correcta: 3,
    explicacion: "Simplificamos la fracción interna: \\(\\frac{2^{3 - 1}}{2^4} = \\frac{2^2}{2^4} = 2^{2 - 4} = 2^{-2}\\). Elevamos ahora al cuadrado: \\((2^{-2})^2 = 2^{-4} = \\frac{1}{2^4} = \\frac{1}{16}\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Calcula el valor exacto del número real con exponente racional: \\(8^{2/3}\\)",
    opciones: ["\\(4\\)", "\\(\\frac{16}{3}\\)", "\\(2\\)", "\\(16\\)"],
    correcta: 0,
    explicacion: "Un exponente racional representa raíz y potencia: \\(a^{m/n} = (\\sqrt[n]{a})^m\\). En este caso: \\(8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Resuelve la proporción lineal: \\(\\frac{x + 1}{5} = \\frac{x - 2}{3}\\)",
    opciones: ["\\(x = 6.5\\)", "\\(x = 13\\)", "\\(x = 1.5\\)", "\\(x = 7.5\\)"],
    correcta: 0,
    explicacion: "Multiplicamos de forma cruzada: \\(3(x+1) = 5(x-2) \\implies 3x + 3 = 5x - 10 \\implies 13 = 2x \\implies x = 13/2 = 6.5\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Al racionalizar el denominador de la expresión algebraica \\(\\frac{6}{\\sqrt{7}-1}\\), se obtiene:",
    opciones: ["\\(\\sqrt{7}+1\\)", "\\(6(\\sqrt{7}+1)\\)", "\\(\\frac{\\sqrt{7}+1}{2}\\)", "\\(3\\sqrt{7}-3\\)"],
    correcta: 0,
    explicacion: "Multiplicamos numerador y denominador por el conjugado \\(\\sqrt{7}+1\\): \\(\\frac{6(\\sqrt{7}+1)}{(\\sqrt{7}-1)(\\sqrt{7}+1)} = \\frac{6(\\sqrt{7}+1)}{7-1} = \\frac{6(\\sqrt{7}+1)}{6} = \\sqrt{7}+1\\)."
  },

  // ÁLGEBRA (id: algebra)
  {
    nivel: "algebra",
    pregunta: "Desarrolla el producto notable utilizando binomio al cuadrado: \\((4x - 3y)^2\\)",
    opciones: ["\\(16x^2 - 9y^2\\)", "\\(16x^2 - 12xy + 9y^2\\)", "\\(16x^2 - 24xy + 9y^2\\)", "\\(16x^2 + 24xy + 9y^2\\)"],
    correcta: 2,
    explicacion: "Usamos la regla \\((a-b)^2 = a^2 - 2ab + b^2\\): \\((4x)^2 - 2(4x)(3y) + (3y)^2 = 16x^2 - 24xy + 9y^2\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Factoriza por completo la expresión de cuarto grado: \\(x^4 - 16\\)",
    opciones: ["\\((x^2 + 4)(x - 2)^2\\)", "\\((x^2 + 4)(x + 2)(x - 2)\\)", "\\((x - 2)^4\\)", "\\((x^2 - 4)(x^2 + 4)\\)"],
    correcta: 1,
    explicacion: "Primero aplicamos diferencia de cuadrados: \\(x^4 - 16 = (x^2+4)(x^2-4)\\). Luego factorizamos la segunda diferencia de cuadrados: \\(x^2-4 = (x+2)(x-2)\\). Juntando todo queda: \\((x^2+4)(x+2)(x-2)\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Resuelve la ecuación cuadrática por factorización o fórmula general: \\(3x^2 - 5x - 2 = 0\\)",
    opciones: ["\\(x = 2, x = -\\frac{1}{3}\\)", "\\(x = -2, x = \\frac{1}{3}\\)", "\\(x = 3, x = -\\frac{2}{3}\\)", "\\(x = 2, x = -3\\)"],
    correcta: 0,
    explicacion: "Factorizando el trinomio general: \\(3x^2-5x-2 = (3x+1)(x-2) = 0\\). Las soluciones son \\(x - 2 = 0 \\implies x = 2\\) y \\(3x + 1 = 0 \\implies x = -1/3\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Resuelve la ecuación \\(4x^2 + 4x + 1 = 0\\) e interpreta el valor de su discriminante.",
    opciones: ["\\(x = -\\frac{1}{2}\\) (raíz única doble, discriminante \\(\\Delta = 0\\))", "\\(x = -\\frac{1}{2}, x = \\frac{1}{2}\\) (dos raíces, \\(\\Delta > 0\\))", "No tiene soluciones reales (discriminante \\(\\Delta < 0\\))", "\\(x = -1\\) (raíz única doble, discriminante \\(\\Delta = 0\\))"],
    correcta: 0,
    explicacion: "El discriminante es \\(\\Delta = b^2 - 4ac = 16 - 16 = 0\\). Al ser cero, indica una única solución real doble. Usando la fórmula general: \\(x = \\frac{-4}{8} = -1/2\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Calcula el valor numérico del término independiente de \\(x\\) en el desarrollo binomial: \\(\\left(x + \\frac{1}{x}\\right)^6\\)",
    opciones: ["15", "20", "1", "6"],
    correcta: 1,
    explicacion: "El término general del binomio es \\(T_{k+1} = \\binom{6}{k} x^{6-k} (x^{-1})^k = \\binom{6}{k} x^{6-2k}\\). Para que sea independiente, \\(6-2k = 0 \\implies k = 3\\). El coeficiente es \\(\\binom{6}{3} = \\frac{6 \\cdot 5 \\cdot 4}{3 \\cdot 2 \\cdot 1} = 20\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Simplifica la fracción algebraica compleja utilizando factorización: \\(\\frac{x^3 - 8}{x^2 - 4}\\)",
    opciones: ["\\(\\frac{x^2 + 2x + 4}{x + 2}\\)", "\\(\\frac{x^2 - 2x + 4}{x - 2}\\)", "\\(\\frac{x^2 + 4}{x + 2}\\)", "\\(x - 2\\)"],
    correcta: 0,
    explicacion: "El numerador es una diferencia de cubos: \\(x^3 - 8 = (x - 2)(x^2 + 2x + 4)\\). El denominador es una diferencia de cuadrados: \\(x^2 - 4 = (x - 2)(x + 2)\\). Cancelando el término común \\(x - 2\\) resulta \\(\\frac{x^2 + 2x + 4}{x + 2}\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Encuentra los primeros tres términos de la expansión en serie binomial de \\((1+x)^{-4}\\) para \\(|x| < 1\\).",
    opciones: ["\\(1 - 4x + 6x^2\\)", "\\(1 - 4x + 10x^2\\)", "\\(1 - 4x + 16x^2\\)", "\\(1 + 4x + 10x^2\\)"],
    correcta: 1,
    explicacion: "Usamos el binomio generalizado: \\((1+x)^r = 1 + rx + \\frac{r(r-1)}{2}x^2 + \\dots\\). Para \\(r = -4\\) obtenemos: \\(1 - 4x + \\frac{-4(-5)}{2}x^2 = 1 - 4x + 10x^2\\)."
  },

  // DESIGUALDADES (id: desigualdades)
  {
    nivel: "desigualdades",
    pregunta: "Resuelve la inecuación lineal doble y expresa el resultado en intervalo: \\(-1 \\leq 2x + 3 < 7\\)",
    opciones: ["\\([-2, 2)\\)", "\\((-2, 2]\\)", "\\([-1, 5)\\)", "\\([-2, 5)\\)"],
    correcta: 0,
    explicacion: "Restamos 3 en los tres miembros: \\(-4 \\leq 2x < 4\\). Dividimos entre 2: \\(-2 \\leq x < 2\\). Esto se representa como el intervalo semiabierto \\([-2, 2)\\)."
  },
  {
    nivel: "desigualdades",
    pregunta: "Determina la solución de la inecuación con valor absoluto: \\(|2x - 1| < 5\\)",
    opciones: ["\\((-3, 3)\\)", "\\((-2, 3)\\)", "\\([-2, 3]\\)", "\\((-\\infty, -2) \\cup (3, \\infty)\\)"],
    correcta: 1,
    explicacion: "La inecuación se reescribe como: \\(-5 < 2x - 1 < 5\\). Sumando 1 obtenemos \\(-4 < 2x < 6\\). Dividiendo entre 2 resulta \\(-2 < x < 3\\), es decir, \\((-2, 3)\\)."
  },
  {
    nivel: "desigualdades",
    pregunta: "Resuelve la inecuación cuadrática mediante análisis de intervalos: \\(x^2 - 2x - 3 \\geq 0\\)",
    opciones: ["\\([-1, 3]\\)", "\\((-\\infty, -1] \\cup [3, \\infty)\\)", "\\((-\\infty, -3] \\cup [1, \\infty)\\)", "\\((-1, 3)\\)"],
    correcta: 1,
    explicacion: "Factorizamos la inecuación cuadrática: \\((x - 3)(x + 1) \\geq 0\\). Los puntos críticos son \\(x = 3\\) y \\(x = -1\\). Analizando los signos en los intervalos formados, resulta positiva en \\((-\\infty, -1]\\) y \\([3, \\infty)\\)."
  },
  {
    nivel: "desigualdades",
    pregunta: "Resuelve la inecuación racional tomando en cuenta las restricciones: \\(\\frac{x - 3}{x + 2} \\geq 0\\)",
    opciones: ["\\((-\\infty, -2) \\cup [3, \\infty)\\)", "\\((-\\infty, -2] \\cup [3, \\infty)\\)", "\\((-2, 3]\\)", "\\([-2, 3]\\)"],
    correcta: 0,
    explicacion: "Los puntos críticos son \\(x = 3\\) (numerador) y \\(x = -2\\) (denominador). Como no es posible la división entre cero, el punto crítico \\(-2\\) debe ser excluido del intervalo (abierto). Analizando signos obtenemos \\((-\\infty, -2) \\cup [3, \\infty)\\)."
  },

  // FUNCIONES (id: funciones)
  {
    nivel: "funciones",
    pregunta: "Halla el dominio de definición matemática de la función racional radical: \\(f(x) = \\frac{\\sqrt{x + 3}}{x - 2}\\)",
    opciones: ["\\([-3, \\infty)\\)", "\\([-3, 2) \\cup (2, \\infty)\\)", "\\((-3, 2) \\cup (2, \\infty)\\)", "\\(\\mathbb{R} \\setminus \\{2\\}\\)"],
    correcta: 1,
    explicacion: "Se requiere que el radicando sea positivo o cero: \\(x + 3 \\geq 0 \\implies x \\geq -3\\). Además, el denominador no puede ser cero: \\(x - 2 \\neq 0 \\implies x \\neq 2\\). Combinando ambas condiciones obtenemos \\([-3, 2) \\cup (2, \\infty)\\)."
  },
  {
    nivel: "funciones",
    pregunta: "Determina el dominio y rango de la función real: \\(f(x) = \\sqrt{9 - x^2}\\)",
    opciones: ["Dom: \\([-3, 3]\\), Rango: \\([0, 3]\\)", "Dom: \\([-3, 3]\\), Rango: \\([-3, 3]\\)", "Dom: \\((-\\infty, 3]\\), Rango: \\([0, \\infty)\\)", "Dom: \\([-3, 3]\\), Rango: \\([0, 9]\\)"],
    correcta: 0,
    explicacion: "Para el dominio, \\(9 - x^2 \\geq 0 \\implies x^2 \\leq 9 \\implies -3 \\leq x \\leq 3\\). Para el rango, cuando \\(x\\) varía en el dominio, \\(9-x^2\\) varía entre 0 y 9, haciendo que la raíz varíe entre 0 y 3. Rango: \\([0, 3]\\)."
  },
  {
    nivel: "funciones",
    pregunta: "Encuentra las coordenadas del vértice de la parábola dada por la función: \\(f(x) = -x^2 + 4x - 3\\)",
    opciones: ["\\(V(2, 1)\\)", "\\(V(2, -1)\\)", "\\(V(-2, -15)\\)", "\\(V(1, 0)\\)"],
    correcta: 0,
    explicacion: "La coordenada \\(x\\) del vértice es \\(x_v = \\frac{-b}{2a} = \\frac{-4}{2(-1)} = 2\\). Evaluando \\(x=2\\) en la función: \\(f(2) = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1\\). Por lo tanto, el vértice es \\(V(2, 1)\\)."
  },
  {
    nivel: "funciones",
    pregunta: "Si \\(\\cos(\\theta) = -\\frac{5}{13}\\) y el ángulo \\(\\theta\\) se encuentra en el segundo cuadrante, calcula la tangente: \\(\\tg(\\theta)\\)",
    opciones: ["\\(\\frac{12}{5}\\)", "\\(-\\frac{12}{5}\\)", "\\(-\\frac{12}{13}\\)", "\\(\\frac{12}{13}\\)"],
    correcta: 1,
    explicacion: "Usando la identidad fundamental, el seno en el segundo cuadrante es positivo: \\(\\sen(\\theta) = \\sqrt{1 - \\cos^2(\\theta)} = \\frac{12}{13}\\). La tangente es el cociente \\(\\tg(\\theta) = \\frac{\\sen(\\theta)}{\\cos(\\theta)} = \\frac{12/13}{-5/13} = -\\frac{12}{5}\\)."
  },

  // LOGARITMOS (id: logaritmos)
  {
    nivel: "logaritmos",
    pregunta: "Expande la expresión utilizando las propiedades algebraicas de los logaritmos: \\(\\log\\left(\frac{x^2\\sqrt{y}}{z^3}\\right)\\)",
    opciones: ["\\(2\\log x + \\frac{1}{2}\\log y - 3\\log z\\)", "\\(2\\log x + 2\\log y - 3\\log z\\)", "\\(2\\log x - \\frac{1}{2}\\log y - 3\\log z\\)", "\\(\\frac{2\\log x + 1/2\\log y}{3\\log z}\\)"],
    correcta: 0,
    explicacion: "Aplicamos propiedades: 1) Cociente: \\(\\log(x^2\\sqrt{y}) - \\log(z^3)\\). 2) Producto: \\(\\log(x^2) + \\log(y^{1/2}) - \\log(z^3)\\). 3) Potencia: \\(2\\log x + \\frac{1}{2}\\log y - 3\\log z\\)."
  },
  {
    nivel: "logaritmos",
    pregunta: "Resuelve la ecuación exponencial con bases diferentes aplicando logaritmo natural: \\(3^x = 2^{x+1}\\)",
    opciones: ["\\(x = \\frac{\\ln 2}{\\ln 3 - \\ln 2}\\)", "\\(x = \\frac{\\ln 2}{\\ln 3 + \\ln 2}\\)", "\\(x = \\frac{\\ln 3}{\\ln 3 - \\ln 2}\\)", "\\(x = \\ln 2\\)"],
    correcta: 0,
    explicacion: "Aplicando logaritmo natural en ambos miembros: \\(x \\ln 3 = (x + 1) \\ln 2 \\implies x \\ln 3 = x \\ln 2 + \ln 2 \\implies x(\\ln 3 - \\ln 2) = \\ln 2 \\implies x = \\frac{\\ln 2}{\\ln 3 - \\ln 2}\\)."
  },
  {
    nivel: "logaritmos",
    pregunta: "Resuelve la ecuación logarítmica con bases distintas: \\(\\log_4 x = \\log_2 9\\)",
    opciones: ["\\(x = 9\\)", "\\(x = 3\\)", "\\(x = 27\\)", "\\(x = 81\\)"],
    correcta: 3,
    explicacion: "Usamos cambio de base: \\(\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}\\). Sustituimos en la ecuación: \\(\\frac{\\log_2 x}{2} = \\log_2 9 \\implies \\log_2 x = 2 \\log_2 9 \\implies \\log_2 x = \\log_2(9^2) \\implies x = 81\\)."
  },
  {
    nivel: "logaritmos",
    pregunta: "Halla los valores reales de \\(x\\) que satisfacen la ecuación cuadrática exponencial: \\(e^{2x} - 5e^x + 6 = 0\\)",
    opciones: ["\\(x = 2, x = 3\\)", "\\(x = \\ln 2, x = \\ln 3\\)", "\\(x = \\ln 2\\)", "No tiene soluciones reales"],
    correcta: 1,
    explicacion: "Sustituyendo \\(u = e^x\\) obtenemos \\(u^2 - 5u + 6 = 0 \\implies (u-2)(u-3) = 0 \\implies u=2\\) o \\(u=3\\). Volviendo a la variable original: \\(e^x = 2 \\implies x = \\ln 2\\) y \\(e^x = 3 \\implies x = \\ln 3\\)."
  }
];
