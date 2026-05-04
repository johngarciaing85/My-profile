import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "John García — Backend Developer · Automatización & IA",
  description:
    "Backend developer en Medellín. Python · FastAPI · Next.js · Docker. Migración de sistemas críticos, automatizaciones SAP, integración de IA. Disponible para roles remotos.",
  keywords: [
    "backend developer",
    "FastAPI",
    "Python",
    "Next.js",
    "Medellín",
    "Colombia",
    "automatización",
    "integración IA",
    "Anthropic API",
    "remote",
  ],
  openGraph: {
    title: "John García — Backend Developer",
    description:
      "Backend developer construyendo sistemas reales con Python, FastAPI y IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="font-cuerpo">{children}</body>
    </html>
  );
}
