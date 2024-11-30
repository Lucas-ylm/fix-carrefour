import { motion, MotionValue } from "framer-motion";
import styles from "./progressBar.module.scss";
type Props = { value: MotionValue<number>; className: string };

export default function ProgressBar({ value, className }: Props) {
  return (
    <div className={`${className} ${styles.container}`}>
      <motion.div className={styles.bar} style={{ scaleY: value }} />
    </div>
  );
}
