import Link from "next/link";
import SEO from "../components/SEO";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <>
      <SEO title="Blog de SEO y Next.js | Mi Sitio Optimizado" description="Artículos sobre SEO, meta tags y rendimiento web con Next.js." keywords="blog, SEO, Next.js" path="/blog" />
      <h1>Blog</h1>
      <p className="lead">Artículos sobre SEO, meta tags y rendimiento web con Next.js.</p>
      <div className="results">
        {posts.map((p) => (
          <article className="serp" key={p.slug}>
            <span className="u">mi-sitio.com › blog › {p.slug}</span>
            <Link href={`/blog/${p.slug}`} className="t">{p.title}</Link>
            <span className="date">{p.updatedAt}</span>
          </article>
        ))}
      </div>
    </>
  );
}