"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";
import { logros, tr } from "@/datos/contenido";
import CabeceraSeccion from "./CabeceraSeccion";

export default function Logros() {
  const { idioma } = useIdioma();
  const t = traducciones.logros;

  return (
    <section id="logros" className="py-32 relative">
      <div className="contenedor">
        <CabeceraSeccion
          numero={t.numero}
          etiqueta={t.etiqueta[idioma]}
          descripcion={t.descripcion[idioma]}
        >
          {idioma === "es" ? (
            <>
              {t.titulo[idioma]} <em className="italic text-acento">{t.tituloEm[idioma]}</em>
              {t.tituloFin[idioma]}
            </>
          ) : (
            <>
              <em className="italic text-acento">{t.tituloEm[idioma]}</em> {t.tituloFin[idioma]}
            </>
          )}
        </CabeceraSeccion>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {logros.map((logro, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-fondo-elev border border-borde rounded-2xl p-7 hover:border-borde-claro transition-colors relative overflow-hidden"
            >
              <div className="font-display italic text-[56px] font-normal text-acento leading-none mb-3 tracking-tight">
                {logro.numero}
              </div>
              <div className="font-display text-xl font-medium mb-2 leading-tight">
                {tr(logro.titulo, idioma)}
              </div>
              <div className="text-sm text-texto-suave leading-relaxed">
                {tr(logro.descripcion, idioma)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
