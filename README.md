# Portafolio · John García Cely

Landing page personal construida con **Next.js 15 + Tailwind CSS + Framer Motion**, lista para desplegar en Vercel.

## ✨ Características

-  Dark mode minimalista con tipografía editorial (Fraunces + Geist + JetBrains Mono)
-  Bilingüe (Español ↔ Inglés) con persistencia en localStorage
-  Animaciones premium con Framer Motion (entrada escalonada, hover, scroll)
-  Cursor personalizado con efecto magnetic en elementos interactivos
-  Indicador de progreso de scroll
-  Totalmente responsive (mobile-first)
-  Accesible (semántica HTML correcta, contraste AAA)
-  Optimizado para Core Web Vitals (fuentes con next/font, lazy loading)
-  SEO listo (metadata completa, OpenGraph)

##  Desarrollo local

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev

# Build para producción
npm run build
npm run start
```

Abrir [http://localhost:3000](http://localhost:3000).

##  Deploy en Vercel (3 pasos)

### Opción 1: Desde GitHub (recomendado)

1. Sube este repo a GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/johngarciaing85/portafolio.git
   git push -u origin main
   ```

### Editar contenido

- **Stack, proyectos, experiencia, certificaciones**: `src/datos/contenido.ts`
- **Textos bilingües**: `src/datos/traducciones.ts`

### Cambiar el color de acento

En `tailwind.config.js` modifica:

```js
acento: '#d4ff4a',  // cámbialo por tu color
'acento-suave': 'rgba(212, 255, 74, 0.08)',
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con fuentes
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y grano
├── componentes/
│   ├── ContextoIdioma.tsx  # Hook de internacionalización
│   ├── Navegacion.tsx      # Nav con toggle ES/EN
│   ├── Hero.tsx            # Sección principal
│   ├── Marquesina.tsx      # Stack scrolling infinito
│   ├── SobreMi.tsx         # Bio + estadísticas
│   ├── Logros.tsx          # Métricas de impacto
│   ├── Stack.tsx           # Grid de tecnologías
│   ├── Experiencia.tsx     # Timeline laboral
│   ├── Proyectos.tsx       # Portafolio de productos
│   ├── Certificaciones.tsx # Certificados IBM/Platzi/SkillUp
│   ├── Contacto.tsx        # CTA + footer
│   ├── CabeceraSeccion.tsx # Componente reutilizable
│   ├── CursorPersonalizado.tsx # Cursor magnetic
│   └── ProgresoScroll.tsx  # Barra de progreso
└── datos/
    ├── contenido.ts        # Datos estructurados (proyectos, exp, etc.)
    └── traducciones.ts     # Diccionario ES/EN
```

##  Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animaciones**: Framer Motion 11
- **Tipografía**: Fraunces, Geist, JetBrains Mono (next/font)
- **TypeScript**: Strict mode
- **Deploy**: Vercel (Edge Network)

---

**Construido con código y café ☕**
