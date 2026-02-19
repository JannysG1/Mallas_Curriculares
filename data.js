// ============================================
// Base de Datos Interna - Mallas Curriculares EPN
// Con prerrequisitos y relaciones entre materias
// ============================================

const CARRERAS_DATA = {
    telecomunicaciones: {
        nombre: "Telecomunicaciones",
        titulo: "Ingeniero/a en Telecomunicaciones",
        pensum: "2020",
        resumen: {
            "Componentes de Formación": { horas: 5904 },
            "Prácticas Preprofesionales": { horas: 240 },
            "Prácticas Laborales": { horas: 240 },
            "Servicio Comunitario": { horas: 96 },
            "Total Horas": { horas: 5904 }
        },
        semestres: [
            {
                numero: 1,
                materias: [
                    { nombre: "ÁLGEBRA LINEAL", codigo: "MATD113", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: [], abre: ["MATD213", "IEED312"] },
                    { nombre: "CÁLCULO DE UNA VARIABLE", codigo: "MATD123", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: [], abre: ["MATD213", "MATD223", "IEED232", "IEED312"] },
                    { nombre: "MECÁNICA NEWTONIANA", codigo: "FISD134", creditos: 4, horas: 192, tipo: "basicas", prerrequisitos: [], abre: ["IEED242"] },
                    { nombre: "QUÍMICA GENERAL", codigo: "QUID143", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: [], abre: [] },
                    { nombre: "HERRAMIENTAS INFORMÁTICAS", codigo: "ICOD111", creditos: 1, horas: 48, tipo: "basicas", prerrequisitos: [], abre: ["IEED252"] },
                    { nombre: "COMUNICACIÓN ORAL Y ESCRITA", codigo: "CSHD11", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "DEPORTES", codigo: "DEPD110", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 2,
                materias: [
                    { nombre: "ECUACIONES DIFERENCIALES ORDINARIAS", codigo: "MATD213", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: ["MATD113", "MATD123"], abre: ["IEED312", "IEE353"] },
                    { nombre: "PROBABILIDAD Y ESTADÍSTICA BÁSICA", codigo: "MATD223", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: ["MATD123"], abre: ["IEED371"] },
                    { nombre: "CÁLCULO VECTORIAL", codigo: "IEED232", creditos: 2, horas: 96, tipo: "basicas", prerrequisitos: ["MATD123"], abre: ["IEED312", "IEED342"] },
                    { nombre: "FUNDAMENTOS DE ELECTROMAGNETISMO", codigo: "IEED242", creditos: 2, horas: 96, tipo: "basicas", prerrequisitos: ["FISD134"], abre: ["IEED342"] },
                    { nombre: "PROGRAMACIÓN", codigo: "IEED252", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["ICOD111"], abre: ["ITID433", "TELD452"] },
                    { nombre: "ANÁLISIS SOCIOECONÓMICO Y POLÍTICO DEL ECUADOR", codigo: "CSHD211", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "ELECTROTECNIA", codigo: "IEED272", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: [], abre: ["IEED323", "IEED333", "IEE353"] },
                    { nombre: "INGLÉS B1", codigo: "IEXD200", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "CLUBES", codigo: "SOCD210", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "METODOLOGÍA DE ESTUDIO", codigo: "IEED210", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 3,
                materias: [
                    { nombre: "MATEMÁTICA AVANZADA", codigo: "IEED312", creditos: 2, horas: 96, tipo: "basicas", prerrequisitos: ["MATD213", "IEED232"], abre: ["TELD423"] },
                    { nombre: "SISTEMAS DIGITALES", codigo: "IEED323", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED272"], abre: ["IEED371", "ITID553"] },
                    { nombre: "DISPOSITIVOS ELECTRÓNICOS", codigo: "IEED333", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED272"], abre: ["IEED433"] },
                    { nombre: "TEORÍA ELECTROMAGNÉTICA", codigo: "IEED342", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["IEED232", "IEED242"], abre: ["TLED553"] },
                    { nombre: "FUNDAMENTOS DE CIRCUITOS ELÉCTRICOS", codigo: "IEE353", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["MATD213", "IEED272"], abre: ["IEED413"] },
                    { nombre: "ASIGNATURA DE ARTES Y HUMANIDADES", codigo: "CSHD300", creditos: 0, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "MATEMÁTICA DISCRETA", codigo: "IEED371", creditos: 1, horas: 48, tipo: "formacion", prerrequisitos: ["MATD223", "IEED323"], abre: [] }
                ]
            },
            {
                numero: 4,
                materias: [
                    { nombre: "INSTALACIÓN ELÉCTRICA Y COMUNICACIÓN", codigo: "IEED413", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEE353"], abre: ["ITID512"] },
                    { nombre: "ANÁLISIS DE SEÑALES DISCRETAS PARA COMUNICACIONES", codigo: "TELD423", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED312"], abre: ["TELD513", "TELD522", "TELD532"] },
                    { nombre: "CIRCUITOS ELECTRÓNICOS", codigo: "IEED433", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED333"], abre: ["TELD633"] },
                    { nombre: "PROGRAMACIÓN AVANZADA", codigo: "ITID433", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED252"], abre: [] },
                    { nombre: "SISTEMA OPERATIVO LINUX", codigo: "TELD452", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["IEED252"], abre: ["ITID553"] },
                    { nombre: "ASIGNATURA DE ECONOMÍA Y SOCIEDAD", codigo: "CSHD400", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 5,
                materias: [
                    { nombre: "FUNDAMENTOS DE COMUNICACIONES", codigo: "TELD513", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["TELD423"], abre: ["TELD613", "TELD623"] },
                    { nombre: "TEORÍA DE LA INFORMACIÓN Y CODIFICACIÓN", codigo: "TELD522", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["TELD423"], abre: [] },
                    { nombre: "PROCESAMIENTO DIGITAL DE SEÑALES", codigo: "TELD532", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["TELD423"], abre: ["TELD642"] },
                    { nombre: "SISTEMAS EMBEBIDOS", codigo: "ITID553", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED323", "TELD452"], abre: ["TELD642", "TELD733"] },
                    { nombre: "SISTEMAS DE TRANSMISIÓN", codigo: "TLED553", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED342"], abre: ["TELD633", "TELD654"] },
                    { nombre: "SISTEMAS DE CABLEADO ESTRUCTURAL", codigo: "ITID512", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["IEED413"], abre: [] },
                    { nombre: "ASIGNATURA DE COMUNICACIÓN", codigo: "CSHD500", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 6,
                materias: [
                    { nombre: "COMUNICACIÓN DIGITAL", codigo: "TELD613", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["TELD513"], abre: ["TELD713", "TELD733"] },
                    { nombre: "TELEMÁTICA BÁSICA", codigo: "TELD623", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["TELD513"], abre: ["TELD723"] },
                    { nombre: "ELECTRÓNICA DE RADIOFRECUENCIA", codigo: "TELD633", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED433", "TLED553"], abre: ["TELD752"] },
                    { nombre: "APLICACIÓN CON SISTEMAS EMBEBIDOS", codigo: "TELD642", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["TELD532", "ITID553"], abre: ["TELD800"] },
                    { nombre: "PROPAGACIÓN Y ANTENAS", codigo: "TELD654", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["TLED553"], abre: ["TELD752"] },
                    { nombre: "GESTIÓN ORGANIZACIONAL", codigo: "ADM511", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: ["ADMD611", "TELD711"] }
                ]
            },
            {
                numero: 7,
                materias: [
                    { nombre: "COMUNICACIÓN ÓPTICA", codigo: "TELD713", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD613"], abre: ["TELD823"] },
                    { nombre: "TELEMÁTICA AVANZADA", codigo: "TELD723", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD623"], abre: ["TELD743", "TELD800", "TELD833", "TELD843", "TELD852"] },
                    { nombre: "COMUNICACIONES INALÁMBRICAS", codigo: "TELD733", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD613", "ITID553"], abre: ["TELD843"] },
                    { nombre: "TELEFONÍA IP", codigo: "TELD743", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD723"], abre: [] },
                    { nombre: "INGENIERÍA DE MICROONDAS", codigo: "TELD752", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["TELD633", "TELD654"], abre: ["TELD800", "TELD941"] },
                    { nombre: "GESTIÓN DE PROCESOS Y CALIDAD", codigo: "ADMD611", creditos: 1, horas: 48, tipo: "general", prerrequisitos: ["ADM511"], abre: [] },
                    { nombre: "EMPRENDIMIENTO", codigo: "ADMD700", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 8,
                materias: [
                    { nombre: "ITINERARIO BÁSICO", codigo: "TELD800", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["TELD642", "TELD723", "TELD752"], abre: ["TELD900", "TELD801", "TELD802", "TELD803"] },
                    { nombre: "REDES ÓPTICAS", codigo: "TELD823", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD713"], abre: [] },
                    { nombre: "INTRODUCCIÓN A DISEÑO DE REDES", codigo: "TELD833", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD723"], abre: [] },
                    { nombre: "SISTEMAS CELULARES", codigo: "TELD843", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["TELD723", "TELD733"], abre: [] },
                    { nombre: "FUNDAMENTOS DE SEGURIDAD", codigo: "TELD852", creditos: 0, horas: 96, tipo: "concentracion", prerrequisitos: ["TELD723"], abre: [] },
                    { nombre: "INGENIERÍA FINANCIERA", codigo: "TELD711", creditos: 1, horas: 48, tipo: "general", prerrequisitos: ["ADM511"], abre: [] },
                    { nombre: "DISEÑO DE PROYECTOS DE TELECOMUNICACIONES", codigo: "TELD871", creditos: 1, horas: 48, tipo: "graduacion", prerrequisitos: [], abre: [] },
                    { nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", codigo: "ADMD800", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "COMPONENTES PASIVOS DE RADIOFRECUENCIA", codigo: "TELD801", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: ["TELD800"], abre: ["TELD901"] },
                    { nombre: "TÉCNICAS AVANZADAS DE PROCESAMIENTO DIGITAL DE SEÑALES", codigo: "TELD802", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: ["TELD800"], abre: ["TELD902"] },
                    { nombre: "CONMUTACIÓN Y ENRUTAMIENTO AVANZADO", codigo: "TELD803", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: ["TELD800"], abre: ["TELD903"] }
                ]
            },
            {
                numero: 9,
                materias: [
                    { nombre: "ITINERARIO AVANZADO", codigo: "TELD900", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["TELD800"], abre: [] },
                    { nombre: "PRÁCTICAS PROFESIONALES", codigo: "PRLD105", creditos: 5, horas: 240, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "PRÁCTICA DE SERVICIO COMUNITARIO", codigo: "PSCD202", creditos: 2, horas: 96, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "MARCO REGULATORIO DE TELECOMUNICACIONES", codigo: "TELD941", creditos: 1, horas: 48, tipo: "general", prerrequisitos: ["TELD752"], abre: [] },
                    { nombre: "TRABAJO DE INTEGRACIÓN CURRICULAR / EXAMEN COMPLEXIVO", codigo: "TITD201", creditos: 5, horas: 240, tipo: "graduacion", prerrequisitos: [], abre: [] },
                    { nombre: "ECOLOGÍA Y AMBIENTE", codigo: "AMBD900", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "COMPONENTES ACTIVOS DE RADIOFRECUENCIA", codigo: "TELD901", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: ["TELD801"], abre: [] },
                    { nombre: "TÉCNICAS AVANZADAS DE CLASIFICACIÓN DE SEÑALES", codigo: "TELD902", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: ["TELD802"], abre: [] },
                    { nombre: "TECNOLOGÍAS AVANZADAS EN REDES DE DATOS", codigo: "TELD903", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: ["TELD803"], abre: [] }
                ]
            }
        ]
    },
    tecnologias: {
        nombre: "Tecnologías de la Información",
        titulo: "Ingeniero/a en Tecnologías de la Información",
        pensum: "2020",
        resumen: {
            "Componentes de Formación": { horas: 5904 },
            "Prácticas Preprofesionales": { horas: 240 },
            "Prácticas Laborales": { horas: 240 },
            "Servicio Comunitario": { horas: 96 },
            "Total Horas": { horas: 5904 }
        },
        semestres: [
            {
                numero: 1,
                materias: [
                    { nombre: "ÁLGEBRA LINEAL", codigo: "MATD113", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: [], abre: ["MATD213", "IEED312"] },
                    { nombre: "CÁLCULO DE UNA VARIABLE", codigo: "MATD123", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: [], abre: ["MATD213", "MATD223", "IEED232", "IEED312"] },
                    { nombre: "MECÁNICA NEWTONIANA", codigo: "FISD134", creditos: 4, horas: 192, tipo: "basicas", prerrequisitos: [], abre: ["IEED242"] },
                    { nombre: "QUÍMICA GENERAL", codigo: "QUID143", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: [], abre: [] },
                    { nombre: "HERRAMIENTAS INFORMÁTICAS", codigo: "ICOD111", creditos: 1, horas: 48, tipo: "basicas", prerrequisitos: [], abre: ["IEED252"] },
                    { nombre: "COMUNICACIÓN ORAL Y ESCRITA", codigo: "CSHD11", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "DEPORTES", codigo: "DEPD110", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 2,
                materias: [
                    { nombre: "ECUACIONES DIFERENCIALES ORDINARIAS", codigo: "MATD213", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: ["MATD113", "MATD123"], abre: ["IEED312", "IEE353"] },
                    { nombre: "PROBABILIDAD Y ESTADÍSTICA BÁSICA", codigo: "MATD223", creditos: 3, horas: 144, tipo: "basicas", prerrequisitos: ["MATD123"], abre: ["IEED371"] },
                    { nombre: "CÁLCULO VECTORIAL", codigo: "IEED232", creditos: 2, horas: 96, tipo: "basicas", prerrequisitos: ["MATD123"], abre: ["IEED312", "IEED342"] },
                    { nombre: "FUNDAMENTOS DE ELECTROMAGNETISMO", codigo: "IEED242", creditos: 2, horas: 96, tipo: "basicas", prerrequisitos: ["FISD134"], abre: ["IEED342"] },
                    { nombre: "PROGRAMACIÓN", codigo: "IEED252", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["ICOD111"], abre: ["ITID433", "TELD452"] },
                    { nombre: "ANÁLISIS SOCIOECONÓMICO Y POLÍTICO DEL ECUADOR", codigo: "CSHD211", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "ELECTROTECNIA", codigo: "IEED272", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: [], abre: ["IEED323", "IEED333", "IEE353"] },
                    { nombre: "INGLÉS B1", codigo: "IEXD200", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "CLUBES", codigo: "SOCD210", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "METODOLOGÍA DE ESTUDIO", codigo: "IEED210", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 3,
                materias: [
                    { nombre: "MATEMÁTICA AVANZADA", codigo: "IEED312", creditos: 2, horas: 96, tipo: "basicas", prerrequisitos: ["MATD213", "IEED232"], abre: ["TELD423"] },
                    { nombre: "SISTEMAS DIGITALES", codigo: "IEED323", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED272"], abre: ["IEED371", "ITID553"] },
                    { nombre: "DISPOSITIVOS ELECTRÓNICOS", codigo: "IEED333", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED272"], abre: []},
                    { nombre: "TEORÍA ELECTROMAGNÉTICA", codigo: "IEED342", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["IEED232", "IEED242"], abre: []},
                    { nombre: "FUNDAMENTOS DE CIRCUITOS ELÉCTRICOS", codigo: "IEE353", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["MATD213", "IEED272"], abre: ["IEED413"] },
                    { nombre: "ASIGNATURA DE ARTES Y HUMANIDADES", codigo: "CSHD300", creditos: 0, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "MATEMÁTICA DISCRETA", codigo: "IEED371", creditos: 1, horas: 48, tipo: "formacion", prerrequisitos: ["MATD223", "IEED323"], abre: [] }
                ]
            },
            {
                numero: 4,
                materias: [
                    { nombre: "INSTALACIÓN ELÉCTRICA Y COMUNICACIÓN", codigo: "IEED413", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEE353"], abre: ["ITID512"] },
                    { nombre: "ANÁLISIS DE SEÑALES DISCRETAS PARA COMUNICACIONES", codigo: "TELD423", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED312"], abre: ["ITID524", "TELD522"] },
                    { nombre: "BASES DE DATOS", codigo: "ITID443", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["ITID443"], abre: ["ITID543","ITID653"] },
                    { nombre: "PROGRAMACIÓN AVANZADA", codigo: "ITID433", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED252"], abre: ["ITID543"] },
                    { nombre: "SISTEMAS OPERATIVOS", codigo: "ITID452", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["IEED252"], abre: ["ITID553"] },
                    { nombre: "ASIGNATURA DE ECONOMÍA Y SOCIEDAD", codigo: "CSHD400", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 5,
                materias: [
                    { nombre: "TRANSMISIÓN DIGITAL", codigo: "ITID524", creditos: 4, horas: 192, tipo: "formacion", prerrequisitos: ["TELD423"], abre: ["ITID623", "ITID643"] },
                    { nombre: "TEORÍA DE LA INFORMACIÓN Y CODIFICACIÓN", codigo: "TELD522", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["TELD423"], abre: [] },
                    { nombre: "DISEÑO Y PROGRAMACIÓN DE SOFTWARE", codigo: "ITID543", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["ITID433","ITID443"], abre: ["ITID753","ITID713"] },
                    { nombre: "SISTEMAS EMBEBIDOS", codigo: "ITID553", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["IEED323", "TELD452"], abre: [] },
                    { nombre: "GESTIÓN ORGANIZACIONAL", codigo: "ADM511", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: ["ADMD611", "ADMD711"] },
                    { nombre: "SISTEMAS DE CABLEADO ESTRUCTURAL", codigo: "ITID512", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["IEED413"], abre: ["ITID612"] },
                    { nombre: "ASIGNATURA DE COMUNICACIÓN", codigo: "CSHD500", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 6,
                materias: [
                    { nombre: "CABLEADO ESTRUCTURADO AVANZADO", codigo: "ITID612", creditos: 2, horas: 96, tipo: "formacion", prerrequisitos: ["ITID512"], abre: [] },
                    { nombre: "REDES DE AREA LOCAL", codigo: "ITID623", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["ITID524"], abre: ["ITID723","ITID733"] },
                    { nombre: "ENRUTAMIENTO", codigo: "ITID633", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["ITID524"], abre: ["ITID742"] },
                    { nombre: "SISTEMAS INALAMBRICOS", codigo: "ITID643", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["ITID524"], abre: ["ITID832"] },
                    { nombre: "ALMACENAMIENTO Y PROCESAMIENTO DE DATOS", codigo: "ITIDD653", creditos: 3, horas: 144, tipo: "formacion", prerrequisitos: ["ITID443"], abre: ["ITID753"] },
                    { nombre: "GESTIÓN DE PROCESOS Y CALIDAD", codigo: "ADMD611", creditos: 1, horas: 48, tipo: "formacion", prerrequisitos: ["ADM511"], abre: [] },
                    { nombre: "EMPRENDIMIENTO", codigo: "ADMD700", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] }
                ]
            },
            {
                numero: 7,
                materias: [
                    { nombre: "APLICACIONES DISTRIBUIDAS", codigo: "ITID713", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["ITID543"], abre: [] },
                    { nombre: "REDES DE ÁREA EXTENDIDA", codigo: "ITID723", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["ITID623"], abre: ["ITID822", "ITID800"] },
                    { nombre: "SEGURIDADES EN RED", codigo: "ITID733", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["ITID623"], abre: ["ITID800"] },
                    { nombre: "REDES E INTRANETS", codigo: "ITID742", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["ITID633"], abre: ["ITID843"] },
                    { nombre: "APLICACIONES WEB Y MÓVILES", codigo: "ITID753", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["ITID543"], abre: ["ITID800"] },
                    { nombre: "INGENIERÍA FINANCIERA", codigo: "ADMD711", creditos: 1, horas: 48, tipo: "general", prerrequisitos: ["ADM511"], abre: [] },
                ]
            },
            {
                numero: 8,
                materias: [
                    { nombre: "ASIGNATURA BÁSICA DE ITINERARIO", codigo: "ITID783", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["ITID733", "ITID723", "ITID753"], abre: ["ITID900"] },
                    { nombre: "EVALUACIÓN DE REDES", codigo: "ITID822", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["ITID723"], abre: [] },
                    { nombre: "REDES DE ÁREA LOCAL INALÁMBRICAS", codigo: "ITID832", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["ITID643"], abre: [] },
                    { nombre: "ADMINISTRACIÓN DE REDES", codigo: "ITID843", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["ITID742"], abre: [] },
                    { nombre: "MINERÍA DE DATOS", codigo: "ITID853", creditos: 3, horas: 144, tipo: "concentracion", prerrequisitos: ["ITIDD653"], abre: [] },
                    { nombre: "SISTEMAS IoT", codigo: "ITID862", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: [], abre: [] },
                    { nombre: "DISEÑO DE TRABAJO DE INTEGRACIÓN CURRICULAR/PREPARACIÓN EXAMEN DE CARÁCTER COMPLEXIVO", codigo: "TITD101", creditos: 1, horas: 48, tipo: "graduacion", prerrequisitos: [], abre: [] },
                    { nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", codigo: "ADMD800", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                ]
            },
            {
                numero: 9,
                materias: [
                    { nombre: "ASIGNATURA AVANZADA DE ITINERARIO", codigo: "ITID900", creditos: 2, horas: 96, tipo: "concentracion", prerrequisitos: ["ITID783"], abre: [] },
                    { nombre: "PRÁCTICAS LABORALES", codigo: "PRLD105", creditos: 5, horas: 240, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "PRÁCTICAS DE SERVICIO COMUNITARIO", codigo: "PSCD202", creditos: 2, horas: 96, tipo: "requisitos", prerrequisitos: [], abre: [] },
                    { nombre: "REGULACIÓN DE LAS TECNOLOGÍAS DE LA INFORMACIÓN Y LA COMUNICACIÓN", codigo: "ITID941", creditos: 1, horas: 48, tipo: "general", prerrequisitos: [], abre: [] },
                    { nombre: "TRABAJO DE INTEGRACIÓN CURRICULAR/EXAMEN DE CARÁCTER COMPLEXIVO", codigo: "TITD201", creditos: 5, horas: 240, tipo: "graduacion", prerrequisitos: [], abre: [] },
                    { nombre: "ECOLOGÍA Y AMBIENTE", codigo: "AMBD900", creditos: 0, horas: 0, tipo: "requisitos", prerrequisitos: [], abre: [] },
                ]
            }
        ]
    }
};

// Exportar datos para uso en script.js
window.CARRERAS_DATA = CARRERAS_DATA;
