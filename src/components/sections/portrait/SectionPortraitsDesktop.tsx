import Article from "@/components/article/Article";
import BannerDesktop from "@/components/banner/BannerDesktop";
import Content from "@/components/content/Content";
import Description from "@/components/description/Description";
import ExtractDesktop from "@/components/extract/ExtractDesktop";
import ImgAvatar from "@/components/imgAvatar/ImgAvatar";
import Name from "@/components/name/Name";
import { useWindowSize } from "@/hook/useWindowSize";
import { motion, useInView } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { data } from "./data";
import styles from "./sectionPortraitsDesktop.module.scss";

export default function SectionPortraitsDesktop() {
  const { width } = useWindowSize();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView: boolean = useInView(sectionRef);
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(2);
  const observer1 = useInView(contentRef1);
  const observer2 = useInView(contentRef2);
  const observer3 = useInView(contentRef3);

  const observers = [observer1, observer2, observer3];

  useEffect(() => {
    if (observer1) {
      setActiveIndex(0);
    }
    if (observer2) {
      setActiveIndex(1);
    }
    if (observer3) {
      setActiveIndex(2);
    }
  }, [observer1, observer2, observer3]);
  const img = width < 1200 ? -200 : -340;
  return (
    <section className={styles.wrapper} ref={sectionRef} id="anchor_2">
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
              />
            </motion.div>
          </div>
          <div className={`col-m-start-8 col-m-6 ${styles.right}`}>
            <div className={styles.openName}>
              <div style={{ transform: `translateY(${activeIndex * -71}px)` }}>
                {data.slice(2).map((profile, index) => (
                  <Fragment key={index}>
                    <Article
                      article={
                        observers[activeIndex]
                          ? profile.article
                          : data[2].article
                      }
                      color={
                        observers[activeIndex] ? profile.color : data[2].color
                      }
                    />
                    <Name
                      name={
                        observers[activeIndex]
                          ? profile.avatar.name
                          : data[2].avatar.name
                      }
                      type="desktop"
                    />
                    <Description
                      description={
                        observers[activeIndex]
                          ? profile.avatar.description
                          : data[2].avatar.description
                      }
                      type="desktop"
                    />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className={styles.openPicture}>
              <div
                style={{
                  transform: `translateY(${activeIndex * img}px)`,
                }}
              >
                {data.slice(2).map((profile, index) => (
                  <ImgAvatar
                    key={index}
                    srcProfile={
                      observers[activeIndex]
                        ? profile.avatar.srcProfile
                        : data[2].avatar.srcProfile
                    }
                    altProfile={
                      observers[activeIndex]
                        ? profile.avatar.altProfile
                        : data[2].avatar.altProfile
                    }
                    srcFruit={
                      observers[activeIndex]
                        ? (profile.avatar.srcFruit ?? "")
                        : (data[2].avatar.srcFruit ?? "")
                    }
                    altFruit={
                      observers[activeIndex]
                        ? (profile.avatar.altFruit ?? "")
                        : (data[2].avatar.altFruit ?? "")
                    }
                    color={
                      observers[activeIndex] ? profile.color : data[2].color
                    }
                    isAnimated={observers[activeIndex]}
                  />
                ))}
              </div>
            </div>
            <div className={styles.openExtract}>
              <div style={{ transform: `translateY(${activeIndex * -182}px)` }}>
                {data.slice(2).map((profile, index) => (
                  <ExtractDesktop
                    key={index}
                    data={
                      observers[activeIndex] ? profile.extract : data[2].extract
                    }
                    color={
                      observers[activeIndex] ? profile.color : data[2].color
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`grid marged ${styles.content}`}>
        <Content
          data={data[2].content}
          className={`col-m-start-2 col-m-5 ${styles.text}`}
          ref={contentRef1}
          id="anchor_6"
        />
        <Content
          data={data[3].content}
          className={`col-m-start-2 col-m-5 ${styles.text}`}
          ref={contentRef2}
          id="anchor_7"
        />
        <Content
          data={data[4].content}
          className={`col-m-start-2 col-m-5 ${styles.text}`}
          ref={contentRef3}
          id="anchor_8"
        />
      </div>
    </section>
  );
}
