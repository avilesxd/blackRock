import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blackrockteam.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://blackrockteam.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
