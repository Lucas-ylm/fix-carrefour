"use client";
import MaskText from "@/components/maskText/MaskText";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import styles from "./sectionHero.module.scss";

export type SizeProps = "square" | "rectangle";

type Props = {
  src: string;
  alt: string;
  size: SizeProps;
  start?: boolean;
};

export default function SectionHero({ src, alt, size, start = false }: Props) {
  return (
    <section className={styles.wrapper} data-size={size}>
      <div className={`${styles.background} ${styles.marged}`}>
        <ExportedPicture
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className={styles.image}
        />
      </div>

      <div className={`grid marged ${styles.hero}`}>
        <div className={`col-start-1 col-1 ${styles.ble}`}>
          <ExportedPicture src="/assets/images/ble-blanc.png" alt="ble-blanc" />
        </div>
        <div className={`col-start-2 col-11 ${styles.text}`}>
          <MaskText
            start={start}
            phrases={["Manger mieux :", "tous à table", "pour le changement !"]}
          />
        </div>
      </div>
    </section>
  );
}
