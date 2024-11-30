import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useWindowSize } from "@/hook/useWindowSize";
import { motion } from "framer-motion";
import { SizeProps } from "./SectionHero";
import styles from "./sectionPicture.module.scss";

type Props = {
  src: string;
  alt: string;
  marginTop: string;
  size: SizeProps;
};

export default function SectionPicture({
  src,
  alt,
  size,

  marginTop,
}: Props) {
  const { width } = useWindowSize();
  return (
    <section className={styles.wrapper} data-size={size}>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.45,
          delay: 0.2,
        }}
        viewport={{ margin: "100% 0% -10% 0%" }}
        style={width > 1024 ? { marginTop } : {}}
      >
        <div className={styles.background}>
          <ExportedPicture
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className={styles.image}
          />
        </div>
      </motion.div>
    </section>
  );
}
