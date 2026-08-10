// NTE-UAN-APK-001 v1.3 — Tópicos de Matemáticas
// Dr. Pablo Eduardo Cancino Marentes — UAN 2026

export const META = {
  materia: "topicos_matematicas",
  nombreCompleto: "Tópicos de Matemáticas UAN",
  version: "1.1.0",
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
        definicion: "La raíz \\(n\\)-ésima de \\(a\\) se denota como \\(\\sqrt[n]{a} = a^{1/n}\\) y equivale al número \\(b \\geq 0\\) tal que \\(b^n = a\\).\n\n• Factorización del radicando: Para simplificar un radical, se descompone el radicando en sus factores primos y se extraen aquellos exponentes múltiplos del índice del radical: \\(\\sqrt[n]{a^k b} = a \\sqrt[n]{b}\\).\n• Operaciones con radicales (Valores numéricos puros): Dos o más radicales solo pueden sumarse o restarse si son semejantes (mismo índice y mismo radicando). En la multiplicación y división, se combinan radicandos con el mismo índice.",
        formula: "\\sqrt[n]{a^k \\cdot b} = a^{\\frac{k}{n}} \\sqrt[n]{b} \\quad \\text{y} \\quad \\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{a \\cdot b}",
        tabla: {
          titulo: "Ejemplos de Operaciones con Radicales Numéricos",
          encabezados: ["Operación", "Procedimiento de Factorización", "Resultado Simplificado"],
          filas: [
            ["Factorización de radicando", "\\(\\sqrt{180} = \\sqrt{2^2 \\cdot 3^2 \\cdot 5} = 2 \\cdot 3 \\sqrt{5}\\)", "\\(6\\sqrt{5}\\)"],
            ["Suma y resta numérica", "\\(3\\sqrt{12} + 5\\sqrt{27} - 2\\sqrt{48} = 6\\sqrt{3} + 15\\sqrt{3} - 8\\sqrt{3}\\)", "\\(13\\sqrt{3}\\)"],
            ["Multiplicación numérica", "\\(\\sqrt{6} \\cdot \\sqrt{10} = \\sqrt{60} = \\sqrt{2^2 \\cdot 15}\\)", "\\(2\\sqrt{15}\\)"],
            ["División numérica", "\\(\\frac{\\sqrt{75}}{\\sqrt{3}} = \\sqrt{\\frac{75}{3}} = \\sqrt{25}\\)", "\\(5\\)"],
            ["Racionalización simple", "\\(\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3}\\)", "\\(2\\sqrt{3}\\)"],
          ],
          resaltadas: [0, 1],
          colorAuto: false
        },
        notas: [
          "Propiedades de radicales: \\(\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}\\) y \\(\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[m \\cdot n]{a}\\).",
          "Simplificación de radicando: \\(\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}\\).",
          "Conjugado binomial: multiplicando un binomio por su conjugado se obtiene una diferencia de cuadrados: \\((\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a - b\\)."
        ]
      },
      {
        id: "razones_proporciones",
        titulo: "Razones y proporciones",
        graficoId: "razones_proporciones",
        definicion: "La razón de \\(a\\) a \\(b\\) (\\(b \\neq 0\\)) es \\(a/b\\). Cuatro números forman una proporción si la primera razón es igual a la segunda. En proporción directa, \\(y=kx\\) (con \\(k>0\\)). En proporción inversa, \\(y=k/x\\) (con \\(k>0\\)).\n\nRelación Datos del Problema vs. Puntos Cartesianos:\nCada dato práctico de un problema de proporciones (ej. litros de combustible vs costo, o número de obreros vs días de trabajo) se traduce directamente a un par ordenado \\((x, y)\\) en la gráfica cartesiana.",
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
          "Proporción directa (Datos vs Puntos): Si 1 L de gasolina cuesta \\(\\$2\\), 2 L cuestan \\(\\$4\\) y 4 L cuestan \\(\\$8\\). Los datos se representan como los puntos \\((1,2)\\), \\((2,4)\\) y \\((4,8)\\) alineados en una recta que pasa por el origen.",
          "Proporción inversa (Datos vs Puntos): Si 1 obrero tarda 6 días, 2 obreros tardan 3 días y 3 obreros tardan 2 días. Los puntos \\((1,6)\\), \\((2,3)\\) y \\((3,2)\\) yacen sobre una curva de hipérbola \\(y = 6/x\\).",
          "Regla de tres compuesta: 6 obreros pintan un muro en 4 días trabajando 8 h/día. Si se tienen 4 obreros trabajando 6 h/día, tardarán \\(d = \\frac{6 \\cdot 4 \\cdot 8}{4 \\cdot 6} = 8\\) días.",
          "Problema de mezcla de ácidos: mezclar una solución al 30% con otra al 60% para obtener 10 L al 45% requiere plantear \\(0.30x + 0.60(10-x) = 0.45(10)\\), de donde resulta \\(x = 5\\) L de cada una."
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
          "6. Factorización de radicando: \\(\\sqrt{180} = \\sqrt{36 \\times 5} = 6\\sqrt{5}\\).",
          "7. Operación numérica con radicales: \\(3\\sqrt{12} + 5\\sqrt{27} - 2\\sqrt{48} = 6\\sqrt{3} + 15\\sqrt{3} - 8\\sqrt{3} = 13\\sqrt{3}\\).",
          "8. Radical simple: \\(a^{3/4} = \\sqrt[4]{a^3}\\).",
          "9. Simplifica radicales: \\(\\frac{a^{2/3}\\cdot a^{1/2}}{a^{1/6}} = a^{2/3 + 1/2 - 1/6} = a^1 = a\\).",
          "10. Simplifica radical numérico: \\(\\sqrt{200} = 10\\sqrt{2}\\).",
          "11. Racionaliza: \\(\\frac{6}{\\sqrt7-1} = \\sqrt{7}+1\\).",
          "12. Resuelve proporción: \\(\\frac{x+1}{5}=\\frac{x-2}{3} \\implies 3x+3=5x-10 \\implies x=6.5\\)."
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
        definicion: "Son multiplicaciones algebraicas de polinomios cuyo resultado se puede escribir por simple inspección, sin necesidad de efectuar la multiplicación distributiva término por término. Tienen demostraciones geométricas basadas en la subdivisión de áreas en 2D (binomio al cuadrado) y volúmenes en 3D (binomio al cubo).",
        formula: "(a \\pm b)^3 = a^3 \\pm 3a^2b + 3ab^2 \\pm b^3",
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
          resaltadas: [3, 4],
          colorAuto: false
        },
        notas: [
          "Demostración geométrica del Binomio al Cubo: Un cubo de arista \\((a+b)\\) posee un volumen \\((a+b)^3\\). Al subdividirlo se obtienen 8 cuerpos geométricos: 1 cubo de \\(a^3\\), 3 prismas de \\(a^2b\\), 3 prismas de \\(ab^2\\) y 1 cubo de \\(b^3\\).",
          "Ejemplo de Cuadrado de binomio: \\((3x - 2)^2 = 9x^2 - 12x + 4\\).",
          "Ejemplo de Cubo de binomio: \\((x + 2)^3 = x^3 + 6x^2 + 12x + 8\\).",
          "Problema mental: Calcular \\(98^2 = (100 - 2)^2 = 10000 - 400 + 4 = 9604\\)."
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
          "Ejemplo (Expansión con el Triángulo de Pascal): Expandir \\((x+2)^5\\) usando el Triángulo de Pascal (coeficientes \\(1,5,10,10,5,1\\)) da: \\(x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32\\)."
        ]
      },
      {
        id: "factorizacion",
        titulo: "Factorización y División Sintética",
        definicion: "La factorización reescribe un polinomio como el producto de factores de menor grado.\n\nDivisión Sintética (Regla de Ruffini):\nEs un método abreviado para dividir un polinomio \\(P(x)\\) entre un divisor lineal de la forma \\((x - c)\\). Permite hallar el cociente, el residuo y, mediante el Teorema del Factor (\\(P(c) = 0\\)), encontrar las raíces racionales para factorizar polinomios de grado 3 o superior.",
        formula: "P(x) = (x - c) Q(x) + R \\quad \\text{si } R = 0 \\implies P(x) = (x - c) Q(x)",
        tabla: {
          titulo: "Cuadrícula de División Sintética (Ejemplo: x³ - 6x² + 11x - 6 entre x - 1)",
          encabezados: ["Paso / Coeficientes", "x³", "x²", "x¹", "Término Indep."],
          filas: [
            ["Coeficientes de P(x)", "1", "-6", "11", "-6"],
            ["Multiplicar por c = 1", "—", "1", "-5", "6"],
            ["Resultado (Q(x) y Residuo R)", "1", "-5", "6", "0 (¡Raíz x = 1!)"],
          ],
          resaltadas: [2],
          colorAuto: false
        },
        notas: [
          "Procedimiento de División Sintética: 1) Escribir los coeficientes ordenados de \\(P(x)\\). 2) Probar candidatos a raíces \\(c\\) (divisores del término independiente). 3) Bajar el primer coeficiente, multiplicar por \\(c\\) y sumar. 4) Si el residuo final es \\(0\\), entonces \\(x = c\\) es raíz y \\((x-c)\\) es factor.",
          "Ejemplo completo de División Sintética: Para factorizar \\(P(x) = x^3 - 6x^2 + 11x - 6\\), probamos \\(c = 1\\). La división sintética da cociente \\(Q(x) = x^2 - 5x + 6\\) y residuo \\(R = 0\\). Al factorizar la cuadrática resultante \\(x^2 - 5x + 6 = (x-2)(x-3)\\), la factorización completa es \\((x-1)(x-2)(x-3)\\).",
          "Casos de Factorización Comunes: Factor común, diferencia de cuadrados \\(a^2-b^2=(a+b)(a-b)\\), trinomio cuadrado perfecto \\((a \\pm b)^2\\), y trinomio de la forma \\(x^2+bx+c = (x+p)(x+q)\\)."
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
          "Ejemplo (Cuadrática por factorización): Para \\(x^2 - 5x + 6 = 0\\), factorizamos como \\((x-2)(x-3)=0\\), obteniendo las raíces \\(x=2\\) y \\(x=3\\)."
        ]
      },
      {
        id: "racionalizacion_algebraica",
        titulo: "Racionalización Algebraica",
        definicion: "La racionalización algebraica consiste en transformar una expresión con raíces en su denominador en otra equivalente que carezca de ellas. En expresiones complejas (como límites algebraicos), esto permite simplificar factores que provocan indeterminaciones de la forma \\(0/0\\), multiplicando el numerador y denominador por el conjugado binomial.",
        formula: "\\frac{x-4}{\\sqrt{x}-2} = \\sqrt{x}+2 \\quad \\text{si } x \\neq 4",
        notas: [
          "Conjugado binomial: consiste en cambiar el signo del segundo término. El producto de dos binomios conjugados da una diferencia de cuadrados: \\((\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b}) = a-b\\)."
        ]
      },
      {
        id: "ejercicios_propuestos_algebra",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Elementos de Álgebra en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Elementos de Álgebra}",
        notas: [
          "1. Suma polinomios: \\((4x^2-3x+2)+(-2x^2+x-5) = 2x^2-2x-3\\).",
          "2. Expande binomio al cubo: \\((x+2)^3 = x^3+6x^2+12x+8\\).",
          "3. División sintética: Factoriza \\(x^3-6x^2+11x-6 = (x-1)(x-2)(x-3)\\).",
          "4. Factoriza: \\(12x^3-18x^2+6x = 6x(2x-1)(x-1)\\).",
          "5. Factoriza cubos: \\(27x^3+8 = (3x+2)(9x^2-6x+4)\\).",
          "6. Resuelve cuadrática: \\(3x^2-5x-2=0 \\implies (3x+1)(x-2)=0 \\implies x=2 \\lor x=-1/3\\)."
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
        titulo: "Orden e Intervalos (Enmallado Gráfico)",
        definicion: "Los números reales están ordenados geométricamente en la recta real. Una desigualdad describe una relación de orden (\\(>\\), \\(<\\), \\(\\geq\\), \\(\\leq\\)) entre dos expresiones. Sus soluciones se expresan en notación de intervalos y se representan gráficamente sobre la recta real mediante un patrón de sombreado (enmallado) con extremos cerrados (puntos sólidos \\(\\bullet\\)) o abiertos (círculos vacíos \\(\\circ\\)).",
        formula: "a < x < b \\iff x \\in (a, b)",
        tabla: {
          titulo: "Notación de Intervalos y Representación Gráfica (Enmallado)",
          encabezados: ["Notación", "Inecuación correspondiente", "Tipo de intervalo", "Representación Gráfica (Enmallado)"],
          filas: [
            ["\\((a,b)\\)", "\\(a < x < b\\)", "Intervalo abierto", "[enmallado:abierto:a:b]"],
            ["\\([a,b]\\)", "\\(a \\leq x \\leq b\\)", "Intervalo cerrado", "[enmallado:cerrado:a:b]"],
            ["\\([a,b)\\)", "\\(a \\leq x < b\\)", "Intervalo semiabierto", "[enmallado:cerrado_abierto:a:b]"],
            ["\\((a,\\infty)\\)", "\\(x > a\\)", "Semirrecta abierta", "[enmallado:derecha_abierta:a]"],
            ["\\((-\\infty,b]\\)", "\\(x \\leq b\\)", "Semirrecta cerrada", "[enmallado:izquierda_cerrada:b]"],
          ],
          resaltadas: [],
          colorAuto: false
        },
        notas: [
          "Representación Gráfica (Enmallado): Un corchete \\([\\) o \\(]\\) equivale a un círculo relleno (\\(\\bullet\\)) indicando que el extremo pertenece al conjunto. Un paréntesis \\((\\) o \\()\\) equivale a un círculo sin rellenar (\\(\\circ\\)) indicando exclusión.",
          "Propiedades de la desigualdad (Multiplicación por constante): Si \\(a < b\\) y \\(c > 0\\), entonces \\(ac < bc\\). Si \\(c < 0\\), entonces \\(ac > bc\\) (se invierte la dirección de la desigualdad).",
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
          "Ejemplo: \\(x^2 - 2x - 3 \\geq 0 \\implies (x-3)(x+1) \\geq 0\\). Solución: \\((-\\infty, -1] \\cup [3, +\\infty)\\)."
        ]
      },
      {
        id: "desigualdades_absoluto",
        titulo: "Con Valor Absoluto",
        definicion: "Las desigualdades que contienen valor absoluto se resuelven interpretando la distancia al origen o entre puntos de la recta numérica, lo cual da origen a intervalos de intersección ('y') o de unión ('o').",
        formula: "|x| < a \\iff -a < x < a \\quad \\text{y} \\quad |x| > a \\iff x < -a \\text{ ó } x > a",
        notas: [
          "Ejemplo (Tipo |A| < k): \\(|2x - 1| < 5 \\implies -5 < 2x - 1 < 5 \\implies -2 < x < 3\\). Solución: \\((-2, 3)\\).",
          "Ejemplo (Tipo |A| > k): \\(|x + 3| > 2 \\implies x + 3 < -2 \\lor x + 3 > 2 \\implies x < -5 \\lor x > -1\\). Solución: \\((-\\infty, -5) \\cup (-1, +\\infty)\\)."
        ]
      },
      {
        id: "sistemas_inecuaciones",
        titulo: "Sistemas de inecuaciones y Polígonos de Solución",
        graficoId: "sistemas_inecuaciones",
        definicion: "Un sistema de inecuaciones está compuesto por dos o más desigualdades simultáneas.\n\n• En una variable: la solución es la intersección de los intervalos de cada inecuación.\n• En dos variables (lineal): cada inecuación define un semiplano. La intersección de estos semiplanos determina una región del plano cartesiano llamada región factible o polígono de solución.",
        formula: "\\begin{cases} a_1 x + b_1 y \\leq c_1 \\\\ a_2 x + b_2 y \\leq c_2 \\end{cases}",
        notas: [
          "Región factible o Polígono de solución: Corresponde al conjunto de puntos \\((x,y)\\) que satisfacen simultáneamente todas las restricciones. Si la región está acotada en todas direcciones, forma un polígono geométrico cerrado."
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
          "3. Resuelve: \\(|2x+3|>7 \\implies 2x+3<-7 \\lor 2x+3>7 \\implies x<-5 \\lor x>2 \\iff x \\in (-\\infty, -5) \\cup (2, +\\infty)\\)."
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
        titulo: "Conceptos Generales y Prueba de la Regleta",
        graficoId: "actividad_regleta",
        definicion: "Definición: Una función \\(f\\) de un conjunto \\(A\\) a un conjunto \\(B\\) (\\(f: A \\to B\\)) es una regla que asigna a cada elemento \\(x \\in A\\) exactamente un elemento \\(f(x) \\in B\\).\n\nPrueba de la Regleta (Recta Vertical):\nPara verificar geométricamente si una curva trazada en el plano representa una función, se desliza una regla vertical (regleta) a lo largo del eje X. Si la regleta interseca a la curva en exactamente **un punto** para cada valor de \\(x\\), entonces la curva **sí es una función**. Si la interseca en dos o más puntos simultáneos, **no es una función**.",
        formula: "f: A \\to B \\quad A = \\text{Dom } f \\quad \\text{Ran } f = \\{f(x) : x \\in A\\}",
        notas: [
          "Prueba de la Regleta: Deslizar una recta vertical \\(x = x_0\\). Una circunferencia \\(x^2+y^2=9\\) falla la prueba porque la regleta la corta en 2 puntos. Una parábola \\(y=x^2-2\\) pasa la prueba porque siempre la corta en 1 solo punto.",
          "Dominio: conjunto \\(A\\) de todos los valores de entrada para los cuales la función está matemáticamente definida.",
          "Inyectividad (Uno a uno): Se comprueba geométricamente con la prueba de la recta horizontal.",
          "Biyectividad: Una función es biyectiva si es inyectiva y sobreyectiva simultáneamente. Esto es indispensable para que la función admita una inversa \\(f^{-1}\\)."
        ]
      },
      {
        id: "representacion_funciones",
        titulo: "Cinco Representaciones de Funciones",
        graficoId: "representacion_funciones",
        definicion: "Una función matemática puede representarse y analizarse a través de cinco formas de expresión alternativas:\n\n1. Verbal: Explicación directa con palabras.\n2. Algebraica: Mediante una ecuación o fórmula analítica.\n3. Tabular: Usando una tabla con pares ordenados de valores.\n4. Gráfica: Trazando curvas en el plano cartesiano de coordenadas.\n5. Sagital: Mediante diagramas de conjuntos con flechas dirigidas.",
        formula: "f = \\{(x, y) \\in A \\times B \\mid y = f(x)\\}",
        notas: [
          "Ejemplo Lineal (f(x) = 2x - 1): Verbal: 'el doble de un número menos uno'. Algebraica: \\(f(x) = 2x - 1, x \\in \\{1, 2, 3\\}\\). Tabular: \\(\\{(1, 1), (2, 3), (3, 5)\\}\\). Gráfica: Puntos alineados en una recta."
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
          "Ángulos notables: \\(\\sen(30^\\circ)=1/2\\), \\(\\cos(\\pi/3)=1/2\\), \\(\\tg(45^\\circ)=1\\)."
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
          "Identidad fundamental hiperbólica: \\(\\cosh^2(x) - \\senh^2(x) = 1\\)."
        ]
      },
      {
        id: "ejercicios_propuestos_funciones",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Funciones en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Funciones y Trigonometría}",
        notas: [
          "1. Dominio: \\(f(x)=\\sqrt{4-x^2} \\implies 4-x^2 \\geq 0 \\implies x \\in [-2, 2]\\).",
          "2. Dominio: \\(g(x)=\\frac{x+1}{x^2-4} \\implies x^2-4 \\neq 0 \\implies x \\in \\mathbb{R} \\setminus \\{-2, 2\\}\\)."
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
        titulo: "Logaritmos y Cambio de Base",
        graficoId: "logaritmos_interactivo",
        definicion: "El logaritmo es la función inversa de la exponencial. El logaritmo en base \\(b\\) de \\(x\\) es el exponente \\(y\\) al cual se debe elevar la base \\(b\\) para obtener \\(x\\).\n\nFórmula de Cambio de Base:\nPermite calcular un logaritmo en cualquier base \\(b\\) (con \\(b > 0, b \\neq 1\\)) convirtiéndolo a logaritmo natural (\\(\\ln\\)) o logaritmo decimal (\\(\\log_{10}\\)):\n\\(\\log_b(M) = \\frac{\\ln M}{\\ln b} = \\frac{\\log_{10} M}{\\log_{10} b}\\)\nEjemplo: \\(\\log_7(50) = \\frac{\\ln 50}{\\ln 7} \\approx \\frac{3.9120}{1.9459} \\approx 2.0103\\).",
        formula: "\\log_b (M) = \\frac{\\ln M}{\\ln b} \\iff b^y = M",
        tabla: {
          titulo: "Propiedades fundamentales de los Logaritmos",
          encabezados: ["Propiedad", "Fórmula", "Ejemplo práctico"],
          filas: [
            ["Fórmula de Cambio de base", "\\(\\log_b M = \\frac{\\ln M}{\\ln b}\\)", "\\(\\log_7 50 = \\frac{\\ln 50}{\\ln 7} \\approx 2.01\\)"],
            ["Producto", "\\(\\log_b(MN) = \\log_b M + \\log_b N\\)", "\\(\\log(6) = \\log(2) + \\log(3)\\)"],
            ["Cociente", "\\(\\log_b(\\frac{M}{N}) = \\log_b M - \\log_b N\\)", "\\(\\ln(\\frac{e^2}{3}) = 2 - \\ln(3)\\)"],
            ["Potencia", "\\(\\log_b(M^p) = p \\cdot \\log_b M\\)", "\\(\\log(100^3) = 6\\)"],
            ["Neutros", "\\(\\log_b b = 1\\) y \\(\\log_b 1 = 0\\)", "\\(\\ln e = 1\\) y \\(\\log 1 = 0\\)"],
          ],
          resaltadas: [0],
          colorAuto: false
        }
      },
      {
        id: "ecuaciones_exponenciales",
        titulo: "Ecuaciones con Distinta Base",
        graficoId: "logaritmos_interactivo",
        definicion: "Ecuaciones exponenciales y logarítmicas con distintas bases:\n\n1. Exponenciales de distinta base (\\(a^{f(x)} = b^{g(x)}\\)): Se aplica logaritmo natural en ambos lados para bajar los exponentes mediante la propiedad de la potencia.\nEjemplo: \\(3^x = 2^{x+1} \\implies x \\ln 3 = (x+1)\\ln 2 \\implies x(\\ln 3 - \\ln 2) = \\ln 2 \\implies x = \\frac{\\ln 2}{\\ln 3 - \\ln 2} \\approx 1.7095\\).\n\n2. Logarítmicas de distinta base (\\(\\log_a x = \\log_b k\\)): Se unifica la base aplicando el cambio de base.\nEjemplo: \\(\\log_4 x = \\log_2 9 \\implies \\frac{\\log_2 x}{\\log_2 4} = \\log_2 9 \\implies \\frac{\\log_2 x}{2} = \\log_2 9 \\implies \\log_2 x = \\log_2(81) \\implies x = 81\\).",
        formula: "a^{f(x)} = b^{g(x)} \\implies f(x) \\ln a = g(x) \\ln b",
        notas: [
          "Ejemplo Exponencial con distinta base: \\(5^{x-1} = 3^x \\implies (x-1)\\ln 5 = x \\ln 3 \\implies x(\\ln 5 - \\ln 3) = \\ln 5 \\implies x = \\frac{\\ln 5}{\\ln 5 - \\ln 3} \\approx 3.1507\\).",
          "Ejemplo Logarítmico con distinta base: \\(\\log_3 x + \\log_9 x = 3 \\implies \\log_3 x + \\frac{\\log_3 x}{2} = 3 \\implies \\frac{3}{2}\\log_3 x = 3 \\implies \\log_3 x = 2 \\implies x = 9\\)."
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
          "Sismología (escala de Richter): magnitud de sismos \\(M = \\log_{10}(A/A_0)\\)."
        ]
      },
      {
        id: "ejercicios_propuestos_logaritmos",
        titulo: "Ejercicios Propuestos",
        definicion: "Practica resolviendo los ejercicios propuestos del capítulo de Logaritmos en la antología para evaluar tu aprendizaje.",
        formula: "\\text{Logaritmos y Exponenciales}",
        notas: [
          "1. Aplica cambio de base: \\(\\log_7 50 = \\frac{\\ln 50}{\\ln 7} \\approx 2.0103\\).",
          "2. Resuelve distinta base: \\(3^x = 2^{x+1} \\implies x = \\frac{\\ln 2}{\\ln 3 - \\ln 2} \\approx 1.71\\).",
          "3. Resuelve distinta base logarítmica: \\(\\log_4 x = \\log_2 9 \\implies x = 81\\)."
        ]
      }
    ]
  }
];

