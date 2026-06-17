# Portafolio · Oscar Caicedo

Landing page personal (one-page) de **Oscar Caicedo** — Data Analyst & Especialista en Power BI.

Construida con **React + Vite + Tailwind CSS**, con tema oscuro/claro persistido, efecto typewriter, gráficos en CSS y animaciones al hacer scroll (respeta `prefers-reduced-motion`).

## Secciones

Hero → Métricas → Sobre mí → Stack → Experiencia → Proyectos → Credenciales → Contacto.

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Stack técnico

- **React 18** + **Vite 6**
- **Tailwind CSS 3** (design tokens como variables CSS para el theming)
- Tipografías: **Sora** e **IBM Plex Mono** (Google Fonts)

## Estructura

```
src/
├── components/        # Navbar, Hero, secciones y tarjetas
│   └── graphics/      # gráficos en CSS (barras, esferas, heatmap, dona…)
├── hooks/             # useTheme, useTypewriter, useInView, useCountUp, useScrollSpy
├── data/content.js    # datos de experiencia, proyectos, skills, métricas…
└── index.css          # tokens de color (dark/light) + animaciones
```

---

Diseñado y construido por Oscar Caicedo.
