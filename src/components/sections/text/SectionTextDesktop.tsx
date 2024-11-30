import AnimateSlideIn from "@/components/animate/AnimateSlideIn";
import Block, { BlockItem } from "@/components/block/Block";
import { Fragment } from "react";
import styles from "./sectionTextDesktop.module.scss";
type Props = {
  data: BlockItem[];
  isCenter?: boolean;
  className?: string;
};

export default function SectionTextDesktop({
  data,
  isCenter = false,
  className,
}: Props) {
  return (
    <section className={`grid ${styles.wrapper} ${className}`}>
      {isCenter ? (
        <div className={`col-m-start-3 col-m-9 ${styles.center}`}>
          {data.map((block) => (
            <AnimateSlideIn key={block._id} className={block.className}>
              <Block
                blocks={[
                  {
                    _type: block._type,
                    _id: block._id,
                    children: [block.children],
                  },
                ]}
              />
            </AnimateSlideIn>
          ))}
        </div>
      ) : (
        <Fragment>
          <div
            className={`col-m-start-2 col-l-start-2 col-m-6 col-l-5 ${styles.block1}`}
          >
            <AnimateSlideIn
              key={data[0]._id}
              className={data[0].className}
              delay={0}
            >
              <Block
                blocks={[
                  {
                    _type: data[0]._type,
                    _id: data[0]._id,
                    children: [data[0].children],
                  },
                ]}
              />
            </AnimateSlideIn>
            <AnimateSlideIn
              key={data[1]._id}
              className={data[1].className}
              delay={0.2}
            >
              <Block
                blocks={[
                  {
                    _type: data[1]._type,
                    _id: data[1]._id,
                    children: [data[1].children],
                  },
                ]}
              />
            </AnimateSlideIn>
            <AnimateSlideIn
              key={data[2]._id}
              className={data[2].className}
              delay={0.4}
            >
              <Block
                blocks={[
                  {
                    _type: data[2]._type,
                    _id: data[2]._id,
                    children: [data[2].children],
                  },
                ]}
              />
            </AnimateSlideIn>
          </div>
          <div
            className={`col-m-start-8 col-l-start-8 col-m-6 col-l-5 ${styles.block2}`}
          >
            <AnimateSlideIn
              key={data[3]._id}
              className={data[3].className}
              delay={0.6}
            >
              <Block
                blocks={[
                  {
                    _type: data[3]._type,
                    _id: data[3]._id,
                    children: [data[3].children],
                  },
                ]}
              />
            </AnimateSlideIn>
            <AnimateSlideIn
              key={data[4]._id}
              className={data[4].className}
              delay={0.8}
            >
              <Block
                blocks={[
                  {
                    _type: data[4]._type,
                    _id: data[4]._id,
                    children: [data[4].children],
                  },
                ]}
              />
            </AnimateSlideIn>
          </div>
        </Fragment>
      )}
    </section>
  );
}
