import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { config } from "@/lib/config";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: content.meta.title,
  description: `${content.meta.descriptionAr} — ${content.meta.descriptionEn}`,
  applicationName: "Watad",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/watad_favicon_32x32.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/watad_favicon_16x16.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
  },
  openGraph: {
    type: "website",
    url: config.siteUrl,
    title: content.meta.title,
    description: content.meta.descriptionEn,
    siteName: "Watad",
    images: [
      {
        // PNG export of watad_og_share_1200x630.svg — see README.
        url: "/watad_og_share_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Watad — B2B growth operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.descriptionEn,
    images: ["/watad_og_share_1200x630.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${plexArabic.variable} ${plexSans.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
