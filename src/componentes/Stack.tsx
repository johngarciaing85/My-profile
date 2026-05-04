"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";
import { stack } from "@/datos/contenido";
import CabeceraSeccion from "./CabeceraSeccion";

export default function Stack() {
  const { idioma } = useIdioma();
  const t = traducciones.stack;

  return (
    <section id="stack" className="py-32 relative">
      <div className="contenedor">
        <CabeceraSeccion
          numero={t.numero}
          etiqueta={t.etiqueta[idioma]}
          descripcion={t.descripcion[idioma]}
        >
          {t.titulo[idioma]} <em className="italic text-acento">{t.tituloEm[idioma]}</em>{" "}
          {t.tituloFin[idioma]}
        </CabeceraSeccion>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-px bg-borde border border-borde rounded-xl overflow-hidden">
          {stack.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.08 }}
              className="bg-fondo-elev p-8 hover:bg-superficie transition-colors relative group"
            >
              <div className="font-mono text-[11px] text-texto-tenue uppercase tracking-wider mb-4">
                {cat.categoria}
              </div>
              <div className="font-display text-2xl font-medium mb-3 tracking-tight">
                {cat.titulo}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-mono text-xs text-texto-suave px-2.5 py-1 border border-borde-claro rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
