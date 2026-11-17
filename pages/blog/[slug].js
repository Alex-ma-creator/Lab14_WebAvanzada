import Link from "next/link";
import SEO from "../../components/SEO";
import { posts } from "../../data/posts";

export async function getStaticPaths() {
  return { paths: posts.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}
export async function getStaticProps({ params }) {
  return { props: { post: posts.find((p) => p.slug === params.slug) } };
}
export default function Post({ post }) {
  return (
    <>
      <SEO title={`${post.title} | Mi Sitio Optimizado`} description={`Lee el artículo: ${post.title}`} keywords={`${post.title}, SEO`} path={`/blog/${post.slug}`} />
      <Link href="/blog">Volver al blog</Link>
      <h1 style={{ marginTop: 16 }}>{post.title}</h1>
      <p className="lead">Actualizado el {post.updatedAt}</p>
    </>
  );
}