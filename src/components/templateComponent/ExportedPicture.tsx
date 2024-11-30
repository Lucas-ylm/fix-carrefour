import { env } from "@/lib/env";
import { srcToSrcset } from "@/lib/src-to-srcset";
import { CSSProperties } from "react";

type ExportedPictureProps = {
  src: string;
  sources?: {
    src: string;
    widths: number[];
    media: string;
  }[];
  alt: string;
  loading?: "eager" | "lazy";
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
};

export default function ExportedPicture({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  sources,
  className,
  style,
}: ExportedPictureProps) {
  if (env.DEV) {
    return (
      <div className={className} style={style}>
        <img
          src={env.BASE_PATH + src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <picture className={className}>
      {sources?.map((source) => (
        <source
          key={source.src}
          srcSet={srcToSrcset(
            env.BASE_PATH + source.src,
            source.widths,
            "webp"
          )}
          media={source.media}
        />
      ))}
      <img
        src={env.BASE_PATH + src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
      />
    </picture>
  );
}
