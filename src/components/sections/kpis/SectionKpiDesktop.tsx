import AnimateSlideIn from "@/components/animate/AnimateSlideIn";
import Banner from "@/components/banner/Banner";
import Block from "@/components/block/Block";
import Kpi from "@/components/kpi/Kpi";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { motion } from "framer-motion";
import { intro, kpis } from "./data";
import styles from "./sectionKpiDesktop.module.scss";

export default function SectionKpiDesktop() {
  return (
    <section className={styles.wrapper}>
      <motion.div
        initial={{
          clipPath: "rect(0% 70% 100% 30%)",
          scale: 1.05,
        }}
        whileInView={{
          clipPath: "rect(0% 100% 100% 0%)",
          scale: 0.95,
        }}
        transition={{
          duration: 0.45,
        }}
        viewport={{ margin: "100% 0% -10% 0%" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <Banner
          color="blue"
          content="Les engagements de Carrefour en faveur du « mieux manger »"
          id="anchor_5"
          className={styles.banner}
        />
      </motion.div>
      <div className={`grid marged ${styles.content}`}>
        <AnimateSlideIn className={`col-m-start-1 col-m-3 ${styles.intro}`}>
          <ExportedPicture
            src="/assets/images/act-for-food.png"
            alt="act-for-food"
            width={260}
            height={260}
            className={styles.image}
          />
          <Block blocks={intro} />
        </AnimateSlideIn>

        <div className={`col-m-start-5 col-m-3 ${styles.col}`}>
          <AnimateSlideIn className={kpis[0].className} delay={0}>
            <Kpi
              title={kpis[0].title}
              numbers={kpis[0].number}
              text={kpis[0].text}
              color={kpis[0].color}
              isNumber={kpis[0].isNumber}
              isImage={kpis[0].isImage}
              src={kpis[0].image}
            />
          </AnimateSlideIn>
          <AnimateSlideIn className={kpis[3].className} delay={0.6}>
            <Kpi
              title={kpis[3].title}
              numbers={kpis[3].number}
              text={kpis[3].text}
              color={kpis[3].color}
              isNumber={kpis[3].isNumber}
              isImage={kpis[3].isImage}
              src={kpis[3].image}
            />
          </AnimateSlideIn>
        </div>
        <div className={`col-m-start-8 col-m-3 ${styles.col}`}>
          <AnimateSlideIn className={kpis[1].className} delay={0.2}>
            <Kpi
              title={kpis[1].title}
              numbers={kpis[1].number}
              text={kpis[1].text}
              color={kpis[1].color}
              isNumber={kpis[1].isNumber}
              isImage={kpis[1].isImage}
              src={kpis[1].image}
            />
          </AnimateSlideIn>
          <AnimateSlideIn className={kpis[4].className} delay={0.8}>
            <Kpi
              title={kpis[4].title}
              numbers={kpis[4].number}
              text={kpis[4].text}
              color={kpis[4].color}
              isNumber={kpis[4].isNumber}
              isImage={kpis[4].isImage}
              src={kpis[4].image}
            />
          </AnimateSlideIn>
        </div>

        <div className={`col-m-start-11 col-m-3 ${styles.col}`}>
          <AnimateSlideIn className={kpis[2].className} delay={0.4}>
            <Kpi
              title={kpis[2].title}
              numbers={kpis[2].number}
              text={kpis[2].text}
              color={kpis[2].color}
              isNumber={kpis[2].isNumber}
              isImage={kpis[2].isImage}
              src={kpis[2].image}
            />
          </AnimateSlideIn>
          <AnimateSlideIn className={kpis[5].className} delay={1}>
            <Kpi
              title={kpis[5].title}
              numbers={kpis[5].number}
              text={kpis[5].text}
              color={kpis[5].color}
              isNumber={kpis[5].isNumber}
              isImage={kpis[5].isImage}
              src={kpis[5].image}
            />
          </AnimateSlideIn>
        </div>
      </div>
    </section>
  );
}
