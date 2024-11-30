import { motion } from "framer-motion";
import styles from "./maskText.module.scss";
type Props = { phrases: string[]; start: boolean };

export default function MaskText({ phrases, start }: Props) {
  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={start ? "enter" : ""}
              className={styles.text}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
