export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api", "/404"],
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}
