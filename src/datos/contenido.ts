import type { Idioma } from "./traducciones";

type Bilingue = { es: string; en: string };

export interface CategoriaStack {
  categoria: string;
  titulo: string;
  items: string[];
}

export const stack: CategoriaStack[] = [
  { categoria: "Backend", titulo: "Python", items: ["FastAPI", "Flask", "Pydantic", "SQLAlchemy"] },
  { categoria: "Frontend", titulo: "Next.js", items: ["React", "TypeScript", "Tailwind", "App Router"] },
  { categoria: "DevOps", titulo: "Infra", items: ["Docker", "Compose", "Digital Ocean", "Vercel"] },
  { categoria: "Observability", titulo: "Monitoring", items: ["Prometheus", "Logging", "Metrics"] },
  { categoria: "Database", titulo: "SQL", items: ["PostgreSQL", "MySQL", "SQLite", "pgAdmin"] },
  { categoria: "Security", titulo: "Auth & Roles", items: ["JWT", "RBAC", "OAuth"] },
  { categoria: "Enterprise", titulo: "SAP", items: ["SAP GUI", "SAP HANA", "Transacciones", "VBScript"] },
  { categoria: "Automation", titulo: "Pipelines", items: ["ETL", "Scripting", "Scheduling", "Integration"] },
  { categoria: "Data & BI", titulo: "Analytics", items: ["Power BI", "DAX", "Pandas"] },
  { categoria: "AI", titulo: "LLM Integration", items: ["Anthropic API", "AI Agents", "Prompt Eng."] },
  { categoria: "Tools", titulo: "Workflow", items: ["Git", "GitHub", "Linux", "Cloudinary"] },
];

export interface Logro {
  numero: string;
  titulo: Bilingue;
  descripcion: Bilingue;
}

export const logros: Logro[] = [
  {
    numero: "100K+",
    titulo: { es: "Registros validados", en: "Records validated" },
    descripcion: {
      es: "Sistema de devoluciones validando contra +100,000 registros de facturas con workflow de 9 estados.",
      en: "Returns system validating against 100,000+ invoice records with a 9-state workflow.",
    },
  },
  {
    numero: "3",
    titulo: { es: "Transportadoras unificadas", en: "Carriers unified" },
    descripcion: {
      es: "Reportes consolidados en una sola plataforma con indicadores ON TIME por ciudad y panel de devoluciones.",
      en: "Consolidated reports in one platform with ON TIME indicators per city and a returns dashboard.",
    },
  },
  {
    numero: "9",
    titulo: { es: "Estados de workflow", en: "Workflow states" },
    descripcion: {
      es: "Sistema interno con autenticación JWT y control de acceso basado en roles (admin, líder, cliente).",
      en: "Internal system with JWT authentication and role-based access control (admin, lead, client).",
    },
  },
  {
    numero: "21",
    titulo: { es: "Repositorios públicos", en: "Public repositories" },
    descripcion: {
      es: "Trayectoria visible en GitHub con foco coherente: e-commerce, automatización logística y marketplaces.",
      en: "Visible track record on GitHub with coherent focus: e-commerce, logistics automation, and marketplaces.",
    },
  },
];

export interface Experiencia {
  fecha: Bilingue;
  cargo: Bilingue;
  lugar: string;
  descripcion: Bilingue;
  logros: Bilingue[];
  stack: string[];
  actual: boolean;
}

