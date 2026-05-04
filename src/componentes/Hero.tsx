"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";

const variantesContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const variantesItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { idioma } = useIdioma();
  const t = traducciones.hero;

  return (
    <section className="min-h-screen flex items-center pt-36 pb-20 relative overflow-hidden">
      {/* Glow ambiental */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 255, 74, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="contenedor">
        <motion.div
          variants={variantesContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-end"
        >
          <div>
            <motion.div variants={variantesItem} className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-texto-suave px-4 py-2 border border-borde-claro rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-acento animate-pulso-acento" />
              {t.estado[idioma]}
            </motion.div>

            <motion.h1
              variants={variantesItem}
              className="font-display font-normal leading-[0.96] tracking-[-0.04em] mb-8 text-[clamp(44px,7.5vw,96px)]"
            >
              {t.titulo1[idioma]}
              <br />
              <em className="italic text-acento font-light">{t.titulo2[idioma]}</em>
              <br />
              {t.titulo3a[idioma]}{" "}
              <span className="subrayado">{t.titulo3b[idioma]}</span> {t.titulo3c[idioma]}
            </motion.h1>

            <motion.p variants={variantesItem} className="text-[19px] text-texto-suave max-w-[600px] mb-10 leading-relaxed">
              {t.descripcion[idioma]}{" "}
              <strong className="text-texto font-medium">Python · FastAPI · Docker · Next.js</strong>.{" "}
              {t.descripcion2[idioma]}{" "}
              <strong className="text-texto font-medium">Prometheus</strong>.
            </motion.p>

            <motion.div variants={variantesItem} className="flex gap-4 flex-wrap">
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 font-mono text-[13px] font-medium rounded-lg bg-acento text-fondo hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(212,255,74,0.4)] transition-all"
              >
                {t.ctaPrimario[idioma]} →
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 font-mono text-[13px] font-medium rounded-lg bg-transparent text-texto border border-borde-claro hover:border-texto-suave hover:bg-superficie transition-all"
              >
                {t.ctaSecundario[idioma]}
              </a>
            </motion.div>
          </div>

          <motion.div variants={variantesItem} className="border-l border-borde pl-8">
            {[
              { label: "Location", value: "Medellín, Colombia 🇨🇴" },
              { label: t.metaDisponibilidad[idioma], value: t.metaDisponibilidadValor[idioma] },
              { label: t.metaIdiomas[idioma], value: "Español · English (B2)" },
              { label: t.metaEspecialidad[idioma], value: t.metaEspecialidadValor[idioma] },
            ].map((m, i) => (
              <motion.div
                key={i}
                variants={variantesItem}
                className="mb-7 last:mb-0"
              >
                <div className="font-mono text-[11px] text-texto-tenue uppercase tracking-[0.1em] mb-2">
                  {m.label}
                </div>
                <div className="text-[15px] text-texto">{m.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
