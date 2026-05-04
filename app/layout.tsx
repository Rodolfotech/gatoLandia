


import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";

export const metadata: Metadata = {
  title: "Gatitos · Enciclopedia Felina",
  description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
 