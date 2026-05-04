"use client";

import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";
import CabeceraSeccion from "./CabeceraSeccion";

export default function SobreMi() {
  const { idioma } = useIdioma();
  const t = traducciones.sobreMi;
  const tEst = traducciones.estadisticas;

  const estadisticas = [
    { num: "5", suf: "+", label: tEst.aniosProf[idioma] },
    { num: "100K", suf: "+", label: tEst.registros[idioma] },
    { num: "21", suf: "", label: idioma === "es" ? "Repos en GitHub" : "GitHub repos" },
    { num: "∞", suf: "", label: tEst.aprendizaje[idioma] },
  ];

  return (
    <section id="sobre-mi" className="py-32 relative">
      <div className="contenedor">
        <CabeceraSeccion numero={t.numero} etiqueta={t.etiqueta[idioma]}>
          {t.titulo[idioma]} <em className="italic text-acento">{t.tituloEm[idioma]}</em> {t.tituloFin[idioma]}
        </CabeceraSeccion>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {[t.parrafo1, t.parrafo2, t.parrafo3].map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.75] text-texto-suave">
                {p[idioma]}
              </p>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 gap-px bg-borde border border-borde rounded-xl overflow-hidden">
            {estadisticas.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-fondo-elev p-7"
              >
                <div className="font-display text-5xl font-normal leading-none mb-2 tracking-tight">
                  <em className="italic text-acento">{e.num}</em>
                  {e.suf && <span className="text-2xl text-texto-suave">{e.suf}</span>}
                </div>
                <div className="font-mono text-[11px] text-texto-suave uppercase tracking-wider">
                  {e.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
