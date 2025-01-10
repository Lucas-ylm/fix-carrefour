import { env } from "@/lib/env";
import { srcToSrcset } from "@/lib/src-to-srcset";
import styles from "./exportedPicture.module.scss";

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
  priority?: boolean;
  style?: React.CSSProperties;
  credit?: string;
};


export default function ExportedPicture({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  sources,
  className,
  priority,
  style,
  credit,
}: Readonly<ExportedPictureProps>) {
  if (env.DEV) {
    return (
      <div className={`relative ${className} ${styles.exportedImage}`}>
        <img
          src={env.BASE_PATH + src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? "eager" : "lazy"}
          style={style}
        />
        {credit && (
          <div className="absolute bottom-2 left-2">
            <p className="text-white font-light font-roboto text-[12px] px-2 py-1 reverse-text">
              {credit}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className} ${styles.exportedImage}`}>
      <img
        src={env.BASE_PATH + src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        style={style}
      />
      {credit && (
        <div className="absolute bottom-2 left-2">
          <p className="text-white font-light font-roboto text-[12px] px-2 py-1 reverse-text">
            {credit}
          </p>
        </div>
      )}
    </div>
  );
}

