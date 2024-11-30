import AnimateSlideIn from "@/components/animate/AnimateSlideIn";
import Block, { BlockItem } from "@/components/block/Block";
import { CSSProperties } from "react";
import styles from "./sectionText.module.scss";

type Props = {
  data: BlockItem[];
  style?: CSSProperties;
  marge?: string;
};

export default function SectionText({ data, style, marge }: Props) {
  return (
    <section className={`grid ${marge} ${styles.wrapper}`} style={style}>
      {data.map((block) => (
        <AnimateSlideIn
          key={block._id}
          className={`col-start-2 col-s-start-2 col-10 col-s-11 ${block.className}`}
        >
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
    </section>
  );
}