export const experiencias: Experiencia[] = [
  {
    fecha: { es: "ene. 2026 — Actualidad · 5 meses", en: "Jan. 2026 — Present · 5 months" },
    cargo: {
      es: "Desarrollador Backend · Automatización & Análisis de Datos",
      en: "Backend Developer · Automation & Data Analysis",
    },
    lugar: "Prebel S.A · Medellín, Colombia",
    descripcion: {
      es: "Desarrollo soluciones de automatización y análisis de datos para operaciones logísticas, impactando directamente la eficiencia de los equipos de Picking y Transporte.",
      en: "Developing automation and data analysis solutions for logistics operations, directly impacting the efficiency of Picking and Transport teams.",
    },
    logros: [
      {
        es: "Migré el backend del sistema SAT (Sistema de Automatización de Transportadoras) de Flask a FastAPI, implementando arquitectura modular de routers y mejorando la mantenibilidad del código.",
        en: "Migrated the SAT backend (Carrier Automation System) from Flask to FastAPI, implementing modular router architecture and improving code maintainability.",
      },
      {
        es: "Desarrollé Devoluciones_Web, sistema interno de gestión con workflow de 9 estados, autenticación JWT con control de acceso basado en roles (admin/líder/cliente) y validación contra +100,000 registros de facturas.",
        en: "Built Devoluciones_Web, an internal management system with a 9-state workflow, JWT authentication with role-based access control (admin/lead/client), and validation against 100,000+ invoice records.",
      },
      {
        es: "Construí un pipeline de automatización SAP usando VBScript + Python que extrae datos de picking (transacción LT23), los procesa con lógica de negocio personalizada y alimenta un archivo maestro compartido en red.",
        en: "Built a SAP automation pipeline using VBScript + Python that extracts picking data (LT23 transaction), processes it with custom business logic, and feeds a shared master file on the network.",
      },
      {
        es: "Diseñé un dashboard en Power BI con columnas calculadas DAX para visualizar la productividad de operadores del área de Picking.",
        en: "Designed a Power BI dashboard with DAX calculated columns to visualize operator productivity in the Picking area.",
      },
      {
        es: "Consolidé reportes de entrega de 3 transportadoras en una sola plataforma con indicadores ON TIME por ciudad y panel de devoluciones.",
        en: "Consolidated delivery reports from 3 carriers into a single platform with ON TIME indicators per city and a returns dashboard.",
      },
    ],
    stack: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "JWT", "Power BI", "VBScript", "SAP", "Git", "Docker"],
    actual: true,
  },
  {
    fecha: { es: "sept. 2022 — ene. 2026 · 3 años 5 meses", en: "Sept. 2022 — Jan. 2026 · 3 years 5 months" },
    cargo: {
      es: "Agente de Seguridad y Prevención de Fraudes",
      en: "Security & Fraud Prevention Agent",
    },
    lugar: "Konecta · Medellín, Antioquia, Colombia",
    descripcion: {
      es: "Gestión y atención de incidentes de fraude financiero en tiempo real para Bancolombia. Verificación de identidad, análisis de transacciones sospechosas y aplicación de protocolos de seguridad bajo estándares de cumplimiento regulatorio. Operación de plataforma AS/400 para consulta y gestión de información bancaria sensible.",
      en: "Real-time financial fraud incident management for Bancolombia. Identity verification, suspicious transaction analysis, and security protocols under regulatory compliance standards. Operation of AS/400 platform for queries and management of sensitive banking information.",
    },
    logros: [
      {
        es: "Manejo de información sensible bajo estándares regulatorios bancarios — base sólida para roles que exigen criterio en seguridad y privacidad.",
        en: "Handled sensitive information under banking regulatory standards — solid foundation for roles requiring judgment in security and privacy.",
      },
      {
        es: "Análisis de patrones y toma de decisiones rápida en operaciones críticas en tiempo real.",
        en: "Pattern analysis and rapid decision-making in critical real-time operations.",
      },
    ],
    stack: ["AS/400", "Compliance", "Risk Analysis"],
    actual: false,
  },
];

export interface Educacion {
  fecha: string;
  titulo: Bilingue;
  institucion: Bilingue;
  descripcion: Bilingue;
}

