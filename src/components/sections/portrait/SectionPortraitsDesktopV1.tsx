import Article from "@/components/article/Article";
import BannerDesktop from "@/components/banner/BannerDesktop";
import Content from "@/components/content/Content";
import Description from "@/components/description/Description";
import ExtractDesktop from "@/components/extract/ExtractDesktop";
import ImgAvatar from "@/components/imgAvatar/ImgAvatar";
import Name from "@/components/name/Name";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { data } from "./data";
import styles from "./sectionPortraitDesktopV1.module.scss";

type Props = { index: number };

export default function SectionPortraitDesktopV1({ index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);

  const isInView: boolean = useInView(sectionRef);
  const [activeIndex, setActiveIndex] = useState(0);

  const observer1 = useInView(contentRef1, { margin: "-40% 0% -60% 0%" });
  const observer2 = useInView(contentRef2, { margin: "-40% 0% -60% 0%" });
  const observer3 = useInView(contentRef3, { margin: "-40% 0% -60% 0%" });

  useEffect(() => {
    if (observer1) {
      setActiveIndex(0);
    } else if (observer2) {
      setActiveIndex(1);
    } else if (observer3) {
      setActiveIndex(2);
    }
  }, [observer1, observer2, observer3]);

  const currentData = data.slice(2)[activeIndex];

  return (
    <section
      className={styles.wrapper}
      ref={sectionRef}
      style={{ marginTop: index === 0 ? "10rem" : "" }}
      id={`anchor_${index}`}
    >
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
                content="La Filière Qualité Carrefour"
                id={`anchor_${index}`}
              />
            </motion.div>
            <ImgAvatar
              srcProfile={currentData.avatar.srcProfile}
              altProfile={currentData.avatar.altProfile}
              srcFruit={currentData.avatar.srcFruit}
              altFruit={currentData.avatar.altFruit}
              color={currentData.color}
              isAnimated={false}
            />
            <ExtractDesktop
              data={currentData.extract}
              color={currentData.color}
            />
          </div>
          <div className={`col-m-start-8 col-m-6 ${styles.right}`}>
            <Article article={currentData.article} color={currentData.color} />
            <Name name={currentData.avatar.name} type="desktop" />
            <Description
              description={currentData.avatar.description}
              type="desktop"
            />
          </div>
        </div>
      </div>
      <div className={`grid marged ${styles.content}`}>
        <Content
          data={data[2].content}
          className={`col-m-start-8 col-m-5 ${styles.text}`}
          ref={contentRef1}
          id="anchor_6"
        />
        <Content
          data={data[3].content}
          className={`col-m-start-8 col-m-5 ${styles.text}`}
          ref={contentRef2}
          id="anchor_7"
        />
        <Content
          data={data[4].content}
          className={`col-m-start-8 col-m-5 ${styles.text}`}
          ref={contentRef3}
          id="anchor_8"
        />
      </div>
    </section>
  );
}