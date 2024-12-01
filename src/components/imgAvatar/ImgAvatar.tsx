import { motion } from "framer-motion";
import { ColorProps } from "../avatar/Avatar";
import ExportedPicture from "../templateComponent/ExportedPicture";
import styles from "./imgAvatar.module.scss";

type Props = {
  srcProfile: string;
  altProfile: string;
  srcFruit?: string;
  altFruit?: string;
  color?: ColorProps;
  isAnimated?: boolean;
  className?: string;
};

export default function ImgAvatar({
  srcProfile,
  altProfile,
  srcFruit,
  altFruit,
  color,
  isAnimated,
  className
}: Props) {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.mask}>
        <div className={styles.container} data-color={color}>
          <ExportedPicture
            src={srcProfile}
            alt={altProfile}
            className={styles.image}
            width={340}
            height={340}
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isAnimated ? "-200%" : undefined }}
            className={styles.round}
            data-color={color}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      {srcFruit && (
        <ExportedPicture
          src={srcFruit ?? ""}
          alt={altFruit ?? ""}
          className={styles.fruit}
          width={340}
          height={340}
        />
      )}
    </div>
  );
}
