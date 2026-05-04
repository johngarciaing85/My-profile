"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgresoScroll() {
  const { scrollYProgress } = useScroll();
  const escala = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-acento z-[100] origin-left"
      style={{ scaleX: escala }}
    />
  );
}
