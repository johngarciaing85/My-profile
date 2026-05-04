"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";
import { proyectos, tr } from "@/datos/contenido";
import CabeceraSeccion from "./CabeceraSeccion";

export default function Proyectos() {
  const { idioma } = useIdioma();
  const t = traducciones.proyectos;

  return (
    <section id="proyectos" className="py-32 relative">
      <div className="contenedor">
        <CabeceraSeccion numero={t.numero} etiqueta={t.etiqueta[idioma]}>
          {t.titulo[idioma]} <em className="italic text-acento">{t.tituloEm[idioma]}</em>
          {t.tituloFin[idioma]}
        </CabeceraSeccion>

        <div className="flex flex-col gap-6">
          {proyectos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="border border-borde rounded-2xl p-12 bg-fondo-elev hover:border-borde-claro transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acento to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
                <div>
                  <div
                    className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] mb-6 ${
                      p.estadoTipo === "vivo" || p.estadoTipo === "diseño"
                        ? "text-acento"
                        : "text-texto-suave"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        p.estadoTipo === "vivo" || p.estadoTipo === "diseño"
                          ? "bg-acento"
                          : "bg-texto-suave"
                      }`}
                    />
                    {tr(p.estado, idioma)}
                  </div>
                  <h3 className="font-display text-[40px] font-normal tracking-tight leading-none mb-4">
                    {p.titulo} <em className="italic">{p.tituloEm}</em>
                  </h3>
                  <p className="text-[15px] text-texto-suave leading-relaxed">{tr(p.tagline, idioma)}</p>
                </div>

                <div>
                  {p.parrafos.map((parr, j) => (
                    <p key={j} className="text-base leading-relaxed text-texto mb-4 last:mb-0">
                      {tr(parr, idioma)}
                    </p>
                  ))}
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {p.tags.map((tag, k) => (
                      <span
                        key={k}
                        className="font-mono text-[11px] text-texto-suave px-2.5 py-1 bg-superficie rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