// ════════════════════════════════════════════════════════════════════════════
// BANCO DE EVALUACIÓN (QUIZZES)
// ════════════════════════════════════════════════════════════════════════════
export const QUIZZES = [
  // ARITMÉTICA
  {
    nivel: "aritmetica",
    pregunta: "Evalúa la siguiente expresión aritmética aplicando la jerarquía de operaciones: \\(8 + 3 \\times 2 - (4 + 1)\\)",
    opciones: ["17", "11", "9", "7"],
    correcta: 2,
    explicacion: "Siguiendo la jerarquía: 1) Paréntesis: \\(4 + 1 = 5\\). 2) Multiplicación: \\(3 \\times 2 = 6\\). 3) Sumas y restas de izquierda a derecha: \\(8 + 6 - 5 = 14 - 5 = 9\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Simplifica el radical numérico mediante factorización prima de su radicando: \\(\\sqrt{180}\\)",
    opciones: ["\\(30\\)", "\\(6\\sqrt{5}\\)", "\\(5\\sqrt{6}\\)", "\\(12\\sqrt{5}\\)"],
    correcta: 1,
    explicacion: "Descomponemos en factores primos: \\(180 = 2^2 \\cdot 3^2 \\cdot 5\\). Extraemos los cuadrados perfectos: \\(\\sqrt{2^2 \\cdot 3^2 \\cdot 5} = 2 \\cdot 3 \\sqrt{5} = 6\\sqrt{5}\\)."
  },
  {
    nivel: "aritmetica",
    pregunta: "Calcula el resultado exacto de la siguiente operación numérica con radicales: \\(3\\sqrt{12} + 5\\sqrt{27} - 2\\sqrt{48}\\)",
    opciones: ["\\(13\\sqrt{3}\\)", "\\(6\\sqrt{3}\\)", "\\(19\\sqrt{3}\\)", "\\(10\\sqrt{3}\\)"],
    correcta: 0,
    explicacion: "Simplificamos cada radical: \\(3\\sqrt{12} = 6\\sqrt{3}\\), \\(5\\sqrt{27} = 15\\sqrt{3}\\), y \\(2\\sqrt{48} = 8\\sqrt{3}\\). Sumando semejantes: \\(6\\sqrt{3} + 15\\sqrt{3} - 8\\sqrt{3} = 13\\sqrt{3}\\)."
  },

  // ÁLGEBRA
  {
    nivel: "algebra",
    pregunta: "¿Qué volumen total representa la demostración geométrica del desarrollo del binomio al cubo \\((a + b)^3\\)?",
    opciones: ["\\(a^3 + b^3\\)", "\\(a^3 + 3a^2b + 3ab^2 + b^3\\)", "\\(a^3 + a^2b + ab^2 + b^3\\)", "\\(a^3 + 2a^2b + 2ab^2 + b^3\\)"],
    correcta: 1,
    explicacion: "Un cubo de arista \\((a+b)\\) se subdivide geométricamente en 8 bloques: 1 cubo de \\(a^3\\), 3 prismas de \\(a^2b\\), 3 prismas de \\(ab^2\\) y 1 cubo de \\(b^3\\)."
  },
  {
    nivel: "algebra",
    pregunta: "Aplica División Sintética (Regla de Ruffini) para hallar el cociente y comprobar si \\(x = 1\\) es raíz del polinomio \\(P(x) = x^3 - 6x^2 + 11x - 6\\):",
    opciones: [
      "Cociente \\(Q(x) = x^2 - 5x + 6\\), Residuo \\(R = 0\\) (Es raíz)",
      "Cociente \\(Q(x) = x^2 + 5x + 6\\), Residuo \\(R = 2\\) (No es raíz)",
      "Cociente \\(Q(x) = x^2 - 6x + 5\\), Residuo \\(R = 0\\) (Es raíz)",
      "Cociente \\(Q(x) = x^2 - 4x + 3\\), Residuo \\(R = -1\\) (No es raíz)"
    ],
    correcta: 0,
    explicacion: "Colocamos coeficientes \\((1, -6, 11, -6)\\) y probamos \\(c = 1\\): bajamos 1; \\(1 \\times 1 = 1\\), \\(-6+1 = -5\\); \\(-5 \\times 1 = -5\\), \\(11-5 = 6\\); \\(6 \\times 1 = 6\\), \\(-6+6 = 0\\). Residuo \\(0\\), cociente \\(x^2 - 5x + 6\\)."
  },

  // DESIGUALDADES
  {
    nivel: "desigualdades",
    pregunta: "Resuelve la inecuación lineal doble \\(-1 \\leq 2x + 3 < 7\\) e identifica su tipo de intervalo:",
    opciones: ["\\([-2, 2)\\) (Intervalo semiabierto)", "\\((-2, 2]\\) (Intervalo semiabierto)", "\\([-2, 2]\\) (Intervalo cerrado)", "\\((-2, 2)\\) (Intervalo abierto)"],
    correcta: 0,
    explicacion: "Restando 3: \\(-4 \\leq 2x < 4\\). Dividiendo entre 2: \\(-2 \\leq x < 2\\). Equivale al intervalo semiabierto \\([-2, 2)\\)."
  },

  // FUNCIONES
  {
    nivel: "funciones",
    pregunta: "Al aplicar la Prueba de la Regleta (Recta Vertical) a la curva \\(x^2 + y^2 = 9\\) (Circunferencia de radio 3), ¿cuál es el resultado?",
    opciones: [
      "Es una función porque la regleta corta en exactamente 1 punto.",
      "NO es una función porque la regleta la interseca en 2 puntos simultáneos.",
      "Es una función inyectiva uno a uno.",
      "Es una función cuadrática ordinaria."
    ],
    correcta: 1,
    explicacion: "Al deslizar la regleta vertical en \\(x = 0\\), corta a la circunferencia en dos puntos \\((0, 3)\\) y \\((0, -3)\\). Al tener múltiples salidas para una entrada, viola la definición de función."
  },

  // LOGARITMOS
  {
    nivel: "logaritmos",
    pregunta: "Aplica la Fórmula de Cambio de Base para calcular el valor aproximado de \\(\\log_7(50)\\):",
    opciones: [
      "\\(\\log_7(50) = \\frac{\\ln 50}{\\ln 7} \\approx 2.0103\\)",
      "\\(\\log_7(50) = \\frac{\\ln 7}{\\ln 50} \\approx 0.4974\\)",
      "\\(\\log_7(50) = \\ln(50) - \\ln(7) \\approx 1.9661\\)",
      "\\(\\log_7(50) = 7 \\cdot \\ln(50) \\approx 27.384\\)"
    ],
    correcta: 0,
    explicacion: "La fórmula de cambio de base establece \\(\\log_b(M) = \\frac{\\ln M}{\\ln b}\\). Sustituyendo: \\(\\frac{\\ln 50}{\\ln 7} \\approx \\frac{3.9120}{1.9459} \\approx 2.0103\\)."
  },
  {
    nivel: "logaritmos",
    pregunta: "Resuelve la ecuación logarítmica con distinta base: \\(\\log_4(x) = \\log_2(9)\\)",
    opciones: ["\\(x = 81\\)", "\\(x = 9\\)", "\\(x = 18\\)", "\\(x = 27\\)"],
    correcta: 0,
    explicacion: "Convertimos \\(\\log_4(x)\\) a base 2 mediante cambio de base: \\(\\frac{\\log_2(x)}{\\log_2(4)} = \\frac{\\log_2(x)}{2}\\). Igualando: \\(\\frac{\\log_2(x)}{2} = \\log_2(9) \\implies \\log_2(x) = 2\\log_2(9) = \\log_2(81) \\implies x = 81\\)."
  }
];
