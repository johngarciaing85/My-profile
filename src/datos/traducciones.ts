export type Idioma = "es" | "en";

export const traducciones = {
  nav: {
    sobreMi: { es: "Sobre mí", en: "About" },
    stack: { es: "Stack", en: "Stack" },
    experiencia: { es: "Experiencia", en: "Experience" },
    proyectos: { es: "Proyectos", en: "Work" },
    certificaciones: { es: "Certificaciones", en: "Certifications" },
    contacto: { es: "Contacto", en: "Contact" },
  },
  hero: {
    estado: { es: "Disponible para nuevos retos", en: "Open to new challenges" },
    titulo1: { es: "Backend,", en: "Backend," },
    titulo2: { es: "automatización", en: "automation" },
    titulo3a: { es: "y", en: "and" },
    titulo3b: { es: "datos que mueven", en: "data that moves" },
    titulo3c: { es: "negocios.", en: "business." },
    descripcion: {
      es: "Desarrollador backend con experiencia migrando sistemas críticos, automatizando operaciones logísticas y construyendo APIs robustas. Stack principal:",
      en: "Backend developer experienced in migrating critical systems, automating logistics operations, and building robust APIs. Core stack:",
    },
    descripcion2: {
      es: "Foco actual: integración de IA y observabilidad con",
      en: "Current focus: AI integration and observability with",
    },
    ctaPrimario: { es: "Ver experiencia", en: "View experience" },
    ctaSecundario: { es: "Contactarme", en: "Get in touch" },
    metaDisponibilidad: { es: "Disponibilidad", en: "Availability" },
    metaDisponibilidadValor: { es: "Remoto · Full-time o freelance", en: "Remote · Full-time or freelance" },
    metaIdiomas: { es: "Idiomas", en: "Languages" },
    metaEspecialidad: { es: "Especialidad", en: "Focus" },
    metaEspecialidadValor: { es: "Backend · Automatización · IA", en: "Backend · Automation · AI" },
  },
  sobreMi: {
    numero: "01",
    etiqueta: { es: "Perfil", en: "Profile" },
    titulo: { es: "Resuelvo problemas", en: "I solve" },
    tituloEm: { es: "reales", en: "real" },
    tituloFin: { es: "con código.", en: "problems with code." },
    parrafo1: {
      es: "Soy desarrollador backend con foco en automatización, integración de sistemas y APIs. Actualmente en práctica profesional en Prebel S.A, donde migré el backend de un sistema crítico de Flask a FastAPI, construí pipelines de automatización con SAP y diseñé dashboards en Power BI para operaciones logísticas.",
      en: "I'm a backend developer focused on automation, system integration, and APIs. Currently in a professional internship at Prebel S.A, where I migrated a critical system's backend from Flask to FastAPI, built SAP automation pipelines, and designed Power BI dashboards for logistics operations.",
    },
    parrafo2: {
      es: "Antes del desarrollo, trabajé 3 años y 5 meses en Konecta en prevención de fraude financiero en tiempo real para Bancolombia — experiencia que me dio criterio operacional, manejo de información sensible bajo estándares regulatorios, y la mentalidad de alguien que entiende que el software impacta a personas reales.",
      en: "Before development, I worked 3 years and 5 months at Konecta in real-time financial fraud prevention for Bancolombia — experience that gave me operational judgment, handling of sensitive data under regulatory standards, and the mindset of someone who understands software impacts real people.",
    },
    parrafo3: {
      es: "Hoy combino esa base con un stack moderno (FastAPI, Next.js, Docker, Prometheus) para construir productos propios y aportar valor a equipos remotos internacionales que buscan talento técnico con criterio de negocio.",
      en: "Today I combine that foundation with a modern stack (FastAPI, Next.js, Docker, Prometheus) to build my own products and contribute to international remote teams looking for technical talent with business judgment.",
    },
  },
  estadisticas: {
    aniosProf: { es: "Años profesionales", en: "Pro years" },
    registros: { es: "Registros validados", en: "Records validated" },
    sistemas: { es: "Sistemas en producción", en: "Systems in production" },
    aprendizaje: { es: "Aprendizaje continuo", en: "Continuous learning" },
  },
  logros: {
    numero: "02",
    etiqueta: { es: "Logros clave", en: "Key achievements" },
    titulo: { es: "Impacto", en: "" },
    tituloEm: { es: "medible", en: "Measurable" },
    tituloFin: { es: ".", en: "impact." },
    descripcion: {
      es: "Resultados concretos en operaciones reales — no proyectos de portafolio.",
      en: "Concrete results in real operations — not portfolio projects.",
    },
  },
  stack: {
    numero: "03",
    etiqueta: { es: "Stack técnico", en: "Tech stack" },
    titulo: { es: "Las", en: "The" },
    tituloEm: { es: "herramientas", en: "tools" },
    tituloFin: { es: "con las que construyo.", en: "I build with." },
    descripcion: {
      es: "T-shaped: profundidad real en backend Python y automatización, ancho en frontend, infra y observabilidad.",
      en: "T-shaped: real depth in Python backend and automation, breadth in frontend, infra, and observability.",
    },
  },
  experiencia: {
    numero: "04",
    etiqueta: { es: "Trayectoria", en: "Career path" },
    titulo: { es: "Donde he", en: "Where I've" },
    tituloEm: { es: "generado valor", en: "delivered value" },
    tituloFin: { es: ".", en: "." },
    actualidad: { es: "Actualidad", en: "Present" },
  },
  proyectos: {
    numero: "05",
    etiqueta: { es: "Proyectos propios", en: "Personal projects" },
    titulo: { es: "Productos que", en: "Products I've" },
    tituloEm: { es: "he construido", en: "built" },
    tituloFin: { es: ".", en: "." },
  },
  certificaciones: {
    numero: "06",
    etiqueta: { es: "Formación continua", en: "Continuous learning" },
    titulo: { es: "Certificaciones", en: "Certifications" },
    tituloEm: { es: "recientes", en: "recent" },
    tituloFin: { es: ".", en: "." },
    descripcion: {
      es: "Aprendizaje activo en IA, datos, SAP y fundamentos de programación — alineado con las necesidades reales del mercado.",
      en: "Active learning in AI, data, SAP, and programming fundamentals — aligned with real market needs.",
    },
  },
  contacto: {
    titulo1: { es: "¿Tienes un", en: "Got a" },
    tituloEm: { es: "proyecto", en: "project" },
    titulo2: { es: "?", en: "?" },
    titulo3: { es: "Hablemos.", en: "Let's talk." },
    descripcion: {
      es: "Disponible para roles remotos full-time o contratos freelance. Respuesta en menos de 24h.",
      en: "Available for remote full-time roles or freelance contracts. Response within 24h.",
    },
    botonEmail: { es: "Enviar email", en: "Send email" },
  },
  pie: {
    construido: { es: "Construido con código y café", en: "Built with code and coffee" },
  },
};

export const contacto = {
  email: "johngarciaing85@gmail.com",
  telefono: "+57 324 661 1671",
  telefonoLimpio: "573246611671", // Para WhatsApp
  github: "https://github.com/johngarciaing85",
  linkedin: "https://linkedin.com/in/johngarciaing85",
  ubicacion: "Medellín, Colombia",
};
