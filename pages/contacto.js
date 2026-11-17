import SEO from "../components/SEO";

export default function Contacto() {
  return (
    <>
      <SEO title="Contacto | Mi Sitio Optimizado" description="Contáctanos para consultas sobre SEO y optimización web." keywords="contacto, SEO" path="/contacto" />
      <h1>Contacto</h1>
      <p className="lead">Escríbenos para consultas sobre SEO y optimización web.</p>
      <a className="mail" href="mailto:escribenos@mi-sitio.com">escribenos@mi-sitio.com</a>
    </>
  );
}