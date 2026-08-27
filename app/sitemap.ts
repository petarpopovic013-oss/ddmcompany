import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export const dynamic = "force-static";

const lastModified = new Date("2026-08-27");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteConfig.url}/images/ddm-location.webp`,
        `${siteConfig.url}/images/ddm-exterior.webp`,
        `${siteConfig.url}/images/ddm-workshop.webp`,
      ],
    },
    {
      url: `${siteConfig.url}/auto-servis`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${siteConfig.url}/images/ddm-auto-servis-novi-sad.webp`],
    },
  ];
}
