import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://abhishek-kumar-ai-portfolio.vercel.app/sitemap.xml"
  };
}
