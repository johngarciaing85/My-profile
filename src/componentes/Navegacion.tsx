"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIdioma } from "./ContextoIdioma";
import { traducciones } from "@/datos/traducciones";

export default function Navegacion() {
  const { idioma, cambiarIdioma } = useIdioma();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enlaces = [
    { href: "#sobre-mi", label: traducciones.nav.sobreMi[idioma] },
    { href: "#stack", label: traducciones.nav.stack[idioma] },
    { href: "#experiencia", label: traducciones.nav.experiencia[idioma] },
    { href: "#proyectos", label: traducciones.nav.proyectos[idioma] },
    { href: "#certificaciones", label: traducciones.nav.certificaciones[idioma] },
    { href: "#contacto", label: traducciones.nav.contacto[idioma] },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-borde bg-fondo/60" : "bg-fondo/40 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1240px] flex items-center justify-between">
        <a href="#" className="font-display text-[22px] font-medium italic tracking-tight">
          john<span className="text-acento">.</span>
          <em className="not-italic font-light">dev</em>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            {enlaces.map((e) => (
              <a
                key={e.href}
                href={e.href}
                className="font-mono text-[13px] text-texto-suave hover:text-texto transition-colors"
              >
                {e.label}
              </a>
            ))}
          </div>

          <div className="flex gap-1 bg-superficie p-1 rounded-full border border-borde">
            <button
              onClick={() => cambiarIdioma("es")}
              className={`px-3 py-1 rounded-full font-mono text-xs transition-all ${
                idioma === "es" ? "bg-texto text-fondo" : "text-texto-tenue hover:text-texto"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => cambiarIdioma("en")}
              className={`px-3 py-1 rounded-full font-mono text-xs transition-all ${
                idioma === "en" ? "bg-texto text-fondo" : "text-texto-tenue hover:text-texto"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
