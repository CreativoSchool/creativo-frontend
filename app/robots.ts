import type { MetadataRoute } from "next";

/**
 * WAJIB untuk output: "export"
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://creativo-school.com/sitemap.xml",
  };
}
