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
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),

  title: {
    default: content.meta.title,
    template: `%s — Watad`,
  },
  description: `${content.meta.descriptionAr} — ${content.meta.descriptionEn}`,
  keywords: [
    "عمليات النمو",
    "B2B growth operations",
    "B2B sales",
    "السعودية",
    "الخليج",
    "مصر",
    "Watad",
    "وتد",
    "KSA",
    "GCC",
    "Egypt",
    "qualified meetings",
    "لقاءات مؤهلة",
    "pipeline generation",
    "توليد فرص النمو",
  ],
  applicationName: "Watad",
  authors: [{ name: "Watad", url: config.siteUrl }],
  creator: "Watad",
  publisher: "Watad",

  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      "en-US": "/",
    },
  },

  icons: {
    icon: [
      { url: "/watad_favicon_32x32.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/watad_favicon_16x16.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    // Apple touch icon — references the A-mark SVG as a fallback.
    // Replace with a 180×180 PNG before App Store / PWA submission.
    apple: [{ url: "/watad_A_wordmark.svg", sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    url: config.siteUrl,
    title: content.meta.title,
    description: content.meta.descriptionEn,
    siteName: "Watad",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/watad_og_share_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Watad — B2B growth operations · KSA · GCC · Egypt",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.descriptionEn,
    images: [
      {
        url: "/watad_og_share_1200x630.png",
        alt: "Watad — B2B growth operations · KSA · GCC · Egypt",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Structured data hint for search engines
  other: {
    "geo.region": "SA",
    "geo.placename": config.cityEn,
    "og:locale:alternate": "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#faf9f5" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plexArabic.variable} ${plexSans.variable}`}
    >
      <head>
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
