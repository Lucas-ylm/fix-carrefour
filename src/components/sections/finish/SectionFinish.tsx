import AnimateSlideIn from "@/components/animate/AnimateSlideIn";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import styles from "./sectionFinish.module.scss";

export default function SectionFinish() {
  return (
    <section className={styles.wrapper}>
      <AnimateSlideIn>
        <div className={styles.illustration}>
          <ExportedPicture
            src="/assets/images/bles-1.webp"
            alt="bles"
            className={styles.image}
          />
        </div>
      </AnimateSlideIn>
      <AnimateSlideIn>
        <div className={styles.illustration}>
          <ExportedPicture
            src="/assets/images/bles-2.webp"
            alt="bles"
            className={styles.image1}
          />
        </div>
      </AnimateSlideIn>
    </section>
  );
}
