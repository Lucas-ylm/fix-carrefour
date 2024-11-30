import Article from "@/components/article/Article";
import BannerDesktop from "@/components/banner/BannerDesktop";
import Content from "@/components/content/Content";
import Description from "@/components/description/Description";
import ExtractDesktop from "@/components/extract/ExtractDesktop";
import ImgAvatar from "@/components/imgAvatar/ImgAvatar";
import Name from "@/components/name/Name";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "./data";
import styles from "./sectionPortraitDesktop.module.scss";

type Props = { index: number };

export default function SectionPortraitDesktop({ index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView: boolean = useInView(sectionRef);
  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <div className={styles.frame}>
        <div className={`grid marged ${styles.container}`}>
          <div className={`col-m-start-1 col-m-6 ${styles.left}`}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: isInView ? 0 : undefined }}
              transition={{
                duration: 0.45,
                ease: "linear",
              }}
            >
              <BannerDesktop
                color="blue"
                content={data[index].banner}
                id={`anchor_${index}`}
              />
            </motion.div>

            <ImgAvatar
              srcProfile={data[index].avatar.srcProfile}
              altProfile={data[index].avatar.altProfile}
              color="blue"
              isAnimated={false}
            />
            <ExtractDesktop
              data={data[index].extract}
              color={data[index].color}
            />
          </div>
          <div className={`col-m-start-8 col-m-6 ${styles.right}`}>
            <Article article={data[index].article} color={data[index].color} />
            <Name name={data[index].avatar.name} type="desktop" />
            <Description
              description={data[index].avatar.description}
              type="desktop"
            />
          </div>
        </div>
      </div>
      <div className={`grid marged ${styles.content}`}>
        <Content
          data={data[index].content}
          className={`col-m-start-8 col-m-5 ${styles.text}`}
        />
      </div>
    </section>
  );
}
