import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cube-lessons.vercel.app";

  const routes = [
    "",
    "/cubePieces",
    "/movements",
    "/firstTwoLayers",
    "/orientationLastLayer",
    "/permutationLastLayer",
    "/timer",
    "/solveTimes",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap for each locale
  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });
  });

  return sitemap;
}
