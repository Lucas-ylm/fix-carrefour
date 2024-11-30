import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import styles from "./animateTitle.module.scss";

type Props = {
  isActive: number;
  setIsActive: Dispatch<SetStateAction<number>>;
};

const labels = ["Interview", "Portrait", "Portrait"];

export default function Button({ isActive, setIsActive }: Props) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive !== null ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        {labels.map((label, index) => (
          <div
            key={index}
            className={`${styles.el} ${
              isActive === index ? styles.active : ""
            }`}
            onClick={() => setIsActive(index)}
          >
            <PerspectiveText label={label} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={styles.perspectiveText}>
      <p className={styles.article}>{label}</p>
    </div>
  );
}
