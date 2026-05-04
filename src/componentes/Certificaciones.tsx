"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";
import { certificaciones, tr } from "@/datos/contenido";
import CabeceraSeccion from "./CabeceraSeccion";

export default function Certificaciones() {
  const { idioma } = useIdioma();
  const t = traducciones.certificaciones;

  return (
    <section id="certificaciones" className="py-32 relative">
      <div className="contenedor">
        <CabeceraSeccion
          numero={t.numero}
          etiqueta={t.etiqueta[idioma]}
          descripcion={t.descripcion[idioma]}
        >
          {t.titulo[idioma]} <em className="italic text-acento">{t.tituloEm[idioma]}</em>
          {t.tituloFin[idioma]}
        </CabeceraSeccion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificaciones.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-fondo-elev border border-borde rounded-xl p-6 hover:border-borde-claro transition-colors group relative overflow-hidden"
            >
              {/* Acento sutil al hover */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-acento group-hover:h-full transition-[height] duration-500" />

              <div className="flex items-start justify-between mb-4">
                <div className="font-mono text-[10px] text-texto-tenue uppercase tracking-[0.1em] px-2 py-1 bg-superficie rounded">
                  {tr(cert.categoria, idioma)}
                </div>
                <div className="font-mono text-[11px] text-texto-tenue">{tr(cert.fecha, idioma)}</div>
              </div>

              <h3 className="font-display text-[18px] font-medium leading-tight mb-3 tracking-tight">
                {cert.titulo}
              </h3>

              <div className="font-mono text-xs text-texto-suave flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-acento" />
                {cert.emisor}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
