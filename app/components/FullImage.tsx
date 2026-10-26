import Image from "next/image";

interface FullImageProps {
  src: string;
  alt: string;
  sizes?: string;
  quality?: number;
  className?: string;
}

/**
 * Regla única para las imágenes de tarjetas y artículos: ocupan todo el ancho de su contenedor
 * y conservan su proporción original, sin recortes.
 */
export default function FullImage({ src, alt, sizes = "100vw", quality, className = "" }: FullImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={1000}
      quality={quality}
      unoptimized={src.startsWith("http")}
      sizes={sizes}
      className={`block h-auto w-full ${className}`}
    />
  );
}
