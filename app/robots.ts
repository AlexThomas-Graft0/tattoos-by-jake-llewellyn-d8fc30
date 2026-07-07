import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tattoos-by-jake-llewellyn-d8fc30.duckbyte.co/sitemap.xml",
  };
}
