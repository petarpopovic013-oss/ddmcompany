import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DDM Company | Sve za vozilo u Novom Sadu",
  description: "Servis i održavanje, rent-a-car, Keeway i Morbidelli motocikli, Vesta i Trigano prikolice i ugradnja auto-kuka u Novom Sadu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="sr"><body>{children}</body></html>;
}
