import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const links = [["/", "Inicio"], ["/blog", "Blog"], ["/contacto", "Contacto"]];
  const activo = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <main className={inter.className}>
      <header className="site-header">
        <div className="wrap">
          <Link href="/" className="brand">mi<span>sitio</span></Link>
          <nav className="nav" aria-label="Principal">
            {links.map(([href, texto]) => (
              <Link key={href} href={href} className={activo(href) ? "active" : ""}>{texto}</Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="wrap page">
        <Component {...pageProps} />
      </div>
      <footer className="site-footer">
        <div className="wrap">Proyecto de laboratorio: optimización y SEO con Next.js</div>
      </footer>
    </main>
  );
}
export default MyApp;