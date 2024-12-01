import { motion } from "framer-motion";
import AnimateSlideIn from "@/components/animate/AnimateSlideIn";
import Banner from "@/components/banner/Banner";
import Block from "@/components/block/Block";
import Kpi from "@/components/kpi/Kpi";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { intro, kpis } from "./data";
import styles from "./sectionKpiDesktop.module.scss";

export default function SectionKpiDesktop() {
  const reorderedKpis = [0, 3, 1, 4, 2, 5].map((i) => kpis[i]);

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

        {Array.from({ length: 3 }, (_, groupIndex) => (
          <motion.div
            key={`group-${groupIndex}`}
            className={`${
              groupIndex === 0
                ? "col-m-start-5 col-m-3"
                : groupIndex === 1
                ? "col-m-start-8 col-m-3"
                : "col-m-start-11 col-m-3"
            } ${styles.col}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "100% 0% -10% 0%", once: false }}
          >
            {reorderedKpis
              .slice(groupIndex * 2, groupIndex * 2 + 2)
              .map((kpi, localIndex) => {
                const globalIndex = [0, 2, 4, 1, 3, 5].indexOf(
                  groupIndex * 2 + localIndex
                );

                return (
                  <motion.div
                    key={typeof kpi.title === "string" ? kpi.title : `kpi-${globalIndex}`}
                    initial={{
                      y: 48,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.65,
                        delay: globalIndex * 0.2,
                      },
                    }}
                    viewport={{ margin: "100% 0% -10% 0%", once: false }}
                    className={kpi.className}
                  >
                    <Kpi
                      title={kpi.title}
                      numbers={kpi.number}
                      text={kpi.text}
                      color={kpi.color}
                      isNumber={kpi.isNumber}
                      isImage={kpi.isImage}
                      src={kpi.image}
                    />
                  </motion.div>
                );
              })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}