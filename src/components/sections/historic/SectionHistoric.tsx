"use client";
import AnimateNumber from "@/components/animateNumber/AnimateNumber";
import Block, { BlockItem } from "@/components/block/Block";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import styles from "./sectionHistoric.module.scss";

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
const text: BlockItem[] = [
  {
    _type: "text",
    _id: "text1",
    children: [
      <Fragment key="text1">
        <strong>
          Elle s&apos;appuie sur plusieurs engagements
          <br />
          vis-à-vis des producteurs&nbsp;:
        </strong>
      </Fragment>,
    ],
  },
];

export default function SectionHistoric() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className={`grid marged ${styles.wrapper}`} ref={ref}>
      <Block blocks={title} className={`col-start-1 col-12 ${styles.title}`} />
      <div className={`col-start-1 col-12 ${styles.box1}`} />
      <div className={`col-start-2 col-10 ${styles.text}`}>
        <div className={styles.hide} />
        <Block blocks={text} />
      </div>
      <ul className="col-start-2 col-10">
        <li className={styles.li}>
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
        <li className={styles.li}>
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
        <li className={styles.li}>
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
      <div className={styles.image}>
        <ExportedPicture
          src="/assets/images/filiere-qualite.webp"
          alt="act-for-food"
          width={240}
          height={240}
        />
      </div>
      <div className={`col-start-1 col-12 ${styles.box2}`} />
      <div className={`col-start-2 col-10 ${styles.keyNumber}`}>
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

        <div className={styles.value}>Producteurs partenaires en France</div>
      </div>
      <div className={`col-start-2 col-10 ${styles.keyNumber}`}>
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
        <div className={styles.value}>Filières Qualité Carrefour en France</div>
      </div>
    </section>
  );
}
