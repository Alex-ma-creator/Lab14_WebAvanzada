import Head from "next/head";
const BASE_URL = "https://mi-sitio.com";
export default function SEO({ title, description, keywords, path = "/", image = "/images/seo-image.png" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`${BASE_URL}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${BASE_URL}${path}`} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
