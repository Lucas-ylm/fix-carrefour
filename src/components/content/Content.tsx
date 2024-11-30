import { forwardRef } from "react";
import Block, { BlockItem } from "../block/Block";
import styles from "./content.module.scss";
type Props = { className?: string; data: BlockItem[]; id?: string };

export default forwardRef<HTMLDivElement, Props>(function Content(
  { className, data, id },
  ref
) {
  return (
    <div ref={ref} className={`${styles.content} ${className}`} id={id}>
      {data.map((block, index) => (
        <Block
          ref={index === data.length - 1 ? ref : undefined}
          key={block._id}
          blocks={[
            {
              _type: block._type,
              _id: block._id,
              children: [block.children],
            },
          ]}
        />
      ))}
    </div>
  );
});
