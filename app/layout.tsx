 
 
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleAdsense from "./components/GoogleAdsense";

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
    template: `%s · ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
  metadataBase: new URL(SITE_URL),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  verification: { google: "qmX0dopniMhIDRzWyOlV_pa74j0Z_rkhm3aCQRDKHRY" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
    locale: "es_CL",
    images: [{ url: `${SITE_URL}/featuredcontent/cuidadoIntegral.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
    images: [`${SITE_URL}/featuredcontent/cuidadoIntegral.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://i.postimg.cc" />
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
        <GoogleAnalytics />
        <GoogleAdsense />
        <I18nProvider>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
 