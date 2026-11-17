import { posts } from "../../data/posts";
const BASE_URL = "https://mi-sitio.com";
export default async function handler(req, res) {
  const estaticas = [{ url: "/" }, { url: "/blog" }, { url: "/contacto" }];
  // Rutas dinámicas desde la "base de datos" (data/posts.js); aquí podría ir un fetch a un CMS
  const dinamicas = posts.map((p) => ({ url: `/blog/${p.slug}`, lastmod: p.updatedAt }));
  const urls = [...estaticas, ...dinamicas];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${BASE_URL}${u.url}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`).join("\n")}
</urlset>`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
