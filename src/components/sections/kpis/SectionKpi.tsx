import AnimateSlideIn from "@/components/animate/AnimateSlideIn";
import Block from "@/components/block/Block";
import Kpi from "@/components/kpi/Kpi";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { intro, kpis } from "./data";
import styles from "./sectionKpi.module.scss";

export default function SectionKpi() {
  return (
    <section className={`grid marged ${styles.wrapper}`}>
      <AnimateSlideIn
        className={`col-start-1 col-4 col-m-start-1 col-m-3 ${styles.image}`}
      >
        <ExportedPicture
          src="/assets/images/act-for-food.png"
          alt="act-for-food"
          width={100}
          height={100}
        />
      </AnimateSlideIn>

      <AnimateSlideIn
        className={`col-start-6 col-7 col-m-start-1 col-m-3 ${styles.text}`}
      >
        <Block blocks={intro} />
      </AnimateSlideIn>

      {kpis.map((kpi, index) => (
        <AnimateSlideIn key={index} className={kpi.className}>
          <Kpi
            title={kpi.title}
            numbers={kpi.number}
            text={kpi.text}
            color={kpi.color}
            isNumber={kpi.isNumber}
            isImage={kpi.isImage}
            src={kpi.image}
          />
        </AnimateSlideIn>
      ))}
    </section>
  );
}
