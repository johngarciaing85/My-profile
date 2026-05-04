"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  numero: string;
  etiqueta: string;
  children: ReactNode;
  descripcion?: string;
}

export default function CabeceraSeccion({ numero, etiqueta, children, descripcion }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="font-mono text-[13px] text-texto-tenue mb-4">
        {numero} — {etiqueta}
      </div>
      <h2 className="font-display font-normal tracking-[-0.03em] leading-none mb-5 text-[clamp(36px,5vw,64px)]">
        {children}
      </h2>
      {descripcion && (
        <p className="text-[17px] text-texto-suave max-w-[640px] leading-relaxed">{descripcion}</p>
      )}
    </motion.div>
  );
}
