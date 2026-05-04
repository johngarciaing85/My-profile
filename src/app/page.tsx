import { ProveedorIdioma } from "@/componentes/ContextoIdioma";
import Navegacion from "@/componentes/Navegacion";
import Hero from "@/componentes/Hero";
import Marquesina from "@/componentes/Marquesina";
import SobreMi from "@/componentes/SobreMi";
import Logros from "@/componentes/Logros";
import Stack from "@/componentes/Stack";
import Experiencia from "@/componentes/Experiencia";
import Proyectos from "@/componentes/Proyectos";
import Certificaciones from "@/componentes/Certificaciones";
import Contacto from "@/componentes/Contacto";
import CursorPersonalizado from "@/componentes/CursorPersonalizado";
import ProgresoScroll from "@/componentes/ProgresoScroll";

export default function Pagina() {
  return (
    <ProveedorIdioma>
      <ProgresoScroll />
      <CursorPersonalizado />
      <Navegacion />
      <main>
        <Hero />
        <Marquesina />
        <SobreMi />
        <Logros />
        <Stack />
        <Experiencia />
        <Proyectos />
        <Certificaciones />
        <Contacto />
      </main>
    </ProveedorIdioma>
  );
}
