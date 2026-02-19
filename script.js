// ============================================
// Script Principal - Mallas Curriculares EPN
// Gestión de la interfaz y visualización de datos
// Con funcionalidad de marcar materias completadas
// ============================================

class MallaCurricularApp {
    constructor() {
        this.currentCareer = 'telecomunicaciones';
        this.data = window.CARRERAS_DATA;
        this.completedSubjects = this.loadProgress();
        this.isMobile = this.detectMobile();
        this.init();
    }

    /**
     * Detecta si es un dispositivo móvil
     */
    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
            || window.innerWidth <= 768;
    }

    init() {
        this.setupEventListeners();
        this.renderCareer(this.currentCareer);
        this.addAnimations();
    }

    /**
     * Carga el progreso desde localStorage
     */
    loadProgress() {
        const saved = localStorage.getItem('malla_progress');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return { telecomunicaciones: [], tecnologias: [] };
            }
        }
        return { telecomunicaciones: [], tecnologias: [] };
    }

    /**
     * Guarda el progreso en localStorage
     */
    saveProgress() {
        localStorage.setItem('malla_progress', JSON.stringify(this.completedSubjects));
    }

    /**
     * Verifica si una materia está completada
     */
    isCompleted(codigo) {
        return this.completedSubjects[this.currentCareer]?.includes(codigo) || false;
    }

    /**
     * Verifica si una materia está bloqueada (no cumple prerrequisitos)
     */
    isLocked(codigo) {
        const materia = this.getSubjectByCode(codigo);
        if (!materia || !materia.prerrequisitos || materia.prerrequisitos.length === 0) {
            return false; // Sin prerrequisitos, no está bloqueada
        }
        
        // Está bloqueada si algún prerrequisito NO está completado
        return !materia.prerrequisitos.every(pre => this.isCompleted(pre));
    }

    /**
     * Marca o desmarca una materia como completada
     */
    toggleSubject(codigo) {
        // Verificar si la materia está bloqueada
        if (this.isLocked(codigo) && !this.isCompleted(codigo)) {
            const materia = this.getSubjectByCode(codigo);
            const prereqNames = materia.prerrequisitos
                .map(pre => {
                    const prereq = this.getSubjectByCode(pre);
                    return prereq ? prereq.nombre : pre;
                })
                .join('\n• ');
            
            alert(`❌ Esta materia está bloqueada.\n\nDebes completar primero estos prerrequisitos:\n• ${prereqNames}`);
            return;
        }
        if (!this.completedSubjects[this.currentCareer]) {
            this.completedSubjects[this.currentCareer] = [];
        }

        const index = this.completedSubjects[this.currentCareer].indexOf(codigo);
        if (index > -1) {
            this.completedSubjects[this.currentCareer].splice(index, 1);
        } else {
            this.completedSubjects[this.currentCareer].push(codigo);
        }

        this.saveProgress();
        this.updateAllSubjectCards(); // Actualizar todas las tarjetas para reflejar cambios de estado
        this.updateProgress();
    }

    /**
     * Actualiza todas las tarjetas de materias según su estado actual
     */
    updateAllSubjectCards() {
        const careerData = this.data[this.currentCareer];
        
        careerData.semestres.forEach(semestre => {
            semestre.materias.forEach(materia => {
                const card = document.querySelector(`[data-codigo="${materia.codigo}"]`);
                if (!card) return;

                const completed = this.isCompleted(materia.codigo);
                const locked = this.isLocked(materia.codigo);
                
                // Remover todas las clases de estado
                card.classList.remove('completed', 'locked', 'available');
                
                // Aplicar la clase correcta según el estado
                if (completed) {
                    card.classList.add('completed');
                } else if (locked) {
                    card.classList.add('locked');
                } else {
                    card.classList.add('available');
                }
                
                // Actualizar el ícono y el título
                let statusIcon = '';
                let titleText = '';
                
                if (completed) {
                    statusIcon = '<div class="checkmark">✓</div>';
                    titleText = this.isMobile ? 'Toca para desmarcar' : 'Click: Ver info • Click derecho: Desmarcar';
                } else if (locked) {
                    statusIcon = '<div class="lockmark">🔒</div>';
                    titleText = this.isMobile ? 'Bloqueada - Completa prerrequisitos' : 'Bloqueada - Completa los prerrequisitos primero';
                } else {
                    statusIcon = '';
                    titleText = this.isMobile ? 'Toca para marcar como completada' : 'Click: Ver info • Click derecho: Marcar como completada';
                }
                
                // Actualizar el ícono (sin tocar el botón de info si existe)
                const existingIcon = card.querySelector('.checkmark, .lockmark');
                if (existingIcon) {
                    existingIcon.remove();
                }
                if (statusIcon) {
                    card.insertAdjacentHTML('beforeend', statusIcon);
                }
                
                // Actualizar el tooltip
                card.setAttribute('title', titleText);
            });
        });
    }

    /**
     * Actualiza el contador de progreso
     */
    updateProgress() {
        const careerData = this.data[this.currentCareer];
        let totalMaterias = 0;
        let completadas = 0;

        careerData.semestres.forEach(semestre => {
            semestre.materias.forEach(materia => {
                totalMaterias++;
                if (this.isCompleted(materia.codigo)) {
                    completadas++;
                }
            });
        });

        const percentage = Math.round((completadas / totalMaterias) * 100);
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');

        if (progressBar && progressText) {
            progressBar.style.width = percentage + '%';
            progressText.textContent = `${completadas} de ${totalMaterias} materias completadas (${percentage}%)`;
        }
    }

    /**
     * Obtiene la información de una materia por su código
     */
    getSubjectByCode(codigo) {
        const careerData = this.data[this.currentCareer];
        for (const semestre of careerData.semestres) {
            const materia = semestre.materias.find(m => m.codigo === codigo);
            if (materia) {
                return { ...materia, semestre: semestre.numero };
            }
        }
        return null;
    }

    /**
     * Muestra el modal con información de la materia
     */
    showSubjectModal(codigo) {
        const materia = this.getSubjectByCode(codigo);
        if (!materia) return;

        const modal = document.getElementById('subjectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        // Construir HTML del modal
        let html = `
            <div class="modal-subject-info">
                <p><strong>Código:</strong> ${materia.codigo}</p>
                <p><strong>Créditos:</strong> ${materia.creditos}</p>
                <p><strong>Horas:</strong> ${materia.horas}</p>
                <p><strong>Semestre:</strong> ${materia.semestre}</p>
                <p><strong>Tipo:</strong> ${this.getTypeName(materia.tipo)}</p>
            </div>
        `;

        // Prerrequisitos
        if (materia.prerrequisitos && materia.prerrequisitos.length > 0) {
            html += `<div class="modal-section">
                <h4>📋 Prerrequisitos (Debes aprobar estas materias primero):</h4>
                <ul class="prereq-list">`;
            
            materia.prerrequisitos.forEach(codePre => {
                const prereq = this.getSubjectByCode(codePre);
                if (prereq) {
                    const completed = this.isCompleted(codePre);
                    html += `<li class="${completed ? 'completed' : 'pending'}">${prereq.nombre} (${codePre}) ${completed ? '✓' : ''}</li>`;
                }
            });
            
            html += `</ul></div>`;
        } else {
            html += `<div class="modal-section"><p>✨ Esta materia no tiene prerrequisitos</p></div>`;
        }

        // Materias que abre
        if (materia.abre && materia.abre.length > 0) {
            html += `<div class="modal-section">
                <h4>🔓 Esta materia habilita:</h4>
                <ul class="prereq-list">`;
            
            materia.abre.forEach(codeAbre => {
                const abre = this.getSubjectByCode(codeAbre);
                if (abre) {
                    html += `<li>${abre.nombre} (${codeAbre})</li>`;
                }
            });
            
            html += `</ul></div>`;
        } else {
            html += `<div class="modal-section"><p>Esta materia no es prerrequisito de ninguna otra</p></div>`;
        }

        modalTitle.textContent = materia.nombre;
        modalBody.innerHTML = html;
        modal.classList.add('show');
    }

    /**
     * Cierra el modal
     */
    closeModal() {
        const modal = document.getElementById('subjectModal');
        modal.classList.remove('show');
    }

    /**
     * Configura los event listeners para los botones de carrera
     */
    setupEventListeners() {
        const careerButtons = document.querySelectorAll('.career-btn');
        careerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const career = e.currentTarget.dataset.career;
                this.switchCareer(career);
            });
        });

        // Event listener para cerrar el modal
        const closeBtn = document.getElementById('closeModal');
        const modal = document.getElementById('subjectModal');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }

        // Event listener para el botón de reset
        const resetBtn = document.getElementById('resetProgress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('¿Estás seguro de que quieres borrar todo tu progreso?')) {
                    this.completedSubjects[this.currentCareer] = [];
                    this.saveProgress();
                    this.renderCareer(this.currentCareer);
                }
            });
        }
    }

    /**
     * Cambia entre carreras
     */
    switchCareer(career) {
        if (career === this.currentCareer) return;

        this.currentCareer = career;

        // Actualizar botones activos
        document.querySelectorAll('.career-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.career === career) {
                btn.classList.add('active');
            }
        });

        // Renderizar nueva carrera con animación
        this.renderCareer(career);
        this.addAnimations();
    }

    /**
     * Renderiza la información de la carrera seleccionada
     */
    renderCareer(career) {
        const careerData = this.data[career];
        
        // Actualizar información de la carrera
        this.updateCareerInfo(careerData);
        
        // Renderizar resumen de horas
        this.renderSummary(careerData.resumen);
        
        // Renderizar malla curricular
        this.renderCurriculum(careerData.semestres);
        
        // Actualizar progreso
        this.updateProgress();
    }

    /**
     * Actualiza la información de la carrera en el header
     */
    updateCareerInfo(careerData) {
        document.getElementById('careerTitle').textContent = `Carrera: ${careerData.nombre}`;
        document.getElementById('careerDegree').innerHTML = 
            `<strong>Título que otorga:</strong> ${careerData.titulo}`;
    }

    /**
     * Renderiza el resumen de horas
     */
    renderSummary(resumen) {
        const summaryGrid = document.getElementById('summaryGrid');
        summaryGrid.innerHTML = '';

        const summaryItems = [
            { titulo: "Prácticas Preprofesionales", key: "Prácticas Preprofesionales" },
            { titulo: "Prácticas Laborales", key: "Prácticas Laborales" },
            { titulo: "Servicio Comunitario", key: "Servicio Comunitario" },
            { titulo: "Total Horas", key: "Total Horas" }
        ];

        summaryItems.forEach(item => {
            const horas = resumen[item.key]?.horas || 0;
            const card = this.createSummaryCard(item.titulo, horas);
            summaryGrid.appendChild(card);
        });
    }

    /**
     * Crea una tarjeta de resumen
     */
    createSummaryCard(titulo, horas) {
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
            <h4>${titulo}</h4>
            <div class="hours">${horas}</div>
        `;
        return card;
    }

    /**
     * Renderiza la malla curricular completa
     */
    renderCurriculum(semestres) {
        const curriculumGrid = document.getElementById('curriculumGrid');
        curriculumGrid.innerHTML = '';

        semestres.forEach(semestre => {
            const semestreElement = this.createSemesterElement(semestre);
            curriculumGrid.appendChild(semestreElement);
        });
    }

    /**
     * Crea el elemento de un semestre
     */
    createSemesterElement(semestre) {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semester fade-in';

        const totalHoras = semestre.materias.reduce((sum, materia) => sum + materia.horas, 0);
        const totalCreditos =semestre.materias.reduce((sum, materia) => sum + materia.creditos, 0);

        semestreDiv.innerHTML = `
            <div class="semester-header">
                <div class="semester-number">${semestre.numero}</div>
                <div class="semester-info">
                    <h4>Semestre ${semestre.numero}</h4>
                    <p>${semestre.materias.length} materias • ${totalCreditos} créditos • ${totalHoras} horas</p>
                </div>
            </div>
            <div class="subjects-grid">
                ${semestre.materias.map(materia => this.createSubjectCard(materia)).join('')}
            </div>
        `;

        // Añadir event listeners a las tarjetas
        setTimeout(() => {
            semestreDiv.querySelectorAll('.subject-card').forEach(card => {
                const codigo = card.dataset.codigo;
                
                if (this.isMobile) {
                    // MÓVIL: Un tap marca/desmarca la materia
                    card.addEventListener('click', (e) => {
                        // Si se hace click en el botón de info, no marcar
                        if (!e.target.closest('.info-btn')) {
                            this.toggleSubject(codigo);
                        }
                    });
                    
                    // Botón de info para ver prerrequisitos
                    const infoBtn = card.querySelector('.info-btn');
                    if (infoBtn) {
                        infoBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            this.showSubjectModal(codigo);
                        });
                    }
                } else {
                    // ESCRITORIO: Click derecho marca/desmarca, click izquierdo muestra info
                    card.addEventListener('contextmenu', (e) => {
                        e.preventDefault();
                        this.toggleSubject(codigo);
                    });

                    card.addEventListener('click', () => {
                        this.showSubjectModal(codigo);
                    });
                }
            });
        }, 0);

        return semestreDiv;
    }

    /**
     * Crea una tarjeta de materia
     */
    createSubjectCard(materia) {
        const completed = this.isCompleted(materia.codigo);
        const locked = this.isLocked(materia.codigo);
        
        let statusClass = '';
        let statusIcon = '';
        let titleText = '';
        let infoButton = '';
        
        if (completed) {
            statusClass = 'completed';
            statusIcon = '<div class="checkmark">✓</div>';
            titleText = this.isMobile ? 'Toca para desmarcar' : 'Click: Ver info • Click derecho: Desmarcar';
        } else if (locked) {
            statusClass = 'locked';
            statusIcon = '<div class="lockmark">🔒</div>';
            titleText = this.isMobile ? 'Bloqueada - Completa prerrequisitos' : 'Bloqueada - Completa los prerrequisitos primero';
        } else {
            statusClass = 'available';
            statusIcon = '';
            titleText = this.isMobile ? 'Toca para marcar como completada' : 'Click: Ver info • Click derecho: Marcar como completada';
        }
        
        // Agregar botón de info solo en móvil
        if (this.isMobile) {
            infoButton = '<button class="info-btn" title="Ver prerrequisitos">ℹ️</button>';
        }
        
        return `
            <div class="subject-card ${materia.tipo} ${statusClass}" 
                 data-codigo="${materia.codigo}"
                 title="${titleText}">
                <div class="subject-name">${materia.nombre}</div>
                <div class="subject-info">
                    <span class="subject-code">${materia.codigo}</span>
                    <span class="subject-credits">${materia.creditos} CR</span>
                </div>
                ${statusIcon}
                ${infoButton}
            </div>
        `;
    }

    /**
     * Añade animaciones de entrada a los elementos
     */
    addAnimations() {
        // Remover animaciones anteriores
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.animation = 'none';
        });

        // Forzar reflow
        void document.body.offsetHeight;

        // Aplicar animaciones con delay
        const semesters = document.querySelectorAll('.semester');
        semesters.forEach((semester, index) => {
            setTimeout(() => {
                semester.style.animation = 'fadeIn 0.5s ease-out forwards';
            }, index * 50);
        });
    }

    /**
     * Obtiene el nombre del tipo de materia
     */
    getTypeName(tipo) {
        const names = {
            basicas: 'Ciencias Básicas',
            formacion: 'Formación Profesional',
            concentracion: 'Concentración',
            general: 'General/Humanística',
            requisitos: 'Requisitos',
            graduacion: 'Graduación'
        };
        return names[tipo] || tipo;
    }


}

// ============================================
// Inicialización de la aplicación
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const app = new MallaCurricularApp();
    
    // Hacer la instancia accesible globalmente
    window.mallaCurricular = app;

    console.log('🎓 Mallas Curriculares EPN - Inicializado');
});


