# Portafolio Personal — Oscar Caicedo

Landing page personal de **Oscar Caicedo**, Data Analyst & Especialista en Power BI. Una sola página (*one-page*) con scroll y anclas, tema oscuro/claro persistido, efecto *typewriter*, gráficos dibujados en CSS y animaciones al hacer scroll. Construida con **React + Vite + Tailwind CSS**.

![Vista previa — tema oscuro](docs/hero-dark.png)

---

## Inicio rápido

| Quiero... | Comando |
|-----------|---------|
| **Ver el sitio en desarrollo** | `npm run dev` |
| Instalar dependencias | `npm install` |
| Generar el build de producción | `npm run build` |
| Previsualizar el build | `npm run preview` |

> El servidor de desarrollo se abre en `http://localhost:5173`. El build de producción se genera en la carpeta `dist/`.

---

## Vista previa

| Tema oscuro | Tema claro |
|:-----------:|:----------:|
| ![Hero oscuro](docs/hero-dark.png) | ![Hero claro](docs/hero-light.png) |

<details>
<summary><strong>Ver página completa (oscuro / claro)</strong></summary>

| | |
|:-:|:-:|
| ![Página completa oscuro](docs/preview-dark-full.png) | ![Página completa claro](docs/preview-light-full.png) |

</details>

---

## Arquitectura de componentes

```mermaid
flowchart TD
    A([main.jsx]) --> B[App.jsx]
    B --> T{{useTheme · localStorage}}
    B --> N[Navbar + ThemeToggle]
    B --> S1[Hero · useTypewriter]
    B --> S2[Metrics · useCountUp]
    B --> S3[About]
    B --> S4[Skills]
    B --> S5[Experience]
    B --> S6[Projects]
    B --> S7[Credentials]
    B --> S8[Contact]
    S1 --> G1[BarChart]
    S6 --> G2[Spheres · Heatmap · Donut]
    B -.datos.-> D[(data/content.js)]
    S2 & S3 & S4 & S5 & S6 & S7 -.scroll reveal.-> R[useInView]
    T -.data-theme.-> C[/index.css · tokens dark/light/]
```

---

## ¿Qué incluye?

| Sección | Descripción |
|---------|-------------|
| **Hero** | Nombre, rol con efecto *typewriter* (datos · Power BI · analítica · dashboards) y tarjeta de datos con gráfica de barras tipo ecualizador. |
| **Métricas** | Indicadores de impacto con *count-up* animado: 3 años · +1M filas/mes · +15% engagement. |
| **Sobre mí** | Perfil profesional + foto. |
| **Stack** | Habilidades agrupadas: lenguajes & datos, BI, analítica & tracking, desarrollo & IA. |
| **Experiencia** | Ogilvy Colombia y PeakU, con logros medibles. |
| **Proyectos** | Tarjetas con gráficos en CSS (esferas, heatmap, dona) y enlace en vivo al dashboard de Pokémon ETL. |
| **Credenciales** | Certificaciones y formación académica. |
| **Contacto** | Botón de WhatsApp + enlaces a LinkedIn y GitHub. |

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| **UI** | React 18 |
| **Build** | Vite 6 |
| **Estilos** | Tailwind CSS 3 (*design tokens* como variables CSS para el theming) |
| **Tipografías** | Sora · IBM Plex Mono (Google Fonts) |
| **Animación** | IntersectionObserver + CSS (respeta `prefers-reduced-motion`) |

---

## Estructura del proyecto

```
portfolio/
├── index.html                      <- HTML raíz + script anti-flash de tema
├── package.json                    <- Dependencias y scripts
├── vite.config.js                  <- Configuración de Vite
├── tailwind.config.js              <- Colores mapeados a variables CSS, fuentes, keyframes
├── postcss.config.js
│
├── public/
│   ├── oscar.png                   <- Foto de perfil (solo en "Sobre mí")
│   └── cv-oscar-caicedo.pdf        <- CV descargable
│
├── docs/                           <- Capturas para este README
│
└── src/
    ├── main.jsx                    <- Punto de entrada
    ├── App.jsx                     <- Composición de secciones
    ├── index.css                   <- Tokens de color (dark/light) + animaciones
    │
    ├── data/
    │   └── content.js              <- Experiencia, proyectos, skills, métricas, certificaciones
    │
    ├── hooks/
    │   ├── useTheme.js             <- Tema dark/light persistido en localStorage
    │   ├── useTypewriter.js        <- Efecto máquina de escribir del hero
    │   ├── useInView.js            <- IntersectionObserver para scroll reveal
    │   ├── useCountUp.js           <- Animación numérica de las métricas
    │   ├── useScrollSpy.js         <- Resalta la sección activa en el navbar
    │   └── usePrefersReducedMotion.js
    │
    └── components/
        ├── Navbar.jsx · ThemeToggle.jsx
        ├── Hero.jsx · Section.jsx · About.jsx
        ├── Metrics.jsx · Skills.jsx
        ├── Experience.jsx · ExperienceItem.jsx
        ├── Projects.jsx · ProjectCard.jsx
        ├── Credentials.jsx · Contact.jsx
        └── graphics/               <- Gráficos en CSS (sin imágenes)
            ├── BarChart.jsx        <- Barras ecualizador del hero
            ├── Spheres.jsx         <- Esferas flotantes (Pokémon ETL)
            ├── HeatmapGraphic.jsx  <- Mapa de densidad (Delitos Colombia)
            ├── DonutGraphic.jsx    <- Dona giratoria (Consumo Brasil)
            ├── MetricGraphic.jsx
            └── WipBox.jsx
```

---

## Características destacadas

- **Tema oscuro/claro** con toggle, persistido en `localStorage` y sin parpadeo al cargar (script inline en `index.html`).
- **Theming por variables CSS**: cambiar de tema solo conmuta `data-theme` en `<html>` y todos los tokens se recalculan.
- **Gráficos 100% en CSS** (barras, esferas, heatmap, dona) — sin imágenes, adaptados al color de acento del tema.
- **Movimiento con propósito**: typewriter, count-up, reveals al hacer scroll, barras tipo ecualizador y hover en tarjetas. Todo se desactiva con `prefers-reduced-motion`.
- **Responsive**: las grids de 2 columnas colapsan a 1 en móvil.

---

Diseñado y construido por **Oscar Caicedo** · React · Vite · Tailwind CSS
