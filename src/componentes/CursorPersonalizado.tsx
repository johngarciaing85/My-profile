"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorPersonalizado() {
  const [activo, setActivo] = useState(false);
  const [habilitado, setHabilitado] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xResorte = useSpring(x, { damping: 30, stiffness: 300 });
  const yResorte = useSpring(y, { damping: 30, stiffness: 300 });

  useEffect(() => {
    // Solo activar en pantallas con puntero fino (no táctil)
    const mq = window.matchMedia("(pointer: fine)");
    setHabilitado(mq.matches);

    if (!mq.matches) return;

    const moverCursor = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    const sobreInteractivo = (e: MouseEvent) => {
      const elemento = e.target as HTMLElement;
      if (elemento.closest("a, button")) {
        setActivo(true);
      } else {
        setActivo(false);
      }
    };

    window.addEventListener("mousemove", moverCursor);
    window.addEventListener("mouseover", sobreInteractivo);
    return () => {
      window.removeEventListener("mousemove", moverCursor);
      window.removeEventListener("mouseover", sobreInteractivo);
    };
  }, [x, y]);

  if (!habilitado) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x: xResorte, y: yResorte }}
    >
      <motion.div
        animate={{
          width: activo ? 48 : 24,
          height: activo ? 48 : 24,
          x: activo ? -12 : 0,
          y: activo ? -12 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full border-2 border-acento"
      />
    </motion.div>
  );
}
