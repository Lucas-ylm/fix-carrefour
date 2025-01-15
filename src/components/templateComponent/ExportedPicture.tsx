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
        {credit && (
          <div className="absolute -bottom-[1rem] left-2 z-10">
            <p className="text-white font-light font-roboto text-[12px] px-2 py-1">
              {credit}
            </p>
          </div>
        )}
        <img
          src={env.BASE_PATH + src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${className} object-center`}
          loading={priority ? "eager" : "lazy"}
          style={style}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className} ${styles.exportedImage}`}>
      {credit && (
        <div className="absolute -bottom-[1rem] left-2 z-10">
          <p className="text-white font-light font-roboto text-[12px] px-2 py-1">
            {credit}
          </p>
        </div>
      )}
      <img
        src={env.BASE_PATH + src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${className} object-center`}
        loading={priority ? "eager" : "lazy"}
        style={style}
      />
  </div>
  );
}

