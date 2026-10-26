import Link from "next/link";
import { editorialAuthor } from "@/app/data/authors";

/** Firma del artículo: nombre del autor enlazado a su biografía. */
export default function ArticleByline() {
  return (
    <p className="m-0 text-[0.85rem] text-(--mid)">
      Por{" "}
      <Link
        href={editorialAuthor.url}
        rel="author"
        className="font-semibold text-(--charcoal) underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
      >
        {editorialAuthor.name}
      </Link>
      {" · "}
      {editorialAuthor.role}
    </p>
  );
}
