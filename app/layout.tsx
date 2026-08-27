import type { Metadata, Viewport } from "next";
import { siteConfig } from "./site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DDM Company | Sve za vozilo u Novom Sadu",
    template: "%s | DDM Company",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "automotive",
  alternates: {
    canonical: "/",
    languages: { "sr-RS": "/" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "DDM Company | Sve za vozilo u Novom Sadu",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "DDM Company salon i servis u Novom Sadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DDM Company | Sve za vozilo u Novom Sadu",
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#111319",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang={siteConfig.language}><body>{children}</body></html>;
}
