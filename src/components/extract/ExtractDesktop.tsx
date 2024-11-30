import Block, { BlockItem } from "../block/Block";
import styles from "./extractDesktop.module.scss";

type Props = { data: BlockItem[]; className?: string; color: string };

export default function ExtractDesktop({ data, className, color }: Props) {
  return (
    <div className={`${styles.wrapper} ${className}`} data-color={color}>
      <Block
        key={data[0]._id}
        blocks={[
          {
            _type: data[0]._type,
            _id: data[0]._id,
            children: [data[0].children],
          },
        ]}
        className={styles.quote}
      />
      <Block
        key={data[1]._id}
        blocks={[
          {
            _type: data[1]._type,
            _id: data[1]._id,
            children: [data[1].children],
          },
        ]}
        className={styles.citation}
      />
      <Block
        key={data[2]._id}
        blocks={[
          {
            _type: data[2]._type,
            _id: data[2]._id,
            children: [data[2].children],
          },
        ]}
        className={styles.quote}
      />
    </div>
  );
}
