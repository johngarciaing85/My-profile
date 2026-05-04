"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";
import { experiencias, educacion, tr } from "@/datos/contenido";
import CabeceraSeccion from "./CabeceraSeccion";

export default function Experiencia() {
  const { idioma } = useIdioma();
  const t = traducciones.experiencia;

  return (
    <section id="experiencia" className="py-32 relative">
      <div className="contenedor">
        <CabeceraSeccion numero={t.numero} etiqueta={t.etiqueta[idioma]}>
          {t.titulo[idioma]} <em className="italic text-acento">{t.tituloEm[idioma]}</em>
          {t.tituloFin[idioma]}
        </CabeceraSeccion>

        <div className="relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-borde-claro">
          {experiencias.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-14 last:pb-0"
            >
              <div
                className={`absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                  exp.actual
                    ? "border-acento bg-acento shadow-[0_0_16px_rgba(212,255,74,0.5)]"
                    : "border-texto-tenue bg-fondo"
                }`}
              />
              <div className="font-mono text-xs text-texto-tenue mb-1.5">{tr(exp.fecha, idioma)}</div>
              <h3 className="font-display text-[26px] font-medium tracking-tight mb-1 leading-tight">
                {tr(exp.cargo, idioma)}
              </h3>
              <div className="font-mono text-sm text-texto-suave mb-4">{exp.lugar}</div>
              <p className="text-[15px] leading-relaxed text-texto-suave mb-4">
                {tr(exp.descripcion, idioma)}
              </p>
              <ul className="space-y-3 mt-4">
                {exp.logros.map((logro, j) => (
                  <li
                    key={j}
                    className="text-sm leading-relaxed text-texto-suave pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-acento before:font-mono"
                  >
                    {tr(logro, idioma)}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {exp.stack.map((s, k) => (
                  <span
                    key={k}
                    className="font-mono text-[11px] text-texto-suave px-2.5 py-1 bg-superficie rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Educación */}
          {educacion.map((edu, i) => (
            <motion.div
              key={`edu-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-14 last:pb-0"
            >
              <div className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-texto-tenue bg-fondo" />
              <div className="font-mono text-xs text-texto-tenue mb-1.5">{edu.fecha}</div>
              <h3 className="font-display text-[26px] font-medium tracking-tight mb-1 leading-tight">
                {tr(edu.titulo, idioma)}
              </h3>
              <div className="font-mono text-sm text-texto-suave mb-4">
                {tr(edu.institucion, idioma)}
              </div>
              <p className="text-[15px] leading-relaxed text-texto-suave">
                {tr(edu.descripcion, idioma)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
