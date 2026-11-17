import Image from "next/image";
import dynamic from "next/dynamic";
import SEO from "../components/SEO";
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <SEO title="Mi Sitio Optimizado - Home" description="Aprende sobre optimización SEO y rendimiento en Next.js." keywords="Next.js, SEO, optimización web" path="/" />
      <h1>Bienvenido a mi página <mark>optimizada</mark></h1>
      <p className="lead">Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <div className="searchbar" role="img" aria-label="Búsqueda de ejemplo: mi sitio optimizado">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <span>mi sitio optimizado</span>
      </div>
      <div className="serp">
        <span className="u">mi-sitio.com</span>
        <span className="t" style={{ color: "var(--link)" }}>Mi Sitio Optimizado - Home</span>
        <p className="d">Aprende sobre <mark>optimización</mark> SEO y rendimiento en Next.js.</p>
      </div>

      <div className="frame">
        <Image src="/images/seo-image.png" width={800} height={400} alt="Ejemplo de imagen optimizada" priority />
      </div>
      <div className="note"><DynamicComponent /></div>
    </>
  );
}