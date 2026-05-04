"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Idioma } from "@/datos/traducciones";

interface ContextoIdioma {
  idioma: Idioma;
  cambiarIdioma: (nuevo: Idioma) => void;
}

const ContextoIdiomaC = createContext<ContextoIdioma | undefined>(undefined);

export function ProveedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>("es");

  useEffect(() => {
    const guardado = localStorage.getItem("idioma") as Idioma | null;
    if (guardado === "es" || guardado === "en") setIdioma(guardado);
  }, []);

  const cambiarIdioma = (nuevo: Idioma) => {
    setIdioma(nuevo);
    localStorage.setItem("idioma", nuevo);
    document.documentElement.lang = nuevo;
  };

  return (
    <ContextoIdiomaC.Provider value={{ idioma, cambiarIdioma }}>
      {children}
    </ContextoIdiomaC.Provider>
  );
}

export function useIdioma() {
  const ctx = useContext(ContextoIdiomaC);
  if (!ctx) throw new Error("useIdioma debe usarse dentro de ProveedorIdioma");
  return ctx;
}
