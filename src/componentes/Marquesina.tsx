"use client";

const items = [
  "FastAPI", "Python", "Docker", "Prometheus", "Next.js", "React",
  "PostgreSQL", "JWT", "SQLAlchemy", "Power BI", "SAP", "Anthropic API",
];

export default function Marquesina() {
  return (
    <div className="border-t border-b border-borde py-7 overflow-hidden bg-fondo-elev">
      <div className="flex gap-16 animate-desplazar whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display italic text-[28px] text-texto-suave font-normal flex items-center"
          >
            {item}
            <span className="ml-16 text-acento not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
