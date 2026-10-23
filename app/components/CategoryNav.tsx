"use client";

import { usePathname } from "next/navigation";
import { useArticleBrowser } from "./ArticleBrowser";
import { parseCategoryPath } from "../lib/routes";
import { FeedControls } from "./ArticleFeed";

/** Buscador y etiquetas de categoría, iguales a los de la home. */
export default function CategoryNav() {
  const { feed, browsing, start } = useArticleBrowser();
  const onTopic = Boolean(parseCategoryPath(usePathname())?.topicSlug);

  return (
    <div className="border-b border-black/5 bg-(--cream) pb-4 pt-4">
      <div className="page-shell">
        <FeedControls feed={feed} browsing={browsing} onInteract={start} showSearch={!onTopic} />
      </div>
    </div>
  );
}
