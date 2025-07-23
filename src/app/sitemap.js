export default async function sitemap() {
  const baseUrl =  "https://tabedaars.com"; // fallback if not defined

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      changefreq: "monthly",
      priority: 1.0,
    },
  ];

  return staticRoutes;
}
