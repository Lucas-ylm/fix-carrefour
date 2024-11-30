import AnimateNumber from "@/components/animateNumber/AnimateNumber";
import Block, { BlockItem } from "@/components/block/Block";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import styles from "./sectionHistoricDesktop.module.scss";

const title: BlockItem[] = [
  {
    _type: "title",
    _id: "title1",
    children: [
      <Fragment key="title1">
        La FQC, démarche pionnière depuis 1992, soutient des pratiques agricoles
        plus durables et d&apos;amélioration du bien-être animal, et respecte le
        rythme des saisons.
      </Fragment>,
    ],
  },
];

export default function SectionHistoricDesktop() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className={`grid marged ${styles.wrapper}`} ref={ref}>
      <Block
        blocks={title}
        className={`col-start-1 col-12 col-m-start-3 col-m-9 ${styles.title}`}
      />
      <div className={styles.container}>
        <div className={styles.image}>
          <ExportedPicture
            src="/assets/images/filiere-qualite.webp"
            alt="act-for-food"
            width={190}
            height={190}
          />
        </div>

        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.hide} />
              <div className={styles.intro}>
                Elle s&apos;appuie sur plusieurs engagements
                <br />
                vis-à-vis des producteurs&nbsp;:
              </div>
            </div>
            <ul className={styles.lists}>
              <li className={styles.list}>
                <div className={styles.line}>
                  <div className={styles.logo}>
                    <ExportedPicture
                      src="/assets/images/feuille.webp"
                      alt="logo-article"
                      width={43}
                      height={32}
                    />
                  </div>
                  <p className={styles.content}>Contrats de 3 ans minimum</p>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.line}>
                  <div className={styles.logo}>
                    <ExportedPicture
                      src="/assets/images/feuille.webp"
                      alt="logo-article"
                      width={43}
                      height={32}
                    />
                  </div>
                  <p className={styles.content}>Rémunération juste</p>
                </div>
              </li>
              <li className={styles.list}>
                <div className={styles.line}>
                  <div className={styles.logo}>
                    <ExportedPicture
                      src="/assets/images/feuille.webp"
                      alt="logo-article"
                      width={43}
                      height={32}
                    />
                  </div>
                  <p className={styles.content}>Garantie des volumes achetés</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content1}>
            <div className={styles.keyNumber}>
              <div className={styles.number}>
                <p>+ de </p>
                <AnimateNumber
                  start={0}
                  end={6500}
                  duration={1}
                  delay={0.75}
                  isInView={isInView}
                />
              </div>

              <div className={styles.value}>
                Producteurs partenaires en France
              </div>
            </div>
            <div className={styles.keyNumber}>
              <div className={styles.number}>
                <p>+ de </p>
                <AnimateNumber
                  start={0}
                  end={130}
                  duration={1.3}
                  delay={0.75}
                  isInView={isInView}
                />
              </div>
              <div className={styles.value}>
                Filières Qualité Carrefour en France
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
