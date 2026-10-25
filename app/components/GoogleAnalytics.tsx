import Script from "next/script";
import GaPageView from "./GaPageView";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/** Google Analytics 4. Se monta solo con consentimiento (ver TrackingScripts). */
export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script id="ga-loader" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });`}
      </Script>
      <GaPageView />
    </>
  );
}
