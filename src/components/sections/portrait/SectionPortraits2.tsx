import Avatars from "@/components/avatar/Avatars";
import Banner from "@/components/banner/Banner";
import Content from "@/components/content/Content";
import Extract from "@/components/extract/Extract";
import { useInView } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { data } from "./data";
import styles from "./sectionPortrait.module.scss";

export type IconProps = { name: string; width: number; height: number };

export default function SectionPortraits2() {
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const observer1 = useInView(contentRef1, {
    margin: `${0}px ${50}px ${0}px ${0}px`,
  });
  const observer2 = useInView(contentRef2, { margin: "-60% 0% -40% 0%" });

  const observers = [observer1, observer2];

  useEffect(() => {
    if (observer1) {
      setActiveIndex(0);
    }
    if (observer2) {
      setActiveIndex(1);
    }
  }, [observer1, observer2]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <Banner color="blue" content="La Filière Qualité Carrefour" />
        {data.slice(0, 2).map((profile, index) => {
          return (
            <Fragment key={index}>
              {index === activeIndex && (
                <Fragment>
                  <Avatars
                    className={styles.avatar}
                    srcProfile={
                      observers[activeIndex]
                        ? profile.avatar.srcProfile
                        : data[0].avatar.srcProfile
                    }
                    altProfile={
                      observers[activeIndex]
                        ? profile.avatar.altProfile
                        : data[0].avatar.altProfile
                    }
                    srcFruit={
                      observers[activeIndex]
                        ? (profile.avatar.srcFruit ?? "")
                        : (data[0].avatar.srcFruit ?? "")
                    }
                    altFruit={
                      observers[activeIndex]
                        ? (profile.avatar.altFruit ?? "")
                        : (data[0].avatar.altFruit ?? "")
                    }
                    name={
                      observers[activeIndex]
                        ? profile.avatar.name
                        : data[0].avatar.name
                    }
                    description={
                      observers[activeIndex]
                        ? profile.avatar.description
                        : data[0].avatar.description
                    }
                    article={
                      observers[activeIndex] ? profile.article : data[0].article
                    }
                    color={
                      observers[activeIndex] ? profile.color : data[0].color
                    }
                    type="mobile"
                    observer={observers[activeIndex]}
                  />
                  <Extract
                    className={styles.extract}
                    data={
                      observers[activeIndex] ? profile.extract : data[0].extract
                    }
                    color={
                      observers[activeIndex] ? profile.color : data[0].color
                    }
                  />
                </Fragment>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className={`grid marged ${styles.container}`}>
        <Content
          data={data[0].content}
          className={styles.content}
          ref={contentRef1}
          id="anchor_0"
        />
        <Content
          data={data[1].content}
          className={styles.content}
          ref={contentRef2}
          id="anchor_1"
        />
      </div>
    </section>
  );
}
