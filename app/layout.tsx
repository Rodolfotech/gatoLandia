 
 
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleAdsense from "./components/GoogleAdsense";

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
    template: "%s · Gatitos · Enciclopedia Felina",
    default: "Gatitos · Enciclopedia Felina",
  },
  description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gato-landia.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Gatitos · Enciclopedia Felina",
    title: "Gatitos · Enciclopedia Felina",
    description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gatitos · Enciclopedia Felina",
    description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
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
 