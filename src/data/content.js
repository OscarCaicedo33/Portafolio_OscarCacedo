// Datos estáticos del portafolio — copy literal del design handoff.

// Número de WhatsApp para el botón de contacto (formato internacional sin '+').
export const WHATSAPP_NUMBER = '573124222627'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

// CV descargable — el archivo vive en public/ y se sirve desde la raíz.
export const CV_URL = '/cv-oscar-caicedo.pdf'

// Redes para el footer/contacto.
export const SOCIALS = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/oscarcaicedopulido31' },
  { label: 'GitHub', url: 'https://github.com/OscarCaicedo33' },
]

// Palabras que rota el efecto typewriter del hero.
export const ROLES = ['datos', 'Power BI', 'analítica de negocio', 'dashboards']

// Strip de métricas de impacto (Hero → Métricas). `value` es la parte numérica
// que se anima con count-up; prefix/suffix la enmarcan.
export const METRICS = [
  {
    prefix: '',
    value: 3,
    suffix: ' años',
    label: 'EXPERIENCIA',
    sub: 'En análisis de datos y desarrollo digital.',
  },
  {
    prefix: '+',
    value: 1,
    suffix: 'M filas / mes',
    label: 'VOLUMEN ETL',
    sub: 'Procesadas con Python, SQL, GA y Sprinklr.',
  },
  {
    prefix: '+',
    value: 15,
    suffix: '%',
    label: 'ENGAGEMENT',
    sub: 'En campañas digitales de Coca-Cola.',
  },
]

// Stack agrupado por categoría (sección Stack / Habilidades).
export const SKILLS = [
  { group: 'Lenguajes & Datos', items: ['Python', 'SQL', 'ETL'] },
  { group: 'BI & Visualización', items: ['Power BI', 'Dashboards', 'Plotly'] },
  {
    group: 'Analítica & Tracking',
    items: ['Google Analytics', 'Google Tag Manager', 'Sprinklr', 'Tubular'],
  },
  {
    group: 'Desarrollo & IA',
    items: ['Vue.js', 'APIs REST', 'IA Generativa (Prompt Engineering)'],
  },
]

// Certificaciones (sección Credenciales).
export const CERTIFICATIONS = [
  'Data Analysis and Visualization with Power BI',
  'Microsoft Data Modeling in Power BI',
  'Preparing Data for Analysis with Microsoft Excel',
  'Databases and SQL for Data Science with Python',
  'HackerRank SQL (Advanced) Certificate',
  'Creative Designing in Power BI',
]

// Formación académica (sección Credenciales).
export const EDUCATION = [
  {
    school: 'Universidad Santo Tomás',
    degree: 'Ingeniero Ambiental',
    date: '2010 — 2016',
  },
]

export const EXPERIENCES = [
  {
    company: 'Ogilvy Colombia',
    date: 'Julio 2023 — Presente',
    role: 'Social Listening & Data Analytics Specialist',
    bullets: [
      'Análisis de canales digitales y RRSS para Coca-Cola con Sprinklr, Tubular y Google Analytics.',
      'Dashboards en Power BI y Python para métricas clave de marketing — mejora de 10% en toma de decisiones.',
      'ETL de +1M registros mensuales integrando SQL, Python y Google Analytics para informes estratégicos.',
      'Optimización de campañas digitales de Coca-Cola con un +15% de engagement frente al baseline.',
    ],
  },
  {
    company: 'PeakU',
    date: 'Enero 2023 — Julio 2023',
    role: 'Desarrollador',
    bullets: [
      'Optimicé consultas SQL avanzadas reduciendo tiempo de procesamiento de informes en 10%.',
      'Interfaces responsivas con Vue.js y APIs RESTful para automatización de procesos de datos.',
    ],
  },
]

export const PROJECTS = [
  {
    tag: 'DATA ENGINEERING',
    title: 'Pokémon ETL Pipeline',
    desc: 'Pipeline ETL que consume PokéAPI, enriquece con Pandas y persiste en SQLite, con dashboard en Streamlit + Plotly, pruebas en Pytest, logging y reintentos.',
    stack: 'PYTHON · PANDAS · SQLITE · STREAMLIT · PLOTLY · PYTEST',
    live: true,
    url: 'https://pokemonetldashboard-zrmnhvoarevduuhizghjqt.streamlit.app/',
    graphic: 'spheres',
  },
  {
    tag: 'DATA ENGINEERING',
    title: 'ETL · Delitos en Colombia 2025',
    desc: 'Próximamente — proyecto en construcción.',
    stack: 'PYTHON · PANDAS · SQL · POWER BI',
    live: false,
    graphic: 'heatmap',
  },
  {
    tag: 'DATA ENGINEERING',
    title: 'ETL · Consumo Masivo Brasil 2025',
    desc: 'Próximamente — proyecto en construcción.',
    stack: 'PYTHON · PANDAS · SQL · STREAMLIT',
    live: false,
    graphic: 'donut',
  },
]
