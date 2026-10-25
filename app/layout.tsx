 
 
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrackingScripts from "./components/TrackingScripts";
import CookieBanner from "./components/CookieBanner";
import GoogleAdsense from "./components/GoogleAdsense";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { defaultOgImage } from "./data/categoryImages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";
const SITE_NAME = "AlmaGatuna · Enciclopedia Felina";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  title: {
    template: "%s · AlmaGatuna",
    default: SITE_NAME,
  },
  description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
  metadataBase: new URL(SITE_URL),
  // El PNG va primero: Google Search muestra mejor un PNG cuadrado de 48 px o más.
  icons: [
    { rel: "icon", url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    { rel: "icon", url: "/icon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
  ],
  verification: { google: "qmX0dopniMhIDRzWyOlV_pa74j0Z_rkhm3aCQRDKHRY" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
    locale: "es_CL",
    images: [{ url: `${SITE_URL}${defaultOgImage}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
    images: [`${SITE_URL}${defaultOgImage}`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
      </head>
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: SITE_NAME,
                url: SITE_URL,
                description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "correoalmagatuna@gmail.com",
                  contactType: "customer service",
                },
              },
            ]),
          }}
        />
        <Script id="adsense-pause" strategy="beforeInteractive">
          {`window.adsbygoogle = window.adsbygoogle || []; window.adsbygoogle.pauseAdRequests = 1;`}
        </Script>
        <GoogleAdsense />
        <TrackingScripts />
        <CookieBanner />
        <I18nProvider>
          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--charcoal)] focus:shadow-lg focus:outline-2 focus:outline-[var(--amber-dark)]"
          >
            Saltar al contenido
          </a>
          <Navbar />
          <main id="contenido" style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </I18nProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
 