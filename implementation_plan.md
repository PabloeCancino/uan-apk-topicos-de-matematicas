# Desarrollo de APK: Tópicos de Matemáticas

El objetivo es crear una aplicación educativa interactiva (APK) para la materia "Tópicos de Matemáticas", siguiendo la norma NTE-UAN-APK-001 v1.3 utilizada en la academia de Matemáticas de la UAN (como se vio en el proyecto de Trigonometría).

## User Review Required

> [!IMPORTANT]  
> Se utilizará el directorio actual `E:\Desarrollo_de_APK\Topicos_de_Matematicas` como base del proyecto. ¿Estás de acuerdo con sobreescribir/añadir los archivos de la plantilla en esta ubicación, o prefieres que se cree una nueva carpeta (ej. `Topicos_Matematicas`)?

> [!WARNING]
> La extracción del documento de Word arrojó los siguientes 5 módulos principales:
> 1. Aritmética elemental
> 2. Elementos de álgebra
> 3. Desigualdades
> 4. Funciones
> 5. Logaritmos
> 
> Redactaré el contenido interactivo y los reactivos de evaluación (quizzes) basándome en estos temas. ¿Deseas incluir algún enfoque pedagógico específico para las evaluaciones (ej. opción múltiple con retroalimentación detallada)?

## Proposed Changes

---

### Inicialización del Proyecto

Se copiarán los archivos base desde la plantilla institucional (`_Plantilla_APK\__PROYECTO_ID__`) hacia el directorio del proyecto y se configurarán los siguientes parámetros de personalización:

- **Materia:** `topicos_matematicas`
- **App ID:** `mx.uan.topicos_matematicas`
- **Nombre de la App:** `Tópicos de Matemáticas UAN`
- **Autor:** `Dr. Pablo Eduardo Cancino Marentes`
- **Año:** `2026`

Se ejecutarán los comandos de instalación de Node (`npm install`) y se añadirá la plataforma Android mediante Capacitor (`npx cap add android`). Se corregirá el archivo `MainActivity.java` para que coincida con el paquete `mx.uan.topicos_matematicas`.

---

### Contenido Educativo (`src/data/contenido.js`)

Se creará la estructura de datos con las categorías y temas extraídos del documento DOCX.

#### [NEW] src/data/contenido.js
Se definirán las siguientes constantes:
- `META`: Metadatos de la aplicación (nombre, versión, descripción, autor).
- `CREDITOS`: Docentes e investigadores.
- `CATEGORIAS`: 
  1. **Aritmética elemental** (Operaciones, Valor absoluto, Exponentes, Radicales, Razones y proporciones).
  2. **Elementos de álgebra** (Lenguaje algebraico, Operaciones, Productos notables, Factorización, Ecuaciones, Fracciones).
  3. **Desigualdades** (Orden de los números, Lineales, Cuadráticas, Valor absoluto).
  4. **Funciones** (Conceptos, Representación, Clasificación - lineales, cuadráticas, etc.).
  5. **Logaritmos** (Definición, Propiedades, Ecuaciones logarítmicas y exponenciales).
- `QUIZZES`: Se redactará un banco de al menos 20 reactivos interactivos (formato opción múltiple) categorizados por nivel (módulo), con su respectiva explicación paso a paso.

---

### Componentes UI Específicos

#### [MODIFY] public/favicon.svg
Se actualizará el icono de la aplicación.

#### [NEW] src/ESCUDO-UAN-Azul.png
Se copiará el escudo oficial de la UAN para la sección de créditos.

#### [MODIFY] src/components/Sidebar.jsx
#### [MODIFY] src/components/VistaTema.jsx
Se asegurará de que los componentes predeterminados rendericen correctamente las fórmulas matemáticas (usando KaTeX) y las tablas de propiedades para álgebra y logaritmos.

## Verification Plan

### Automated Tests
- Se ejecutará `npm run lint` para garantizar que no existan errores de sintaxis en React/JSX.

### Manual Verification
- Te pediré que ejecutes `npm run dev` en la carpeta del proyecto para probar la aplicación interactiva en el navegador.
- Revisaremos que las fórmulas matemáticas se rendericen correctamente (ej. exponentes fraccionarios, ecuaciones cuadráticas, logaritmos).
- Verificaremos el banco de preguntas simulando un examen corto en la UI.
- Finalmente, se compilará el APK de depuración usando el script institucional `compilar_apk_debug.ps1`.