export const educacion: Educacion[] = [
  {
    fecha: "2024 — 2026",
    titulo: {
      es: "Técnica Profesional en Programación de Sistemas de Información",
      en: "Professional Technician in Information Systems Programming",
    },
    institucion: { es: "En curso", en: "In progress" },
    descripcion: {
      es: "Formación enfocada en programación, bases de datos, ingeniería de software y arquitectura de sistemas.",
      en: "Training focused on programming, databases, software engineering, and system architecture.",
    },
  },
  {
    fecha: "2022 — 2026",
    titulo: { es: "Formación técnica en Desarrollo de Software", en: "Technical training in Software Development" },
    institucion: { es: "Universidad CES · Medellín", en: "CES University · Medellín" },
    descripcion: {
      es: "Bases de datos, álgebra booleana, teoría de grafos y arquitectura de sistemas.",
      en: "Databases, boolean algebra, graph theory, and system architecture.",
    },
  },
];

export interface Proyecto {
  estado: Bilingue;
  estadoTipo: "vivo" | "produccion" | "diseño";
  titulo: string;
  tituloEm: string;
  tagline: Bilingue;
  parrafos: Bilingue[];
  tags: string[];
  enlace?: string;
}

export const proyectos: Proyecto[] = [
  {
    estado: { es: "Desplegado en Digital Ocean", en: "Deployed on Digital Ocean" },
    estadoTipo: "vivo",
    titulo: "JD",
    tituloEm: "Sport",
    tagline: {
      es: "E-commerce full-stack con agente de ventas IA en dialecto paisa.",
      en: "Full-stack e-commerce with AI sales agent in paisa dialect.",
    },
    parrafos: [
      {
        es: "Plataforma e-commerce completa con catálogo dinámico, gestión de productos vía Cloudinary, lógica de envíos para ciudades colombianas y despliegue en Digital Ocean.",
        en: "Complete e-commerce platform with dynamic catalog, Cloudinary-powered product management, shipping logic for Colombian cities, and Digital Ocean deployment.",
      },
      {
        es: 'Construí "Camilo", un agente de ventas IA con identidad de marca DRIP PAISA / MDE, integrado vía Anthropic API. Resolví un problema de CORS enrutando las llamadas a través del backend FastAPI, mostrando criterio en arquitectura cliente-servidor.',
        en: 'Built "Camilo", an AI sales agent with DRIP PAISA / MDE brand identity, integrated via Anthropic API. Solved a CORS issue by routing calls through the FastAPI backend — showing real architectural judgment.',
      },
      {
        es: "Stack levantado con Docker Compose (PostgreSQL + pgAdmin contenerizados) y validado con load testing en k6.",
        en: "Stack containerized with Docker Compose (PostgreSQL + pgAdmin) and validated with k6 load testing.",
      },
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Anthropic API", "Cloudinary", "Digital Ocean", "k6"],
  },
  {
    estado: { es: "En producción · Prebel", en: "In production · Prebel" },
    estadoTipo: "produccion",
    titulo: "Sistema",
    tituloEm: "SAT",
    tagline: {
      es: "Sistema de Automatización de Transportadoras — backend migrado y modernizado.",
      en: "Carrier Automation System — backend migrated and modernized.",
    },
    parrafos: [
      {
        es: "Sistema crítico para operaciones logísticas que centraliza el control de transportadoras. Lideré la migración del backend de Flask a FastAPI, rediseñando la arquitectura con routers modulares para mejorar mantenibilidad y escalabilidad.",
        en: "Critical system for logistics operations that centralizes carrier management. Led the backend migration from Flask to FastAPI, redesigning the architecture with modular routers to improve maintainability and scalability.",
      },
      {
        es: "El sistema procesa información de 3 transportadoras con indicadores ON TIME por ciudad y panel de devoluciones consolidado, sirviendo como fuente única de verdad para los equipos de Picking y Transporte.",
        en: "The system processes data from 3 carriers with ON TIME indicators per city and a consolidated returns dashboard, serving as a single source of truth for Picking and Transport teams.",
      },
    ],
    tags: ["Python", "FastAPI", "SQLAlchemy", "JWT", "SQLite"],
  },
  {
    estado: { es: "Múltiples · En producción", en: "Multiple · In production" },
    estadoTipo: "produccion",
    titulo: "Automatizaciones",
    tituloEm: "SAP & ETL",
    tagline: {
      es: "Pipelines que extraen, procesan y unifican datos de operaciones críticas.",
      en: "Pipelines that extract, process, and unify data from critical operations.",
    },
    parrafos: [
      {
        es: "Conjunto de automatizaciones que combinan VBScript + Python para integrar SAP con sistemas internos. Una de ellas extrae datos de picking (transacción LT23), aplica lógica de negocio y alimenta un archivo maestro en red.",
        en: "Set of automations combining VBScript + Python to integrate SAP with internal systems. One extracts picking data (LT23 transaction), applies business logic, and feeds a shared master file.",
      },
      {
        es: "Adicionalmente, dashboards en Power BI con DAX que transforman datos crudos en insights accionables para líderes operacionales — productividad por operador, métricas por ciudad y consolidación multi-transportadora.",
        en: "Additionally, Power BI dashboards with DAX that turn raw data into actionable insights — operator productivity, per-city metrics, and multi-carrier consolidation.",
      },
    ],
    tags: ["Python", "VBScript", "SAP", "Power BI", "DAX", "ETL"],
  },
  {
    estado: { es: "En diseño", en: "In design" },
    estadoTipo: "diseño",
    titulo: "Sendero",
    tituloEm: "App",
    tagline: {
      es: "Producto propio enfocado en outdoor y comunidad LATAM.",
      en: "Personal product focused on outdoor and LATAM community.",
    },
    parrafos: [
      {
        es: "Iniciativa propia que combina mis intereses personales (montañismo, miradores, exploración) con un producto digital pensado para usuarios reales en LATAM.",
        en: "Personal initiative blending my own interests (hiking, lookouts, exploration) with a digital product built for real LATAM users.",
      },
      {
        es: "Definiendo arquitectura inicial, modelo de negocio y MVP. Construir productos propios es la mejor forma de demostrar capacidad end-to-end.",
        en: "Defining initial architecture, business model, and MVP. Building your own products is the best way to prove end-to-end capability.",
      },
    ],
    tags: ["Product Design", "MVP", "Mobile-first", "FastAPI", "Next.js"],
  },
];

export interface Certificacion {
  titulo: string;
  emisor: string;
  fecha: Bilingue;
  categoria: Bilingue;
}

export const certificaciones: Certificacion[] = [
  {
    titulo: "Liberando el poder de los agentes de IA",
    emisor: "IBM",
    fecha: { es: "ago. 2025", en: "Aug. 2025" },
    categoria: { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
  },
  {
    titulo: "Introduction to HTML, CSS, & JavaScript",
    emisor: "IBM",
    fecha: { es: "abr. 2026", en: "Apr. 2026" },
    categoria: { es: "Frontend", en: "Frontend" },
  },
  {
    titulo: "Software Development on SAP HANA",
    emisor: "SkillUp",
    fecha: { es: "feb. 2026", en: "Feb. 2026" },
    categoria: { es: "Enterprise", en: "Enterprise" },
  },
  {
    titulo: "Curso de Power BI",
    emisor: "Platzi",
    fecha: { es: "feb. 2026", en: "Feb. 2026" },
    categoria: { es: "Data & BI", en: "Data & BI" },
  },
  {
    titulo: "Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
    emisor: "Platzi",
    fecha: { es: "2025", en: "2025" },
    categoria: { es: "Fundamentos", en: "Fundamentals" },
  },
  {
    titulo: "Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
    emisor: "Platzi",
    fecha: { es: "abr. 2025", en: "Apr. 2025" },
    categoria: { es: "Fundamentos", en: "Fundamentals" },
  },
];

// Helper para obtener texto bilingüe
export function tr(obj: Bilingue, idioma: Idioma): string {
  return obj[idioma];
}
