"use client";

import { useEffect } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: "auto" | "horizontal" | "vertical" | "rectangle";
  style?: React.CSSProperties;
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  style = { display: "block" },
}: AdBannerProps) {
  useEffect(() => {
    if (!CLIENT_ID) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", (e as Error).message);
    }
  }, []);

  if (!CLIENT_ID) return null;

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={CLIENT_ID}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
