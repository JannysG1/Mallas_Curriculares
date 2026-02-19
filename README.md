# Mallas Curriculares - TECNOLOGIAS DE LA INFORMACION Y TELECOMUNICACIONES - EPN

Aplicación web moderna e interactiva para visualizar y seguir tu progreso en las mallas curriculares de las carreras de Telecomunicaciones y Tecnologías de la Información de la EPN.

## 🎯 Características

- ✨ Diseño moderno y responsivo con tonos claros
- 🔄 Cambio dinámico entre carreras
- 📊 Visualización organizada por semestres
- ✅ **Sistema de tres estados**: Completadas, Disponibles y Bloqueadas
- 🔒 **Bloqueo automático** de materias según prerrequisitos
- 🔓 **Desbloqueo automático** al completar prerrequisitos
- 🔍 **Ver prerrequisitos y materias que habilita** (click en materia)
- ✅ **Marca materias como completadas** (click derecho)
- 💾 **Progreso guardado automáticamente** en el navegador
- 📈 **Barra de progreso visual** de tu avance
- 🎨 Código de colores por tipo de materia
- 📱 Compatible con dispositivos móviles
- 🖨️ Funcionalidad de impresión
- 💾 Base de datos interna (sin conexiones externas)

## 📁 Estructura del Proyecto

```
Mallas_Curriculares/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño visual
├── script.js           # Lógica de la aplicación
├── data.js             # Base de datos interna con materias y prerrequisitos
└── README.md           # Documentación del proyecto
```

## 🚀 Uso

1. Abra `index.html` en su navegador web
2. Seleccione la carrera que desea visualizar
3. **Click izquierdo** en una materia para ver:
   - Información detallada (código, créditos, horas)
   - Prerrequisitos necesarios
   - Materias que habilita al aprobar
4. **Click derecho** en una materia para marcarla como completada
5. Tu progreso se guarda automáticamente

## 🎮 Instrucciones Interactivas

### Sistema de Estados de Materias
Las materias tienen 3 estados posibles:

1. **✅ COMPLETADA (Verde)**
   - Has aprobado esta materia
   - Se muestra con texto tachado
   - Check verde (✓) en la esquina
   - Opacidad reducida

2. **🔓 DISPONIBLE (Normal)**
   - Puedes cursar esta materia
   - Has completado todos los prerrequisitos
   - Colores brillantes normales
   - Puedes marcarla click derecho

3. **🔒 BLOQUEADA (Difuminada)**
   - NO puedes cursar esta materia aún
   - Te faltan prerrequisitos por completar
   - Aparece con opacidad baja y en escala de grises
   - Candado (🔒) en la esquina
   - No se puede marcar hasta completar prerrequisitos

### Marcar Materias Completadas
- **Click derecho** en cualquier materia DISPONIBLE para marcarla como aprobada
- Las materias **BLOQUEADAS** no se pueden marcar y mostrarán un mensaje con los prerrequisitos faltantes
- Al completar una materia, automáticamente se desbloquean las que dependen de ella

### Ver Información de Materias
- **Click izquierdo** en cualquier materia para abrir un modal con:
  - Datos completos de la materia
  - Lista de prerrequisitos (materias que debes aprobar antes)
  - Estado visual de prerrequisitos completados (✓ verde / pendiente)
  - Lista de materias que habilitas al aprobar esta
  - Estado visual de prerrequisitos completados

### Seguimiento de Progreso
- Barra de progreso visual en la parte superior
- Contador de materias completadas
- Porcentaje de avance
- Botón para reiniciar todo el progreso

## 🎨 Código de Colores

- **Amarillo** (#FFE57F): Ciencias Básicas
- **Azul Claro** (#81D4FA): Formación Profesional
- **Verde Claro** (#A5D6A7): Concentración
- **Púrpura Claro** (#CE93D8): General/Humanística
- **Naranja Claro** (#FFAB91): Requisitos/Otros
- **Amarillo Dorado** (#FFD54F): Graduación

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Gradientes, Animaciones)
- JavaScript (ES6+, LocalStorage API)
- Google Fonts (Poppins)

## 📊 Datos Incluidos

### Telecomunicaciones
- 9 semestres
- Título: Ingeniero/a en Telecomunicaciones
- Pensum 2020
- Incluye todas las relaciones de prerrequisitos

### Tecnologías de la Información
- 9 semestres
- Título: Ingeniero/a en Tecnologías de la Información
- Pensum 2020
- Incluye todas las relaciones de prerrequisitos

## 💡 Funcionalidades Adicionales

El objeto `window.mallaCurricular` está disponible en la consola del navegador para acceder a funciones adicionales:

```javascript
// Obtener estadísticas de una carrera
window.mallaCurricular.getCareerStats("telecomunicaciones");

// Buscar materias
window.mallaCurricular.searchSubject("cálculo");

// Exportar datos a JSON
window.mallaCurricular.exportToJSON();

// Imprimir malla curricular
window.mallaCurricular.print();

// Ver materias completadas
console.log(window.mallaCurricular.completedSubjects);
```

## 💾 Almacenamiento de Datos

- El progreso se guarda automáticamente en **localStorage** del navegador
- Los datos persisten entre sesiones
- Cada carrera mantiene su progreso independiente
- No requiere conexión a internet ni base de datos externa

### Agregar/Modificar Materias

Edite el objeto `CARRERAS_DATA` en `data.js`:

```javascript
{
    nombre: "NOMBRE MATERIA",
    codigo: "COD123",
    creditos: 3,
    horas: 144,
    tipo: "basicas", // basicas, formacion, concentracion, general, requisitos, graduacion
    prerrequisitos: ["COD_PREREQ"], // Códigos de materias prerequisito
    abre: ["COD_SIGUIENTE"] // Códigos de materias que habilita
}
```

## 📱 Responsive Design

La aplicación se adapta a diferentes tamaños de pantalla:

- **Desktop**: Vista completa con múltiples columnas
- **Tablet**: Vista ajustada con menos columnas
- **Mobile**: Vista de una columna optimizada
  - En móviles, usa "toque prolongado" en lugar de click derecho

## 🔒 Privacidad

- **Todos los datos se guardan localmente** en tu navegador
- No se envía información a servidores externos
- No requiere registro ni inicio de sesión
- Tu progreso es completamente privado

## 🐛 Solución de Problemas

### El progreso no se guarda
- Verifica que tu navegador permita el uso de localStorage
- No uses modo incógnito (el progreso se borra al cerrar)

### No puedo marcar materias en móvil
- Usa "toque prolongado" (mantén presionado) en lugar de click derecho

### Quiero empezar de nuevo
- Usa el botón "🔄 Reiniciar" en la barra de progreso
- O borra manualmente desde: F12 → Application → Local Storage

---

💡 **Tip**: Usa esta aplicación durante toda tu carrera para visualizar tu progreso y planificar qué materias puedes tomar cada semestre según los prerrequisitos.

🎓 **¡Éxitos en tu carrera universitaria!**
